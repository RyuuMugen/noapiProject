"use client";

import { getDataListProductFull } from "@/api/apiProduct";
import AppContainer from "@/common/AppContainer";
import CommonCategoryTag from "@/common/CommonCategoryTag";
import ListProductCarousel from "@/common/ListProductCarousel";
import TopicName from "@/common/TopicName";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { TblItem } from "@/model/ProductList";
import { Flex } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { useEffect, useState } from "react";

const HomeMouse = () => {
  const { width } = useViewportSize();
  const [data, setData] = useState<TblItem[]>([]);
  const [loading, setLoading] = useState(true);

  const dataCommonCategoryTag = [
    {
      label: "Bàn Phím Cơ",
      path: "ban-phim-co",
    },
    {
      label: "Bàn Phím Gaming",
      path: "ban-phim-choi-game",
    },
    {
      label: "Bàn Phím Phổ Thông",
      path: "ban-phim-gia-re",
    },
    {
      label: "Chuột Gaming",
      path: "chuot-choi-game",
    },
    {
      label: "Chuột phổ thông",
      path: "chuot-may-tinh-gia-re",
    },
    {
      label: "Bàn Di Chuột",
      path: "ban-di-chuot-gaming",
    },
    {
      label: "Bộ Bàn Phím & Chuột",
      path: "bo-ban-phim-chuot",
    },
  ];

  useEffect(() => {
    const callGetApi = async () => {
      const callapi = await getDataListProductFull(
        `?Skip=0&Take=10&Active=true&CategoryId=170`
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
  //       if (localStorage.getItem("dataMouseItem") === null) {
  //         const callapi = await getDataListProductFull(
  //           "?Skip=0&Take=10&Active=true&CategoryId=170"
  //         );
  //         if (
  //           !isNullOrUndefined(callapi) &&
  //           !isNullOrUndefined(callapi?.data)
  //         ) {
  //           const dataApi = callapi?.data;
  //           if (dataApi != null && !isNullOrUndefined(dataApi)) {
  //             setData(dataApi);
  //             localStorage.setItem("dataMouseItem", JSON.stringify(dataApi));
  //           }
  //         } else {
  //           console.log("Dữ liệu không tồn tại");
  //         }
  //       } else {
  //         const dataLocal = JSON.parse(
  //           localStorage.getItem("dataMouseItem") || "[]"
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
          <TopicName color="#1F67D2" topicName="Bàn phím chuột"></TopicName>
        </Flex>
        <CommonCategoryTag
          data={dataCommonCategoryTag}
          categoryPath="ban-phim-chuot"
        />
      </Flex>
      <ListProductCarousel item={data} />
    </AppContainer>
  );
};

export default HomeMouse;
