import ArticleCard from "@/common/ArticleCommon/ArticleCard";
import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import style from "./rightBox.module.scss";
import { ArticlesModel } from "@/model/ArticlesModel";

const RightBox = ({
  dataArticleList,
}: {
  dataArticleList: ArticlesModel[];
}) => {
  let datalength = dataArticleList?.length;
  if (datalength % 2 === 0) {
    datalength -= 1;
  }
  return (
    <Box>
      <Text fw={700} mb={30} size={"xl"}>
        Bài viết liên
      </Text>
      <div className={style.cardBig}>
        <ArticleCard data={dataArticleList ? dataArticleList[0] : {}} />
      </div>
      <div className={style.boxCategories}>
        {dataArticleList?.slice(1, datalength)?.map((item, index) => (
          <div key={index} className={style.card}>
            <ArticleCard data={item} />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default RightBox;
