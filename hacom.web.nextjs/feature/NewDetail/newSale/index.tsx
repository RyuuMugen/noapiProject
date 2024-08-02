"use client";
import { Roboto } from "next/font/google";
import { Anchor, Flex, Pagination, Text, Image, Center } from "@mantine/core";
import ImgNewsBig from "@/assets/imgNewsBig.png";
import style from "./newSale.module.scss";
import { useEffect, useState } from "react";
import NewsCard from "@/common/NewsCard";
import Link from "next/link";
import { DataArticle } from "@/model/DataArticle";
import {
  IconUserCircle,
  IconCalendar,
  IconEye,
  IconBrandFacebookFilled,
} from "@tabler/icons-react";
import { getListArticle } from "@/api/apiArticle";
export default function newSale() {
  const [dataArticleSale, setDataArticleSale] = useState<DataArticle[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getListArticle(
        "Status=1&ArticleCategoryId=57&Skip=0&Take=4"
      );
      setDataArticleSale(data.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Flex className={style.titleNews}>
        <Text fw={700} c="#1F2123" size="24px">
          TIN KHUYẾN MẠI
        </Text>
      </Flex>

      <Flex
        className={style.bottomNewsList}
        gap="20px"
        justify={"space-between"}
      >
        {dataArticleSale?.slice(0, 4)?.map((item, index) => (
          <Flex className={style.bottomNewsItem} key={index}>
            <NewsCard data={item} />
          </Flex>
        ))}
      </Flex>
    </div>
  );
}
