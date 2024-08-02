import style from "./ProductQuoteHeader.module.scss";
import Image from "next/image";
import logo from "@/assets/logo-hacom-compressed4.svg";
import { Flex, Text } from "@mantine/core";

const ProductQuoteHeader = () => {
  return (
    <Flex className={style.box}>
      <Image style={{ cursor: "pointer" }} src={logo} alt="logo" />

      <Flex direction={"column"}>
        <Text className={style.title}>
          CÔNG TY CỔ PHẦN ĐẦU TƯ CÔNG NGHỆ HACOM
        </Text>
        <Text>
          <Text span fw={700} c={"#d2171b"}>
            Trụ sở:{" "}
          </Text>
          131 Lê Thanh Nghị, Q. Hai Bà Trưng, TP. Hà Nội
        </Text>

        <Flex gap={30}>
          <Text>
            <Text span fw={700} c={"#d2171b"}>
              Tel:{" "}
            </Text>
            19001903
          </Text>
          <Text>
            <Text span fw={700} c={"#d2171b"}>
              Email:{" "}
            </Text>
            info@hacom.vn
          </Text>
        </Flex>

        <Text>
          <Text span fw={700} c={"#d2171b"}>
            Website:{" "}
          </Text>
          www.hacom.vn
        </Text>
      </Flex>
    </Flex>
  );
};

export default ProductQuoteHeader;
