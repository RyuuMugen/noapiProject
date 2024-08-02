"use client";
import AppContainer from "@/common/AppContainer";
import CartItem from "@/common/CartItem/";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import { Box, Flex, Grid } from "@mantine/core";
import RightBox from "./Rightbox";
import style from "./bottompage.module.scss";

export default function Lefttoppage() {
  const { totalAmount, setTotalAmount } = useSaleOrder();

  return (
    <div className={style.box}>
      <AppContainer>
        <Flex py={40} gap={10}>
          <Box style={{ width: "75%" }}>
            <CartItem
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
            />
          </Box>
          <Box style={{ width: "25%" }}>
            <RightBox totalAmount={totalAmount} />
          </Box>
        </Flex>
      </AppContainer>
    </div>
  );
}
