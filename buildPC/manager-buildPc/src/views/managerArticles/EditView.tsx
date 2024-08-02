import {
  Box,
  Button,
  FileInput,
  Group,
  LoadingOverlay,
  MultiSelect,
  Select,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconCheck } from "@tabler/icons-react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { NotificationExtension } from "../../extension/NotificationExtension";
import { ArticlesModel } from "../../model/ArticlesModel";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { ArticlesCategoryModel } from "../../model/ArticlesCategoryModel";
import QuillEditor from "../../common/QuillEditor";

type editViewType = {
  onSearch: () => void;
  id: string;
};

const EditView = ({ onSearch, id }: editViewType) => {
  const entity = {
    id: null,
    title: null,
    url: null,
    imageThumbnail: null,
    summary: null,
    content: null,
    articleCategoryId: [],
    metaTitle: null,
    metaKeyWords: null,
    metaDescription: null,
  };

  const [visible, { toggle, close, open }] = useDisclosure(false);

  const form = useForm<ArticlesModel>({
    initialValues: {
      ...entity,
    },
    validate: {},
  });
  const db = getFirestore();

  const [base64Image, setBase64Image] = useState<string>("");
  const [value, setValue] = useState();
  const [dataArticleCategory, setDataArticleCategory] = useState<
    ArticlesCategoryModel[]
  >([]);

  const [dataArticleCategoryOption, setDataArticleCategoryOption] = useState<
    { value: string; label: string }[]
  >([]);

  const handleFileChange = (file: any) => {
    form.values.imageThumbnail = file;
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

  const handleEditArticlesCategory = async (value: ArticlesModel) => {
    open();
    console.log(value?.imageThumbnail);
    console.log(base64Image);
    await setDoc(
      doc(db, "/articles", id),
      {
        title: value?.title,
        url: value?.url,
        imageThumbnail: base64Image,
        // imageThumbnail: value?.imageThumbnail,
        summary: value?.summary,
        content: value?.content,
        articleCategoryId: value?.articleCategoryId,
        metaTitle: value?.metaTitle,
        metaKeyWords: value?.metaKeyWords,
        metaDescription: value?.metaDescription,
      },
      { merge: true }
    );
    NotificationExtension.Success("Chỉnh sửa bài viết thành công");
    onSearch();
    close();
    modals.closeAll();
  };

  useEffect(() => {
    const callApiGetData = async () => {
      open();
      const docRef = doc(db, "articles", id);
      const docData = await getDoc(docRef);
      if (docData.exists()) {
        form.setValues(docData.data());
        setBase64Image(docData.data().imageThumbnail);
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
    const fetchDataArticleCategory = async () => {
      open();

      // init services
      const db = getFirestore();

      // collection ref
      const colRef = collection(db, "/articleCategory");

      getDocs(colRef)
        .then((snapshot) => {
          let itemArticleCategory: any = [];
          snapshot.docs.forEach((doc) => {
            // console.log(44, doc.data());
            itemArticleCategory.push({ ...doc.data(), id: doc.id });
          });
          setDataArticleCategory(itemArticleCategory);
        })
        .catch((err) => {
          console.log(err.message);
        });
      close();
    };

    fetchDataArticleCategory();
  }, []);

  useEffect(() => {
    if (dataArticleCategory && dataArticleCategory.length > 0) {
      setDataArticleCategoryOption(
        dataArticleCategory.map((category) => ({
          value: category?.id || "",
          label: category?.name || "",
        }))
      );
    }
  }, [dataArticleCategory]);

  return (
    <>
      <Box
        className="flex-none"
        component="form"
        miw={1000}
        maw={1000}
        mx="auto"
        onSubmit={form.onSubmit((e: ArticlesModel) => {
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
            label={"Title"}
            placeholder={"Enter title"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("title")}
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
          <FileInput
            label={"Logo thương hiệu"}
            placeholder={"Chọn logo"}
            accept="image/png,image/jpeg"
            withAsterisk
            clearable
            mt="md"
            {...form.getInputProps("imageThumbnail")}
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

        <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <MultiSelect
            label={"Article Category"}
            placeholder={"Select Article Category "}
            withAsterisk
            mt="md"
            data={dataArticleCategoryOption}
            {...form.getInputProps("articleCategoryId")}
          />
          <TextInput
            label={"Summary"}
            placeholder={"Enter summary"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("summary")}
          />
        </Group>

        {/* <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <Textarea
            label={"Content"}
            placeholder={"Enter content"}
            withAsterisk
            mt="md"
            {...form.getInputProps("content")}
          />
        </Group> */}

        <Text size="sm" mt="lg" fw={500}>
          Nội dung
        </Text>
        <Text size="sm">
          Thêm sản phẩm phải có dạng [Products: id1, id2, id3] Ví dụ list sản
          phẩm có id là 1, 2 thì điền [Products: 1, 2]
        </Text>
        <QuillEditor
          toolbarId="t1"
          setValue={setValue}
          description={form.values.content}
          onChangeValue={(html: string) => (form.values.content = html)}
        />

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
