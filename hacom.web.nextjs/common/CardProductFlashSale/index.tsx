"use client";
import { createCartProduct } from "@/api/apiCart";
import iconFlame from "@/assets/Flame.png";
import iconAddToCart from "@/assets/iconAddToCart.svg";
import iconFs from "@/assets/iconFlashSale.png";
import iconInstallment from "@/assets/iconInstallment.png";
import { CardProductFlashSalePropsType } from "@/model/ProductCard";
import { useCardItems } from "@/useContext/CardContext";
import { Box, Flex, NumberFormatter, Text } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import StarRating from "../StarRating";
import Countdown from "@/common/Countdown";
import productCardStyle from "./CardProduct.module.scss";
import { useRouter } from "next/navigation";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import AddCartPopup from "../AddCartPopup";
import { modals } from "@mantine/modals";
import { TblItem } from "@/model/ProductList";
import { getDataListProductRelation } from "@/api/apiProduct";

const CardProductFlashSale: React.FC<CardProductFlashSalePropsType> = ({
  data,
  type,
  isFlashSale,
}) => {
  const [formattedDateTime, setFormattedDateTime] = useState<{
    date: string;
    time: string;
  }>();
  const { fetchDataHeader } = useCardItems();
  const router = useRouter();
  const nowTime = new Date();
  const [secondsCount, setSecondsCount] = useState(0);
  const toDate = data?.toDate;
  const fromDate = data?.fromDate;
  const [isFlashSaleTime, setIsFlashSaleTime] = useState(false);
  const unitSellingPrice = data?.unitSellingPrice ?? 1;
  const percent =
    (1 - (data.dealUnitSellingPrice ?? 0) / unitSellingPrice) * 100;

  function formatNumber(number: number) {
    const numberString = number.toString();
    const length = numberString.length;

    if (length <= 6) {
      return (
        "?" + numberString.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,").slice(1)
      );
    }

    const modifiedNumber = numberString.replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      "$1,"
    );
    const formattedNumber = modifiedNumber.split("");
    formattedNumber[length - 5] = "?";

    return formattedNumber.join("");
  }

  function isEventStarted(startTime: string | null): boolean {
    if (startTime === null) {
      return false;
    }
    const currentTime = new Date();
    const startDate = new Date(startTime);
    return currentTime >= startDate;
  }
  function formatDateTime(dateTimeString: string) {
    const dateObject = new Date(dateTimeString);

    // Lấy ngày và tháng
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");

    // Lấy giờ và phút
    const hours = dateObject.getHours().toString().padStart(2, "0");
    const minutes = dateObject.getMinutes().toString().padStart(2, "0");

    // Trả về chuỗi định dạng
    return {
      date: `${day}/${month}`,
      time: `${hours}:${minutes}`,
    };
  }

  const handleAddCart = async () => {
    const userData = localStorage.getItem("userInfo");
    const id = userData ? JSON.parse(userData).data.customerId : 0;

    let newData: any;
    isFlashSaleTime
      ? (newData = {
          customerId: id,
          tblShoppingCartDetailCommand: [
            {
              itemName: data.dealTitle,
              itemId: data.productId,
              itemCode: data.productCode,
              quantity: 1,
              itemPrice: data.unitSellingPrice,
              itemSalePrice: data.dealUnitSellingPrice,
              itemImage: data.productImgUrl,
              totalAmount: data?.dealUnitSellingPrice,
              itemUrl: data?.url,
            },
          ],
        })
      : (newData = {
          customerId: id,
          tblShoppingCartDetailCommand: [
            {
              itemName: data.dealTitle,
              itemId: data.productId,
              itemCode: data.productCode,
              quantity: 1,
              itemPrice: data.marketPrice,
              itemSalePrice: data.unitSellingPrice,
              itemImage: data.productImgUrl,
              totalAmount: data?.unitSellingPrice,
              itemUrl: data?.url,
            },
          ],
        });

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
    setFormattedDateTime(formatDateTime(data.toDate || ""));
  }, [data]);

  useEffect(() => {
    if (data) {
      if (fromDate && toDate) {
        if (new Date(fromDate) > nowTime) {
          const timeDifference =
            new Date(fromDate).getTime() - nowTime.getTime();
          setSecondsCount(Math.floor(timeDifference / 1000));
          setIsFlashSaleTime(false);
        } else if (new Date(fromDate) < nowTime && nowTime < new Date(toDate)) {
          const timeDifference = new Date(toDate).getTime() - nowTime.getTime();
          setSecondsCount(Math.floor(timeDifference / 1000));
          setIsFlashSaleTime(true);
        }
      }
    }
  }, [data]);
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
              query: {
                // id: data.productId,
                saleid: data.id,
              },
            }}
          >
            <div>
              {data?.productImgUrl && (
                <img
                  className={productCardStyle.productImage}
                  src={data?.productImgUrl || ""}
                  width={212.16}
                  height={212.16}
                  alt={data?.dealTitle ?? "Product"}
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
                      <p className={productCardStyle.flashSaleHour}>
                        {formattedDateTime?.time}
                      </p>
                      <p className={productCardStyle.flashSaleDate}>
                        {formattedDateTime?.date}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className={productCardStyle.discount}>
                {isFlashSaleTime && percent > 0 && (
                  <div className={productCardStyle.discountbox}>
                    <span className={productCardStyle.discountPercentage}>
                      -{percent.toFixed(0)}%
                    </span>
                  </div>
                )}
              </div>

              {/* <div className={productCardStyle.colorCircle}>
                {data?.color?.map((color, index) => {
                  return (
                    <div
                      className={productCardStyle.colorCircleItem}
                      style={{ backgroundColor: data?.color ?? "" }}
                      key={index}
                    ></div>
                  );
                })}
              </div> */}

              <div className={productCardStyle.warranty}>
                {/* {data.warrantyDescrition !== null && (
                  <div className={productCardStyle.warrantybox}>
                    <div className={productCardStyle.warrantyContent}>
                      <Image src={iconWarranty} alt="iconWarranty" />
                      <span className={productCardStyle.warrantyTitle}>BH</span>
                      <span className={productCardStyle.warrantyTitle}>
                        {data.warrantyDescrition}
                      </span>
                    </div>
                  </div>
                )} */}
              </div>
              {data?.unitSellingPrice && data?.unitSellingPrice > 3000000 && (
                <div className={productCardStyle.payShip}>
                  {/* <div className={productCardStyle.delivery}>
                  <Image src={iconDelivery} alt="iconDelivery" />
                  <span className={productCardStyle.payShipTitle}>Hoả tốc</span>
                </div> */}
                  <div className={productCardStyle.installment}>
                    <Image src={iconInstallment} alt="iconInstallment" />
                    <span className={productCardStyle.payShipTitle}>
                      Trả góp
                    </span>
                  </div>
                </div>
              )}
            </div>
          </Link>
        </div>

        <div className={productCardStyle.information}>
          <div>
            <StarRating
              averageStar={data?.rate || 5}
              starNumber={data?.totalRating || 5}
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
                  query: {
                    // id: data.productId,
                    saleid: data.id,
                  },
                }}
              >
                <p className={productCardStyle.nameStyle}>{data?.dealTitle}</p>
              </Link>
            </div>
            <div className={productCardStyle.prices}>
              <div>
                {data?.unitSellingPrice ? (
                  <div className={productCardStyle.saleDiscount}>
                    <Text
                      className={productCardStyle.oldPrice}
                      td="line-through"
                    >
                      <NumberFormatter
                        thousandSeparator="."
                        decimalSeparator=","
                        value={data?.unitSellingPrice}
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
                  {isFlashSaleTime ? (
                    <NumberFormatter
                      thousandSeparator="."
                      decimalSeparator=","
                      value={data?.dealUnitSellingPrice ?? ""}
                      suffix="₫"
                    />
                  ) : (
                    <p>{formatNumber(data?.dealUnitSellingPrice || 0)}Đ</p>
                  )}
                </Text>
              </div>
              <div
                className={productCardStyle.actionContent}
                onClick={handleAddCart}
              >
                <Image src={iconAddToCart} alt="iconAddToCart" color="white" />
              </div>
            </div>
          </div>
        </div>

        <div className={productCardStyle.saleQuantity}>
          <Image src={iconFlame} alt="" />
          <span>
            Số sản phẩm còn lại:{" "}
            {isFlashSaleTime ? data.dealQuantity || 0 : <span>????</span>}
          </span>
        </div>
        {isEventStarted(data?.fromDate) ? (
          <div className={productCardStyle.time}>
            <Countdown totalTime={secondsCount.toString()} />
          </div>
        ) : (
          <div className={productCardStyle.time}>
            <Countdown isArrived totalTime={secondsCount.toString()} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProductFlashSale;
