"use client";
import slide_1 from "@/assets/slide (1).png";
import slide_2 from "@/assets/slide (2).png";
import slide_3 from "@/assets/slide (3).png";
import slide_4 from "@/assets/slide (4).png";
import slide_5 from "@/assets/slide (5).png";
import Ship from "@/assets/ship.png";
import Ship2 from "@/assets/ship2.png";
import Ship3 from "@/assets/ship3.png";
import Ship4 from "@/assets/ship4.png";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import style from "./ShipContent.module.scss";
import { Container, Grid, GridCol } from "@/library/mantine";
import { useViewportSize } from "@mantine/hooks";
import { postLoggingAction } from "@/api/apiLogging";

export default function ShipContent() {
  const { height, width } = useViewportSize();
  const images = [
    { src: slide_1, href: "https://khuyenmai.hacom.vn/loa" },
    { src: slide_3, href: "https://khuyenmai.hacom.vn/vua-ghe" },
    {
      src: slide_4,
      href: "/product-detail/may-choi-game-sony-playstation-5-ps5-slim-digital",
    },
    { src: slide_5, href: "https://khuyenmai.hacom.vn/gia-treo" },
    { src: slide_2, href: "https://khuyenmai.hacom.vn/loa" },
    { src: slide_3, href: "https://khuyenmai.hacom.vn/vua-ghe" },
    {
      src: slide_4,
      href: "/product-detail/may-choi-game-sony-playstation-5-ps5-slim-digital",
    },
    { src: slide_5, href: "https://khuyenmai.hacom.vn/gia-treo" },
  ];
  const slides = images.map((slide, index) => {
    return (
      <Carousel.Slide key={index}>
        <a
          key={index}
          href={slide.href}
          onClick={() =>
            postLoggingAction({
              userName: localStorage.getItem("userName") || "",
              actionType: "HomePageClickedLink",
              actionDetail: slide.href,
            })
          }
        >
          <Image alt="" src={slide.src} className={style.image} />
        </a>
      </Carousel.Slide>
    );
  });
  return (
    <div className={style.grid}>
      <div className={style.shipContainer}>
        <div className={style.shipBox}>
          <div className={style.shipItem}>
            <Image src={Ship} alt=""></Image>
            <div className={style.shipContent}>
              <span>Giao hàng</span>
              <span>HOẢ TỐC 2H</span>
            </div>
          </div>
          <div className={style.shipItem}>
            <Image src={Ship2} alt=""></Image>
            <div className={style.shipContent}>
              <span>Giao hàng</span>
              <span>MIỄN PHÍ TOÀN QUỐC</span>
            </div>
          </div>
          <div className={style.shipItem}>
            <Image src={Ship3} alt=""></Image>
            <div className={style.shipContent}>
              <span>Trả góp</span>
              <span>LÃI SUẤT 0%</span>
            </div>
          </div>
          <div className={style.shipItem}>
            <Image src={Ship4} alt=""></Image>
            <div className={style.shipContent}>
              <span>Trả bảo hành</span>
              <span>TẬN NƠI SỬ DỤNG</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.ads}>
        <Carousel
          slideSize={width && width > 1660 ? "20%" : "25%"}
          align="start"
          loop
          controlSize={40}
          slideGap={width && width > 1660 ? 19 : 10}
          style={{
            viewport: { height: "100%" },
          }}
        >
          {slides}
        </Carousel>
      </div>
    </div>
  );
}
