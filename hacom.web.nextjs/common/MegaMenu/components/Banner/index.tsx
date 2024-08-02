import CarouselCommon from "@/common/Carousel";
import { Grid, Image } from "@mantine/core";
// import { useEffect, useState } from "react";
import { BannerModels } from "@/model/MegaMenu";
import style from "./banner.module.scss";

const Banner = ({ dataBanner }: { dataBanner: BannerModels }) => {
  return (
    <Grid className={style.grid}>
      <Grid.Col className={style.banner} span={{ base: 12, xs: 8 }}>
        <CarouselCommon data={dataBanner?.slide || []} />
      </Grid.Col>
      <Grid.Col className={style.special} span={{ base: 12, xs: 4 }}>
        <Image
          src={dataBanner.slideSide && dataBanner.slideSide[0]?.fileBanner}
          alt="banner home intro"
        />
      </Grid.Col>
      <Grid.Col className={style.gridi} span={{ base: 12, xs: 4 }}>
        <Image
          src={dataBanner.slideBottom && dataBanner.slideBottom[0]?.fileBanner}
          alt="banner home intro"
        />
      </Grid.Col>
      <Grid.Col className={style.gridVideo} span={{ base: 12, xs: 4 }}>
        <iframe src="https://www.youtube.com/embed/PjIOphCrzyY"></iframe>
      </Grid.Col>
      <Grid.Col className={style.gridi} span={{ base: 12, xs: 4 }}>
        <Image
          src={dataBanner.slideBottom && dataBanner.slideBottom[1]?.fileBanner}
          alt="banner home intro"
        />
      </Grid.Col>
    </Grid>
  );
};

export default Banner;
