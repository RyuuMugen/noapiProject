"use client";
import AppContainer from "@/common/AppContainer";
import Link from "@/common/Link";
import { TblItem } from "@/model/ProductList";
import { Box, Container, Flex, Grid, Text } from "@mantine/core";
import ImageCarousel from "./components/ImageCarousel";
import InfomationBox from "./components/Information";
import { TblUserComment } from "@/model/TblUserComment";
import { TblUserReview } from "@/model/TblUserReview";
import { TblProductDeal } from "@/model/ProductList";
import { useEffect, useState } from "react";
import { postLoggingAction } from "@/api/apiLogging";
import { DataArticle } from "@/model/DataArticle";
import { getListArticle } from "@/api/apiArticle";
import VideoYoutube from "./components/VideoYoutube";
import Details from "./components/Details";
import Reviews from "./components/Reviews";
import Comments from "./components/Comments";
import Specifications from "./components/Specifications";
import NewsCard from "@/common/NewsCard";
import ProductDetailSimilarProduct from "./components/ProductDetailSimilarProduct";
import style from "./productDetail.module.scss";

const ProductDetails = ({
  data,
  dataComment,
  dataReview,
  dataDeal,
  dataProductRelation,
}: productDetailTopProps) => {
  const link = {
    title: `${data?.itemName}`,
    url: dataDeal
      ? `/product-detail/${data?.url}?saleid=${dataDeal.id}`
      : `/product-detail/${data?.url}`,
  };

  const [dataArticle, setDataArticle] = useState<DataArticle[]>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getListArticle("Status=1&Take=4");
      setDataArticle(data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    postLoggingAction({
      userName: localStorage.getItem("userName"),
      actionType: "ViewedProduct",
      actionDetail: `[${data?.id}] ${data?.itemName}`,
    });
    let viewedProducts = localStorage.getItem("viewed-products");

    // Chuyển đổi chuỗi thành mảng, nếu không tồn tại thì khởi tạo mảng mới
    viewedProducts = viewedProducts ? JSON.parse(viewedProducts) : [];

    // Kiểm tra viewedProducts có phải là một mảng không
    if (Array.isArray(viewedProducts)) {
      const isProductExists = viewedProducts.some(
        (product) => product.id === data?.id
      );

      if (!isProductExists) {
        // Thêm id của sản phẩm mới vào mảng
        viewedProducts.push({
          ...data,
        });

        // Lưu danh sách sản phẩm đã xem mới vào localStorage
        localStorage.setItem("viewed-products", JSON.stringify(viewedProducts));
      } else {
        console.log("Product already exists in viewed list.");
      }
    } else {
      console.error("Viewed products data is not an array.");
    }
  }, []);

  return (
    <AppContainer>
      <Container style={{ minWidth: "100%" }} my="md">
        <hr style={{ color: "#D6E4F0" }} />
        <Link link={link} breadcrumbs={data?.breadcrumbs} />
      </Container>
      <div className={style.contentBox}>
        <div className={style.contentBoxLeft}>
          <ImageCarousel data={data || null} />
          <VideoYoutube data={data || null} />
          <Details data={data || null} />
          <Reviews dataItem={data || null} dataReview={dataReview || null} />
          <Comments dataItem={data || null} dataComment={dataComment || null} />
        </div>
        <div className={style.contentBoxRight}>
          <InfomationBox
            data={data || null}
            dataReview={dataReview || null}
            dataComment={dataComment || null}
            dataDeal={dataDeal || null}
            dataProductRelation={dataProductRelation || []}
          />
          <Specifications data={data || null} />
          <Text className={style.headerTitle}>Tin tức mới nhất</Text>

          <Flex wrap={"wrap"} gap={10} mb={100}>
            {dataArticle?.map((newsCard, index) => {
              return (
                <Box key={index} style={{ flexBasis: `calc(50% - 5px)` }}>
                  <NewsCard data={newsCard} />
                </Box>
              );
            })}
          </Flex>
        </div>
      </div>
      <ProductDetailSimilarProduct
        dataProductRelation={dataProductRelation || []}
      />
    </AppContainer>
  );
};

export default ProductDetails;

type productDetailTopProps = {
  data: TblItem | null;
  dataComment: TblUserComment[] | null;
  dataReview: TblUserReview[] | null;
  dataDeal?: TblProductDeal | null;
  dataProductRelation: TblItem[];
};
