"use client";
import { getListArticle } from "@/api/apiArticle";
import NewsCard from "@/common/NewsCard";
import NewsCategory from "@/common/NewsCategory";
import { DataArticle } from "@/model/DataArticle";
import { Anchor, Flex, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import style from "./boxBottomNews.module.scss";

export default function boxBottomNews() {
  const [dataArticleRight, setDataArticleRight] = useState<DataArticle[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getListArticle(
        "Status=1&ArticleCategoryId=56&Skip=0&Take=4"
      );
      setDataArticleRight(data.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Flex className={style.bottomNews} direction="column">
        <Flex className={style.titleBlockNews}>
          <Text fw={700} c="#1F2123" size="24px">
            TƯ VẤN MUA HÀNG
          </Text>
          <p className={style.viewMore}>
            <NewsCategory
              link={"Xem thêm"}
              title={"Tư vấn mua hàng"}
              code={"tu-van-mua-hang"}
              id={56}
            />
            <IconChevronRight
              color="#1F67D2"
              style={{ width: "15px", height: "15px", marginLeft: "5px" }}
            />
          </p>
        </Flex>

        <Flex className={style.bottomNewsList} gap="20px">
          {dataArticleRight?.map((item) => (
            <Flex className={style.bottomNewsItem} justify={"space-between"}>
              <NewsCard data={item} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </div>
  );
}
