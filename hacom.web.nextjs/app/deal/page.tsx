"use client";

import { getDataListProductFlashSale } from "@/api/apiProduct";
import AppContainer from "@/common/AppContainer";
import CardProductFlashSale from "@/common/CardProductFlashSale";
import FooterCustomer from "@/common/FooterCustomer";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { TblProductDeal } from "@/model/ProductList";
import { Box, Flex } from "@mantine/core";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import style from "./deal.module.scss";
import Link from "@/common/Link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const ProductDeal = () => {
  const nowTime = new Date();
  const [data, setData] = useState<TblProductDeal[]>([]);
  const [isDataReady, setIsDataReady] = useState(false);
  const [isFlashSaleTime, setIsFlashSaleTime] = useState(false);
  const toDate = data[0]?.toDate;
  const fromDate = data[0]?.fromDate;

  const link = {
    title: "Khuyễn mãi",
    url: "/deal",
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
  const dateSort = handleSortByDate(data);

  useEffect(() => {
    const callDataProduct = async () => {
      const callApi = await getDataListProductFlashSale(
        `?Status=A&Skip=0&Take=1000&SearchType=0`
      );
      if (!isNullOrUndefined(callApi) && !isNullOrUndefined(callApi?.data)) {
        const dataApi = callApi?.data;
        if (dataApi != null && !isNullOrUndefined(dataApi)) {
          setData(dataApi);
        } else {
          // NotificationExtension.Fails("Dữ liệu không tồn tại");
          console.log("Dữ liệu không tồn tại");
        }
        close();
      } else {
        // NotificationExtension.Fails("Dữ liệu không tồn tại");
        console.log("Dữ liệu không tồn tại");
      }
    };

    callDataProduct();
  }, []);

  useEffect(() => {
    if (data) {
      if (fromDate && toDate) {
        if (new Date(fromDate) > nowTime) {
          setIsDataReady(true);
        } else if (new Date(fromDate) < nowTime && nowTime < new Date(toDate)) {
          setIsFlashSaleTime(true);
          setIsDataReady(true);
        }
      } else setIsDataReady(false);
    }
  }, [data]);

  return (
    <div className={roboto.className}>
      <div className={style.background}>
        <AppContainer>
          <Link link={link} />
          <Box mt={50} mih={600}>
            <Flex
              style={{ paddingBottom: 50 }}
              gap={20}
              rowGap={20}
              columnGap={20}
              wrap={"wrap"}
            >
              {isDataReady &&
                dateSort?.map((item: TblProductDeal, index: number) => (
                  <CardProductFlashSale
                    data={item}
                    key={index}
                    isFlashSale
                    isFlashSaleTime={isFlashSaleTime}
                  />
                ))}
            </Flex>
          </Box>

          <FooterCustomer />
        </AppContainer>
      </div>
    </div>
  );
};

export default ProductDeal;
