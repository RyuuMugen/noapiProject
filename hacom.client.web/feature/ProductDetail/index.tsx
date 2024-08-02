"use client";
import { TblItem } from "@/model/ProductList";
import { TblUserComment } from "@/model/TblUserComment";
import { TblUserReview } from "@/model/TblUserReview";
import ImageGroup from "./components/ImageGroup";
import ProductDetailTopRight from "./components/ProductDetailTopRight";
import Reviews from "@/common/Reviews";
import Comments from "@/common/Comments";
import Specifications from "./components/Specifications";
import style from "./productDetail.module.scss";
import ProductCarousel from "@/common/CarouselProductCard";
import ContentBox from "./components/Content";
import ArticleListCard from "@/common/ArticleCard";
import InformationCard from "@/common/InformationCard";
import Gifts from "./components/Gifts";
import Summary from "./components/Summary";
import StoreAvailables from "./components/StoreAvailables";
import { useMediaQuery, useViewportSize } from "@mantine/hooks";
import QuestionCard from "@/common/FrequentlyAskedQuestions";
import TabProduct from "./components/ProductTab";
import ArticleList from "./components/Article";

type productDetailPageProps = {
  data: TblItem | null;
  dataComment: TblUserComment[] | null;
  dataReview: TblUserReview[] | null;
  dataProductList: TblItem[];
};

const ProductDetailPage = ({
  data,
  dataComment,
  dataReview,
  dataProductList,
}: productDetailPageProps) => {
  const matches = useMediaQuery("(max-width: 800px)");
  return (
    <>
      {matches ? (
        <div className={style.flexBox800px}>
          <ImageGroup data={data || null} />
          <ProductDetailTopRight data={data || null} />
          <Gifts data={data || null} />
          <Summary data={data || null} />
          <StoreAvailables data={data || null} />
          <TabProduct data={dataProductList} />
          <Specifications data={data || null} />
          <ContentBox data={data?.description || null} />
          {/* <QuestionCard /> */}
          <Reviews dataItem={data || null} dataReview={dataReview || null} />
          <Comments dataItem={data || null} dataComment={dataComment || null} />
        </div>
      ) : (
        <div className={style.flexBox}>
          <div className={style.leftBox}>
            <ImageGroup data={data || null} />
            <ContentBox data={data?.description || null} />
            {/* <QuestionCard /> */}
            <Reviews dataItem={data || null} dataReview={dataReview || null} />
            <Comments
              dataItem={data || null}
              dataComment={dataComment || null}
            />
            <TabProduct data={dataProductList} />
          </div>
          <div className={style.rightBox}>
            <ProductDetailTopRight data={data || null} />
            <Gifts data={data || null} />
            <Summary data={data || null} />
            <StoreAvailables data={data || null} />
            <Specifications data={data || null} />
            <ArticleList />
            <InformationCard />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailPage;
