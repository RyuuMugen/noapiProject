import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  Select,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconCheck } from "@tabler/icons-react";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { NotificationExtension } from "../../extension/NotificationExtension";
import { ArticlesCategoryModel } from "../../model/ArticlesCategoryModel";
import { useEffect } from "react";

type editViewType = {
  onSearch: () => void;
  id: string;
};

const EditView = ({ onSearch, id }: editViewType) => {
  const entity = {
    id: null,
    name: null,
    url: null,
    metaTitle: null,
    metaKeyWords: null,
    metaDescription: null,
  };

  const [visible, { toggle, close, open }] = useDisclosure(false);

  const form = useForm<ArticlesCategoryModel>({
    initialValues: {
      ...entity,
    },
    validate: {},
  });
  const db = getFirestore();

  const handleEditProductArticlesCategory = async (
    value: ArticlesCategoryModel
  ) => {
    if (
      value?.name &&
      value?.url &&
      value?.metaTitle &&
      value?.metaKeyWords &&
      value?.metaDescription
    ) {
      open();
      await setDoc(
        doc(db, "/articleCategory", id),
        {
          name: value?.name,
          url: value?.url,
          metaTitle: value?.metaTitle,
          metaKeyWords: value?.metaKeyWords,
          metaDescription: value?.metaDescription,
        },
        { merge: true }
      );
      NotificationExtension.Success("Chỉnh sửa danh mục bài viết thành công");
      onSearch();
      close();
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
    const docRef = doc(db, "articleCategory", id);
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
    <>
      <Box
        className="flex-none"
        component="form"
        miw={1000}
        maw={1000}
        mx="auto"
        onSubmit={form.onSubmit((e: ArticlesCategoryModel) => {
          handleEditProductArticlesCategory(e);
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
          <TextInput
            label={"URL"}
            placeholder={"Enter URL"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("url")}
          />
        </Group>

        <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <TextInput
            label={"Meta Title"}
            placeholder={"Enter Meta Title"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("metaTitle")}
          />
          <TextInput
            label={"Meta KeyWords"}
            placeholder={"Enter Meta KeyWords"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("metaKeyWords")}
          />
        </Group>

        <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <TextInput
            label={"Meta Description"}
            placeholder={"Enter Meta Description"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("metaDescription")}
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
    </>
  );
};

export default EditView;
