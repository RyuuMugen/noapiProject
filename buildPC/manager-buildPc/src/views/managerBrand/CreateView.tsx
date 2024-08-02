import { isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { string } from "prop-types";
import React, { useState } from "react";
import { BrandModel } from "../../model/BrandModel";
import { v4 as uuidv4 } from "uuid";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { NotificationExtension } from "../../extension/NotificationExtension";
import { modals } from "@mantine/modals";
import {
  Box,
  Button,
  FileInput,
  Group,
  LoadingOverlay,
  TextInput,
} from "@mantine/core";
import { IconCheck, IconX } from "@tabler/icons-react";

const CreateView = ({ onSearch }: any) => {
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
          console.log(reader.result.toString());
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
    console.log("1dfsdfgds", base64Image);
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

  const handleCreateBrand = async (value: BrandModel) => {
    console.log(value);
    const uuid = uuidv4();
    await setDoc(doc(db, "/brands", uuid), {
      name: value?.name,
      image: base64Image ? base64Image : value?.image,
    });
    NotificationExtension.Success("Thêm sản phẩm thành công");
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
      onSubmit={form.onSubmit((e: BrandModel) => {
        handleCreateBrand(e);
      })}
    >
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

      <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
        <TextInput
          label={"Brand"}
          placeholder={"Enter Name Brand"}
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
          leftSection={!visible ? <IconX size={18} /> : undefined}
        >
          Close
        </Button>
      </Group>
    </Box>
  );
};

export default CreateView;
