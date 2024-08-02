import ProductCard from "@/common/CardProductNormal";
import { TblItem } from "@/model/ProductList";
import { Carousel } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import style from "./ProductCarousel.module.scss";

type RectangleCardProps = {
  item: TblItem[];
};

const ProductCarousel = ({ item }: RectangleCardProps) => {
  const autoplay = useRef(
    Autoplay({ delay: 6000, stopOnMouseEnter: true, stopOnInteraction: false })
  );

  const slides = item.map((item: any, index: any) => (
    <Carousel.Slide className={style.slide} key={index}>
      <ProductCard data={item} type="productCarousel2" />
    </Carousel.Slide>
  ));
  return (
    <div className={style.main}>
      <Carousel
        classNames={style}
        slideSize="16.6666%"
        align="start"
        controlSize={50}
        controlsOffset={0}
        slideGap={15}
        loop
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

export default ProductCarousel;
