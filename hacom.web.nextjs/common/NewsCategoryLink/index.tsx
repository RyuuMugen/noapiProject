"use client";
import { Anchor } from "@mantine/core";
import { useRouter } from "next/navigation";
import { useHeaderContext } from "@/useContext/useContextSearch";
import { useParams } from "next/navigation";
import style from "./NewsCategoryLink.module.scss";
const NewsCategoryLink = ({ title, code, id }: NewsCategoryLinkProps) => {
  const router = useRouter();
  const { setCategorySearch } = useHeaderContext();
  const params = useParams();
  const { slug } = params;

  const handleRedirectToListCategory = () => {
    setCategorySearch({
      categoryName: title,
      categoryCode: code,
      categoryId: id,
    });
    router.push(`/news-category/${id}`);
  };

  let linkClass = style.linkCategory;
  if (Array.isArray(slug)) {
    if (slug.includes(id.toString())) {
      linkClass = style.activeLinkCategory;
    }
  } else if (slug === id.toString()) {
    linkClass = style.activeLinkCategory;
  }

  return (
    <div className={linkClass} onClick={handleRedirectToListCategory}>
      {title}
    </div>
  );
};
export default NewsCategoryLink;
type NewsCategoryLinkProps = {
  title: string;
  code: string;
  id: number;
};
