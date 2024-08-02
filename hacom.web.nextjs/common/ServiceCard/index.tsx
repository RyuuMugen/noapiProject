"use client";
import { Card, Text, Rating } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import style from "./ServiceCard.module.scss";
const ServiceCard = ({ title, image, rating, price }: ServiceCardProps) => {
  return (
    <Card radius={12} withBorder padding="0" className={style.item}>
      <Card.Section>
        <Link
          href={`/service-detail?title=${title}`}
          className={style.itemImage}
        >
          <Image src={image} alt={title} />
        </Link>
      </Card.Section>
      <div className={style.itemInfo}>
        <Rating
          value={rating}
          fractions={2}
          readOnly
          className={style.itemInfoRating}
        />
        <Link
          href={`/service-detail?title=${title}`}
          className={style.itemInfoTitle}
        >
          <Text c="#1F2123" fw={700} size="18px">
            {title}
          </Text>
        </Link>
        <Text size="22px" c="#1F67D2" fw={700}>
          {price}
        </Text>
      </div>
    </Card>
  );
};
export default ServiceCard;
type ServiceCardProps = {
  title: string;
  image: any;
  rating: number;
  price: string | number;
};
