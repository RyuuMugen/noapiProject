import {
  Box,
  Flex,
  Grid,
  Image,
  List,
  NumberFormatter,
  Text,
} from "@mantine/core";
import style from "./CartOrder.module.scss";
import iconVoucher from "@/assets/iconVoucherRed.svg";
import iconPresent from "@/assets/icon-present.svg";
import iconNewInbox from "@/assets/iconNewInbox.svg";
import iconGreenColor from "@/assets/iconGreenColor.svg";
import iconGuarantee from "@/assets/iconGuarantee.svg";
import { getCartProduct } from "@/api/apiCart";
import { useEffect, useState } from "react";
import { CartDetail } from "@/model/Cart";
import { tblSaleOrderDetailCommands } from "@/model/TblSaleOrder";

const dataVoucher = [
  {
    title: "Tiếng anh trẻ em",
    price: 1000000,
  },
  {
    title: "Tiếng Charm Spa",
    price: 1000000,
  },
  {
    title: "Coupon trà sữa KOI",
    price: 500000,
  },
];
const dataVoucher2 = [
  {
    title: "Túi chống sốc",
  },
  {
    title: "Thẻ game world cyber",
  },
];

const CartOrder = ({ data }: { data: tblSaleOrderDetailCommands[] | null }) => {
  const [dataCartDetail, setDataCartDetail] = useState<
    tblSaleOrderDetailCommands[]
  >([]);

  useEffect(() => {
    if (data) setDataCartDetail(data);
  }, [data]);

  return (
    <>
      {dataCartDetail?.map((item, index) => (
        <Box mt={41} key={index}>
          <Grid>
            <Grid.Col span={{ base: 12, xs: 2.5 }}>
              {item.itemImage ? (
                <Image
                  src={item.itemImage}
                  alt="image"
                  width={212.16}
                  height={212.16}
                />
              ) : null}
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 5 }}>
              <Text className={style.metaTitle} my={"sm"}>
                {item.itemName}
              </Text>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 1.5 }}>
              <Flex justify={"center"}>
                <Text mt={12}>{item.quantity}</Text>
              </Flex>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 3 }}>
              <Flex justify={"center"} gap={"xs"} mt={12}>
                <Text>
                  <NumberFormatter
                    className={style.priceAfter}
                    value={item.itemSalePrice || 0}
                    thousandSeparator="."
                    decimalSeparator=","
                    suffix="₫"
                  />
                </Text>
                <Text>
                  <NumberFormatter
                    className={style.priceBefore}
                    value={item.itemPrice || 0}
                    thousandSeparator="."
                    decimalSeparator=","
                    suffix="₫"
                  />
                </Text>
              </Flex>
            </Grid.Col>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default CartOrder;
