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

const HomePC = () => {
  const [data, setData] = useState<TblItem[]>([]);
  const [loading, setLoading] = useState(true);
  const dataCommonCategoryTag = [
    {
      label: "Chơi game, học tập",
      path: "pc-gaming-streaming",
    },
    {
      label: "Đồ hoạ, thiết kế",
      path: "pc-workstations",
    },
    {
      label: "Văn phòng, làm việc",
      path: "may-tinh-de-ban",
    },
  ];

  useEffect(() => {
    const callGetApi = async () => {
      const callapi = await getDataListProductFull(
        `?Skip=0&Take=10&Active=true&CategoryId=178`
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
  //       if (localStorage.getItem("dataPCItem") === null) {
  //         const callapi = await getDataListProductFull(
  //           "?Skip=0&Take=10&Active=true&CategoryId=178"
  //         );
  //         if (
  //           !isNullOrUndefined(callapi) &&
  //           !isNullOrUndefined(callapi?.data)
  //         ) {
  //           const dataApi = callapi?.data;
  //           if (dataApi != null && !isNullOrUndefined(dataApi)) {
  //             setData(dataApi);
  //             localStorage.setItem("dataPCItem", JSON.stringify(dataApi));
  //           }
  //         } else {
  //           console.log("Dữ liệu không tồn tại");
  //         }
  //       } else {
  //         const dataLocal = JSON.parse(
  //           localStorage.getItem("dataPCItem") || "[]"
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
          <TopicName color="#1F67D2" topicName="PC"></TopicName>
        </Flex>
        <CommonCategoryTag
          data={dataCommonCategoryTag}
          categoryPath="pc-gaming-streaming"
        />
      </Flex>
      <ListProductCarousel item={data} />
    </AppContainer>
  );
};

export default HomePC;
