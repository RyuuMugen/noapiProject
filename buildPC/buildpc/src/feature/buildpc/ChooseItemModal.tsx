"use client";
import {
  Box,
  Button,
  Flex,
  Modal,
  NumberFormatter,
  Rating,
  Select,
  Text,
  TextInput,
} from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Radiogroup from "../../common/radioGroup";
import style from "./buildpc.module.scss";

import { AttributeModel } from "@/model/AttributeModel";
import { AttributeValueModel } from "@/model/AttributeValueModel";
import { ItemShopeModel } from "@/model/ItemsShopeModel";
import { AppContext } from "@/useContext/DeviceContext";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

interface ChooseItemModalProps {
  modalChooseProducts: boolean;
  setModalChooseProducts: any;
  dataProducts: ItemShopeModel[];
  handleChooseItemBuildPc: any;
  categorySelectedId: string;
  setCategorySelectedId: any;
}

const ChooseItemModal = ({
  modalChooseProducts,
  setModalChooseProducts,
  dataProducts,
  handleChooseItemBuildPc,
  categorySelectedId,
  setCategorySelectedId,
}: ChooseItemModalProps) => {
  const { isMobile, isDesktop, isTablet } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState<ItemShopeModel[]>([]);
  const [dataAttributes, setDataAttributes] = useState<AttributeModel[]>([]);
  const [dataAttributeValues, setDataAttributeValues] = useState<
    AttributeValueModel[][]
  >([]);

  const [dataAttributeValuesOption, setDataAttributeValuesOption] = useState<
    { value: string; label: string }[][]
  >([]);
  const [selectedAttributeValues, setSelectedAttributeValues] = useState<
    (string | null)[]
  >([]);

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_BASE_URL_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_BASE_URL_AUTH_DOMAIN,
    projectId: "test-2c9a0",
    storageBucket: "test-2c9a0.appspot.com",
    messagingSenderId: "432649207852",
    appId: "1:432649207852:web:41c871d514edb1bf6d1189",
    measurementId: "G-XKSSCK55JJ",
  };

  // init firebase
  initializeApp(firebaseConfig);

  // init services
  const db = getFirestore();

  const closeModal = () => {
    setSearchTerm("");
    setModalChooseProducts(false);
  };

  const handleSearchChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleChangePriceFilter = (selectedValue: any) => {
    if (selectedValue == "increase") {
      const dataCopy = [...data];
      dataCopy.sort((a: any, b: any) => {
        return parseInt(a.price) - parseInt(b.price);
      });
      setData(dataCopy);
    } else {
      const dataCopy = [...data];
      dataCopy.sort((a: any, b: any) => {
        return parseInt(b.price) - parseInt(a.price);
      });
      setData(dataCopy);
    }
  };

  const handleSelectAttributeValue = (value: string | null, index: number) => {
    let selectedValue = [...selectedAttributeValues];
    selectedValue[index] = value;
    setSelectedAttributeValues(selectedValue);

    let filteredData = data?.filter((item) =>
      selectedValue.every((selectedVal) => {
        if (selectedVal === null) return true; // Ignore null values in selectedValue
        return item.attributeValueIds?.includes(selectedVal);
      })
    );

    setData(filteredData);
  };

  useEffect(() => {
    const data = dataProducts?.filter(
      (item: any) => item.categoryId === categorySelectedId
    );
    setData(data);
  }, [dataProducts, categorySelectedId]);

  useEffect(() => {
    const delay = setTimeout(() => {
      const filteredData = dataProducts
        .filter((item) => item?.categoryId === categorySelectedId)
        .filter((item) =>
          selectedAttributeValues?.every((selectedVal) => {
            if (selectedVal === null) return true; // Ignore null values in selectedAttributeValues
            return item?.attributeValueIds?.includes(selectedVal);
          })
        )
        .filter((item) =>
          item?.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );

      setData(filteredData);
    }, 500); // Delay of 0.5 seconds (500 milliseconds)

    // Clear the timeout to avoid continuous filtering on rapid input changes
    return () => clearTimeout(delay);
  }, [dataProducts, categorySelectedId, selectedAttributeValues, searchTerm]);

  useEffect(() => {
    const fetchDataAttribute = async () => {
      // collection ref
      const colRef = collection(db, "/attribute");

      const q = query(colRef, where("categoryId", "==", categorySelectedId));

      getDocs(q)
        .then((snapshot) => {
          let attribute: any = [];
          snapshot.docs.forEach((doc) => {
            attribute.push({ ...doc.data(), id: doc.id });
          });
          setDataAttributes(attribute);
          // console.log(55, attribute);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    if (categorySelectedId) {
      fetchDataAttribute();
    } else setDataAttributes([]);
  }, [categorySelectedId, db]);

  useEffect(() => {
    const fetchDataAttributeValue = async () => {
      // collection ref
      const colRef = collection(db, "/attributeValue");

      try {
        const attributeValueArrays = await Promise.all(
          dataAttributes?.map(async (attribute) => {
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
        // console.log(66, attributeValueArrays);
      } catch (err: any) {
        console.log(err.message);
      }
    };
    if (dataAttributes) fetchDataAttributeValue();
  }, [dataAttributes, db]);

  useEffect(() => {
    setDataAttributeValuesOption(
      dataAttributeValues?.map((attributeArray) =>
        attributeArray.map((attributeValue) => ({
          value: attributeValue.id || "",
          label: attributeValue.value || "",
        }))
      )
    );
  }, [dataAttributeValues]);

  useEffect(() => {
    setSelectedAttributeValues([]);
  }, [modalChooseProducts]);

  return (
    <>
      <Modal.Root
        opened={modalChooseProducts}
        onClose={() => closeModal()}
        size="100%"
        className={style.modalProductsList}
      >
        <Modal.Overlay />
        <Modal.Content>
          {isMobile ? (
            <Modal.Header display={"block"} className={style.modalHeader}>
              <Box display={"flex"}>
                <Modal.Title className={style.titleModal}>
                  CHỌN LINH KIỆN
                </Modal.Title>
                <Modal.CloseButton className={style.btnCloseModal} />
              </Box>

              <Flex className={style.boxSearchProductList}>
                <TextInput
                  className={style.inputSearch}
                  placeholder="Nhập tên linh kiện cần tìm"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  rightSection={
                    <IconSearch color="#fff" className={style.iconSearch} />
                  }
                />
              </Flex>
            </Modal.Header>
          ) : (
            <Modal.Header className={style.modalHeader}>
              <Modal.Title className={style.titleModal}>
                CHỌN LINH KIỆN
              </Modal.Title>

              <Flex className={style.boxSearchProductList}>
                <TextInput
                  className={style.inputSearch}
                  placeholder="Nhập tên linh kiện cần tìm"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  rightSection={
                    <IconSearch color="#fff" className={style.iconSearch} />
                  }
                />
              </Flex>

              {/* <Pagination total={6} className={style.pagination} /> */}

              <Modal.CloseButton className={style.btnCloseModal} />
            </Modal.Header>
          )}

          <Modal.Body className={style.modalBody}>
            {/* {isMobile ? (
              <></>
            ) : (
              <Flex className={style.boxBrand} direction="column">
                <Text fw={700} c="#1F2123" size="18px">
                  Chọn theo thương hiệu
                </Text>
                <Flex className={style.brands} gap="15px">
                  <Image src={brand1} alt="Brand" width={146} height={46} />
                  <Image src={brand2} alt="Brand" width={146} height={46} />
                  <Image src={brand3} alt="Brand" width={146} height={46} />
                  <Image src={brand4} alt="Brand" width={146} height={46} />
                </Flex>
              </Flex>
            )} */}

            <Flex className={style.boxFilter} direction="column">
              <Text fw={700} c="#1F2123" size="18px">
                Chọn theo tiêu chí
              </Text>
              <Flex className={style.filter1} gap="15px">
                {/* <Select
                  placeholder="Card màn hình"
                  data={["NVDIA", "AMD"]}
                  searchable
                />
                <Select
                  placeholder="Kiểu bộ nhớ"
                  data={["HDD", "SSD"]}
                  searchable
                />
                <Select
                  placeholder="Kích thước bộ nhớ"
                  data={["256GB", "500GB"]}
                  searchable
                />
                <Select
                  placeholder="Giao diện bộ nhớ"
                  data={["256GB", "500GB"]}
                  searchable
                /> */}

                {dataAttributes?.map((attribute, index) => (
                  <Select
                    key={index}
                    placeholder={attribute?.attributeName || ""}
                    data={dataAttributeValuesOption[index] || []}
                    nothingFoundMessage={"Không có dữ liệu"}
                    clearable
                    onChange={(value) =>
                      handleSelectAttributeValue(value, index)
                    }
                    // searchable
                  />
                ))}

                <Flex>
                  <div>
                    <Radiogroup
                      type={"Giá:"}
                      handleChangePriceFilter={handleChangePriceFilter}
                    />
                  </div>
                </Flex>
              </Flex>
            </Flex>

            <Flex className={style.boxListProductPopup} gap="15px">
              {data?.map((item: any, index: number) => {
                return (
                  <>
                    <Flex
                      key={index}
                      className={style.itemProductPopup}
                      direction="column"
                    >
                      <div className={style.imgProductPopup}>
                        <Image
                          src={item.image}
                          alt="product"
                          width={225}
                          height={225}
                        />
                      </div>
                      <Flex
                        className={style.infoProductPopup}
                        direction="column"
                      >
                        <Rating
                          defaultValue={5}
                          style={{ marginBottom: isDesktop ? "15px" : "5px" }}
                          readOnly
                        />
                        <Text
                          lineClamp={2}
                          fw={700}
                          c="#303841"
                          className={style.textName}
                          style={{ marginBottom: isDesktop ? "15px" : "5px" }}
                        >
                          {item.name}
                        </Text>
                        <Text
                          fw={700}
                          c="#EE4D2D"
                          size={isDesktop ? "21px" : "16px"}
                          style={{ marginBottom: isDesktop ? "24px" : "12px" }}
                        >
                          <NumberFormatter
                            value={item.price}
                            thousandSeparator
                            suffix="₫"
                          />
                        </Text>
                        <Button
                          size={isDesktop ? "sm" : "xs"}
                          leftSection={<IconPlus size={14} />}
                          variant="filled"
                          className={style.btnChoosePopup}
                          onClick={() => {
                            handleChooseItemBuildPc(item);
                            setModalChooseProducts(false);
                          }}
                        >
                          Chọn
                        </Button>
                      </Flex>
                    </Flex>
                  </>
                );
              })}
            </Flex>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default ChooseItemModal;
