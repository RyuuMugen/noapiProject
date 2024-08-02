"use client";
import { EmblaOptionsType } from "embla-carousel";
import React from "react";
import EmblaCarousel from "./EmblaCarousel";
import { TblItem } from "@/model/ProductList";

interface BannerCarouselDemoProps {
  data: TblItem[];
  rows: number;
  auto?: boolean;
  minWidth?: boolean;
  detail?: boolean;
}
const ProductCarousel: React.FC<BannerCarouselDemoProps> = ({
  data,
  rows,
  auto,
  minWidth,
  detail,
}) => {
  const OPTIONS: EmblaOptionsType = { align: "start" };
  return (
    <>
      <EmblaCarousel
        data={data || []}
        options={OPTIONS}
        rows={rows}
        auto={auto}
        minWidth={minWidth}
        detail={detail}
      />
    </>
  );
};

export default ProductCarousel;
