"use client";
import AppContainer from "@/common/AppContainer";
import { TblBrand } from "@/model/TblBrand";
import { useEffect, useState } from "react";
import BrandListChild from "./brandList";
import Links from "@/common/Link";
import OutStandingBrand from "./outstandingBrand";
import style from "./brand.module.scss";
import Link from "next/link";
interface BrandProps {
  data: TblBrand[];
}

const BrandList = ({ data }: BrandProps) => {
  const link = {
    title: `Thương hiệu`,
    url: `/brand`,
  };

  const filterAndSortArray = (dataArray: any[]) => {
    const result: { [key: string]: any[] } = {}; // Object để lưu kết quả
    dataArray.forEach((item) => {
      const firstChar = item.letter.charAt(0).toUpperCase(); // Lấy chữ cái đầu tiên hoặc số và chuyển thành chữ hoa
      if (!result[firstChar]) {
        // Nếu chưa tồn tại key này trong Object result, thêm mới và gán là một mảng
        result[firstChar] = [];
      }
      // Thêm phần tử vào mảng tương ứng với chữ cái đầu tiên hoặc số
      result[firstChar].push(item);
    });

    // Sắp xếp Object theo key
    const sortedResult: { [key: string]: any[] } = {};
    Object.keys(result)
      .sort() // Sắp xếp các key theo thứ tự từ a-z
      .forEach((key) => {
        sortedResult[key] = result[key];
      });

    return sortedResult;
  };
  const sortedArray = filterAndSortArray(data);

  return (
    <AppContainer>
      <div className={style.lists}>
        <div>
          <Links link={link} />
          <h1 className={style.mainTitle}>Thương hiệu</h1>
        </div>
        <div className={style.brandList}>
          <div id="box1">
            <div className={style.linkList}>
              <span className={style.title}>thương hiệu nổi bật</span>
            </div>
            <OutStandingBrand />
          </div>
          <div id="box2">
            <div className={style.linkList}>
              <span className={style.title}>Tất cả các thương hiệu:</span>

              {Object.keys(sortedArray).map((key: string, index: number) => (
                <Link href={`#brand${key}`}> {key} </Link>
              ))}
            </div>
          </div>
          <div>
            {Object.keys(sortedArray).map((key: string, index: number) => (
              <div id={`brand${key}`} key={index} className={style.childTitle}>
                <p className={style.keyClick}> {key} </p>
                <BrandListChild data={sortedArray[key]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default BrandList;
