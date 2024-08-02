import { isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { BrandModel } from "../../model/BrandModel";
import { v4 as uuidv4 } from "uuid";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { NotificationExtension } from "../../extension/NotificationExtension";
import { modals } from "@mantine/modals";
import {
  Box,
  Button,
  FileInput,
  Group,
  LoadingOverlay,
  Select,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { AttributeModel } from "../../model/AttributeModel";
import Attribute from ".";
import { CategoryModel } from "../../model/CategoryModel";

const CreateView = ({ onSearch }: any) => {
  const entity = {
    id: null,
    categoryName: null,
    attributeName: null,
  };

  const [visible, { toggle, close, open }] = useDisclosure(false);
  const [dataCategory, setDataCategory] = useState<CategoryModel[]>([]);

  const [dataCategoryOption, setDataCategoryOption] = useState<
    { value: string; label: string }[]
  >([]);

  const form = useForm<AttributeModel>({
    initialValues: {
      ...entity,
    },
    validate: {
      attributeName: isNotEmpty("Bạn cần nhập tên thương hiệu"),
    },
  });

  const db = getFirestore();

  const handleCreateAttribute = async (value: AttributeModel) => {
    console.log(value);
    const uuid = uuidv4();
    await setDoc(doc(db, "/attribute", uuid), {
      attributeName: value?.attributeName,
      categoryName: dataCategoryOption?.find(
        (category) => category?.value === value?.categoryId
      )?.label,
      categoryId: value?.categoryId,
    });
    NotificationExtension.Success("Thêm thuộc tính thành công");
    onSearch();
    modals.closeAll();
  };

  useEffect(() => {
    const fetchDataCategory = async () => {
      open();

      // collection ref
      const colRef = collection(db, "/category");

      getDocs(colRef)
        .then((snapshot) => {
          let itemCategory: any = [];
          snapshot.docs.forEach((doc) => {
            // console.log(44, doc.data());
            itemCategory.push({ ...doc.data(), id: doc.id });
          });
          setDataCategory(itemCategory);
        })
        .catch((err) => {
          console.log(err.message);
        });
      close();
    };

    fetchDataCategory();
  }, []);

  useEffect(() => {
    if (dataCategory && dataCategory.length > 0) {
      setDataCategoryOption(
        dataCategory.map((category) => ({
          value: category?.id || "",
          label: category?.name || "",
        }))
      );
    }
  }, [dataCategory]);

  return (
    <Box
      className="flex-none"
      component="form"
      miw={1000}
      maw={1000}
      mx="auto"
      onSubmit={form.onSubmit((e: AttributeModel) => {
        handleCreateAttribute(e);
      })}
    >
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

      <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
        <TextInput
          label={"AttributeName"}
          placeholder={"Enter attribute name"}
          withAsterisk
          mt="md"
          type="text"
          {...form.getInputProps("attributeName")}
        />

        <Select
          label={"Chọn tên danh mục sản phẩm"}
          placeholder={""}
          withAsterisk
          clearable
          data={dataCategoryOption}
          {...form.getInputProps("categoryId")}
        />
      </Group>
      {/* <Group grow wrap="nowrap" mt="lg" gap={'lg'}>
        <TextInput
          label={'Value'}
          placeholder={'Enter attribute value'}
          withAsterisk
          mt="md"
          type="text"
          {...form.getInputProps('value')}
        />
      </Group> */}

      <Group justify="flex-end" mt="lg">
        <Button
          type="submit"
          color="#3598dc"
          loading={visible}
          leftSection={!visible ? <IconCheck size={18} /> : undefined}
        >
          Save
        </Button>
        <Button
          variant="outline"
          color="black"
          type="button"
          onClick={() => modals.closeAll()}
          loading={visible}
          leftSection={!visible ? <IconX size={18} /> : undefined}
        >
          Close
        </Button>
      </Group>
    </Box>
  );
};

export default CreateView;
