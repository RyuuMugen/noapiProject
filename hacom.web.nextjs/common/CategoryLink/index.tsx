"use client";
import { Anchor } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useHeaderContext } from "@/useContext/useContextSearch";
import style from "./NewsCategoryLink.module.scss";
const CategoryLink = ({ title, code, id }: NewsCategoryLinkProps) => {
  const router = useRouter();
  const { setCategorySearch } = useHeaderContext();

  const handleRedirectToListCategory = () => {
    setCategorySearch({
      categoryName: title,
      categoryCode: code,
      categoryId: id,
    });
    router.push(`/product-category/${code}`);
  };
  return (
    <div className={style.linkCategory} onClick={handleRedirectToListCategory}>
      {title}
    </div>
  );
};
export default CategoryLink;
type NewsCategoryLinkProps = {
  title: string;
  code: string;
  id: number;
};
