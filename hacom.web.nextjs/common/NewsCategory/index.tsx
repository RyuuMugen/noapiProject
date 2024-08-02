"use client";
import { Anchor } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useHeaderContext } from "@/useContext/useContextSearch";
import style from "./NewsCategoryLink.module.scss";
const NewsCategory = ({ title, code, id, link }: NewsCategoryLinkProps) => {
  const router = useRouter();
  const { setCategorySearch } = useHeaderContext();

  const handleRedirectToListCategory = () => {
    setCategorySearch({
      categoryName: title,
      categoryCode: code,
      categoryId: id,
    });
    router.push(
      `/news-category/${code}`
    );
  };
  return (
    <div className={style.linkCategory} onClick={handleRedirectToListCategory}>
      {link}
    </div>
  );
};
export default NewsCategory;
type NewsCategoryLinkProps = {
  title: string;
  code: string;
  id: number;
  link: string;
};
