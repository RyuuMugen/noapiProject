"use client";
import { Card, Image, Text, Badge, Button, Group, Box } from "@mantine/core";
import { ArticlesModel } from "@/model/ArticlesModel";
import style from "./rowCard.module.scss";

function RowArticleCard({ data }: News) {
  return (
    <div className={style.boxItem}>
      <a className={style.link} href={`/bai-viet/${data.url}`}>
        <Image
          src={data.imageThumbnail}
          className={style.imageThumbnail}
          alt={data.title || "image"}
        />
      </a>
      <Box className={style.contentbox} p={10}>
        <a href={`/bai-viet/${data.url}`}>
          <Text lh={"sm"} lineClamp={2} size="sm" fw={700}>
            {data.title}
          </Text>
        </a>
        <Text lh={"sm"} lineClamp={3} size="sm">
          {data.summary}
        </Text>
      </Box>
    </div>
  );
}

export default RowArticleCard;

type News = {
  data: ArticlesModel;
};
