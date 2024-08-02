"use client";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";

import { TblItem, TblItemImageCommand } from "@/model/ProductList";
import { Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import React, { useCallback, useEffect, useState } from "react";
import { Thumb } from "./EmblaCarouselThumbsButton";
import style from "./embla.module.scss";
type PropType = {
  slides: TblItemImageCommand[] | [];
  options?: EmblaOptionsType;
  data: TblItem | null;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options, data } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false }),
  ]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className={style.embla}>
      <div className={style.titleBox}>
        <h1 className={style.title}>
          {data?.itemName}
          <span className={style.code}>Mã sản phẩm: {data?.itemCode}</span>
        </h1>
      </div>

      <div className={style.embla__viewport} ref={emblaMainRef}>
        <div className={style.embla__container}>
          {slides?.map((item, index) => (
            <div className={style.embla__slide} key={index}>
              <Image
                className={style.embla__slide__img}
                src={item.image || ""}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className={style.embla_thumbs}>
        <div className={style.embla_thumbs__viewport} ref={emblaThumbsRef}>
          <div className={style.embla_thumbs__container}>
            {slides?.map((item, index) => (
              <Thumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
                item={item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
