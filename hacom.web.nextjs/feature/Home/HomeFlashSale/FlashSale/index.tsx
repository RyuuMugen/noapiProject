"use client";
import SaleText from "@/assets/flashSale.png";
import AppContainer from "@/common/AppContainer";
import CardProductFlashSale from "@/common/CardProductFlashSale";
import { Flex } from "@/library/mantine";
import { DataProductDeal } from "@/model/ProductList";
import { Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./HomeFlashSale.module.scss";

const HomeFlashSale = (data: DataProductDeal) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [displayCount, setDisplayCount] = useState(5);
  const router = useRouter();
  const handleClickViewAllDeal = () => {
    router.push("/deal");
  };

  function handleSortByDate(arrayObject: any[]): any[] {
    arrayObject.sort((a: any, b: any) => {
      // Chuyển đổi toDate từ chuỗi sang đối tượng Date
      let dateA = new Date(a.toDate as string);
      let dateB = new Date(b.toDate as string);
      // So sánh hai đối tượng Date
      return dateA.getTime() - dateB.getTime();
    });
    return arrayObject;
  }
  const dateSort = handleSortByDate(data.data);
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      switch (true) {
        case newWidth < 905:
          setDisplayCount(2);
          break;
        case newWidth < 1200:
          setDisplayCount(3);
          break;
        case newWidth < 1495:
          setDisplayCount(4);
          break;
        default:
          setDisplayCount(5);
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
      <div>
        <Flex justify="space-between" align="center" direction="column">
          {/* {data.title[0].fileBanner ? (
            <img
              className={style.image}
              src={
                typeof data.title[0].fileBanner === "string"
                  ? data.title[0].fileBanner
                  : "#"
              }
            />
          ) : ( */}
          <Image src={SaleText} alt="" />
          {/* )} */}
        </Flex>
        <Flex justify={"center"} gap={20} style={{ paddingBottom: 50 }}>
          {dateSort.slice(0, displayCount).map((item: any, index: number) => {
            return <CardProductFlashSale key={index} data={item} type="sale" />;
          })}
        </Flex>

        <div className={style.tag}>
          <Flex
            align={"center"}
            justify={"center"}
            style={{ cursor: "pointer" }}
            onClick={handleClickViewAllDeal}
          >
            <div className={style.button}>
              <Text className={style.allTag}>Xem tất cả sản phẩm</Text>
              <IconChevronRight stroke={2} size={20} fill="#fff" color="#fff" />
            </div>
          </Flex>
        </div>
      </div>
    </AppContainer>
  );
};

export default HomeFlashSale;
