import { isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { NotificationExtension } from "../../extension/NotificationExtension";
import { modals } from "@mantine/modals";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  Select,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";
import { AttributeValueModel } from "../../model/AttributeValueModel";

const CreateView = ({ onSearch }: any) => {
  const entity = {
    id: null,
    attributeId: null,
    label: null,
    value: null,
  };

  const [visible, { toggle, close, open }] = useDisclosure(false);
  const [dataAttribute, setDataAttribute] = useState<any>([]);

  const form = useForm<AttributeValueModel>({
    initialValues: {
      ...entity,
    },
    validate: {
      label: isNotEmpty("Bạn cần nhập tên thương hiệu"),
      value: isNotEmpty("Bạn cần thêm hình ảnh"),
      // attributeId: isNotEmpty('Bạn cần chọn thuộc tính'),
    },
  });

  const fetchDataAttribute = async () => {
    // init services
    const db = getFirestore();

    // collection ref
    const colRef = collection(db, "/attribute");

    getDocs(colRef)
      .then((snapshot) => {
        let attribute: any = [];
        snapshot.docs.forEach((doc) => {
          attribute.push({ value: doc.data(), label: doc.id });
          console.log("att", attribute);
        });
        const newArray = attribute.map((item: any) => ({
          label: item.value.attributeName,
          value: item.label,
        }));
        setDataAttribute(newArray);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchDataAttribute();
  }, []);

  const db = getFirestore();

  const handleCreateAttributeValue = async (value: AttributeValueModel) => {
    const uuid = uuidv4();
    await setDoc(doc(db, "/attributeValue", uuid), {
      label: value?.label,
      value: value?.value,
      attributeId: value?.attributeId,
    });
    NotificationExtension.Success("Thêm thuộc tính thành công");
    onSearch();
    modals.closeAll();
  };

  return (
    <Box
      className="flex-none"
      component="form"
      miw={1000}
      maw={1000}
      mx="auto"
      onSubmit={form.onSubmit((e: AttributeValueModel) => {
        handleCreateAttributeValue(e);
      })}
    >
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

      <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
        <TextInput
          label={"Lable"}
          placeholder={"Enter attribute label"}
          withAsterisk
          mt="md"
          type="text"
          {...form.getInputProps("label")}
        />
      </Group>
      <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
        <TextInput
          label={"Value"}
          placeholder={"Enter attribute value"}
          withAsterisk
          mt="md"
          type="text"
          {...form.getInputProps("value")}
        />
      </Group>
      <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
        <Select
          label={"chọn tên thuộc tính"}
          placeholder={""}
          withAsterisk
          clearable
          data={dataAttribute}
          // data={[
          //   { value: 'a1', label: 'a' },
          //   { value: 'b1', label: 'b' },
          // ]}
          {...form.getInputProps("attributeId")}
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
          leftSection={!visible ? <IconX size={18} /> : undefined}
        >
          Close
        </Button>
      </Group>
    </Box>
  );
};

export default CreateView;
