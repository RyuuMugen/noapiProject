// ProductCard.js
"use client";
import { ArticleCategoryList, DataArticle } from "@/model/DataArticle";
import style from "./productCard.module.scss";

import { Image } from "@mantine/core";
import { useCallback, useMemo } from "react";
import LinkCommon from "@/common/LinkCommon";
import Link from "next/link";
import moment from "moment";
import { IconClock, IconUserCircle } from "@tabler/icons-react";

interface ArticleCardProps {
  data: DataArticle;
  type: "row" | "col" | "carousel-col" | "carousel-row";
  height?: string;
  summary?: boolean;
  dataCategory?: ArticleCategoryList[];
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  data,
  type,
  height,
  summary,
  dataCategory,
}) => {
  const formatDateString = useCallback((isoString: string) => {
    const date = new Date(isoString);
    const adjustedDate = date.setHours(date.getHours() + 7);
    return moment(new Date(adjustedDate)).format("DD-MM-YYYY");
  }, []);

  const linksData = useMemo(() => {
    if (!data || !dataCategory || !data.articleCategory) return [];
    const categoryIds = data.articleCategory
      .split(",")
      .filter(Boolean)
      .map(Number);

    return categoryIds
      .map((id) => {
        const matchingCategory = dataCategory.find(
          (category) => category.id === id
        );
        return matchingCategory
          ? {
              linkName: matchingCategory.name,
              linkURL: `/new-list/${matchingCategory.id}`,
            }
          : null;
      })
      .filter(
        (link): link is { linkName: string; linkURL: string } => link !== null
      );
  }, [data, dataCategory]);

  const h = height ? height : "-webkit-fill-available";
  return (
    <Link
      className={style[type]}
      href={`/news/${data?.id}`}
      style={{ height: h }}
    >
      <div className={style.imgBox}>
        <Image src={data?.thumnail} alt="a" />
      </div>
      <div className={style.titleBox}>
        {dataCategory && <LinkCommon links={linksData} />}

        <p className={style.titleP}>
          <p className={style.titleSpan}>{data?.title}</p>
          {summary && <span className={style.summary}>{data?.summary}</span>}
        </p>
      </div>
      {type === "row" && (
        <div className={style.moreInfo}>
          <div>
            <IconUserCircle size={16} />
            <p>{data?.createdBy ?? ""}</p>
          </div>
          <div>
            <IconClock size={16} />
            <p>{formatDateString(data?.creationDate ?? "")}</p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default ArticleCard;
