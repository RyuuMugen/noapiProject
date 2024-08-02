"use client";
import { Roboto } from "next/font/google";
import {
  Anchor,
  Flex,
  Pagination,
  Text,
  Image,
  Center,
  Card,
} from "@mantine/core";
import ImgNewsBig from "@/assets/imgNewsBig.png";
import style from "./newest.module.scss";
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
export default function newest() {
  const [dataArticle, setDataArticle] = useState<DataArticle[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getListArticle("Status=1&Skip=0&Take=3");
      setDataArticle(data.data);
    };
    fetchData();
  }, []);
  return (
    <Flex className={style.topNews} direction="column">
      <Flex className={style.titleNews}>
        <Text fw={700} c="#1F2123" size="24px">
          TIN MỚI NHẤT
        </Text>
      </Flex>
      <div className={style.middleNewsList}>
        {dataArticle?.slice(0, 1)?.map((item, index) => (
          <Link
            key={index}
            className={style.link}
            href={{
              pathname: "/bai-viet",
              query: { id: item.id },
            }}
          >
            <div className={style.container}>
              <Card shadow="sm" withBorder className={style.main}>
                <div className={style.imgBox}>
                  <Image src={item.thumnail} alt="News" className={style.img} />
                </div>
                <div className={style.contentBox}>
                  <Text className={style.title}>{item.title}</Text>

                  <Text className={style.description}>{item.summary}</Text>
                </div>
              </Card>
            </div>
          </Link>
        ))}
      </div>
      <Flex className={style.topNewsList} gap="20px" justify={"space-between"}>
        {dataArticle?.slice(1, 3)?.map((item, index) => (
          <div className={style.topNewsItem} key={index}>
            <NewsCard data={item} />
          </div>
        ))}
      </Flex>
    </Flex>
  );
}
