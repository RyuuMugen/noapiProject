"use client";
import { createCartProduct } from "@/api/apiCart";
import iconAddToCart from "@/assets/iconAddToCart.svg";
import iconFs from "@/assets/iconFlashSale.png";
import iconInstallment from "@/assets/iconInstallment.png";
import { CardProductPropsTypeSearch } from "@/model/ProductCard";
import { useCardItems } from "@/useContext/CardContext";
import { Box, Flex, NumberFormatter, Text, Tooltip } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import StarRating from "../StarRating";
import HoverBox from "@/common/HoverBox/Search";
import { useMouse } from "@mantine/hooks";
import productCardStyle from "./CardProduct.module.scss";
import {
  IconCheck,
  IconCircleCheckFilled,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import { getDataListProductRelation } from "@/api/apiProduct";
import { modals } from "@mantine/modals";
import AddCartPopup from "../AddCartPopup";

const CardProductSearch: React.FC<CardProductPropsTypeSearch> = ({
  data,
  isFlashSale,
}) => {
  const router = useRouter();
  const { fetchDataHeader } = useCardItems();
  const [showBox, setShowBox] = useState(false);
  const percent = (1 - data?.unitSellingPrice / data?.marketPrice) * 100;

  const handleAddCart = async () => {
    const userData = localStorage.getItem("userInfo");
    const id = userData ? JSON.parse(userData).data.customerId : 0;
    const newData = {
      customerId: id,
      tblShoppingCartDetailCommand: [
        {
          itemCode: data.itemCode,
          itemName: data.itemName,
          itemId: data.id,
          quantity: 1,
          itemPrice: data.marketPrice,
          itemSalePrice: data.unitSellingPrice,
          itemImage: data.primaryImage,
          totalAmount: data?.unitSellingPrice,
          itemUrl: data?.url,
        },
      ],
    };

    const [dataCart, dataProductRelation] = await Promise.all([
      createCartProduct(newData),
      getDataListProductRelation(`?Id=${data.id}&Skip=0&Take=3&Active=true`),
    ]);

    modals.openConfirmModal({
      title: (
        <Flex
          justify={"center"}
          align={"center"}
          gap={8}
          style={{
            fontSize: 16,
            color: "blue",
            fontWeight: "bold",
          }}
        >
          <IconCircleCheckFilled /> Đã thêm sản phẩm vào giỏ hàng!
        </Flex>
      ),
      size: 1000,
      centered: true,
      children: (
        <AddCartPopup dataProductRelation={dataProductRelation?.data || []} />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
    fetchDataHeader();
  };
  return (
    <div>
      <div className={productCardStyle.main}>
        <div
          className={productCardStyle.propertyCard}
          // onClick={handleGotoProductDetail}
        >
          <Link
            href={{
              pathname: `/product-detail/${data.url}`,
              // query: { id: data.id },
            }}
          >
            <Tooltip
              transitionProps={{ transition: "pop", duration: 400 }}
              position="right-start"
              multiline
              color="#fff"
              style={{ wordBreak: "break-all", fontSize: 14 }}
              label={<HoverBox data={data} />}
            >
              <div>
                {data?.primaryImage && (
                  <img
                    className={productCardStyle.productImage}
                    src={data?.primaryImage || ""}
                    width={212.16}
                    height={212.16}
                    alt={data?.itemName ?? "Product"}
                  />
                )}

                {/* {property.new && ( */}
                <div className={productCardStyle.new}>
                  <span className={productCardStyle.newTitle}>NEW</span>
                </div>
                {/* )} */}

                {isFlashSale && (
                  <div className={productCardStyle.flashSale}>
                    <div className={productCardStyle.flashSaleContent}>
                      <Image
                        src={iconFs}
                        alt="IconFS"
                        className={productCardStyle.flashSaleIcon}
                      />
                      <div className={productCardStyle.flashSaleTitle}>
                        <p className={productCardStyle.flashSaleHour}>16:00</p>
                        <p className={productCardStyle.flashSaleDate}>24/12</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className={productCardStyle.discount}>
                  {percent > 0 && (
                    <div className={productCardStyle.discountbox}>
                      <span className={productCardStyle.discountPercentage}>
                        -{percent.toFixed(0)}%
                      </span>
                    </div>
                  )}
                </div>

                <div className={productCardStyle.colorCircle}>
                  {/* {data?.color?.map((color, index) => { */}
                  {/* return ( */}
                  <div
                  // className={productCardStyle.colorCircleItem}
                  // style={{ backgroundColor: data?.color ?? "" }}
                  // key={index}
                  ></div>
                  {/* ); */}
                  {/* })} */}
                </div>

                {/* <div className={productCardStyle.warranty}>
              <div className={productCardStyle.warrantybox}>
                <div className={productCardStyle.warrantyContent}>
                  <Image src={iconWarranty} alt="iconWarranty" />
                  <span className={productCardStyle.warrantyTitle}>BH</span>
                  <span className={productCardStyle.warrantyTitle}>
                    trọn đời
                  </span>
                </div>
              </div>
            </div> */}

                {/* {data?.unitSellingPrice && data?.unitSellingPrice > 3000000 && (
                  <div className={productCardStyle.payShip}>
                    <div className={productCardStyle.delivery}>
                  <Image src={iconDelivery} alt="iconDelivery" />
                  <span className={productCardStyle.payShipTitle}>Hoả tốc</span>
                </div>
                    <div className={productCardStyle.installment}>
                      <Image src={iconInstallment} alt="iconInstallment" />
                      <span className={productCardStyle.payShipTitle}>
                        Trả góp
                      </span>
                    </div>
                  </div>
                )} */}
              </div>
            </Tooltip>
          </Link>
        </div>

        <div className={productCardStyle.information}>
          <div>
            <StarRating
              averageStar={data?.rate || 5}
              starNumber={data?.rateCount || 5}
              size={"xs"}
              readonly
            />
          </div>

          <div className={productCardStyle.detail}>
            <div
              className={productCardStyle.name}
              // onClick={handleGotoProductDetail}
            >
              <Link
                href={{
                  pathname: `/product-detail/${data.url}`,
                  // query: { id: data.id },
                }}
              >
                <p>{data?.itemName}</p>
              </Link>
            </div>
            <div className={productCardStyle.prices}>
              <div>
                {data?.marketPrice ? (
                  <Text className={productCardStyle.oldPrice} td="line-through">
                    <NumberFormatter
                      thousandSeparator="."
                      decimalSeparator=","
                      value={data?.marketPrice}
                      suffix="₫"
                    />
                  </Text>
                ) : (
                  <Box h={26}></Box>
                )}

                <Text className={productCardStyle.newPrice}>
                  <NumberFormatter
                    thousandSeparator="."
                    decimalSeparator=","
                    value={data?.unitSellingPrice ?? ""}
                    suffix="₫"
                  />
                </Text>
                {data?.storeAvailables?.length ? (
                  <Text
                    className={productCardStyle.inventoryText}
                    c={"#2cc067"}
                  >
                    <IconCheck size={15} />
                    Sẵn hàng
                  </Text>
                ) : (
                  <Text
                    className={productCardStyle.inventoryText}
                    c={"#0074da"}
                  >
                    <IconPhone size={16} />
                    Đặt hàng
                  </Text>
                )}
              </div>
              {data?.storeAvailables?.length ? (
                <div
                  className={productCardStyle.actionContent}
                  onClick={handleAddCart}
                >
                  <Image
                    src={iconAddToCart}
                    alt="iconAddToCart"
                    color="white"
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductSearch;
