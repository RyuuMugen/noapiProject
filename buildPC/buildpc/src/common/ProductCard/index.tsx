"use client";
import { ItemShopeModel } from "@/model/ItemsShopeModel";
import {
  Button,
  Flex,
  Image,
  NumberFormatter,
  Rating,
  Text,
} from "@mantine/core";
import Link from "next/link";
import style from "./productCard.module.scss";

function ProductCard({ data }: dataProps) {
  return (
    <Flex className={style.itemProductPopup} direction="column">
      <div className={style.imgProductPopup}>
        <Image src={data?.image} alt="product" width={225} height={225} />
      </div>
      <Flex className={style.infoProductPopup} direction="column">
        <Rating pt={5} pb={5} defaultValue={5} readOnly />
        <Text lineClamp={2} fw={700} c="#303841" size="sm">
          {data?.name}
        </Text>
        <Text fw={700} c="#EE4D2D" pt={10} pb={10} size="sm">
          <NumberFormatter
            value={data?.price || 0}
            thousandSeparator
            suffix="₫"
          />
        </Text>
        <Button
          component={Link}
          href={`${data?.linkAffiliate}`}
          color="rgb(238, 77, 45)"
          className={style.btnChoosePopup}
        >
          Xem ngay
        </Button>
      </Flex>
    </Flex>
  );
}

export default ProductCard;

type dataProps = {
  data: ItemShopeModel;
};
