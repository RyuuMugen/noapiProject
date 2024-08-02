"use client";
import { Anchor } from "@mantine/core";
import { ArticlesCategoryModel } from "@/model/ArticlesCategoryModel";
import { useSearchParams } from "next/navigation";
// import { useParams } from "next/navigation";
import style from "./CategoryButton.module.scss";

const NewsCategoryLink = ({
  data,
  slug,
}: {
  data: ArticlesCategoryModel;
  slug: string | string[];
}) => {
  // const params = useParams();
  // const { slug } = params;
  const buttonClassName =
    `/${slug}` === data.url ? style.activebutton : style.button;

  return (
    <div className={buttonClassName}>
      <p className={style.content}>{data.name}</p>
    </div>
  );
};
export default NewsCategoryLink;
