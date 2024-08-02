"use client";
import React from "react";
import AppContainer from "@/common/AppContainer";
import style from "./ListBrand.module.scss";
import CategoryLink from "@/feature/ProductCategory/CategoryLink";
import { usePathname } from "next/navigation";
import Brand from "./CategoryBrand";
import { useHeaderContext } from "@/useContext/useContextSearch";
import { TblBrand } from "@/model/TblBrand";
interface ListBrandProps {
  searchvalue?: string;
  total?: number;
  listData: TblBrand[];
  selectedBrandIds: string[];
  setSelectedBrandIds: React.Dispatch<React.SetStateAction<string[]>>;
  categoryName: string | null;
}
const ListBrand: React.FC<ListBrandProps> = ({
  searchvalue,
  total,
  listData,
  selectedBrandIds,
  setSelectedBrandIds,
  categoryName,
}) => {
  const { searchValue } = useHeaderContext();
  let category = searchValue;
  let search = true;
  if (searchvalue) {
    category = searchvalue;
  }

  const pathname = usePathname();
  if (pathname.includes("/product-category/")) {
    search = false;
  } else if (pathname.includes("/collection/")) {
    search = false;
  } else {
    search = true;
  }
  return (
    <AppContainer>
      <div className={style.box}>
        <CategoryLink
          category={category}
          total={total || 0}
          categoryName={categoryName}
          search={search}
        />
        {listData && listData.length > 0 && (
          <Brand
            listData={listData}
            selectedBrandIds={selectedBrandIds}
            setSelectedBrandIds={setSelectedBrandIds}
          />
        )}
      </div>
    </AppContainer>
  );
};

export default ListBrand;
