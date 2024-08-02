"use client";
import { useEffect, useState } from "react";
import { getDataListProductFull } from "@/api/apiProduct";
import AppContainer from "@/common/AppContainer";
import CardProductNormal from "@/common/CardProductNormal";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { Flex, Text } from "@/library/mantine";
import Loader from "@/common/Loader";
import style from "./HomeRecommend.module.scss";

const HomeRecommend = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [displayCount, setDisplayCount] = useState(12);
  const isDataReady = !isNullOrUndefined(data) && data.length > 0;
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (localStorage.getItem("dataRecommendItem") === null) {
          const callapi = await getDataListProductFull(
            "?Skip=0&Take=12&Active=true&SaleOffStatus=Y"
          );
          if (
            !isNullOrUndefined(callapi) &&
            !isNullOrUndefined(callapi?.data)
          ) {
            const dataApi = callapi?.data;
            if (dataApi != null && !isNullOrUndefined(dataApi)) {
              setData(dataApi);
              localStorage.setItem(
                "dataRecommendItem",
                JSON.stringify(dataApi)
              );
            }
          } else {
            console.log("Dữ liệu không tồn tại");
          }
        } else {
          const dataLocal = JSON.parse(
            localStorage.getItem("dataRecommendItem") || "[]"
          );
          setData(dataLocal);
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  function handleSortById(arrayObject: any) {
    arrayObject.sort(function (a: any, b: any) {
      return b.id - a.id;
    });
    return arrayObject;
  }

  const dataSort = handleSortById(data);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      switch (true) {
        case newWidth < 905:
          setDisplayCount(4);
          break;
        case newWidth < 1195:
          setDisplayCount(6);
          break;
        case newWidth < 1490:
          setDisplayCount(8);
          break;
        case newWidth < 1780:
          setDisplayCount(10);
          break;
        default:
          setDisplayCount(12);
          break;
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContainer>
      <div className={style.saleBackground}>
        <Flex justify="space-between" align="center" direction="column">
          <Text className={style.text}>SẢN PHẨM DÀNH CHO BẠN</Text>
        </Flex>
        {loading && (
          <div>
            <Loader />
          </div>
        )}
        {isDataReady && (
          <Flex
            justify={"center"}
            style={{ paddingBottom: 50 }}
            gap={20}
            rowGap={20}
            columnGap={20}
            wrap={"wrap"}
          >
            {dataSort
              ?.slice(0, displayCount)
              .map((item: any, index: number) => {
                return (
                  <CardProductNormal key={index} data={item} type="recommend" />
                );
              })}
          </Flex>
        )}
      </div>
    </AppContainer>
  );
};

export default HomeRecommend;
