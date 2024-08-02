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
import { IconCheck } from "@tabler/icons-react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { NotificationExtension } from "../../extension/NotificationExtension";
import { CategoryModel } from "../../model/CategoryModel";
import { useState } from "react";

type createViewType = {
  onSearch: () => void;
};

const CreateView = ({ onSearch }: createViewType) => {
  const entity = {
    id: null,
    name: null,
    icon: null,
  };

  const [visible, { toggle, close, open }] = useDisclosure(false);
  const [base64Image, setBase64Image] = useState<string>("");

  const form = useForm<CategoryModel>({
    initialValues: {
      ...entity,
    },
    validate: {},
  });
  const db = getFirestore();

  const handleFileChange = (file: any) => {
    form.values.icon = file;
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

  const handleCreateProductArticlesCategory = async (value: CategoryModel) => {
    open();
    const uuid = uuidv4();
    await setDoc(doc(db, "/category", uuid), {
      name: value?.name,
      icon: base64Image,
    });
    NotificationExtension.Success("Thêm danh mục thành công");
    onSearch();
    close();
    modals.closeAll();
  };

  return (
    <>
      <Box
        className="flex-none"
        component="form"
        miw={1000}
        maw={1000}
        mx="auto"
        onSubmit={form.onSubmit((e: CategoryModel) => {
          handleCreateProductArticlesCategory(e);
        })}
      >
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />

        <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <TextInput
            label={"Name"}
            placeholder={"Enter name"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("name")}
          />
        </Group>

        <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <FileInput
            label={"Icon"}
            placeholder={"Chọn Icon"}
            accept="image/png,image/jpeg,image/svg+xml"
            withAsterisk
            clearable
            mt="md"
            {...form.getInputProps("icon")}
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
          {/* <TextInput
            label={"Image Thumbnail"}
            placeholder={"Enter Image Thumbnail URL"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("imageThumbnail")}
          /> */}
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
    </>
  );
};

export default CreateView;
