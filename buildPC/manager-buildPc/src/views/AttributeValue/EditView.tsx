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
import { AttributeValueModel } from "../../model/AttributeValueModel";
import { initializeApp } from "firebase/app";
import attacher from "@elastic/eui/src/components/markdown_editor/plugins/remark/remark_prismjs";

const EditView = ({ onSearch, id }: any) => {
  const entity = {
    id: null,
    label: null,
    value: null,
    attributeId: null,
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
    },
  });

  const db = getFirestore();

  const handleEditAttributeValue = async (value: any) => {
    if (value?.label && value?.value && value?.attributeId) {
      await setDoc(
        doc(db, "/attributeValue", id),
        {
          value: value?.value,
          label: value?.label,
          attributeId: value?.attributeId,
        },
        { merge: true }
      );
      NotificationExtension.Success("Chỉnh sửa sản phẩm thành công");
      onSearch();
      modals.closeAll();
    }
  };

  useEffect(() => {
    if (id) {
      callApiGetData();
    }
  }, [id]);

  const callApiGetData = async () => {
    open();
    const docRef = doc(db, "attributeValue", id);
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

  return (
    <Box
      className="flex-none"
      component="form"
      miw={1000}
      maw={1000}
      mx="auto"
      onSubmit={form.onSubmit((e: AttributeValueModel) => {
        handleEditAttributeValue(e);
      })}
    >
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

      <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
        <TextInput
          label={"Label"}
          placeholder={"Enter label"}
          withAsterisk
          mt="md"
          type="text"
          {...form.getInputProps("label")}
        />
      </Group>
      <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
        <TextInput
          label={"Values"}
          placeholder={"Enter value"}
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
          leftSection={!visible ? <IconCheck size={18} /> : undefined}
        >
          Close
        </Button>
      </Group>
    </Box>
  );
};

export default EditView;
