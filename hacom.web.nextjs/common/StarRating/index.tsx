"use client";
import { MantineSize, Rating } from "@mantine/core";
import { useState } from "react";
import starRatingStyle from "./StarRating.module.scss";

const StarRating: React.FC<StarRatingProps> = ({
  averageStar,
  starNumber,
  readonly,
  size,
}) => {
  const [star, setStar] = useState<number>(averageStar);
  return (
    <div className={starRatingStyle.main}>
      <Rating
        value={averageStar}
        fractions={10}
        onChange={setStar}
        readOnly={readonly}
        size={size}
      />
      <p className={starRatingStyle.title}>({starNumber})</p>
    </div>
  );
};

export default StarRating;

type StarRatingProps = {
  averageStar: number;
  starNumber?: number;
  readonly?: boolean;
  size?: MantineSize;
};
