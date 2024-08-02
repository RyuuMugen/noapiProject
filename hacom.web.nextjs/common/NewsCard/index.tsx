"use client";
import { Card, Image, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import NextImage from "next/image";
import Link from "next/link";
import style from "./NewsCard.module.scss";
import { DataArticle } from "@/model/DataArticle";
const NewsCard = ({ data }: { data: DataArticle }) => {
  return (
    <Link
      className={style.link}
      href={{
        pathname: "/bai-viet",
        query: { id: data.id },
      }}
    >
      <div className={style.container}>
        <Card shadow="sm" withBorder className={style.main}>
          <div className={style.imgBox}>
            <Image src={data.thumnail} alt="News" className={style.img} />
          </div>
          <div className={style.contentBox}>
            <Text className={style.title}>{data.title}</Text>

            <Text className={style.description}>{data.summary}</Text>
          </div>
        </Card>
      </div>
    </Link>
  );
};

export default NewsCard;
