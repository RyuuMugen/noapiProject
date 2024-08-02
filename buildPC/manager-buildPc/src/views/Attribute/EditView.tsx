import {
  Box,
  Button,
  FileInput,
  Group,
  LoadingOverlay,
  Select,
  TextInput,
} from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconCheck } from "@tabler/icons-react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  namedQuery,
  setDoc,
} from "firebase/firestore";
import { NotificationExtension } from "../../extension/NotificationExtension";
import { useEffect, useState } from "react";
import { AttributeModel } from "../../model/AttributeModel";
import { CategoryModel } from "../../model/CategoryModel";

const EditView = ({ onSearch, id }: any) => {
  const entity = {
    id: null,
    categoryId: null,
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
      // value: isNotEmpty('Bạn cần thêm hình ảnh'),
    },
  });

  const db = getFirestore();

  const handleEditAttribute = async (value: any) => {
    if (value?.attributeName) {
      await setDoc(
        doc(db, "/attribute", id),
        {
          attributeName: value?.attributeName,
          categoryName: dataCategoryOption.find(
            (category) => category?.value === value?.categoryId
          )?.label,
          categoryId: value?.categoryId,
        },
        { merge: true }
      );
      NotificationExtension.Success("Chỉnh sửa sản phẩm thành công");
      onSearch();
      modals.closeAll();
    }
  };

  useEffect(() => {
    const callApiGetData = async () => {
      open();
      const docRef = doc(db, "/attribute", id);
      const docData = await getDoc(docRef);
      if (docData.exists()) {
        form.setValues(docData.data());
        close();
        return docData.data();
      } else {
        console.log("Document not found with ID:", id);
        close();
        return null;
      }
    };
    if (id) {
      callApiGetData();
    }
  }, [id]);

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
        handleEditAttribute(e);
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
          leftSection={!visible ? <IconCheck size={18} /> : undefined}
        >
          Close
        </Button>
      </Group>
    </Box>
  );
};

export default EditView;
