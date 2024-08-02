import Slide2 from "@/assets/carousel_1.png";
import Slide1 from "@/assets/img-news-main-detail.png";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "./EmblaCarousel";
import { getListBannerSlideData } from "@/api/apiBanner";
import { tblBanner } from "@/model/Banner";
import { useEffect, useState } from "react";
interface dataProps {
  data: tblBanner[];
}
const BannerCarousel: React.FC<dataProps> = ({ data }) => {
  const OPTIONS: EmblaOptionsType = {};
  return (
    <>
      <EmblaCarousel slides={data} options={OPTIONS} />
    </>
  );
};

export default BannerCarousel;
