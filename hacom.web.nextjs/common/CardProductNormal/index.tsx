"use client";
import { createCartProduct } from "@/api/apiCart";
import iconAddToCart from "@/assets/iconAddToCart.svg";
import iconFs from "@/assets/iconFlashSale.png";
import iconInstallment from "@/assets/iconInstallment.png";
import HoverBox from "@/common/HoverBox/Normal";
import { CardProductPropsNormalType } from "@/model/ProductCard";
import { useCardItems } from "@/useContext/CardContext";
import { Box, Flex, NumberFormatter, Text, Tooltip } from "@mantine/core";
import {
  IconCheck,
  IconCircleCheckFilled,
  IconPhone,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import StarRating from "../StarRating";
import productCardStyle from "./CardProduct.module.scss";
import { getDataListProductRelation } from "@/api/apiProduct";
import { modals } from "@mantine/modals";
import AddCartPopup from "../AddCartPopup";

const CardProductNormal: React.FC<CardProductPropsNormalType> = ({
  data,
  type,
  isFlashSale,
}) => {
  const [isNew, setIsNew] = useState(false);
  const { fetchDataHeader } = useCardItems();
  const router = useRouter();
  const unitSellingPrice = data?.unitSellingPrice ?? 0;
  const percent = (1 - unitSellingPrice / (data?.marketPrice ?? 1)) * 100;

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

  useEffect(() => {
    // Kiểm tra xem data.creationDate có tồn tại không
    if (data && data.creationDate) {
      // Tính thời gian hiện tại
      const currentDate = new Date();
      // Tính thời gian khi data được tạo
      const creationDate = new Date(data.creationDate);
      // Tính số mili giây giữa hai thời điểm
      const timeDifference = currentDate.getTime() - creationDate.getTime();
      // Tính số ngày từ số mili giây
      const daysDifference = timeDifference / (1000 * 3600 * 24);
      // Kiểm tra nếu số ngày lớn hơn 7 thì setIsNew(false), ngược lại setIsNew(true)
      if (daysDifference > 7) {
        setIsNew(false);
      } else {
        setIsNew(true);
      }
    } else {
      setIsNew(false); // Nếu creationDate không tồn tại, đặt isNew thành false
    }
  }, [data]);

  return (
    <div>
      <div
        className={
          type !== undefined ? productCardStyle[type] : productCardStyle.main
        }
      >
        <div className={productCardStyle.propertyCard}>
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

                {isNew && (
                  <div className={productCardStyle.new}>
                    <span className={productCardStyle.newTitle}>NEW</span>
                  </div>
                )}

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
                {data.warrantyDescrition !== null && (
                  <div className={productCardStyle.warrantybox}>
                    <div className={productCardStyle.warrantyContent}>
                      <Image src={iconWarranty} alt="iconWarranty" />
                      <span className={productCardStyle.warrantyTitle}>BH</span>
                      <span className={productCardStyle.warrantyTitle}>
                        {data.warrantyDescrition}
                      </span>
                    </div>
                  </div>
                )}
              </div> */}
                {/* {data?.unitSellingPrice && data?.unitSellingPrice > 3000000 && (
                  <div className={productCardStyle.payShip}>
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
                <p className={productCardStyle.nameStyle}>{data?.itemName}</p>
              </Link>
            </div>
            <div className={productCardStyle.prices}>
              <div>
                {data?.marketPrice ? (
                  <div className={productCardStyle.saleDiscount}>
                    <Text
                      className={productCardStyle.oldPrice}
                      td="line-through"
                    >
                      <NumberFormatter
                        thousandSeparator="."
                        decimalSeparator=","
                        value={data?.marketPrice}
                        suffix="₫"
                      />
                    </Text>
                    {percent > 0 && (
                      <span className={productCardStyle.discountPrice}>
                        (Tiết kiệm: {percent.toFixed(0)}%)
                      </span>
                    )}
                  </div>
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
                {data?.storeAvailables?.length > 0 ? (
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

export default CardProductNormal;
