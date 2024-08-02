import { TblItemImageCommand } from "@/model/ProductList";
import { Image } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import React from "react";
import style from "./embla.module.scss";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  item: TblItemImageCommand;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, index, onClick, item } = props;
  const { width } = useViewportSize();

  return (
    <>
      <div
        className={`${style.embla_thumbs__slide}
        ${selected && style.embla_thumbs__slide__selected}`}
        onClick={onClick}
      >
        <Image
          className={style.embla__slide__img}
          src={item.image || ""}
          alt=""
        />
      </div>
    </>
  );
};
