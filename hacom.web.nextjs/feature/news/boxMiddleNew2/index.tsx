"use client";
import { getListArticle } from "@/api/apiArticle";
import featureNews from "@/assets/featureNews.png";
import NewsCard2 from "@/common/NewsCard2";
import NewsCategory from "@/common/NewsCategory";
import NewsCard from "@/common/NewsCard";
import { DataArticle } from "@/model/DataArticle";
import { Anchor, Flex, Image, Text } from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconChevronRight,
  IconShare,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import style from "./boxMiddleNew2.module.scss";
export default function boxMiddleNew2() {
  const [dataArticleRight, setDataArticleRight] = useState<DataArticle[]>();
  const [dataArticleHardwareNew, setDataArticleHardwareNew] =
    useState<DataArticle[]>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getListArticle(
        "Status=1&ArticleCategoryId=55&Skip=0&Take=4"
      );
      setDataArticleRight(data.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getListArticle(
        "Status=1&ArticleCategoryId=53&Skip=0&Take=4"
      );
      setDataArticleHardwareNew(data.data);
    };
    fetchData();
  }, []);
  return (
    <Flex gap="40px" className={style.middleNews2}>
      <Flex className={style.middleNews2Left} direction="column">
        <Flex className={style.titleBlockNews}>
          <Text fw={700} c="#1F2123" size="24px">
            KIẾN THỨC PHẦN CỨNG
          </Text>
          <p className={style.viewMore}>
            <NewsCategory
              link={"Xem thêm"}
              title={"kiến thức phần cứng"}
              code={"kien-thuc-phan-cung"}
              id={55}
            />
            <IconChevronRight
              color="#1F67D2"
              style={{ width: "15px", height: "15px", marginLeft: "5px" }}
            />
          </p>
        </Flex>

        <Flex className={style.listNews2} direction="column" gap={10}>
          {dataArticleRight?.map((item, index) => (
            <div key={index} className={style.card}>
              <NewsCard2 data={item} />
            </div>
          ))}
        </Flex>
      </Flex>

      <Flex className={style.middleNews2Right} direction="column">
        <Flex className={style.titleBlockNews}>
          <Text fw={700} c="#1F2123" size="24px">
            TƯ VẤN PHẦN CỨNG
          </Text>
          <p className={style.viewMore}>
            <NewsCategory
              link={"Xem thêm"}
              title={"Tư vấn phần cứng"}
              code={"tu-van-phan-cung"}
              id={53}
            />
            <IconChevronRight
              color="#1F67D2"
              style={{ width: "15px", height: "15px", marginLeft: "5px" }}
            />
          </p>
        </Flex>

        <Flex
          className={style.middleNews2RightList}
          gap="20px"
          justify={"space-between"}
        >
          {dataArticleHardwareNew?.slice(0, 4).map((item) => (
            <Flex className={style.middleNews2RightItem}>
              <NewsCard data={item} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
