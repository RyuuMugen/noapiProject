"use client";
import iconAir from "@/assets/icon-air.svg";
import iconCase from "@/assets/icon-case.svg";
import iconChair from "@/assets/icon-chair.svg";
import iconCPU from "@/assets/icon-cpu.svg";
import iconDone from "@/assets/icon-done.svg";
import iconHdd from "@/assets/icon-hdd.svg";
import iconHeadPhone from "@/assets/icon-headphone.svg";
import iconInternet from "@/assets/icon-internet.svg";
import iconKeyboard from "@/assets/icon-keyboard.svg";
import iconMainboard from "@/assets/icon-mainboard.svg";
import iconMouse from "@/assets/icon-mouse.svg";
import iconPower from "@/assets/icon-power.svg";
import iconRam from "@/assets/icon-ram.svg";
import iconScreen from "@/assets/icon-screen.svg";
import iconSound from "@/assets/icon-sound.svg";
import iconSsd from "@/assets/icon-ssd.svg";
import iconVga from "@/assets/icon-vga.svg";
import iconWarning from "@/assets/icon-warning.svg";
import iconWater1 from "@/assets/icon-water-1.svg";
import topBanner from "@/assets/top-banner-buildpc.jpg";
import topBanner2 from "@/assets/top-banner-buildpc2.jpg";
import topBanner3 from "@/assets/top-banner-buildpc3.jpg";
import topBanner4 from "@/assets/top-banner-buildpc4.jpg";
import AppContainer from "@/common/AppContainer";
import ArticleCard from "@/common/ArticleCommon/ArticleCard";
import { ArticlesModel } from "@/model/ArticlesModel";
import { AppContext } from "@/useContext/DeviceContext";
import { Carousel } from "@mantine/carousel";
import {
  Button,
  Flex,
  Modal,
  NumberFormatter,
  Text,
} from "../../library/mantine";
import {
  IconCopy,
  IconDeviceFloppy,
  IconPlayCard,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import ChooseItemModal from "./ChooseItemModal";
import Content from "./ContentFooter";
import style from "./buildpc.module.scss";
const dataBanner = [topBanner, topBanner2, topBanner3, topBanner4];
const arrayBuildPc = [
  {
    id: "bf410736-c2ba-4b0a-b51b-7be8a5a11cde",
    name: "Bộ vi xử lý",
    icon: iconCPU,
  },
  {
    id: "5570cc39-db89-4c02-93b0-9cc0614a6b19",
    name: "Bo mạch chủ",
    icon: iconMainboard,
  },
  {
    id: "f837e591-32e7-4c4b-8253-dceb77bf2e86",
    name: "RAM",
    icon: iconRam,
  },
  {
    id: "4bf9903a-9dfe-4e52-b02b-1404de4212e6",
    name: "VGA",
    icon: iconVga,
  },
  {
    id: "fbac6516-2160-467a-bfac-bb73cde76932",
    name: "SSD",
    icon: iconSsd,
  },
  {
    id: "8456a92f-3375-4b1f-b602-13280bffbebc",
    name: "HDD",
    icon: iconHdd,
  },
  {
    id: "4da0abe9-18fb-460d-a67a-585a1a7b2e5d",
    name: "Nguồn",
    icon: iconPower,
  },
  {
    id: "f13ca18c-d716-4f78-93bc-918acfd3f62b",
    name: "Vỏ case",
    icon: iconCase,
  },
  {
    id: "7369b588-108c-46aa-a129-fedf257f13fd",
    name: "Màn hình",
    icon: iconScreen,
  },
  {
    id: "d7a61808-8084-48f8-a42c-db583fd00bf3",
    name: "Chuột",
    icon: iconMouse,
  },
  {
    id: "2ce52c55-0a55-4bf0-a955-14692e04fd07",
    name: "Bàn phím",
    icon: iconKeyboard,
  },
  {
    id: "4eb465e7-81f2-4a89-9f41-ef6768f06e82",
    name: "Tai nghe",
    icon: iconHeadPhone,
  },
  {
    id: "c202c121-e632-47af-af8d-1861095c4256",
    name: "Loa",
    icon: iconSound,
  },
  {
    id: "e16ea9af-c653-44a1-a2e4-073e1749a5cc",
    name: "Ghế",
    icon: iconChair,
  },
  {
    id: "b077a9cb-ab19-4591-8d75-70641b75bf51",
    name: "Tản nhiệt khí",
    icon: iconAir,
  },
  {
    id: "01b66b89-08d3-43e2-9f60-2c5a65a88b9b",
    name: "Tản nhiệt nước",
    icon: iconWater1,
  },
  {
    id: "14597d99-49c2-4014-933f-7dd23e4f5cba",
    name: "Thiết bị mạng",
    icon: iconInternet,
  },
];

interface buildPcProps {
  dataProducts: any;
  dataArticle: ArticlesModel[];
}

interface selectedProduct {
  categoryId: string;
  name: string;
  price: string;
  image: string;
  linkAffiliate: string;
}

const BuildPC = ({ dataProducts, dataArticle }: buildPcProps) => {
  const [modalDeleteConfig, setModalDeleteConfig] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [confirmCopy, setConfirmCopy] = useState(false);
  const [modalSaveConfig, setModalSaveConfig] = useState(false);
  const [modalChooseProducts, setModalChooseProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<selectedProduct[]>([]);
  const [categorySelectedId, setCategorySelectedId] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const { isMobile, isTablet } = useContext(AppContext);

  const handleCheckIsSelectedProduct = (categoryId: string) => {
    return selectedProduct?.find((item) => item.categoryId === categoryId);
  };
  const handleChooseItemBuildPc = (item: any) => {
    // mỗi category chỉ chọn 1 sản phẩm => mỗi lần chọn lại 1 sản phẩm cùng category thì remove sản phẩm cũ
    const removeItem = selectedProduct.filter(
      (i) => i.categoryId !== item.categoryId
    );
    setSelectedProduct([...removeItem, item]);
  };

  const handleDeleteItemBuildPc = (categoryId: string) => {
    const removeItem = selectedProduct.filter(
      (i) => i.categoryId !== categoryId
    );
    setSelectedProduct(removeItem);
  };

  const handleGetLinkAffiliate = (categoryId: string) => {
    const item = selectedProduct.find((item) => item.categoryId === categoryId);
    return item?.linkAffiliate;
  };

  const handleRenderSelectedImageProduct = (categoryId: string) => {
    const item = selectedProduct.find((item) => item.categoryId === categoryId);
    return (
      <Image
        src={item?.image || ""}
        alt="Icon Build PC"
        width={isMobile ? "60" : "82"}
        height={isMobile ? "60" : "82"}
        className={style.imgProduct}
        style={{ marginRight: "7px" }}
      />
    );
  };

  const handleSaveData = () => {
    setModalSaveConfig(true);
    localStorage.setItem(
      "BuildPc",
      JSON.stringify({
        listItemBuildPc: selectedProduct,
        totalPrice: totalPrice,
      })
    );
  };

  const handleDeleteData = () => {
    setModalDeleteConfig(false);
    setConfirmDelete(true);
    localStorage.removeItem("BuildPc");
  };

  const handleRenderSelectedProduct = (categoryId: string) => {
    const item = selectedProduct.find((item) => item.categoryId === categoryId);
    return (
      <Flex
        gap="10px"
        justify={"space-between"}
        w={"100%"}
        className={style.detailProduct}
      >
        <Flex className={style.infoProduct}>
          {isMobile ? "" : handleRenderSelectedImageProduct(categoryId)}
          {!isTablet ? (
            <Flex direction={"column"} rowGap={8}>
              <Text
                className={style.nameProduct}
                fw={600}
                c="#1F2123"
                size="14px"
                lineClamp={3}
              >
                {item?.name}
              </Text>
            </Flex>
          ) : (
            <Flex justify="flex-start" align="flex-start" direction="column">
              <Text
                className={style.nameProduct}
                fw={600}
                c="#1F2123"
                size="14px"
                lineClamp={3}
                mb={10}
              >
                {item?.name}
              </Text>

              <Text fw={600} c="#ee4d2d" size="14px">
                Giá:
                <NumberFormatter
                  value={item?.price}
                  thousandSeparator
                  suffix="₫"
                />
              </Text>
            </Flex>
          )}
        </Flex>
        {isTablet ? (
          ""
        ) : (
          <Flex
            className={style.priceProduct}
            columnGap={10}
            justify={"center"}
          >
            <Text fw={600} c="#ee4d2d" size="14px">
              Giá:
              <NumberFormatter
                value={item?.price}
                thousandSeparator
                suffix="₫"
              />
            </Text>
          </Flex>
        )}
        <Flex className={style.infoProductMore} gap={5} justify={"flex-end"}>
          {isMobile ? (
            <Flex direction={"row"} className={style.btnProduct} gap={8}>
              <Button
                w="auto"
                h={32}
                p="0 7px"
                size="12px"
                style={{ backgroundColor: "#EE4D2D" }}
                onClick={() => {
                  window.open(handleGetLinkAffiliate(categoryId), "_blank");
                }}
              >
                MUA
              </Button>
              <Button
                w="auto"
                size="12px"
                h={32}
                p="0 7px"
                onClick={() => {
                  setModalChooseProducts(true);
                  setCategorySelectedId(categoryId);
                }}
              >
                CHỌN
              </Button>
              <Button
                w={32}
                h={32}
                p={0}
                onClick={() => {
                  setConfirmCopy(true);
                  navigator.clipboard.writeText(
                    handleGetLinkAffiliate(categoryId) || ""
                  );
                }}
              >
                <IconCopy size={15} />
              </Button>
              <Button
                w={32}
                h={32}
                p={0}
                onClick={() => handleDeleteItemBuildPc(categoryId)}
              >
                <IconTrash size={15} />
              </Button>
            </Flex>
          ) : (
            <Flex direction={"column"} className={style.btnProduct} gap={8}>
              <Button
                leftSection={<IconPlayCard size={15} />}
                className={style.btnBuy}
                variant="filled"
                color="#EE4D2D"
                size="xs"
                onClick={() => {
                  window.open(handleGetLinkAffiliate(categoryId), "_blank");
                }}
              >
                MUA NGAY
              </Button>
              <Button
                leftSection={<IconPlus size={15} />}
                className={style.btnChoose}
                variant="filled"
                color="#D0E3FF"
                size="xs"
                onClick={() => {
                  setModalChooseProducts(true);
                  setCategorySelectedId(categoryId);
                }}
              >
                CHỌN LẠI
              </Button>
              <Button
                leftSection={<IconCopy size={15} />}
                className={style.btnChoose}
                variant="filled"
                color="#D0E3FF"
                size="xs"
                onClick={() => {
                  setConfirmCopy(true);
                  navigator.clipboard.writeText(
                    handleGetLinkAffiliate(categoryId) || ""
                  );
                }}
              >
                COPY LINK
              </Button>
              <Button
                leftSection={<IconTrash size={15} />}
                className={style.btnChoose}
                variant="filled"
                color="#D0E3FF"
                size="xs"
                onClick={() => handleDeleteItemBuildPc(categoryId)}
              >
                XÓA
              </Button>
            </Flex>
          )}
        </Flex>
      </Flex>
    );
  };

  useEffect(() => {
    let total = 0;
    selectedProduct.forEach((item) => {
      total += Number(item.price);
    });
    setTotalPrice(total);
  }, [selectedProduct]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = localStorage.getItem("BuildPc");
      setSelectedProduct(
        storedData ? JSON.parse(storedData)?.listItemBuildPc : []
      );

      setTotalPrice(storedData ? JSON.parse(storedData)?.totalPrice : 0);
    }
  }, [
    typeof window !== "undefined" &&
      window.localStorage &&
      localStorage.getItem("BuildPc"),
  ]);

  return (
    <div>
      <div className={style.topBanner}>
        <Carousel
          slideSize="50%"
          slideGap="20"
          loop
          align="start"
          withControls
          controlSize={50}
          // plugins={[autoplay.current]}
          // onMouseEnter={autoplay.current.stop}
          // onMouseLeave={autoplay.current.reset}
        >
          {dataBanner.map((item, index) => (
            <Carousel.Slide key={index}>
              <Image
                src={item}
                alt="Build PC"
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "400px",
                }}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
      <AppContainer className={style.page}>
        <div className={style.boxConfig}>
          {/* <div className={style.line}></div> */}
          <Flex className={style.groupBtn} gap="15px" justify="center"></Flex>
        </div>
        <Flex className={style.mainConfig} gap={isMobile ? "10px" : "30px"}>
          <div className={style.listItem}>
            {arrayBuildPc?.map((item, index) => {
              return (
                <Flex
                  key={index}
                  className={style.itemConfig}
                  align="center"
                  gap="10px"
                >
                  <Flex
                    className={style.nameBox}
                    style={
                      handleCheckIsSelectedProduct(item.id) && isMobile
                        ? {
                            width: "35%",
                            flexDirection: "column",
                            alignItems: "flex-start",
                          }
                        : { alignItems: "center" }
                    }
                  >
                    <Image
                      src={item?.icon}
                      alt={`Icon của ${item?.name}`}
                      width={42}
                      height={42}
                      style={{ marginRight: "17px" }}
                    />
                    <Text
                      fw={700}
                      className={style.nameItem}
                      mb={10}
                      c="#18345E"
                      size="15px"
                    >
                      {item?.name}
                    </Text>
                    {handleCheckIsSelectedProduct(item.id) && isMobile
                      ? handleRenderSelectedImageProduct(item.id)
                      : ""}
                  </Flex>
                  <Flex
                    className={style.itemDetail}
                    style={
                      handleCheckIsSelectedProduct(item.id)
                        ? isMobile
                          ? { width: "65%" }
                          : { width: "100%" }
                        : !handleCheckIsSelectedProduct(item.id)
                        ? { width: "auto" }
                        : { width: "100%" }
                    }
                    align="center"
                  >
                    {handleCheckIsSelectedProduct(item.id) ? (
                      handleRenderSelectedProduct(item.id)
                    ) : (
                      <Button
                        leftSection={<IconPlus size={15} />}
                        className={style.btnChoose}
                        variant="filled"
                        color="#D0E3FF"
                        size="xs"
                        onClick={() => {
                          setModalChooseProducts(true);
                          setCategorySelectedId(item.id);
                        }}
                      >
                        CHỌN
                      </Button>
                    )}
                  </Flex>
                </Flex>
              );
            })}
          </div>
          <div className={style.wrapperRight}>
            <div className={style.groupBtnProcess}>
              <div className={style.groupBtnProcessInner}>
                <Flex className={style.price} align="flex-end">
                  <Text fw={700} c="#ee4d2d" size="sm">
                    Tạm Tính:
                  </Text>
                  <Text fw={700} c="#ee4d2d" size="md">
                    <NumberFormatter
                      value={totalPrice}
                      thousandSeparator
                      suffix="₫"
                    />
                  </Text>
                </Flex>

                <Flex className={style.groupBtnConfig}>
                  <Button
                    className={style.btnProcess}
                    fullWidth
                    leftSection={<IconDeviceFloppy size={20} />}
                    onClick={() => handleSaveData()}
                  >
                    LƯU CẤU HÌNH
                  </Button>

                  <Button
                    className={style.btnProcess}
                    fullWidth
                    leftSection={<IconTrash size={20} />}
                    onClick={() => setModalDeleteConfig(true)}
                  >
                    XÓA CẤU HÌNH
                  </Button>
                </Flex>
              </div>
            </div>
            {!isMobile && (
              <div className={style.articleBox}>
                {dataArticle?.map((item, index) => (
                  <div key={index} className={style.card}>
                    <ArticleCard data={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </Flex>
        {isMobile && (
          <div className={style.articleBox}>
            {dataArticle?.map((item, index) => (
              <div key={index} className={style.card} style={{ marginTop: 20 }}>
                <ArticleCard data={item} />
              </div>
            ))}
          </div>
        )}
        <Content />
      </AppContainer>

      {/* form chọn sản phẩm */}
      <ChooseItemModal
        setModalChooseProducts={setModalChooseProducts}
        setCategorySelectedId={setCategorySelectedId}
        modalChooseProducts={modalChooseProducts}
        handleChooseItemBuildPc={handleChooseItemBuildPc}
        categorySelectedId={categorySelectedId}
        dataProducts={dataProducts}
      />
      <Modal
        opened={modalDeleteConfig}
        onClose={() => setModalDeleteConfig(false)}
      >
        <Flex
          direction="column"
          align="center"
          style={{ paddingBottom: "30px" }}
        >
          <Image
            src={iconWarning}
            alt="Icon"
            width={37}
            height={37}
            style={{ marginBottom: "16px" }}
          />
          <Text
            fw={700}
            c="#1F2123"
            size="22px"
            style={{ marginBottom: "10px" }}
          >
            Xóa toàn bộ cấu hình
          </Text>
          <Text
            fw={400}
            c="#787878"
            size="15px"
            style={{ marginBottom: "10px" }}
          >
            Toàn bộ linh kiện của bộ PC hiện tại sẽ bị xóa đi
          </Text>
          <Flex gap="12px">
            <Button
              variant="filled"
              color="#EE4D2D"
              onClick={() => setModalDeleteConfig(false)}
            >
              Hủy
            </Button>
            <Button variant="filled" color="#F43453" onClick={handleDeleteData}>
              Xác nhận
            </Button>
          </Flex>
        </Flex>
      </Modal>

      <Modal
        opened={confirmDelete}
        onClose={() => setConfirmDelete(false)}
        withCloseButton={false}
        size={207}
      >
        <Flex direction="column" align="center">
          <Image
            src={iconWarning}
            alt="Icon"
            width={26}
            height={26}
            style={{ marginBottom: "16px" }}
          />
          <Text
            fw={700}
            c="#1F2123"
            size="18px"
            style={{ marginBottom: "10px" }}
          >
            Đã xóa cấu hình
          </Text>
        </Flex>
      </Modal>

      <Modal
        opened={modalSaveConfig}
        onClose={() => setModalSaveConfig(false)}
        withCloseButton={false}
        size={207}
      >
        <Flex direction="column" align="center">
          <Image
            src={iconDone}
            alt="Icon"
            width={26}
            height={26}
            style={{ marginBottom: "16px" }}
          />
          <Text
            fw={700}
            c="#1F2123"
            size="18px"
            style={{ marginBottom: "10px" }}
          >
            Đã lưu cấu hình
          </Text>
        </Flex>
      </Modal>

      <Modal
        opened={confirmCopy}
        onClose={() => setConfirmCopy(false)}
        withCloseButton={false}
        size={250}
      >
        <Flex direction="column" align="center">
          <IconCopy size={26} color="orange" style={{ marginBottom: 16 }} />
          <Text
            fw={700}
            c="#1F2123"
            size="18px"
            style={{ marginBottom: "10px" }}
          >
            Đã sao chép cấu hình
          </Text>
        </Flex>
      </Modal>
    </div>
  );
};
export default BuildPC;
