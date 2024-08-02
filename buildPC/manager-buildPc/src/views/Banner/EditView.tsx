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
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { NotificationExtension } from "../../extension/NotificationExtension";
import { BannerModel } from "../../model/BannerModel";

type editViewType = {
  onSearch: () => void;
  id: string;
};

const EditView = ({ onSearch, id }: editViewType) => {
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

  const handleEditArticlesCategory = async (value: BannerModel) => {
    open();
    await setDoc(
      doc(db, "/banner", id),
      {
        type: value?.type,
        url: value?.url,
        image: base64Image,
        isShow: value?.isShow,
        alt: value?.alt,
      },
      { merge: true }
    );
    NotificationExtension.Success("Chỉnh sửa banner thành công");
    close();
    modals.closeAll();
    onSearch();
  };

  useEffect(() => {
    const callApiGetData = async () => {
      open();
      const docRef = doc(db, "banner", id);
      const docData = await getDoc(docRef);
      if (docData.exists()) {
        form.setValues(docData.data());
        setBase64Image(docData.data().image);
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

  return (
    <Box
      className="flex-none"
      component="form"
      miw={1000}
      maw={1000}
      mx="auto"
      onSubmit={form.onSubmit((e: BannerModel) => {
        handleEditArticlesCategory(e);
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

export default EditView;
