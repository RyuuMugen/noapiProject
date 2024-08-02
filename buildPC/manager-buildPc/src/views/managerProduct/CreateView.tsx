import {
  Box,
  Button,
  Checkbox,
  Flex,
  Grid,
  Group,
  LoadingOverlay,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconCheck } from "@tabler/icons-react";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { ItemShopeModel } from "../../model/ItemsShopeModel";
import { NotificationExtension } from "../../extension/NotificationExtension";
import { initializeApp } from "firebase/app";
import { useEffect, useState } from "react";
import { AttributeModel } from "../../model/AttributeModel";
import { AttributeValueModel } from "../../model/AttributeValueModel";
import { CategoryModel } from "../../model/CategoryModel";

const CreateView = ({ onSearch }: any) => {
  const entity = {
    id: null,
    categoryName: null,
    categoryId: null,
    brandId: null,
    image: null,
    name: null,
    price: null,
    attributeValueIds: [],
  };

  const [visible, { toggle, close, open }] = useDisclosure(false);
  const [dataAttributes, setDataAttributes] = useState<AttributeModel[]>([]);
  const [dataAttributeValues, setDataAttributeValues] = useState<
    AttributeValueModel[][]
  >([]);
  const [dataCategory, setDataCategory] = useState<CategoryModel[]>([]);

  const [dataCategoryOption, setDataCategoryOption] = useState<
    { value: string; label: string }[]
  >([]);

  const form = useForm<ItemShopeModel>({
    initialValues: {
      ...entity,
    },
    validate: {},
  });
  const db = getFirestore();

  const handleCreateProduct = async (value: ItemShopeModel) => {
    const uuid = uuidv4();

    await setDoc(doc(db, "/products", uuid), {
      categoryName: dataCategoryOption?.find(
        (category) => category?.value === value?.categoryId
      )?.label,
      categoryId: value?.categoryId,
      image: value?.image,
      name: value?.name,
      price: value?.price,
      linkAffiliate: value?.linkAffiliate,
      attributeValueIds: value?.attributeValueIds,
    });

    NotificationExtension.Success("Thêm sản phẩm thành công");
    onSearch();
    modals.closeAll();
  };

  const handleCheckBoxChange = (valueId: string) => {
    const isValueInDataOptionAttribute = form.values.attributeValueIds?.some(
      (item) => item === valueId
    );

    if (!isValueInDataOptionAttribute) {
      // Thêm giá trị vào mảng
      form.setFieldValue("attributeValueIds", [
        ...(form.values.attributeValueIds || []),
        valueId,
      ]);
    } else {
      // Loại bỏ giá trị khỏi mảng
      form.setFieldValue(
        "attributeValueIds",
        form.values.attributeValueIds?.filter((item) => item !== valueId)
      );
    }
  };

  const fetchDataAttribute = async () => {
    // collection ref
    const colRef = collection(db, "/attribute");

    const q = query(colRef, where("categoryId", "==", form.values.categoryId));

    getDocs(q)
      .then((snapshot) => {
        let attribute: any = [];
        snapshot.docs.forEach((doc) => {
          attribute.push({ ...doc.data(), id: doc.id });
        });
        setDataAttributes(attribute);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const fetchDataAttributeValue = async () => {
    // collection ref
    const colRef = collection(db, "/attributeValue");

    try {
      const attributeValueArrays = await Promise.all(
        dataAttributes.map(async (attribute) => {
          const q = query(colRef, where("attributeId", "==", attribute.id));
          const snapshot = await getDocs(q);
          let attributeValues: any[] = [];
          snapshot.docs.forEach((doc) => {
            attributeValues.push({ ...doc.data(), id: doc.id });
          });
          return attributeValues;
        })
      );
      setDataAttributeValues(attributeValueArrays);
      console.log(attributeValueArrays);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    if (form.values.categoryId) {
      fetchDataAttribute();
    } else setDataAttributes([]);
  }, [form.values.categoryId]);

  useEffect(() => {
    if (dataAttributes && dataAttributes.length > 0) {
      fetchDataAttributeValue();
    } else setDataAttributeValues([]);
  }, [dataAttributes]);

  useEffect(() => {
    const fetchDataCategory = async () => {
      open();

      // collection ref
      const colRef = collection(db, "/category");

      getDocs(colRef)
        .then((snapshot) => {
          let itemCategory: any = [];
          snapshot.docs.forEach((doc) => {
            // console.log(44, doc.data());
            itemCategory.push({ ...doc.data(), id: doc.id });
          });
          setDataCategory(itemCategory);
        })
        .catch((err) => {
          console.log(err.message);
        });
      close();
    };

    fetchDataCategory();
  }, []);

  useEffect(() => {
    if (dataCategory && dataCategory.length > 0) {
      setDataCategoryOption(
        dataCategory.map((category) => ({
          value: category?.id || "",
          label: category?.name || "",
        }))
      );
    }
  }, [dataCategory]);

  return (
    <>
      <Box
        className="flex-none"
        component="form"
        miw={1000}
        maw={1000}
        mx="auto"
        onSubmit={form.onSubmit((e: ItemShopeModel) => {
          handleCreateProduct(e);
        })}
      >
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <Select
            label={"Chọn tên danh mục sản phẩm"}
            placeholder={""}
            withAsterisk
            mt="md"
            clearable
            data={dataCategoryOption}
            {...form.getInputProps("categoryId")}
          />
          <TextInput
            label={"Image"}
            placeholder={"Enter image URL"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("image")}
          />
        </Group>

        <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <TextInput
            label={"Affiliate Link"}
            placeholder={"Enter affiliate link"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("linkAffiliate")}
          />
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
          <TextInput
            label={"Price"}
            placeholder={"Enter price"}
            withAsterisk
            mt="md"
            type="number"
            {...form.getInputProps("price")}
          />
        </Group>

        {dataAttributes.length > 0 && (
          <Text size="sm" mt="lg" fw={500}>
            Danh sách thuộc tính
          </Text>
        )}

        {dataAttributes?.map((attribute, index) => (
          <Grid
            key={index}
            mt="lg"
            pb="sm"
            display={"flex"}
            style={{ borderBottom: "1px solid lightgray" }}
          >
            <Grid.Col span={{ base: 12, xs: 2 }}>
              <Text fw={700}>{attribute.attributeName}</Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, xs: 6 }}>
              <Flex direction={"column"} justify={"space-between"} h={"100%"}>
                <Group wrap="wrap" align="center">
                  {dataAttributeValues &&
                    dataAttributeValues[index]?.map((option, index) => (
                      <Checkbox
                        key={option.id}
                        label={option.label}
                        style={{ flex: "0 0 28%", maxWidth: "28%" }}
                        value={option.id || ""}
                        checked={form.values.attributeValueIds?.some(
                          (item) => item === option.id
                        )}
                        onChange={(event) =>
                          handleCheckBoxChange(event.currentTarget.value)
                        }
                      />
                    ))}
                </Group>
              </Flex>
            </Grid.Col>
          </Grid>
        ))}

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
