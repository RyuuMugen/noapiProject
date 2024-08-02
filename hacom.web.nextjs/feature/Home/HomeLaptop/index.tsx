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
const HomeLaptop = () => {
  const [data, setData] = useState<TblItem[]>([]);
  const [loading, setLoading] = useState(true);

  const dataCommonCategoryTag = [
    {
      label: "Asus",
      path: "laptop-gaming-asus",
    },
    {
      label: "Acer",
      path: "laptop-acer-gaming",
    },
    {
      label: "HP",
      path: "laptop-gaming-hp",
    },
    {
      label: "Dell",
      path: "laptop-dell-gaming",
    },
    {
      label: "Lenovo",
      path: "laptop-lenovo-gaming",
    },
    {
      label: "MSI",
      path: "laptop-msi-gaming",
    },
    {
      label: "Gigabyte",
      path: "laptop-gigabyte",
    },
  ];

  useEffect(() => {
    const callGetApi = async () => {
      const callapi = await getDataListProductFull(
        `?Skip=0&Take=10&Active=true&CategoryId=1087`
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
  //       if (localStorage.getItem("dataLaptopItem") === null) {
  //         const callapi = await getDataListProductFull(
  //           "?Skip=0&Take=10&Active=true&CategoryId=1087"
  //         );
  //         if (
  //           !isNullOrUndefined(callapi) &&
  //           !isNullOrUndefined(callapi?.data)
  //         ) {
  //           const dataApi = callapi?.data;
  //           if (dataApi != null && !isNullOrUndefined(dataApi)) {
  //             setData(dataApi);
  //             localStorage.setItem("dataLaptopItem", JSON.stringify(dataApi));
  //           }
  //         } else {
  //           console.log("Dữ liệu không tồn tại");
  //         }
  //       } else {
  //         const dataLocal = JSON.parse(
  //           localStorage.getItem("dataLaptopItem") || "[]"
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
          <TopicName color="#1F67D2" topicName="Laptop"></TopicName>
        </Flex>
        <CommonCategoryTag
          data={dataCommonCategoryTag}
          categoryPath="laptop-gaming-do-hoa"
        />
      </Flex>
      <ListProductCarousel item={data} />
    </AppContainer>
  );
};

export default HomeLaptop;
