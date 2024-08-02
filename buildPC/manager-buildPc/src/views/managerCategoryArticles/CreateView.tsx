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
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { NotificationExtension } from "../../extension/NotificationExtension";
import { ArticlesCategoryModel } from "../../model/ArticlesCategoryModel";

type createViewType = {
  onSearch: () => void;
};

const CreateView = ({ onSearch }: createViewType) => {
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

  const handleCreateProductArticlesCategory = async (
    value: ArticlesCategoryModel
  ) => {
    open();
    const uuid = uuidv4();
    await setDoc(doc(db, "/articleCategory", uuid), {
      name: value?.name,
      url: value?.url,
      metaTitle: value?.metaTitle,
      metaKeyWords: value?.metaKeyWords,
      metaDescription: value?.metaDescription,
    });
    NotificationExtension.Success("Thêm danh mục bài viết thành công");
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
        onSubmit={form.onSubmit((e: ArticlesCategoryModel) => {
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

export default CreateView;
