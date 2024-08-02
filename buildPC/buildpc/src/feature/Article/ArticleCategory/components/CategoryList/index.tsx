"use client";
import NewsCategoryLink from "@/common/ArticleCommon/ArticleCategoryButton";
import { ArticlesCategoryModel } from "@/model/ArticlesCategoryModel";
import { Box } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Link from "next/link";
import { useParams } from "next/navigation";
import style from "./NewCat.module.scss";

const homeLink = {
  id: "",
  name: "Trang chủ",
  url: "",
};

const ArticleCategory = ({
  dataCategory,
}: {
  dataCategory: ArticlesCategoryModel[];
}) => {
  const { width } = useViewportSize();
  const params = useParams();
  const { slug } = params;
  const buttonClassName =
    slug === undefined ? style.activebutton : style.button;

  return (
    <div>
      <Box className={style.box}>
        <div className={style.boxCategories}>
          <Link href={"/danh-muc-bai-viet"}>
            <div className={buttonClassName}>
              <p className={style.content}>Trang chủ</p>
            </div>
          </Link>
          {dataCategory?.map((item: any, index: any) => (
            <Link href={`/danh-muc-bai-viet/${item.url}`} key={index}>
              <NewsCategoryLink data={item} slug={slug} />
            </Link>
          ))}
        </div>
      </Box>
    </div>
  );
};

export default ArticleCategory;
