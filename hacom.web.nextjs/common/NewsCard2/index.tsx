"use client";
import { Flex, Image, Text } from "@mantine/core";
import NextImage from "next/image";
import { DataArticle } from "@/model/DataArticle";
import Link from "next/link";
import style from "./NewsCard2.module.scss";

const NewsCard2 = ({ data }: { data: DataArticle }) => {
  return (
    <Link
      className={style.link}
      href={{
        pathname: "/bai-viet",
        query: { id: data.id },
      }}
    >
      <div className={style.flexBox}>
        <div className={style.imgNews}>
          <Image src={data.thumnail} alt="News" style={{ height: "265px" }} />
        </div>
        <div className={style.infoNews}>
          <Text className={style.title}>{data.title}</Text>
          <Text className={style.description}>{data.summary}</Text>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard2;
