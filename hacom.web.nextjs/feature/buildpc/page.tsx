"use client";
import AppContainer from "@/common/AppContainer";
import {
  Button,
  Flex,
  Input,
  Modal,
  NumberFormatter,
  NumberInput,
  Text,
} from "@mantine/core";
import {
  IconDeviceFloppy,
  IconEdit,
  IconMinus,
  IconPlus,
  IconShoppingBag,
  IconShoppingBagPlus,
  IconTrash,
} from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./buildpc.module.scss";

import { createCartProduct } from "@/api/apiCart";
import iconAir from "@/assets/icon-air.svg";
import iconBuildPc from "@/assets/icon-buildpc.svg";
import iconCase from "@/assets/icon-case.svg";
import iconChair from "@/assets/icon-chair.svg";
import iconCPU from "@/assets/icon-cpu.svg";
import iconDelete from "@/assets/icon-delete.svg";
import iconDone from "@/assets/icon-done.svg";
import iconFan from "@/assets/icon-fan.svg";
import iconHdd from "@/assets/icon-hdd.svg";
import iconHeadPhone from "@/assets/icon-headphone.svg";
import iconInternet from "@/assets/icon-internet.svg";
import iconKeyboard from "@/assets/icon-keyboard.svg";
import iconMainboard from "@/assets/icon-mainboard.svg";
import iconMouse from "@/assets/icon-mouse.svg";
import iconPower from "@/assets/icon-power.svg";
import iconRam from "@/assets/icon-ram.svg";
import iconRefresh from "@/assets/icon-refresh.svg";
import iconScreen from "@/assets/icon-screen.svg";
import iconSecurity from "@/assets/icon-security.svg";
import iconSound from "@/assets/icon-sound.svg";
import iconSsd from "@/assets/icon-ssd.svg";
import iconVga from "@/assets/icon-vga.svg";
import iconWarning from "@/assets/icon-warning.svg";
import iconWater1 from "@/assets/icon-water-1.svg";
import iconWater from "@/assets/icon-water.svg";
import iconWindow from "@/assets/icon-window-c.svg";
import productAdded1 from "@/assets/product-added-1.png";
import productAdded2 from "@/assets/product-added-2.png";
import productAdded3 from "@/assets/product-added-3.png";
import productAdded4 from "@/assets/product-added-4.png";
import productAdded5 from "@/assets/product-added-5.png";
import topBanner from "@/assets/top-banner-buildpc.png";
import { TblBuildPcListItemBuild } from "@/model/TblBuildPc";
import { useCardItems } from "@/useContext/CardContext";
import ActionBuildPc from "./ActionBuildPc";
import ChooseItemModal from "./ChooseItemModal";
import { modals } from "@mantine/modals";
import { useRouter } from "next/navigation";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import { NotificationExtension } from "@/extension/NotificationExtension";

// const roboto = Roboto({
//   subsets: ["latin"],
//   weight: ["100", "300", "400", "500", "700", "900"],
// });

const arrayBuildPc = [
  {
    id: 31,
    name: "Bộ vi xử lý",
    icon: iconCPU,
  },
  {
    id: 30,
    name: "Bo mạch chủ",
    icon: iconMainboard,
  },
  {
    id: 32,
    name: "RAM",
    icon: iconRam,
  },
  {
    id: 34,
    name: "VGA",
    icon: iconVga,
  },
  {
    id: 164,
    name: "SSD",
    icon: iconSsd,
  },
  {
    id: 33,
    name: "HDD",
    icon: iconHdd,
  },
  {
    id: 36,
    name: "Nguồn",
    icon: iconPower,
  },
  {
    id: 35,
    name: "Vỏ case",
    icon: iconCase,
  },
  {
    id: 39,
    name: "Màn hình",
    icon: iconScreen,
  },
  {
    id: 38,
    name: "Chuột",
    icon: iconMouse,
  },
  {
    id: 37,
    name: "Bàn phím",
    icon: iconKeyboard,
  },
  {
    id: 246,
    name: "Tai nghe",
    icon: iconHeadPhone,
  },
  {
    id: 248,
    name: "Loa",
    icon: iconSound,
  },
  {
    id: 316,
    name: "Ghế",
    icon: iconChair,
  },
  {
    id: 68,
    name: "Quạt làm mát",
    icon: iconFan,
  },
  {
    id: 64,
    name: "Tản nhiệt khí",
    icon: iconAir,
  },
  {
    id: 332,
    name: "Tản nhiệt nước all in one",
    icon: iconWater1,
  },
  {
    id: 334,
    name: "Tản nhiệt nước custom",
    icon: iconWater,
  },
  {
    id: 23,
    name: "Thiết bị mạng",
    icon: iconInternet,
  },
  {
    id: 53,
    name: "Windows bản quyền",
    icon: iconWindow,
  },
  {
    id: 52,
    name: "Phần mềm diệt virus",
    icon: iconSecurity,
  },
];

const listBuildPcPriceSale = [
  { range: 100000000, sale: 5000000 },
  { range: 80000000, sale: 3000000 },
  { range: 60000000, sale: 1700000 },
  { range: 50000000, sale: 1300000 },
  { range: 40000000, sale: 900000 },
  { range: 30000000, sale: 700000 },
  { range: 20000000, sale: 500000 },
  { range: 10000000, sale: 300000 },
  { range: 5000000, sale: 200000 },
];
const BuildPC = () => {
  const router = useRouter();
  const { fetchDataHeader } = useCardItems();
  const { setSaleDetailOrder, setTotalAmount } = useSaleOrder();
  const [modalDeleteConfig, setModalDeleteConfig] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [modalSaveConfig, setModalSaveConfig] = useState(false);
  const [modalBuildAI, setModalBuildAI] = useState(false);
  const [modalChooseProducts, setModalChooseProducts] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [pricePCSale, setPricePCSale] = useState<{
    range: number;
    sale: number;
  }>({ range: 0, sale: 0 });
  const [isBuildPcSale, setIsBuildPcSale] = useState(false);
  const [selectedConfiguration, setSelectedConfiguration] = useState(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const [selectedItemIdRel, setSelectedItemIdRel] = useState<number | null>(
    null
  );
  const [listItemBuildPc, setListItemBuildPc] = useState<
    (TblBuildPcListItemBuild | null)[][]
  >([]);

  const handleSelectConfigGroup = (index: number) => {
    setSelectedConfiguration(index);

    const buildPcChange = handleListItemBuildPCChange(listItemBuildPc[index]);
    const price = handlePriceChange(buildPcChange?.totalPrice || 0);

    localStorage.setItem(
      "BuildPc",
      JSON.stringify({
        listItemBuildPc: listItemBuildPc || [],
        pricePCSale: price || { range: 0, sale: 0 },
        isBuildPcSale: buildPcChange?.isBuildPCSale || false,
        totalPrice: buildPcChange?.totalPrice || 0,
        selectedConfiguration: index || 0,
      })
    );
  };

  const handleClickChooseProduct = (idCategory: number, index: number) => {
    setSelectedCategoryId(idCategory);
    if (
      index === 0 &&
      listItemBuildPc[selectedConfiguration] &&
      listItemBuildPc[selectedConfiguration][1]
    )
      setSelectedItemIdRel(
        listItemBuildPc[selectedConfiguration][1]?.id || null
      );
    else if (
      index === 1 &&
      listItemBuildPc[selectedConfiguration] &&
      listItemBuildPc[selectedConfiguration][0]
    )
      setSelectedItemIdRel(
        listItemBuildPc[selectedConfiguration][0]?.id || null
      );
    else setSelectedItemIdRel(null);
    setSelectedCategoryIndex(index);
    setModalChooseProducts(true);
  };

  const handleChooseItemBuildPc = (item: TblBuildPcListItemBuild) => {
    const newListItem = [...listItemBuildPc];
    if (!newListItem[selectedConfiguration]) {
      newListItem[selectedConfiguration] = [];
    }
    newListItem[selectedConfiguration][selectedCategoryIndex] = {
      ...item,
      quantity: 1,
    };

    setListItemBuildPc(newListItem);

    const buildPcChange = handleListItemBuildPCChange(
      newListItem[selectedConfiguration]
    );
    const price = handlePriceChange(buildPcChange?.totalPrice || 0);

    localStorage.setItem(
      "BuildPc",
      JSON.stringify({
        listItemBuildPc: newListItem || 0,
        pricePCSale: price || { range: 0, sale: 0 },
        isBuildPcSale: buildPcChange?.isBuildPCSale || false,
        totalPrice: buildPcChange?.totalPrice || 0,
        selectedConfiguration: selectedConfiguration || 0,
      })
    );
  };

  const handleDeleteItemBuildPc = (index: number) => {
    const newListItem = [...listItemBuildPc];
    if (!newListItem[selectedConfiguration]) {
      newListItem[selectedConfiguration] = [];
    }
    newListItem[selectedConfiguration][index] = null;

    setListItemBuildPc(newListItem);

    const buildPcChange = handleListItemBuildPCChange(
      newListItem[selectedConfiguration]
    );
    const price = handlePriceChange(buildPcChange?.totalPrice || 0);

    localStorage.setItem(
      "BuildPc",
      JSON.stringify({
        listItemBuildPc: newListItem || 0,
        pricePCSale: price || { range: 0, sale: 0 },
        isBuildPcSale: buildPcChange?.isBuildPCSale || false,
        totalPrice: buildPcChange?.totalPrice || 0,
        selectedConfiguration: selectedConfiguration || 0,
      })
    );
  };

  const handleMinusQuantity = (index: number) => {
    const newListQuantityItem = [...listItemBuildPc];
    if (
      newListQuantityItem[selectedConfiguration][index] &&
      newListQuantityItem[selectedConfiguration][index]!.quantity &&
      newListQuantityItem[selectedConfiguration][index]!.quantity! > 1
    ) {
      newListQuantityItem[selectedConfiguration][index]!.quantity!--;
    }
    setListItemBuildPc(newListQuantityItem);

    const buildPcChange = handleListItemBuildPCChange(
      newListQuantityItem[selectedConfiguration]
    );
    const price = handlePriceChange(buildPcChange?.totalPrice || 0);

    localStorage.setItem(
      "BuildPc",
      JSON.stringify({
        listItemBuildPc: newListQuantityItem || 0,
        pricePCSale: price || { range: 0, sale: 0 },
        isBuildPcSale: buildPcChange?.isBuildPCSale || false,
        totalPrice: buildPcChange?.totalPrice || 0,
        selectedConfiguration: selectedConfiguration || 0,
      })
    );
  };

  const handlePlusQuantity = (index: number) => {
    const newListQuantityItem = [...listItemBuildPc];
    if (
      newListQuantityItem[selectedConfiguration][index] &&
      newListQuantityItem[selectedConfiguration][index]!.quantity
    ) {
      newListQuantityItem[selectedConfiguration][index]!.quantity!++;
    }
    setListItemBuildPc(newListQuantityItem);

    const buildPcChange = handleListItemBuildPCChange(
      newListQuantityItem[selectedConfiguration]
    );
    const price = handlePriceChange(buildPcChange?.totalPrice || 0);

    localStorage.setItem(
      "BuildPc",
      JSON.stringify({
        listItemBuildPc: newListQuantityItem || 0,
        pricePCSale: price || { range: 0, sale: 0 },
        isBuildPcSale: buildPcChange?.isBuildPCSale || false,
        totalPrice: buildPcChange?.totalPrice || 0,
        selectedConfiguration: selectedConfiguration || 0,
      })
    );
  };

  const handleBuyNow = async () => {
    if (listItemBuildPc[selectedConfiguration]) {
      const filteredListItemBuildPc = listItemBuildPc[
        selectedConfiguration
      ].filter((item) => item !== null && item !== undefined);

      const newData = filteredListItemBuildPc.map((item) => {
        return {
          itemCode: item?.skuCode,
          itemName: item?.itemName,
          itemId: item?.id,
          quantity: item?.quantity,
          itemSalePrice: item?.unitPrice,
          itemImage: item?.image,
        };
      });
      setSaleDetailOrder(newData);
      setTotalAmount(totalPrice);

      router.push("/order");
    } else NotificationExtension.Warn("Vui lòng chọn sản phẩm");
  };

  const handleAddCart = async () => {
    const userData = localStorage.getItem("userInfo");
    const id = userData ? JSON.parse(userData).data.customerId : 0;
    if (listItemBuildPc[selectedConfiguration]) {
      const filteredListItemBuildPc = listItemBuildPc[
        selectedConfiguration
      ].filter((item) => item !== null && item !== undefined);

      const newData = {
        customerId: id,
        tblShoppingCartDetailCommand: filteredListItemBuildPc.map((item) => {
          return {
            itemCode: item?.skuCode,
            itemName: item?.itemName,
            itemId: item?.id,
            quantity: item?.quantity,
            itemSalePrice: item?.unitPrice,
            itemImage: item?.image,
            totalAmount: (item?.quantity || 0) * (item?.unitPrice || 0),
          };
        }),
      };
      await createCartProduct(newData);

      fetchDataHeader();
    } else NotificationExtension.Warn("Vui lòng chọn sản phẩm");
  };

  const handleConfirmDeleteAllConfiguration = () => {
    setModalDeleteConfig(false);
    setConfirmDelete(true);
    localStorage.removeItem("BuildPc");
  };

  const handlePriceChange = (total: number) => {
    const price = listBuildPcPriceSale.find((item) => total >= item.range);

    if (price) {
      setPricePCSale(price);
      return price;
    } else {
      setPricePCSale({ range: 0, sale: 0 });
      return { range: 0, sale: 0 };
    }
  };

  const handleListItemBuildPCChange = (
    newListItem: (TblBuildPcListItemBuild | null)[]
  ) => {
    if (newListItem && newListItem.length > 0) {
      const requiredCategoryIds = [31, 30, 32, 36, 35]; // Mảng các id danh mục yêu cầu
      const specialCategoryId = [164, 33]; // Các trường hợp đặc biệt

      const listCategoryId = newListItem?.map((item) => item?.categoryId);

      const isSpecialCategoryIncluded = specialCategoryId.some((categoryId) =>
        listCategoryId?.includes(categoryId)
      );
      const isBuildPCSale =
        requiredCategoryIds.every((categoryId) =>
          listCategoryId?.includes(categoryId)
        ) && isSpecialCategoryIncluded;

      setIsBuildPcSale(isBuildPCSale);

      let total = newListItem?.reduce((acc, item, index) => {
        const unitPrice = item?.unitPrice;
        const quantity = item?.quantity;

        // Kiểm tra xem cả unitPrice và quantity không null và undefined
        if (unitPrice != null && quantity != null) {
          return acc + unitPrice * quantity;
        }
        return acc;
      }, 0);

      setTotalPrice(total);

      return { isBuildPCSale: isBuildPCSale, totalPrice: total };
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = localStorage.getItem("BuildPc");
      setListItemBuildPc(
        storedData ? JSON.parse(storedData)?.listItemBuildPc : []
      );
      setPricePCSale(
        storedData ? JSON.parse(storedData)?.pricePCSale : { range: 0, sale: 0 }
      );

      setIsBuildPcSale(
        storedData ? JSON.parse(storedData)?.isBuildPcSale : false
      );

      setTotalPrice(storedData ? JSON.parse(storedData)?.totalPrice : 0);

      // setSelectedConfiguration(
      //   storedData ? JSON.parse(storedData)?.selectedConfiguration : 0
      // );
    }
  }, [
    typeof window !== "undefined" &&
      window.localStorage &&
      localStorage.getItem("BuildPc"),
  ]);

  return (
    <div>
      {/* <div className={roboto.className}> */}
      <div className={style.topBanner}>
        <Image
          src={topBanner}
          alt="Build PC"
          sizes="100vw"
          // Make the image display full width
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <AppContainer>
        {/* <div className={style.boxSearch}>
                    <Image src={buildPCLogo} alt="Build PC" width={262} height={59} className={style.logoBuildPc}/>
                    <Text c="#1B4876" size="16px" className={style.titleTop}>Xây dựng PC của riêng bạn bắt đầu tại đây</Text>
                    <div className={style.innerBoxSearch}>
                        <Text fw={700} c="#1A436F" size="16px" className={style.titleSearch}>Build cấu hình theo ngân sách của bạn:</Text>
                        <Flex gap="12px">
                            <Input placeholder="Nhập số tiền, ví dụ: 25,512,000" className={style.inputSearch}/>
                            <Button className={style.btnSearch} onClick={() => setModalBuildAI(true)}>
                                <Image src={iconBuildPc} alt="Icon Build PC" width={24} height={18} style={{marginRight: "10px"}}/>
                                BUILD CẤU HÌNH
                            </Button>
                        </Flex>
                    </div>
                </div> */}
        <div className={style.boxConfig}>
          <div className={style.line}></div>
          {/* <Text
            fw={700}
            c="#1A436F"
            size="16px"
            className={style.titleSearch}
            style={{ marginBottom: "25px" }}
          >
            Hoặc build thủ công theo từng linh kiện dưới đây:
          </Text> */}
          <Flex className={style.groupBtn} gap="15px" justify="center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Button
                key={index}
                className={`${style.btnConfig} ${
                  selectedConfiguration === index && style.btnConfigActive
                }`}
                onClick={() => handleSelectConfigGroup(index)}
              >
                Cấu hình {index + 1}
              </Button>
            ))}
          </Flex>
        </div>
        <Flex className={style.mainConfig} gap="30px">
          <div className={style.listItem}>
            {arrayBuildPc?.map((item, index) => {
              return (
                <Flex
                  className={style.itemConfig}
                  align="center"
                  gap="40px"
                  key={index}
                >
                  <Flex className={style.nameBox} align="center">
                    <Image
                      src={item?.icon}
                      alt="Icon Build PC"
                      width={42}
                      height={42}
                      style={{ marginRight: "17px" }}
                    />
                    <Text fw={700} c="#18345E" size="15px">
                      {item?.name}
                    </Text>
                  </Flex>
                  <Flex className={style.itemDetail} align="center">
                    {!listItemBuildPc[selectedConfiguration] ||
                    (listItemBuildPc[selectedConfiguration] &&
                      !listItemBuildPc[selectedConfiguration][index]) ? (
                      <Button
                        leftSection={<IconPlus size={15} />}
                        className={style.btnChoose}
                        variant="filled"
                        color="#D0E3FF"
                        onClick={() => handleClickChooseProduct(item.id, index)}
                      >
                        CHỌN
                      </Button>
                    ) : (
                      <Flex
                        gap="15px"
                        align="center"
                        justify={"space-between"}
                        w={"100%"}
                      >
                        <Flex className={style.infoProduct} align="center">
                          <Image
                            src={
                              (listItemBuildPc[selectedConfiguration] &&
                                listItemBuildPc[selectedConfiguration][index]
                                  ?.image) ||
                              ""
                            }
                            alt="Icon Build PC"
                            width={82}
                            height={82}
                            style={{ marginRight: "7px" }}
                          />
                          <Text fw={700} c="#1F2123" size="15px">
                            {listItemBuildPc[selectedConfiguration] &&
                              listItemBuildPc[selectedConfiguration][index]
                                ?.itemName}
                          </Text>
                        </Flex>

                        <Flex
                          className={style.infoProductMore}
                          align="center"
                          gap={5}
                          justify={"flex-end"}
                        >
                          {/* <Flex className={style.qtyProduct}>
                        <Button
                          className={style.btnIncrement}
                          variant="outline"
                          leftSection={<IconPlus size={15} />}
                        ></Button>
                        <Input className={style.qtyItem} />
                        <Button
                          className={style.btnDecrement}
                          variant="outline"
                          leftSection={<IconMinus size={15} />}
                        ></Button>
                      </Flex> */}

                          <NumberInput
                            className={style.qtyItem}
                            rightSection={
                              <IconMinus
                                size={18}
                                className={style.iconMinus}
                                onClick={() => handleMinusQuantity(index)}
                              />
                            }
                            leftSection={
                              <IconPlus
                                size={18}
                                className={style.iconPlus}
                                onClick={() => handlePlusQuantity(index)}
                              />
                            }
                            value={
                              (listItemBuildPc[selectedConfiguration] &&
                                listItemBuildPc[selectedConfiguration][index]
                                  ?.quantity) ||
                              0
                            }
                            radius={6}
                            allowDecimal={false}
                            min={0}
                            w={80}
                          />

                          <Flex className={style.priceProduct}>
                            <Text fw={700} c="#1F67D2" size="15px">
                              <NumberFormatter
                                value={
                                  (listItemBuildPc[selectedConfiguration] &&
                                    listItemBuildPc[selectedConfiguration][
                                      index
                                    ]?.unitPrice) ||
                                  0
                                }
                                thousandSeparator="."
                                decimalSeparator=","
                                suffix="₫"
                              />
                            </Text>
                          </Flex>

                          <Flex
                            className={style.btnProduct}
                            align="center"
                            gap={8}
                          >
                            <Image
                              src={iconDelete}
                              alt="Icon Delete"
                              width={20}
                              height={20}
                              style={{ marginRight: "10px" }}
                              onClick={() => handleDeleteItemBuildPc(index)}
                            />
                            <Button
                              leftSection={<IconPlus size={15} />}
                              className={style.btnChoose}
                              variant="filled"
                              color="#D0E3FF"
                              onClick={() =>
                                handleClickChooseProduct(item.id, index)
                              }
                            >
                              CHỌN LẠI
                            </Button>
                          </Flex>
                        </Flex>
                      </Flex>
                    )}
                  </Flex>
                </Flex>
              );
            })}
          </div>
          <div className={style.groupBtnProcess}>
            <div className={style.groupBtnProcessInner}>
              <Text
                fw={700}
                c="#1F2123"
                size="18px"
                style={{ marginBottom: "40px" }}
              >
                Cấu hình bạn đang chọn:
              </Text>

              <Flex className={style.price} align="flex-end" mt={10}>
                <Text c="#1F2123" size="14px">
                  Chi phí dự tính:
                </Text>
                <Text fw={700} c="#1F2123" size="14px">
                  <NumberFormatter
                    value={totalPrice || 0}
                    thousandSeparator="."
                    decimalSeparator=","
                    suffix="₫"
                  />
                </Text>
              </Flex>
              {isBuildPcSale && (
                <>
                  <Flex className={style.price} align="flex-end" mt={10}>
                    <Text c="#1F2123" size="14px">
                      Khuyến mãi cho PC trên:
                    </Text>
                    <Text fw={700} c="#1F2123" size="14px">
                      <NumberFormatter
                        value={pricePCSale.range}
                        thousandSeparator="."
                        decimalSeparator=","
                        suffix="₫"
                      />
                    </Text>
                  </Flex>

                  <Flex className={style.price} align="flex-end" mt={10}>
                    <Text c="#1F2123" size="14px">
                      Giảm ngay tiền mặt:
                    </Text>
                    <Text fw={700} c="#1F2123" size="14px">
                      <NumberFormatter
                        value={pricePCSale.sale}
                        thousandSeparator="."
                        decimalSeparator=","
                        suffix="₫"
                      />
                    </Text>
                  </Flex>
                </>
              )}

              <div className={style.sperator}></div>

              <Flex className={style.price} align="flex-end" mb={20}>
                <Text c="#1F2123" size="14px">
                  Tổng thanh toán:
                </Text>
                <Text fw={700} c="#1F2123" size="30px">
                  <NumberFormatter
                    value={
                      isBuildPcSale ? totalPrice - pricePCSale.sale : totalPrice
                    }
                    thousandSeparator="."
                    decimalSeparator=","
                    suffix="₫"
                  />
                </Text>
              </Flex>

              <Button
                className={style.btnProcess}
                variant="filled"
                color="#F43453"
                fullWidth
                leftSection={<IconShoppingBag size={20} />}
                onClick={handleBuyNow}
              >
                MUA NGAY
              </Button>
              <Button
                className={style.btnProcess}
                fullWidth
                leftSection={<IconShoppingBagPlus size={20} />}
                onClick={handleAddCart}
              >
                THÊM VÀO GIỎ
              </Button>

              {/* <Button
                className={style.btnProcess}
                fullWidth
                leftSection={<IconDeviceFloppy size={20} />}
                onClick={() => handleSaveConfiguration()}
              >
                LƯU CẤU HÌNH
              </Button> */}

              <Button
                className={style.btnProcess}
                fullWidth
                leftSection={<IconTrash size={20} />}
                onClick={() => setModalDeleteConfig(true)}
              >
                XÓA TOÀN BỘ CẤU HÌNH
              </Button>

              <ul>
                <li>
                  Trị giá bộ PC để được hưởng Khuyến mại là tổng giá trị các sản
                  phẩm bắt buộc và sản phẩm tùy chọn.
                </li>
                <li>
                  <span className={style.noteBold}>Sản phẩm bắt buộc gồm:</span>{" "}
                  Main, CPU, RAM, SSD/HDD, Case, Nguồn.
                </li>
                <li>
                  <span className={style.noteBold}>Sản phẩm tùy chọn gồm:</span>{" "}
                  VGA, Màn Hình, Bàn Phím, Chuột, Tai Nghe, Bàn Di Chuột.
                </li>
              </ul>
            </div>
          </div>
        </Flex>
        <ActionBuildPc />
      </AppContainer>

      {/* Modal Popup */}

      <ChooseItemModal
        setModalChooseProducts={setModalChooseProducts}
        modalChooseProducts={modalChooseProducts}
        idCategory={selectedCategoryId}
        handleChooseItemBuildPc={handleChooseItemBuildPc}
        selectedItemIdRel={selectedItemIdRel}
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
              color="#1F67D2"
              onClick={() => setModalDeleteConfig(false)}
            >
              Hủy
            </Button>
            <Button
              variant="filled"
              color="#F43453"
              onClick={handleConfirmDeleteAllConfiguration}
            >
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
        opened={modalBuildAI}
        onClose={() => setModalBuildAI(false)}
        withCloseButton={false}
        size="70%"
      >
        <Flex
          direction="column"
          align="flex-start"
          className={style.modalBuildAI}
        >
          <Flex gap="12px" className={style.headerSearch}>
            <Input
              placeholder="Nhập số tiền, ví dụ: 25,512,000"
              className={style.inputSearch}
            />
            <Button
              className={style.btnSearch}
              onClick={() => setModalBuildAI(true)}
            >
              <Image
                src={iconBuildPc}
                alt="Icon Build PC"
                width={24}
                height={18}
                style={{ marginRight: "10px" }}
              />
              BUILD CẤU HÌNH
            </Button>
          </Flex>

          <Flex className={style.wrapProductAdded} direction="column">
            <Flex
              className={style.listProductAdded}
              gap="5px"
              align="center"
              justify="flex-start"
              direction="column"
            >
              <Flex className={style.itemProductAdded} align="center">
                <div className={style.imgProductAdded}>
                  <Image
                    src={productAdded1}
                    alt="Icon Build PC"
                    width={76}
                    height={76}
                  />
                </div>
                <Text
                  fw={700}
                  c="#1F2123"
                  size="15px"
                  className={style.nameProductAdded}
                >
                  Case Thermaltake View 200 TG ARGB Black (ATX/Mid Tower/ 4Fan
                  ARGB)
                </Text>
                <Text
                  fw={700}
                  c="#1F67D2"
                  size="15px"
                  className={style.priceProductAdded}
                >
                  1,349,000Đ
                </Text>
                <Button className={style.btnRefresh} variant="transparent">
                  <Image
                    src={iconRefresh}
                    alt="Icon Refresh"
                    width={20}
                    height={20}
                  />
                </Button>
              </Flex>

              <Flex className={style.itemProductAdded} align="center">
                <div className={style.imgProductAdded}>
                  <Image
                    src={productAdded2}
                    alt="Icon Build PC"
                    width={76}
                    height={76}
                  />
                </div>
                <Text
                  fw={700}
                  c="#1F2123"
                  size="15px"
                  className={style.nameProductAdded}
                >
                  Mainboard Asus ROG MAXIMUS Z790 DARK HERO
                </Text>
                <Text
                  fw={700}
                  c="#1F67D2"
                  size="15px"
                  className={style.priceProductAdded}
                >
                  1,349,000Đ
                </Text>
                <Button className={style.btnRefresh} variant="transparent">
                  <Image
                    src={iconRefresh}
                    alt="Icon Refresh"
                    width={20}
                    height={20}
                  />
                </Button>
              </Flex>

              <Flex className={style.itemProductAdded} align="center">
                <div className={style.imgProductAdded}>
                  <Image
                    src={productAdded3}
                    alt="Icon Build PC"
                    width={76}
                    height={76}
                  />
                </div>
                <Text
                  fw={700}
                  c="#1F2123"
                  size="15px"
                  className={style.nameProductAdded}
                >
                  Ram Desktop Kingston Fury Beast RGB (KF436C18BB2AK2/32) 32GB
                  (2x16GB) DDR4 3600Mhz
                </Text>
                <Text
                  fw={700}
                  c="#1F67D2"
                  size="15px"
                  className={style.priceProductAdded}
                >
                  2,599,000Đ
                </Text>
                <Button className={style.btnRefresh} variant="transparent">
                  <Image
                    src={iconRefresh}
                    alt="Icon Refresh"
                    width={20}
                    height={20}
                  />
                </Button>
              </Flex>

              <Flex className={style.itemProductAdded} align="center">
                <div className={style.imgProductAdded}>
                  <Image
                    src={productAdded4}
                    alt="Icon Build PC"
                    width={76}
                    height={76}
                  />
                </div>
                <Text
                  fw={700}
                  c="#1F2123"
                  size="15px"
                  className={style.nameProductAdded}
                >
                  Ổ cứng SSD WD SN770 Black 500GB M.2 2280 PCIe NVMe 4x4 (Đọc
                  5000MB/s - Ghi 4000MB/s) - (WDS500G3X0E)
                </Text>
                <Text
                  fw={700}
                  c="#1F67D2"
                  size="15px"
                  className={style.priceProductAdded}
                >
                  1,449,000Đ
                </Text>
                <Button className={style.btnRefresh} variant="transparent">
                  <Image
                    src={iconRefresh}
                    alt="Icon Refresh"
                    width={20}
                    height={20}
                  />
                </Button>
              </Flex>

              <Flex className={style.itemProductAdded} align="center">
                <div className={style.imgProductAdded}>
                  <Image
                    src={productAdded5}
                    alt="Icon Build PC"
                    width={76}
                    height={76}
                  />
                </div>
                <Text
                  fw={700}
                  c="#1F2123"
                  size="15px"
                  className={style.nameProductAdded}
                >
                  Card màn hình Asus DUAL RTX 4060-O8G
                </Text>
                <Text
                  fw={700}
                  c="#1F67D2"
                  size="15px"
                  className={style.priceProductAdded}
                >
                  5,699,000Đ
                </Text>
                <Button className={style.btnRefresh} variant="transparent">
                  <Image
                    src={iconRefresh}
                    alt="Icon Refresh"
                    width={20}
                    height={20}
                  />
                </Button>
              </Flex>

              <Flex className={style.itemProductAdded} align="center">
                <div className={style.imgProductAdded}>
                  <Image
                    src={productAdded1}
                    alt="Icon Build PC"
                    width={76}
                    height={76}
                  />
                </div>
                <Text
                  fw={700}
                  c="#1F2123"
                  size="15px"
                  className={style.nameProductAdded}
                >
                  Case Thermaltake View 200 TG ARGB Black (ATX/Mid Tower/ 4Fan
                  ARGB)
                </Text>
                <Text
                  fw={700}
                  c="#1F67D2"
                  size="15px"
                  className={style.priceProductAdded}
                >
                  1,349,000Đ
                </Text>
                <Button className={style.btnRefresh} variant="transparent">
                  <Image
                    src={iconRefresh}
                    alt="Icon Refresh"
                    width={20}
                    height={20}
                  />
                </Button>
              </Flex>

              <Flex className={style.itemProductAdded} align="center">
                <div className={style.imgProductAdded}>
                  <Image
                    src={productAdded2}
                    alt="Icon Build PC"
                    width={76}
                    height={76}
                  />
                </div>
                <Text
                  fw={700}
                  c="#1F2123"
                  size="15px"
                  className={style.nameProductAdded}
                >
                  Mainboard Asus ROG MAXIMUS Z790 DARK HERO
                </Text>
                <Text
                  fw={700}
                  c="#1F67D2"
                  size="15px"
                  className={style.priceProductAdded}
                >
                  1,349,000Đ
                </Text>
                <Button className={style.btnRefresh} variant="transparent">
                  <Image
                    src={iconRefresh}
                    alt="Icon Refresh"
                    width={20}
                    height={20}
                  />
                </Button>
              </Flex>

              <Flex className={style.itemProductAdded} align="center">
                <div className={style.imgProductAdded}>
                  <Image
                    src={productAdded3}
                    alt="Icon Build PC"
                    width={76}
                    height={76}
                  />
                </div>
                <Text
                  fw={700}
                  c="#1F2123"
                  size="15px"
                  className={style.nameProductAdded}
                >
                  Ram Desktop Kingston Fury Beast RGB (KF436C18BB2AK2/32) 32GB
                  (2x16GB) DDR4 3600Mhz
                </Text>
                <Text
                  fw={700}
                  c="#1F67D2"
                  size="15px"
                  className={style.priceProductAdded}
                >
                  2,599,000Đ
                </Text>
                <Button className={style.btnRefresh} variant="transparent">
                  <Image
                    src={iconRefresh}
                    alt="Icon Refresh"
                    width={20}
                    height={20}
                  />
                </Button>
              </Flex>
            </Flex>

            <Flex
              className={style.groupBtnProductAdded}
              gap="20px"
              justify="center"
              align="center"
            >
              <Button className={style.btnRefreshBottom} variant="transparent">
                <Image
                  src={iconRefresh}
                  alt="Icon Refresh"
                  width={20}
                  height={20}
                />
              </Button>
              <div className={style.totalCount}>
                <Text fw={400} c="#1F2123" size="14px">
                  8 sản phẩm:
                </Text>
                <Text fw={700} c="#1F67D2" size="20px">
                  25,512,000Đ
                </Text>
              </div>
              <Button
                variant="filled"
                color="#1F67D2"
                leftSection={<IconEdit size={22} />}
                className={style.btn}
              >
                TÙY CHỈNH
              </Button>
              <Button
                variant="filled"
                color="#1F67D2"
                leftSection={<IconShoppingBagPlus size={22} />}
                className={style.btn}
              >
                THÊM VÀO GIỎ
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Modal>

      {/* End: Modal Popup */}
    </div>
  );
};
export default BuildPC;
