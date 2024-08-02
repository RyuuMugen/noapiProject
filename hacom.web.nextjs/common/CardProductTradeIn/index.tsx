"use client";
import Modal from "@/common/ModalOLdNew";
import { CardProductTradeIn } from "@/model/TblTradeIn";
import { useCardItems } from "@/useContext/CardContext";
import { NumberFormatter, Text } from "@mantine/core";
import { useRouter } from "next/navigation";
import Image from "next/image";
import NullImage from "@/assets/NullImage.png";
import React, { useState } from "react";
import productCardStyle from "./CardProduct.module.scss";

const CardProductTradeIn: React.FC<CardProductTradeIn> = ({
  data,
  tblTradeInHeaderModels,
}) => {
  const router = useRouter();
  const { fetchDataHeader } = useCardItems();
  const [currentStep, setCurrentStep] = useState(1);
  const [isModalOpen, setModalOpen] = useState(false);
  const tradePercen = tblTradeInHeaderModels[0]
    ? tblTradeInHeaderModels[0].percentSupport
    : 0;
  const price = data.unitSellingPrice
    ? data.unitSellingPrice -
      (data.unitSellingPrice / 100) * (100 - tradePercen)
    : 0;

  const handleOpenModelDetail = () => {
    setModalOpen(true);
    setCurrentStep(1);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };
  const nextStep2 = () => {
    setCurrentStep(6);
  };
  const finalStep2 = () => {
    setCurrentStep(5);
  };

  const prevStep = () => {
    if (currentStep === 6) {
      setCurrentStep(2);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <Modal
        data={data}
        tblTradeInHeaderModels={tblTradeInHeaderModels}
        step={currentStep}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        nextStep={nextStep}
        nextStep2={nextStep2}
        prevStep={prevStep}
        finalStep2={finalStep2}
        price={price}
      />
      <div className={productCardStyle.main}>
        <div
          className={productCardStyle.propertyCard}
          onClick={handleOpenModelDetail}
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
              onClick={handleOpenModelDetail}
            >
              <p>{data?.itemName}</p>
            </div>
            <div className={productCardStyle.prices}>
              <div>
                <Text className={productCardStyle.newPrice}>
                  <span className={productCardStyle.spanPrice}>Giá gốc: </span>
                  <NumberFormatter
                    thousandSeparator="."
                    decimalSeparator=","
                    value={data?.unitSellingPrice ?? ""}
                    suffix="₫"
                  />
                </Text>
                <Text className={productCardStyle.newPrice}>
                  <span className={productCardStyle.spanPrice}>
                    Giá thu lại:{" "}
                  </span>
                  <NumberFormatter
                    thousandSeparator="."
                    decimalSeparator=","
                    value={price ?? ""}
                    suffix="₫"
                  />
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProductTradeIn;
