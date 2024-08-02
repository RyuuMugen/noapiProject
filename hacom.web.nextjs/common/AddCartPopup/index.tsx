import { TblItem } from "@/model/ProductList";
import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  NumberFormatter,
  Text,
} from "@mantine/core";
import { modals } from "@mantine/modals";
import Link from "next/link";
import style from "./AddCartPopup.module.scss";
import { useRouter } from "next/navigation";

const AddCartPopup = ({ dataProductRelation }: AddCartPopupProps) => {
  const router = useRouter();

  const handleCloseModals = () => {
    modals.closeAll();
  };

  const cardProductPopup = (item: TblItem, index: number) => (
    <Box key={index} className={style.bundledProductsItem}>
      <Link
        href={{
          pathname: `/product-detail/${item.url}`,
          // query: { id: data.id },
        }}
        onClick={() => handleCloseModals()}
      >
        <Flex justify={"center"} align={"center"} style={{ cursor: "pointer" }}>
          <Image
            src={item.primaryImage || ""}
            alt="image"
            width={160}
            height={160}
          />
        </Flex>
      </Link>

      <Link
        href={{
          pathname: `/product-detail/${item.url}`,
          // query: { id: data.id },
        }}
        onClick={() => handleCloseModals()}
      >
        <Text lineClamp={2} className={style.bundledProductsItemName}>
          {item.itemName || ""}
        </Text>
      </Link>

      {item?.marketPrice ? (
        <Text className={style.oldPrice} td="line-through">
          <NumberFormatter
            value={item?.marketPrice}
            thousandSeparator="."
            decimalSeparator=","
            suffix="₫"
          />
        </Text>
      ) : (
        <Box h={34}></Box>
      )}

      <Text className={style.newPrice}>
        <NumberFormatter
          value={item?.unitSellingPrice ?? ""}
          thousandSeparator="."
          decimalSeparator=","
          suffix="₫"
        />
      </Text>
    </Box>
  );
  return (
    <Flex>
      <Box maw={650}>
        <Flex gap={"md"}>
          <Button
            className={style.btn}
            onClick={() => {
              router.push("/cart"), handleCloseModals();
            }}
          >
            Giỏ hàng
          </Button>
          <Button className={style.btn} onClick={() => handleCloseModals()}>
            Tiếp tục mua hàng
          </Button>
        </Flex>
        <Divider
          my="md"
          size="sm"
          labelPosition="center"
          label={
            <>
              <Text ml={5}>Có thể phù hợp với bạn</Text>
            </>
          }
        />
        <Flex wrap={"wrap"} gap={25}>
          {dataProductRelation
            .slice(0, 3)
            .map((item, index) => cardProductPopup(item, index))}
          {JSON.parse(localStorage.getItem("viewed-products") || "[]")
            .slice(0, 3)
            .map((item: TblItem, index: number) =>
              cardProductPopup(item, index)
            )}
        </Flex>
      </Box>
      <Box className={style.rightBox}>
        <Image
          src={
            "https://hacom.vn/template/july_2021/images/bg_mini_cart_2024.png"
          }
          alt="bg"
        />

        <Text mt={20} fw={700}>
          Mua sắm tại HACOM
        </Text>
        <Text>Siêu ưu đãi mỗi ngày</Text>
      </Box>
    </Flex>
  );
};

export default AddCartPopup;

type AddCartPopupProps = {
  dataProductRelation: TblItem[];
};
