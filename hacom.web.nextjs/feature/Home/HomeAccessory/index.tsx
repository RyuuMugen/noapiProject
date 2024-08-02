"use client";

import { getDataListProductFull } from "@/api/apiProduct";
import iconCategory1 from "@/assets/VGA10.png";
import iconCategory2 from "@/assets/VGA11.png";
import iconCategory3 from "@/assets/VGA12.png";
import iconCategory4 from "@/assets/VGA13.png";
import iconCategory5 from "@/assets/VGA14.png";
import iconCategory6 from "@/assets/VGA15.png";
import iconCategory7 from "@/assets/VGA16.png";
import iconCategory8 from "@/assets/VGA17.png";
import AppContainer from "@/common/AppContainer";
import CommonCategoryTag from "@/common/CommonCategoryTag";
import ListProductCarousel from "@/common/ListProductCarousel";
import RectangleCard from "@/common/RectangleCard";
import TopicName from "@/common/TopicName";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { TblItem } from "@/model/ProductList";
import { Flex, ScrollArea } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";

const HomeAccessory = () => {
  const { width } = useViewportSize();
  const [data, setData] = useState<TblItem[]>([]);
  const [loading, setLoading] = useState(true);
  const dataCategory = [
    {
      img: iconCategory1,
      title: "Đế tản nhiệt",
      idCategory: 63,
      categoryCode: "de-tan-nhiet-laptop",
    },
    {
      img: iconCategory2,
      title: "Led để bàn",
      idCategory: 1136,
      categoryCode: "den-led-de-ban",
    },
    {
      img: iconCategory3,
      title: "Phụ kiện máy chiếu",
      idCategory: 152,
      categoryCode: "phu-kien-may-chieu",
    },
    {
      img: iconCategory4,
      title: "Steam Deck",
      idCategory: 1159,
      categoryCode: "may-choi-game-steam-deck",
    },
    {
      img: iconCategory5,
      title: "Bộ bàn ghế",
      idCategory: 1232,
      categoryCode: "bo-ban-ghe-chong-gu-can",
    },
    {
      img: iconCategory6,
      title: "USB",
      idCategory: 237,
      categoryCode: "usb",
    },
    {
      img: iconCategory7,
      title: "Card màn hình",
      idCategory: 831,
      categoryCode: "vga-nvidia",
    },
    {
      img: iconCategory8,
      title: "Chuột",
      idCategory: 38,
      categoryCode: "chuot-may-tinh",
    },
  ];

  const dataCommonCategoryTag = [
    {
      label: "Phụ Kiện Laptop",
      path: "linh-phu-kien-laptop",
    },
    {
      label: "Phụ Kiện Điện Thoại, Tablet",
      path: "phu-kien-may-tinh-bang",
    },
    {
      label: "Phụ Kiện HDD",
      path: "phu-kien-hdd",
    },
    {
      label: "Phụ Kiện Tai Nghe",
      path: "phu-kien-nghe-nhin-khac",
    },
    {
      label: "Dây Cáp Các Loại",
      path: "day-cap-cac-loai",
    },
  ];

  useEffect(() => {
    const callGetApi = async () => {
      const callapi = await getDataListProductFull(
        `?Skip=0&Take=10&Active=true&CategoryId=455`
      );
      if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
        const dataApi = callapi?.data;
        if (dataApi != null && !isNullOrUndefined(dataApi)) {
          setData(dataApi);
        }
      } else {
        console.log("Dữ liệu không tồn tại");
      }
    };
    callGetApi();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       if (localStorage.getItem("dataAccessoryItem") === null) {
  //         const callapi = await getDataListProductFull(
  //           "?Skip=0&Take=10&Active=true&CategoryId=455"
  //         );
  //         if (
  //           !isNullOrUndefined(callapi) &&
  //           !isNullOrUndefined(callapi?.data)
  //         ) {
  //           const dataApi = callapi?.data;
  //           if (dataApi != null && !isNullOrUndefined(dataApi)) {
  //             setData(dataApi);
  //             localStorage.setItem(
  //               "dataAccessoryItem",
  //               JSON.stringify(dataApi)
  //             );
  //           }
  //         } else {
  //           console.log("Dữ liệu không tồn tại");
  //         }
  //       } else {
  //         const dataLocal = JSON.parse(
  //           localStorage.getItem("dataAccessoryItem") || "[]"
  //         );
  //         setData(dataLocal);
  //       }
  //     } catch (error) {
  //       console.error("Lỗi khi gọi API:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <AppContainer>
      <Flex align={"center"} justify={"space-between"}>
        <Flex>
          <TopicName
            color="#1F67D2"
            topicName="phụ kiện laptop - pc"
          ></TopicName>
        </Flex>
        <CommonCategoryTag
          data={dataCommonCategoryTag}
          categoryPath="phu-kien"
        />
      </Flex>
      <ListProductCarousel item={data} />
      <ScrollArea w={"100%"}>
        <Flex justify={"space-between"}>
          {dataCategory?.map((item, index) => {
            return <RectangleCard key={index} item={item} />;
          })}
        </Flex>
      </ScrollArea>
    </AppContainer>
  );
};

export default HomeAccessory;
