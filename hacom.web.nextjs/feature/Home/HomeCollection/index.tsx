"use client";
import commonCategoryCard_1 from "@/assets/commonCategoryCard_11.png";
import commonCategoryCard_2 from "@/assets/commonCategoryCard_12.png";
import commonCategoryCard_3 from "@/assets/commonCategoryCard_13.png";
import commonCategoryCard_4 from "@/assets/commonCategoryCard_14.png";
import commonCategoryCard_5 from "@/assets/commonCategoryCard_15.png";
import commonCategoryCard_6 from "@/assets/commonCategoryCard_16.png";
import AppContainer from "@/common/AppContainer";
import CommonCategoryCard from "@/common/CommonCategoryCard";
import TopicName from "@/common/TopicName";
import { Carousel } from "@mantine/carousel";
import { Flex } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";

const dataCommonCategoryCard = [
  {
    title: "Đồ họa AI",
    image: commonCategoryCard_1,
    idCategory: 1282,
    categoryCode: "do-hoa-ai",
  },
  {
    title: "Siêu render",
    image: commonCategoryCard_2,
    idCategory: 1368,
    categoryCode: "sieu-render",
  },
  {
    title: "Văn phòng không dây",
    image: commonCategoryCard_6,
    idCategory: 169,
    categoryCode: "van-phong-khong-day",
  },
  {
    title: "Thực tế ảo",
    image: commonCategoryCard_3,
    idCategory: 454,
    categoryCode: "thuc-te-ao",
  },
  {
    title: "Rạp chiếu phim tại gia",
    image: commonCategoryCard_4,
    idCategory: 13,
    categoryCode: "rap-chiu-phim-tai-gia",
  },
  {
    title: "Thời trang",
    image: commonCategoryCard_5,
    idCategory: 578,
    categoryCode: "Thời-trang",
  },
];

const HomeCollection = () => {
  const { width } = useViewportSize();

  const slides = dataCommonCategoryCard.map((item: any, index: any) => (
    <Carousel.Slide key={index}>
      <CommonCategoryCard key={index} item={item} />
    </Carousel.Slide>
  ));

  return (
    <AppContainer>
      <Flex>
        <TopicName color="#1F67D2" topicName="PHONG CÁCH VÀ LỐI SỐNG" />
      </Flex>
      <Flex justify={"space-between"} style={{ paddingBottom: 50 }}>
        {width < 1700 ? (
          <div style={{ width: "100%" }}>
            <Carousel
              slideSize={width < 1460 ? "25%" : "20%"}
              loop
              align="start"
              controlSize={40}
              slideGap={20}
            >
              {slides}
            </Carousel>
          </div>
        ) : (
          dataCommonCategoryCard.map((item: any, index: any) => (
            <CommonCategoryCard item={item} key={index} />
          ))
        )}
      </Flex>
    </AppContainer>
  );
};

export default HomeCollection;
