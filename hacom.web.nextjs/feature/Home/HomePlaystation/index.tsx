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

const HomePlaystation = () => {
  const [data, setData] = useState<TblItem[]>([]);
  const [loading, setLoading] = useState(true);
  const dataCommonCategoryTag = [
    {
      label: "PS5",
      path: "may-choi-game-ps5",
    },
    {
      label: "PS4",
      path: "may-choi-game-ps4",
    },
    {
      label: "Microsoft Xbox",
      path: "may-choi-game-microsoft-xbox",
    },
    {
      label: "Nintendo",
      path: "may-choi-game-nintendo-switch",
    },
    {
      label: "Đĩa Game",
      path: "dia-game",
    },
    {
      label: "Tay Cầm Chơi Game",
      path: "tay-cam-choi-game",
    },
    {
      label: "Phụ Kiện Cho Tay Cầm",
      path: "phu-kien-cho-tay-cam",
    },
  ];

  useEffect(() => {
    const callGetApi = async () => {
      const callapi = await getDataListProductFull(
        `?Skip=0&Take=10&Active=true&CategoryId=992`
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
  //       if (localStorage.getItem("dataPlaystationItem") === null) {
  //         const callapi = await getDataListProductFull(
  //           "?Skip=0&Take=10&Active=true&CategoryId=992"
  //         );
  //         if (
  //           !isNullOrUndefined(callapi) &&
  //           !isNullOrUndefined(callapi?.data)
  //         ) {
  //           const dataApi = callapi?.data;
  //           if (dataApi != null && !isNullOrUndefined(dataApi)) {
  //             setData(dataApi);
  //             localStorage.setItem(
  //               "dataPlaystationItem",
  //               JSON.stringify(dataApi)
  //             );
  //           }
  //         } else {
  //           console.log("Dữ liệu không tồn tại");
  //         }
  //       } else {
  //         const dataLocal = JSON.parse(
  //           localStorage.getItem("dataPlaystationItem") || "[]"
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
          <TopicName color="#1F67D2" topicName="PS, XBOX, Nintendo"></TopicName>
        </Flex>
        <CommonCategoryTag
          data={dataCommonCategoryTag}
          categoryPath="may-choi-game-tay-game"
        />
      </Flex>
      <ListProductCarousel item={data} />
    </AppContainer>
  );
};

export default HomePlaystation;
