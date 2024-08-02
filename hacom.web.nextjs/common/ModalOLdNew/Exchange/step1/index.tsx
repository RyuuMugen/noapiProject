import React, { useState } from "react";
import { TradeInItem, tblTradeInHeaderModels } from "@/model/TblTradeIn";
import SelectedIcon from "@/assets/Selected.png";
import Image from "next/image";
import { useForm, isNotEmpty } from "@mantine/form";
import style from "./step1.module.scss";
import { NumberFormatter, Text, Grid } from "@mantine/core";

interface Step1Prop {
  data: TradeInItem;
  tblTradeInHeaderModels: tblTradeInHeaderModels[];
  totalPrice: number;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  nextStep: () => void;
  setProductCondition: React.Dispatch<React.SetStateAction<string>>;
}
const Step1: React.FC<Step1Prop> = ({
  data,
  tblTradeInHeaderModels,
  totalPrice,
  setTotalPrice,
  nextStep,
  setProductCondition,
}) => {
  const [selectedBox, setSelectedBox] = useState<number>(1);
  const [statusSelectedBox, setStatusSelectedBox] = useState<number | null>(1);

  // const statusBoxDiscountPercentages: Record<number, number> = {
  //   1: 5, // Giảm giá 5% khi không còn vỏ hộp
  //   2: 5, // Giảm giá 10% khi không còn sạc
  // };

  const handleBoxClick = (boxNumber: number) => {
    setSelectedBox((prevSelectedBox) => {
      const newSelectedBox = prevSelectedBox === boxNumber ? 1 : boxNumber;
      calculatePrice(newSelectedBox, statusSelectedBox);
    
      return newSelectedBox;
    });
  };

  const isBoxSelected = (boxNumber: number) => {
    return selectedBox === boxNumber;
  };

  const handleStatusBoxClick = (boxNumber: number) => {
    setStatusSelectedBox((prevSelectedBox) => {
      const newSelectedBox = prevSelectedBox === boxNumber ? null : boxNumber;
      calculatePrice(selectedBox, newSelectedBox);
      return newSelectedBox;
    });
  };

  const isStatusBoxSelected = (boxNumber: number) => {
    return statusSelectedBox === boxNumber;
  };

  const calculatePrice = (
    newSelectedBox: number | null,
    newStatusSelectedBox: number | null
  ) => {
    let newPrice = data?.unitSellingPrice || 0;

    // Áp dụng giảm giá theo phần trăm của box khi được chọn
    if (newSelectedBox !== null) {
      const discountPercentage =
        tblTradeInHeaderModels[newSelectedBox - 1].percentSupport;
        setProductCondition(
        tblTradeInHeaderModels[newSelectedBox - 1].productCondition || ""
      );
      newPrice -= (newPrice / 100) * (100 - discountPercentage);     
    }

    // Áp dụng giảm giá theo phần trăm của status box khi được chọn

    // if (newStatusSelectedBox !== null) {
    //   const discountPercentage =
    //     statusBoxDiscountPercentages[newStatusSelectedBox];
    //   newPrice -= (newPrice / 100) * discountPercentage;
    // }
    setTotalPrice(newPrice);
  };
 
  return (
    <div className={style.main}>
      <h1 className={style.title}>Tình trạng máy cũ</h1>
      <div className={style.contentbox}>
        <div>
          <img className={style.image} src={data?.primaryImage || ""} alt="" />
        </div>
        <div className={style.contentbox2}>
          <span>Tên sản phẩm:</span>
          <span className={style.color}> {data?.itemName}</span>
          <p className={style.tittle2}>Ngoại hình máy:</p>
          <div>
            {tblTradeInHeaderModels?.map((item: any, index: number) => {
              return (
                <div
                  className={`${style.box} ${
                    isBoxSelected(index + 1) ? style.selectedBox : ""
                  }`}
                  onClick={() => handleBoxClick(index + 1)}
                >
                  <span className={style.color}>Loại {index + 1}:</span>
                  <span>{item.productCondition}</span>
                  <Image src={SelectedIcon} alt="IconFS" />
                </div>
              );
            })}
          </div>
          {/* <p className={style.tittle2}>Phụ kiện và bảo hành:</p>
          <div className={style.flexbox}>
            <div
              className={`${style.box2} ${
                isStatusBoxSelected(1) ? style.selectedBox2 : ""
              }`}
              onClick={() => handleStatusBoxClick(1)}
            >
              <span>Không còn vỏ hộp</span>
              <span className={style.color2}>
                -
                <NumberFormatter
                  value={
                    data?.unitSellingPrice
                      ? (data.unitSellingPrice / 100) * 5
                      : 0
                  }
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />{" "}
                (-5%)
              </span>
              <Image src={SelectedIcon} alt="IconFS" />
            </div>
            <div
              className={`${style.box2} ${
                isStatusBoxSelected(2) ? style.selectedBox2 : ""
              }`}
              onClick={() => handleStatusBoxClick(2)}
            >
              <span>Không còn sạc</span>
              <span className={style.color2}>
                -
                <NumberFormatter
                  value={
                    data?.unitSellingPrice
                      ? (data.unitSellingPrice / 100) * 5
                      : 0
                  }
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />{" "}
                (-5%)
              </span>
              <Image src={SelectedIcon} alt="IconFS" />
            </div>
          </div> */}
          <div>
            <p>
              Giá dự kiến thu lại:{" "}
              <span className={style.color2}>
                <NumberFormatter
                  value={totalPrice}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />{" "}
              </span>
            </p>
          </div>
          <div>
            <button className={style.modalbutton1} onClick={nextStep}>
              Tiếp theo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
