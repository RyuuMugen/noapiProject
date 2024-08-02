"use client";

import { getDataListProductFull } from "@/api/apiProduct";
import AppContainer from "@/common/AppContainer";
import CommonCategoryTag from "@/common/CommonCategoryTag";
import ListProductCarousel from "@/common/ListProductCarousel";
import TopicName from "@/common/TopicName";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { TblItem } from "@/model/ProductList";
import { Flex } from "@mantine/core";
import { useEffect, useState } from "react";

const HomeFurniture = () => {
  const [data, setData] = useState<TblItem[]>([]);
  const [loading, setLoading] = useState(true);
  const dataCommonCategoryTag = [
    {
      label: "Ghế Chơi Game",
      path: "ghe-gaming-ghe-choi-game",
    },
    {
      label: "Ghế Công Thái Học",
      path: "ghe-cong-thai-hoc",
    },
    {
      label: "Bàn Chơi Game",
      path: "ban-chuyen-dung-cho-gamer",
    },
  ];

  useEffect(() => {
    const callGetApi = async () => {
      const callapi = await getDataListProductFull(
        `?Skip=0&Take=10&Active=true&CategoryId=365`
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
  //       if (localStorage.getItem("dataFurnitureItem") === null) {
  //         const callapi = await getDataListProductFull(
  //           "?Skip=0&Take=10&Active=true&CategoryId=365"
  //         );
  //         if (
  //           !isNullOrUndefined(callapi) &&
  //           !isNullOrUndefined(callapi?.data)
  //         ) {
  //           const dataApi = callapi?.data;
  //           if (dataApi != null && !isNullOrUndefined(dataApi)) {
  //             setData(dataApi);
  //             localStorage.setItem(
  //               "dataFurnitureItem",
  //               JSON.stringify(dataApi)
  //             );
  //           }
  //         } else {
  //           console.log("Dữ liệu không tồn tại");
  //         }
  //       } else {
  //         const dataLocal = JSON.parse(
  //           localStorage.getItem("dataFurnitureItem") || "[]"
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
          <TopicName color="#1F67D2" topicName="Bàn ghế"></TopicName>
        </Flex>
        <CommonCategoryTag
          data={dataCommonCategoryTag}
          categoryPath="ban-ghe-gaming-cao-cap"
        />
      </Flex>
      <ListProductCarousel item={data} />
    </AppContainer>
  );
};

export default HomeFurniture;
