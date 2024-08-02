import {
  Box,
  Button,
  FileInput,
  Group,
  LoadingOverlay,
  Select,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconCheck, IconX } from "@tabler/icons-react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NotificationExtension } from "../../extension/NotificationExtension";
import { BannerModel } from "../../model/BannerModel";

const CreateView = ({ onSearch }: any) => {
  const entity = {
    id: null,
    type: null,
    url: null,
    image: null,
    isShow: "false",
    alt: null,
  };

  const [visible, { toggle, close, open }] = useDisclosure(false);
  const [base64Image, setBase64Image] = useState<string>("");

  const form = useForm<BannerModel>({
    initialValues: {
      ...entity,
    },
    validate: {},
  });

  const db = getFirestore();

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

  const handleCreateBanner = async (value: BannerModel) => {
    // console.log(value);
    const uuid = uuidv4();
    await setDoc(doc(db, "/banner", uuid), {
      type: value?.type,
      url: value?.url,
      image: base64Image,
      isShow: value?.isShow,
      alt: value?.alt,
    });
    NotificationExtension.Success("Thêm banner thành công");
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
      onSubmit={form.onSubmit((e: BannerModel) => {
        handleCreateBanner(e);
      })}
    >
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />

      <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
        <TextInput
          label={"Url"}
          placeholder={"Enter url"}
          withAsterisk
          type="text"
          {...form.getInputProps("url")}
        />

        <Select
          label={"Chọn loại banner"}
          placeholder={""}
          withAsterisk
          clearable
          data={["home", "article", "articleCategory"]}
          {...form.getInputProps("type")}
        />
      </Group>

      <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
        <FileInput
          label={"Ảnh"}
          placeholder={"Chọn ảnh"}
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

      <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
        <TextInput
          label={"Alt"}
          placeholder={"Enter alt"}
          withAsterisk
          type="text"
          {...form.getInputProps("alt")}
        />

        <Select
          label={"Trạng thái"}
          placeholder={""}
          withAsterisk
          clearable
          data={[
            { value: "true", label: "Hiển thị" },
            { value: "false", label: "Không hiển thị" },
          ]}
          {...form.getInputProps("isShow")}
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
