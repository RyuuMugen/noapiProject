"use client";
import { getListArticle } from "@/api/apiArticle";
import AppContainer from "@/common/AppContainer";
import NewsCard from "@/common/NewsCard";
import TopicName from "@/common/TopicName";
import { Flex } from "@mantine/core";
import { useEffect, useState } from "react";
import { DataArticle } from "@/model/DataArticle";
import Link from "next/link";
import { IconChevronRight } from "@tabler/icons-react";
import style from "./styleHomeNews.module.scss";

const HomeNews = () => {
  const [dataArticle, setDataArticle] = useState<DataArticle[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getListArticle("Status=1&Take=4");
      setDataArticle(data.data);
    };
    fetchData();
  }, []);

  return (
    <AppContainer>
      <Flex
        align={"center"}
        gap="sm"
        justify={"space-between"}
        style={{ marginBottom: "20px" }}
      >
        <TopicName color="#1F67D2" topicName="Tin tức"></TopicName>
        <Link
          href={"/news"}
          style={{ textDecoration: "none", color: "#0052cc", fontWeight: 700 }}
        >
          Xem thêm
          <IconChevronRight size={12} color="#0052CC" />
        </Link>
      </Flex>
      <div className={style.flexBox}>
        {dataArticle?.map((newsCard, index) => {
          return (
            <div className={style.flexItem}>
              <NewsCard key={index} data={newsCard} />
            </div>
          );
        })}
      </div>
    </AppContainer>
  );
};

export default HomeNews;
