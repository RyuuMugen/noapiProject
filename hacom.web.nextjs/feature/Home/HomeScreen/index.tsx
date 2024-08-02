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

const HomeScreen = () => {
  const [data, setData] = useState<TblItem[]>([]);
  const [loading, setLoading] = useState(true);
  const dataCommonCategoryTag = [
    {
      label: "Asus",
      path: "man-hinh-asus",
    },
    {
      label: "Lg",
      path: "man-hinh-lg",
    },
    {
      label: "Dell",
      path: "man-hinh-dell",
    },
    {
      label: "Samsung",
      path: "man-hinh-samsung",
    },
    {
      label: "ViewSonic",
      path: "man-hinh-viewsonic",
    },
    {
      label: "AOC",
      path: "man-hinh-AOC",
    },
    {
      label: "MSI",
      path: "man-hinh-msi",
    },
    {
      label: "HP",
      path: "man-hinh-hp",
    },
    {
      label: "Acer",
      path: "man-hinh-acer",
    },
    {
      label: "Gigabyte",
      path: "man-hinh-gigabyte",
    },
    {
      label: "VSP",
      path: "man-hinh-vsp",
    },
    {
      label: "HKC",
      path: "man-hinh-hkc",
    },
    {
      label: "BenQ",
      path: "man-hinh-benq",
    },
  ];

  useEffect(() => {
    const callGetApi = async () => {
      const callapi = await getDataListProductFull(
        `?Skip=0&Take=10&Active=true&CategoryId=39`
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
  //       if (localStorage.getItem("dataScreenItem") === null) {
  //         const callapi = await getDataListProductFull(
  //           "?Skip=0&Take=10&Active=true&CategoryId=39"
  //         );
  //         if (
  //           !isNullOrUndefined(callapi) &&
  //           !isNullOrUndefined(callapi?.data)
  //         ) {
  //           const dataApi = callapi?.data;
  //           if (dataApi != null && !isNullOrUndefined(dataApi)) {
  //             setData(dataApi);
  //             localStorage.setItem("dataScreenItem", JSON.stringify(dataApi));
  //           }
  //         } else {
  //           console.log("Dữ liệu không tồn tại");
  //         }
  //       } else {
  //         const dataLocal = JSON.parse(
  //           localStorage.getItem("dataScreenItem") || "[]"
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
          <TopicName color="#1F67D2" topicName="Màn hình"></TopicName>
        </Flex>
        <CommonCategoryTag
          data={dataCommonCategoryTag}
          categoryPath="man-hinh-may-tinh"
        />
      </Flex>
      <ListProductCarousel item={data} />
    </AppContainer>
  );
};

export default HomeScreen;
