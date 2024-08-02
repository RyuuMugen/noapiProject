"use client";
import { Card, Image, Text, Badge, Button, Group, Box } from "@mantine/core";
import { ArticlesModel } from "@/model/ArticlesModel";
import style from "./ArticleCard.module.scss";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";

function ArticleCard({ data }: News) {
  const [sumaryLine, setSumaryLine] = useState(3);
  const { width } = useViewportSize();
  useEffect(() => {
    if (width > 900) {
      setSumaryLine(3);
    } else {
      // console.log("a1");
      setSumaryLine(2);
    }
  }, [width]);
  return (
    <a className={style.link} href={`/bai-viet/${data?.url}`}>
      <Box className={style.card}>
        <Box className={style.imageBox}>
          <Image src={data?.imageThumbnail} height={160} alt="Norway" />
        </Box>

        <Box className={style.titleBox}>
          <Text lh={"sm"} lineClamp={2} size="sm" fw={700}>
            {data?.title}
          </Text>
        </Box>
        <Box className={style.summaryBox}>
          <Text lh={"sm"} lineClamp={sumaryLine} size="sm">
            {data?.summary}
          </Text>
        </Box>
      </Box>
    </a>
  );
}

export default ArticleCard;

type News = {
  data: ArticlesModel;
};
