import { StaticImageData } from "next/image";
import React from "react";
import style from "./CategoryBrand.module.scss";
import { Image } from "@mantine/core";

interface BrandProps {
  listData: any[];
  selectedBrandIds: string[];
  setSelectedBrandIds: React.Dispatch<React.SetStateAction<string[]>>;
}

const Brand: React.FC<BrandProps> = ({
  listData,
  selectedBrandIds,
  setSelectedBrandIds,
}) => {
  const handleChooseBrand = (brandId: string) => {
    const newBrandIds = [...selectedBrandIds];
    if (newBrandIds.includes(brandId)) {
      const index = newBrandIds.indexOf(brandId);
      newBrandIds.splice(index, 1);
    } else {
      newBrandIds.push(brandId);
    }
    setSelectedBrandIds(newBrandIds);
  };

  return (
    <div className={style.box}>
      <span className={style.title}>Chọn theo hãng:</span>
      <div className={style.brandOverflow}>
        {listData.map((brand, index) => (
          <div
            className={`${style.item} ${
              selectedBrandIds.includes(brand.name) && style.brandActive
            }`}
            key={index}
            onClick={() => handleChooseBrand(brand.name)}
          >
            <Image src={brand.image} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brand;
