"use client";
import { TblListWeb } from "@/model/ProductList";
import iconFs from "@/assets/iconFlashSale.png";
import { NumberFormatter, Text } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/navigation";
import NullImage from "@/assets/NullImage.png";
import React from "react";
import productCardStyle from "./CardProduct.module.scss";
import { TradeInItem } from "@/model/TblTradeIn";
interface CardProp {
  data: TradeInItem;
  nextStep: () => void;
  totalPrice: number;
  newPrice: number;
  setNewPrice: React.Dispatch<React.SetStateAction<number>>;
  setItemUpgradeId: React.Dispatch<React.SetStateAction<number>>;
  setItemUpgradeCode: React.Dispatch<React.SetStateAction<string>>;
}
const CardProduct: React.FC<CardProp> = ({
  data,
  nextStep,
  totalPrice,
  newPrice,
  setNewPrice,
  setItemUpgradeId,
  setItemUpgradeCode,
}) => {
  const router = useRouter();
  const handleGotoProductDetail = () => {
    setNewPrice(data?.unitSellingPrice ?? 0);
    setItemUpgradeId(data?.id);
    setItemUpgradeCode(data?.itemCode ?? "");
    nextStep();
  };

  const salePrice = (data?.unitSellingPrice ?? 0) - totalPrice;

  return (
    <div>
      <div className={productCardStyle.main}>
        <div
          className={productCardStyle.propertyCard}
          onClick={handleGotoProductDetail}
        >
          <div>
            {data?.primaryImage ? (
              <img
                className={productCardStyle.productImage}
                src={data?.primaryImage}
                alt={data?.itemName ?? "Product"}
              />
            ) : (
              <Image
                className={productCardStyle.productImage}
                src={NullImage}
                alt={data?.itemName ?? "Product"}
              />
            )}
          </div>
        </div>

        <div className={productCardStyle.information}>
          <div className={productCardStyle.detail}>
            <div
              className={productCardStyle.name}
              onClick={handleGotoProductDetail}
            >
              <p>{data?.itemName}</p>
            </div>
            <div className={productCardStyle.prices}>
              <Text className={productCardStyle.newPrice}>
                Giá mới:
                <NumberFormatter
                  value={data?.unitSellingPrice ?? ""}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
              <Text className={productCardStyle.newPrice}>
                Máy cũ của bạn:
                <NumberFormatter
                  value={totalPrice}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
              <Text className={productCardStyle.newPrice}>
                Hacom trợ giá:
                <NumberFormatter
                  value={(totalPrice / 100) * 10}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
              <Text className={productCardStyle.newPrice}>
                {salePrice < 0 ? "Còn dư:" : "Giá mới:"}
                <NumberFormatter
                  value={salePrice < 0 ? Math.abs(salePrice) : salePrice}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
