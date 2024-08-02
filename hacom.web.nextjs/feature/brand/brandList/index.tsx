"use client";
import AppContainer from "@/common/AppContainer";
import { TblBrand } from "@/model/TblBrand";
import { useEffect, useState } from "react";
import style from "./brandlist.module.scss";
interface BrandProps {
  data: TblBrand[];
}

const BrandListChild = ({ data }: BrandProps) => {
  return (
    <AppContainer>
      <div className={style.box}>
        {data.map((item, index) => (
          <div className={style.logoBox} key={index}>
            <img src={`${item.image}`} alt="" />
          </div>
        ))}
      </div>
    </AppContainer>
  );
};

export default BrandListChild;
