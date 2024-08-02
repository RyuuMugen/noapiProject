import CarouselCommon from "@/common/Carousel";
import { Grid, Image } from "@mantine/core";
// import { useEffect, useState } from "react";
import { BannerModels } from "@/model/MegaMenu";
import Link from "next/link";
import style from "./demoBanner.module.scss";

const Banner = ({ dataBanner }: { dataBanner: BannerModels }) => {
  const changeImageUrl = (url: string) => {
    if (url.includes("192.168.3.96:9500")) {
      return url.replace("192.168.3.96:9500", "image-dev.hacom.vn");
    }
    if (url.includes("image-dev.hacom.vn:9500")) {
      return url.replace("image-dev.hacom.vn:9500", "image-dev.hacom.vn");
    }
    return url;
  };

  return (
    <div className={style.grid}>
      <div className={style.banner}>
        <CarouselCommon data={dataBanner?.slide || []} />
      </div>
      <div className={style.special}>
        <Link
          href={
            dataBanner.slideSide && dataBanner.slideSide[0]?.bannerUrl
              ? changeImageUrl(dataBanner.slideSide[0]?.bannerUrl)
              : "#"
          }
        >
          <Image
            src={
              dataBanner?.slideSide && dataBanner?.slideSide[0]?.fileBanner
                ? changeImageUrl(
                    dataBanner?.slideSide[0]?.fileBanner.toString()
                  )
                : ""
            }
            alt="banner home intro"
          />
        </Link>
      </div>
      <div className={style.gridi}>
        <Link
          href={
            dataBanner.slideBottom && dataBanner.slideBottom[0]?.bannerUrl
              ? changeImageUrl(dataBanner.slideBottom[0]?.bannerUrl)
              : "#"
          }
        >
          <Image
            src={
              dataBanner.slideBottom && dataBanner?.slideBottom[0]?.fileBanner
                ? changeImageUrl(
                    dataBanner?.slideBottom[0]?.fileBanner.toString()
                  )
                : ""
            }
            alt="banner home intro"
          />
        </Link>
      </div>
      <div className={style.gridVideo}>
        <iframe src="https://www.youtube.com/embed/PjIOphCrzyY"></iframe>
      </div>
      <div className={style.gridi}>
        <Link
          href={
            dataBanner.slideBottom && dataBanner.slideBottom[1]?.bannerUrl
              ? changeImageUrl(dataBanner.slideBottom[1]?.bannerUrl)
              : "#"
          }
        >
          <Image
            src={
              dataBanner.slideBottom && dataBanner?.slideBottom[1]?.fileBanner
                ? changeImageUrl(
                    dataBanner?.slideBottom[1]?.fileBanner.toString()
                  )
                : ""
            }
            alt="banner home intro"
          />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
