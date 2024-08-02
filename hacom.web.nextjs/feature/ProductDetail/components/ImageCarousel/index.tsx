import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  NumberFormatter,
  Text,
  Title,
} from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import style from "./leftDetail.module.scss";
// import Image from "next/image";
import { createCartProduct } from "@/api/apiCart";
import { TblItem, comboSetItem } from "@/model/ProductList";
import { useCardItems } from "@/useContext/CardContext";
import { modals } from "@mantine/modals";
import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/navigation";
import FormChooseOtherItem from "./FormChooseOtherItem";
import { NextButton, PrevButton, usePrevNextButtons } from "./emblaButton";
import "./embla.scss";

const ImageCarousel = ({ data }: LeftDetailProps) => {
  const { fetchDataHeader } = useCardItems();
  const router = useRouter();
  const [idImageActive, setIdImageActive] = useState(0);
  const [listItemComboSetActive, setListItemComboSetActive] = useState<
    number[]
  >([]);
  const [selectedOtherItem, setSelectedOtherItem] = useState<boolean[]>([]);
  const [dataListOtherItemBuy, setDataListOtherItemBuy] = useState<
    (comboSetItem | null)[]
  >([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "y",
    dragFree: true,
    slidesToScroll: "auto",
    containScroll: "trimSnaps",
  });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const handleGotoProductDetail = (id: number) => {
    router.push(`/product-detail/id=${id}`);
  };

  const handleClickViewMore = (
    listItemGroup: comboSetItem[] | [],
    indexGroup: number
  ) => {
    modals.openConfirmModal({
      modalId: "FormChooseOtherItem",
      title: (
        <>
          <Title order={5}>Chọn mua sản phẩm khác</Title>
        </>
      ),
      centered: true,
      children: (
        <FormChooseOtherItem
          data={listItemGroup || []}
          indexGroup={indexGroup}
          handleChangeItemComboSetActive={handleChangeItemComboSetActive}
        />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
      size: "950px",
    });
  };

  const handleClickImageMini = (id: number) => {
    setIdImageActive(id);
  };

  const handleSlideChange = (index: number) => {
    setIdImageActive(index);
  };

  const handleChangeItemComboSetActive = (
    indexGroup: number,
    index: number
  ) => {
    setListItemComboSetActive((prevData) => {
      const updatedData = [...prevData];
      updatedData[indexGroup] = index;
      return updatedData;
    });
  };

  const handleCheckBoxComboSetItem = (indexGroup: number) => {
    const updatedList = [...selectedOtherItem];
    updatedList[indexGroup] = !updatedList[indexGroup];
    setSelectedOtherItem(updatedList);
  };

  const handleBuyOtherItem = async () => {
    const newData = {
      tblShoppingCartDetailCommand: [
        ...dataListOtherItemBuy.map((item) => ({
          itemCode: item?.itemCode,
          itemName: item?.itemName,
          itemId: item?.id,
          quantity: 1,
          itemPrice: item?.marketPrice,
          itemSalePrice: item?.unitSellingPrice,
          itemImage: item?.image,
          totalAmount: item?.unitSellingPrice,
        })),
        {
          itemCode: data?.itemCode,
          itemName: data?.itemName,
          itemId: data?.id,
          quantity: 1,
          itemPrice: data?.marketPrice,
          itemSalePrice: data?.unitSellingPrice,
          itemImage: data?.primaryImage,
          totalAmount: data?.unitSellingPrice,
          itemUrl: data?.url,
        },
      ],
    };

    await createCartProduct(newData);

    fetchDataHeader();
  };

  useEffect(() => {
    setListItemComboSetActive((data?.comboSetGroups || []).map(() => 0));
  }, [data]);

  useEffect(() => {
    setDataListOtherItemBuy(
      selectedOtherItem
        .map((item, indexGroup) => {
          if (item && data?.comboSetGroups) {
            const group = data?.comboSetGroups[indexGroup];
            const selectedIndex = listItemComboSetActive[indexGroup];
            return group?.comboSetItems?.[selectedIndex];
          }
          return null;
        })
        .filter((item) => item !== null)
    );
  }, [selectedOtherItem, listItemComboSetActive]);

  return (
    <Box mt={10}>
      <Flex className={style.mainLayout} gap={100}>
        <div className="embla">
          <div className="embla__buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
          </div>
          <div
            className="embla__viewport"
            ref={emblaRef}
            style={{ height: 700 }}
          >
            <div className="embla__container">
              {data?.tblItemImageModels?.map((item, index) => (
                <div className="embla__slide" key={index}>
                  <Box
                    onClick={() => handleClickImageMini(index)}
                    className={`${style.imageMini} ${
                      index == idImageActive && style.imageMiniActive
                    }`}
                  >
                    <Image
                      alt="main image"
                      src={item?.image || ""}
                      width={110}
                      height={110}
                      style={{ padding: "auto" }}
                    ></Image>
                  </Box>
                </div>
              ))}
            </div>
          </div>
          <div className="embla__buttons" style={{ marginTop: 20 }}>
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>

        <Carousel
          onSlideChange={handleSlideChange}
          initialSlide={idImageActive}
          previousControlIcon={<IconChevronLeft size={30} />}
          nextControlIcon={<IconChevronRight size={30} />}
          classNames={style}
          loop
          w={700}
        >
          {data?.tblItemImageModels?.map((item, index) => (
            <Carousel.Slide key={index}>
              <Image
                alt="main image"
                src={item?.image || ""}
                width={700}
                height={700}
              />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Flex>

      {data?.comboSetGroups && data?.comboSetGroups.length > 0 && (
        <Box mt={50}>
          <Text className={style.bundledProductsHeader}>
            Sản phẩm thường được mua kèm
          </Text>
          <Flex gap={60} className={style.overflow}>
            {data?.comboSetGroups?.map((group, indexGroup) => (
              <React.Fragment key={indexGroup}>
                {group?.comboSetItems &&
                  group?.comboSetItems.length > 0 &&
                  group?.comboSetItems?.map(
                    (item, index) =>
                      listItemComboSetActive[indexGroup] === index && (
                        <Box className={style.bundledProductsItem} key={index}>
                          <Flex
                            justify={"center"}
                            align={"center"}
                            onClick={() => handleGotoProductDetail(item?.id)}
                          >
                            <Image
                              src={item.image || ""}
                              alt="image"
                              width={197}
                              height={197}
                            />
                          </Flex>

                          <Flex justify={"space-between"} gap={10}>
                            <Text
                              lineClamp={2}
                              className={style.bundledProductsItemName}
                              onClick={() => handleGotoProductDetail(item?.id)}
                            >
                              {item.itemName || ""}
                            </Text>
                            <Checkbox
                              mt={5}
                              checked={
                                selectedOtherItem[indexGroup] ? true : false
                              }
                              onChange={(event) =>
                                handleCheckBoxComboSetItem(indexGroup)
                              }
                            />
                          </Flex>
                          <Box
                            onClick={() => handleGotoProductDetail(item?.id)}
                          >
                            {item?.marketPrice ? (
                              <Text
                                className={style.oldPrice}
                                td="line-through"
                              >
                                <NumberFormatter
                                  value={item?.marketPrice}
                                  thousandSeparator="."
                                  decimalSeparator=","
                                  suffix="₫"
                                />
                              </Text>
                            ) : (
                              <Box h={34}></Box>
                            )}

                            <Text className={style.newPrice}>
                              <NumberFormatter
                                value={item?.unitSellingPrice ?? ""}
                                thousandSeparator="."
                                decimalSeparator=","
                                suffix="₫"
                              />
                            </Text>
                          </Box>

                          <Button
                            className={style.bundledProductsItemOther}
                            onClick={() =>
                              handleClickViewMore(
                                group.comboSetItems,
                                indexGroup
                              )
                            }
                          >
                            Chọn sản phẩm khác
                          </Button>
                        </Box>
                      )
                  )}
              </React.Fragment>
            ))}
          </Flex>
          <Box className={style.totalOtherItem}>
            <Text>Tổng tiền:</Text>
            <Text>
              <NumberFormatter
                value={dataListOtherItemBuy.reduce(
                  (count, item) =>
                    item?.unitSellingPrice
                      ? (count += item?.unitSellingPrice)
                      : count,
                  data.unitSellingPrice || 0
                )}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </Text>
            <Button className={style.buyButton} onClick={handleBuyOtherItem}>
              Mua thêm{" "}
              {selectedOtherItem.reduce(
                (count, item) => (item ? count + 1 : count),
                0
              )}{" "}
              sản phẩm
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ImageCarousel;

type LeftDetailProps = {
  data: TblItem | null;
};
