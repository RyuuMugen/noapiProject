"use client";

import AppContainer from "@/common/AppContainer";
import CommonIcon from "@/common/CommonIcon";
import React from "react";
import CommonIcon_1 from "@/assets/CommonIcon_1.png";
import CommonIcon_2 from "@/assets/CommonIcon_2.png";
import CommonIcon_3 from "@/assets/CommonIcon_3.png";
import iconCategory1 from "@/assets/GheGaming.png";
import iconCategory2 from "@/assets/Rectangle_1.png";
import iconCategory3 from "@/assets/Rectangle_2.png";
import iconCategory4 from "@/assets/Rectangle_3.png";
import iconCategory5 from "@/assets/Rectangle_4.png";
import iconCategory6 from "@/assets/Rectangle_5.png";
import iconCategory7 from "@/assets/Rectangle_6.png";
import iconCategory8 from "@/assets/Rectangle_7.png";
import iconCategory9 from "@/assets/Rectangle_8.png";
import iconCategory10 from "@/assets/Rectangle_9.png";
import iconCategory11 from "@/assets/Rectangle_10.png";
import iconCategory12 from "@/assets/Rectangle_11.png";
import iconService1 from "@/assets/icon_1.png";
import iconService2 from "@/assets/icon_2.png";
import iconService3 from "@/assets/icon_3.png";
import iconService4 from "@/assets/icon_4.png";
import iconService5 from "@/assets/icon_5.png";
import icon1 from "@/assets/icon_1.1.png";
import RectangleCard from "@/common/RectangleCard";
import BackgroundBuildPC from "@/assets/build-pc.png";
import BackgroundBuildRadiators from "@/assets/buildtannhiet.png";
import BackgroundBuildOldNew from "@/assets/oldnew.png";
import BackgroundShowRoom from "@/assets/album-sr-2.png";
import { Box, Flex } from "@mantine/core";
import CommonIconService from "@/common/CommonIconService";
import CommonNavigationCard from "@/common/commonNavigationCard";

const HomeCategory = () => {
  const iconCards = [
    {
      icon: CommonIcon_1,
      title: "Xây dựng cấu hình",
      href: "/buildpc",
      background: BackgroundBuildPC,
    },
    {
      icon: CommonIcon_2,
      title: "Thu cũ đổi mới",
      href: "/old-autumn-renewed",
      background: BackgroundBuildOldNew,
    },

    {
      icon: CommonIcon_3,
      title: "Xây dựng tản nhiệt nước",
      href: "#",
      background: BackgroundBuildRadiators,
    },
    {
      icon: icon1,
      title: "Tìm cửa hàng",
      href: "/showroom",
      background: BackgroundShowRoom,
    },
  ];

  const dataCategory = [
    {
      img: iconCategory1,
      idCategory: 316,
      title: "Ghế gaming",
      categoryCode: "ghe-gaming-ghe-choi-game",
    },
    {
      img: iconCategory2,
      idCategory: 904,
      title: "Màn hình MSI",
      categoryCode: "man-hinh-msi",
    },
    {
      img: iconCategory3,
      idCategory: 992,
      title: "Console",
      categoryCode: "may-choi-game-tay-game",
    },
    {
      img: iconCategory4,
      idCategory: 376,
      title: "Máy trạm render",
      categoryCode: "linh-kien-workstations",
    },
    {
      img: iconCategory5,
      idCategory: 849,
      title: "Tai nghe bluetooth",
      categoryCode: "tai-nghe-bluetooth",
    },
    {
      img: iconCategory6,
      idCategory: 302,
      title: "Camera hành trình",
      categoryCode: "camera-hanh-trinh",
    },
    {
      img: iconCategory7,
      idCategory: 266,
      title: "Router",
      categoryCode: "router-wifi",
    },
    {
      img: iconCategory8,
      idCategory: 395,
      title: "Máy bán hàng",
      categoryCode: "thiet-bi-sieu-thi-cua-hang",
    },
    {
      img: iconCategory9,
      idCategory: 824,
      title: "Loa hội nghị",
      categoryCode: "loa-hoi-nghi",
    },
    {
      img: iconCategory10,
      idCategory: 323,
      title: "Camera không dây",
      categoryCode: "camera-khong-day",
    },
    {
      img: iconCategory11,
      idCategory: 915,
      title: "Bàn phím & chuột",
      categoryCode: "bo-ban-phim-chuot",
    },
    {
      img: iconCategory12,
      idCategory: 1204,
      title: "Arm màn hình",
      categoryCode: "arm-man-hinh-gia-treo-man-hinh",
    },
  ];

  const iconServiceCards = [
    { icon: iconService1, title: "1 đổi 1 trong một ngày" },
    { icon: iconService2, title: "Ship COD" },
    { icon: iconService3, title: "Giao hàng hoả tốc 2h" },
    { icon: iconService4, title: "Miễn phí vệ sinh" },
    { icon: iconService5, title: "Miễn phí sửa chữa" },
  ];

  return (
    <div>
      <AppContainer>
        <CommonNavigationCard iconCards={iconCards} />

        <Flex justify={"center"} wrap={"wrap"} style={{ marginTop: 10 }}>
          {dataCategory?.map((item, index) => {
            return (
              <div
                style={{
                  width: "calc(16.666666%)",
                  display: "flex",
                  justifyContent: "center",
                }}
                key={index}
              >
                <RectangleCard key={index} item={item} />
              </div>
            );
          })}
        </Flex>
        {/* <CommonIconService iconServiceCards={iconServiceCards} height={90} /> */}
      </AppContainer>
    </div>
  );
};

export default HomeCategory;
