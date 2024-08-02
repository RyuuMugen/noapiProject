"use client";
import { getDataListProductFull } from "@/api/apiProduct";
import iconCategory1 from "@/assets/VGA.png";
import iconCategory2 from "@/assets/VGA2.png";
import iconCategory3 from "@/assets/VGA3.png";
import iconCategory4 from "@/assets/VGA4.png";
import iconCategory5 from "@/assets/VGA5.png";
import iconCategory6 from "@/assets/VGA6.png";
import iconCategory8 from "@/assets/VGA8.png";
import iconCategory7 from "@/assets/VGA9.png";
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

const HomeMic = () => {
  const { width } = useViewportSize();
  const [data, setData] = useState<TblItem[]>([]);
  const [loading, setLoading] = useState(true);

  const dataCategory = [
    {
      img: iconCategory1,
      title: "Bộ chia VGA",
      idCategory: 545,
      categoryCode: "bo-chia-vga",
    },
    {
      img: iconCategory2,
      title: "Túi đựng phụ kiện",
      idCategory: 1349,
      categoryCode: "tui-dung-phu-kien",
    },
    {
      img: iconCategory3,
      title: "Phụ kiện góc gaming",
      idCategory: 1122,
      categoryCode: "phu-kien-goc-gaming",
    },
    {
      img: iconCategory4,
      title: "Ổ cứng SSD",
      idCategory: 164,
      categoryCode: "o-cung-ssd",
    },
    {
      img: iconCategory5,
      title: "CPU",
      idCategory: 31,
      categoryCode: "cpu-bo-vi-xu-ly",
    },
    {
      img: iconCategory6,
      title: "Ram LED",
      idCategory: 32,
      categoryCode: "ram-bo-nho-trong",
    },
    {
      img: iconCategory7,
      title: "Tản nhiệt",
      idCategory: 68,
      categoryCode: "quat-tan-nhiet",
    },
    {
      img: iconCategory8,
      title: "Case Cooler Master",
      idCategory: 35,
      categoryCode: "vo-case",
    },
  ];

  const dataCommonCategoryTag = [
    {
      label: "Loa",
      path: "loa-may-tinh",
    },
    {
      label: "Loa Bluetooth",
      path: "loa-bluetooth",
    },
    {
      label: "Tai Nghe",
      path: "tai-nghe",
    },
    {
      label: "Tai Nghe Có Dây",
      path: "tai-nghe-co-day",
    },
    {
      label: "Tai Nghe Không Dây",
      path: "tai-nghe-khong-day",
    },
    {
      label: "Microphone",
      path: "micro-phone",
    },
    {
      label: "Thiết Bị Studio, Stream",
      path: "thiet-bi-studio-stream",
    },
  ];

  useEffect(() => {
    const callGetApi = async () => {
      const callapi = await getDataListProductFull(
        `?Skip=0&Take=10&Active=true&CategoryId=41`
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
  //       if (localStorage.getItem("dataMicItem") === null) {
  //         const callapi = await getDataListProductFull(
  //           "?Skip=0&Take=10&Active=true&CategoryId=41"
  //         );
  //         if (
  //           !isNullOrUndefined(callapi) &&
  //           !isNullOrUndefined(callapi?.data)
  //         ) {
  //           const dataApi = callapi?.data;
  //           if (dataApi != null && !isNullOrUndefined(dataApi)) {
  //             setData(dataApi);
  //             localStorage.setItem("dataMicItem", JSON.stringify(dataApi));
  //           }
  //         } else {
  //           console.log("Dữ liệu không tồn tại");
  //         }
  //       } else {
  //         const dataLocal = JSON.parse(
  //           localStorage.getItem("dataMicItem") || "[]"
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
          <TopicName color="#1F67D2" topicName="Loa, tai nghe, Mic"></TopicName>
        </Flex>
        <CommonCategoryTag
          data={dataCommonCategoryTag}
          categoryPath="thiet-bi-nghe-nhin"
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

export default HomeMic;
