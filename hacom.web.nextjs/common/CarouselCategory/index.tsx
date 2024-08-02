"use client";
import { tblBanner } from "@/model/Banner";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Box } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import classes from "./Caroulsel.module.scss";

const CarouselCategory = ({ data }: { data: tblBanner[] }) => {
  const dataArray = Object?.values(data);
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })
  );
  const changeImageUrl = (url: string) => {
    if (url.includes("192.168.3.96:9500")) {
      return url.replace("192.168.3.96:9500", "image-dev.hacom.vn");
    }
    if (url.includes("image-dev.hacom.vn:9500")) {
      return url.replace("image-dev.hacom.vn:9500", "image-dev.hacom.vn");
    }
    return url;
  };

  const slides = dataArray.map((item: any, index: number) => (
    <Carousel.Slide key={index}>
      {/* <Link href={item.bannerUrlTarget}> */}
      <Box className={classes.card}>
        <img src={changeImageUrl(item.fileBanner)} alt="" />
      </Box>
      {/* </Link> */}
    </Carousel.Slide>
  ));
  const widthValue = dataArray.length > 1 ? "50%" : "100%";
  return (
    <div className={classes.carousel}>
      <Carousel
        slideSize={widthValue}
        loop
        height={"250px"}
        slideGap="xs"
        classNames={classes}
        align="start"
        plugins={[autoplay.current]}
        previousControlIcon={
          <IconChevronLeft
            color="white"
            style={{ width: "40px", height: "36px" }}
          />
        }
        nextControlIcon={
          <IconChevronRight
            color="white"
            style={{ width: "40px", height: "36px" }}
          />
        }
      >
        {slides}
      </Carousel>
    </div>
  );
};

export default CarouselCategory;
