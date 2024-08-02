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
  doc,
  getDoc,
  getFirestore,
  namedQuery,
  setDoc,
} from "firebase/firestore";
import { NotificationExtension } from "../../extension/NotificationExtension";
import { BrandModel } from "../../model/BrandModel";
import { useEffect, useState } from "react";

const EditView = ({ onSearch, id }: any) => {
  const entity = {
    id: null,
    name: null,
    image: null,
  };

  const [visible, { toggle, close, open }] = useDisclosure(false);

  const [base64Image, setBase64Image] = useState<string>("");

  const handleFileChange = (file: any) => {
    form.values.image = file;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setBase64Image(reader.result.toString());
        } else {
          console.error("Failed to read file as base64");
        }
      };
      reader.onerror = () => {
        console.error("Error reading file");
      };
      reader.readAsDataURL(file);
    } else {
      setBase64Image("");
    }
  };
  const form = useForm<BrandModel>({
    initialValues: {
      ...entity,
    },
    validate: {
      name: isNotEmpty("Bạn cần nhập tên thương hiệu"),
      image: isNotEmpty("Bạn cần thêm hình ảnh"),
    },
  });

  const db = getFirestore();

  const handleEditBrand = async (value: any) => {
    if (value?.image && value?.name) {
      await setDoc(
        doc(db, "/brands", id),
        {
          name: value?.name,
          image: base64Image,
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
    const docRef = doc(db, "brands", id);
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

  return (
    <Box
      className="flex-none"
      component="form"
      miw={1000}
      maw={1000}
      mx="auto"
      onSubmit={form.onSubmit((e: BrandModel) => {
        handleEditBrand(e);
      })}
    >
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

      <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
        <TextInput
          label={"Price"}
          placeholder={"Enter price"}
          withAsterisk
          mt="md"
          type="text"
          {...form.getInputProps("name")}
        />
      </Group>
      <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
        <FileInput
          label={"Logo thương hiệu"}
          placeholder={"Chọn logo"}
          accept="image/png,image/jpeg"
          withAsterisk
          clearable
          mt="md"
          {...form.getInputProps("image")}
          onChange={handleFileChange}
        />
        {base64Image ? (
          <img
            src={base64Image}
            alt="Logo thương hiệu"
            style={{ marginTop: "20px", height: 200, width: 300 }}
          />
        ) : (
          <></>
        )}
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
