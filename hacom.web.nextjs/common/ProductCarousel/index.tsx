"use client";
import ProductCard from "@/common/CardProductNormal";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { Carousel } from "@mantine/carousel";
import { useEffect, useState, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";
import Loader from "@/common/Loader";
import { IconChevronRight } from "@tabler/icons-react";
import { useHeaderContext } from "@/useContext/useContextSearch";
import style from "./ProductCarousel.module.scss";

type RectangleCardProps = {
  item: {
    title: string;
    idCategory: number;
    categoryCode: string;
    data: [];
  };
};

const ProductCarousel = ({ item }: RectangleCardProps) => {
  const autoplay = useRef(
    Autoplay({ delay: 6000, stopOnMouseEnter: true, stopOnInteraction: false })
  );
  const router = useRouter();
  const { setCategorySearch } = useHeaderContext();
  const handleRedirectToListCategory = () => {
    setCategorySearch({
      categoryName: item.title.toLowerCase(),
      categoryCode: item.categoryCode,
      categoryId: item.idCategory,
    });
    router.push(`/collection/${item.categoryCode}`);
  };

  const isDataReady = !isNullOrUndefined(item.data) && item.data.length > 0;

  const slides = isDataReady
    ? item.data.map((item: any, index: any) => (
        <Carousel.Slide key={index}>
          <ProductCard data={item} type="productCarousel" />
        </Carousel.Slide>
      ))
    : [];

  return (
    <div className={style.main}>
      <div className={style.titleBox}>
        <div className={style.title}>{item.title}</div>
      </div>
      {isDataReady && (
        <Carousel
          slideSize="100%"
          align="start"
          loop
          controlSize={40}
          slideGap={20}
          plugins={[autoplay.current]}
        >
          {slides}
        </Carousel>
      )}
      <div className={style.buttonBox}>
        <button className={style.button} onClick={handleRedirectToListCategory}>
          Xem tất cả sản phẩm <IconChevronRight size={12} color="white" />
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
