import { Flex, Text } from "@mantine/core";
import style from "./ProductQuoteFooter.module.scss";

const ProductQuoteFooter = () => {
  return (
    <Flex className={style.box}>
      <div>
        <Text>Để biết thêm chi tiết, vui lòng liên hệ</Text>
        <Text>Hotline: 1900 1903 (8h00-21h30 hàng ngày)</Text>
      </div>
      <Text className={style.title}>HACOM CHÂN THÀNH CẢM ƠN QUÝ KHÁCH</Text>
    </Flex>
  );
};

export default ProductQuoteFooter;
