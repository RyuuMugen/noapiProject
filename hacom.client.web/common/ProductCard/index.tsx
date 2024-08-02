// ProductCard.js
"use client";
import GuaranteeIcon from "@/assets/guarantee.png";
import {
  Box,
  Button,
  Image,
  NumberFormatter,
  Rating,
  Text,
  Tooltip,
} from "@mantine/core";
import { updateCart } from "@/redux/slices/cartSlice";
import Image2 from "next/image";
import NullImage from "@/assets/NullImage.png";
import style from "./productCard.module.scss";
import {
  IconCheck,
  IconClockHour4,
  IconPhone,
  IconShield,
  IconShoppingCartPlus,
} from "@tabler/icons-react";
import { TblItem } from "@/model/ProductList";
import Link from "next/link";
import { createCartProduct, totalCartPrice } from "@/api/apiCart";
import { useDispatch } from "react-redux";

interface ProductCardProps {
  data: TblItem;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  const unitSellingPrice = data?.unitSellingPrice ?? 0;
  const marketPrice = data?.marketPrice ?? 0;
  const percent = (1 - unitSellingPrice / (marketPrice ?? 1)) * 100;
  const dispatch = useDispatch();
  const handleAddCart = async () => {
    const userData = localStorage.getItem("userInfo");
    const id = userData ? JSON.parse(userData).data.customerId : 0;
    const newData = {
      customerId: id,
      tblShoppingCartDetailCommand: [
        {
          itemCode: data?.itemCode,
          itemName: data?.itemName,
          itemId: data?.id,
          quantity: 1,
          itemPrice: data?.marketPrice,
          itemSalePrice: data?.unitSellingPrice,
          itemImage: data?.primaryImage,
          totalAmount: data?.unitSellingPrice || 0,
          itemUrl: data?.url,
        },
      ],
    };
    await createCartProduct(newData);

    // fetchDataHeader();
    const totalData = await totalCartPrice(id);
    const newCartHeader = {
      totalItem: totalData?.data?.quantity,
      totalPrice: totalData?.data?.totalAmount,
    };
    dispatch(updateCart(newCartHeader));

    // Add a delay of 10 seconds after the cart operations
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  const renderContent = () => {
    if (
      !data?.attribute4 ||
      data?.attribute4 === "buy" ||
      data?.attribute4 === "buyandrepair"
    ) {
      return (
        <>
          {data?.storeAvailables?.length > 0 ? (
            <div className={style.availables}>
              <Text className={style.inventoryText} c={"#2cc067"}>
                <IconCheck size={15} />
                Sẵn hàng
              </Text>
              <Button
                onClick={() => handleAddCart()}
                className={style.addCartButton}
              >
                <IconShoppingCartPlus />
              </Button>
            </div>
          ) : (
            <div className={style.availables}>
              <Text className={style.inventoryText} c={"#0074da"}>
                <IconPhone size={16} />
                Đặt hàng
              </Text>
              {/* <Button
                onClick={() => handleAddCart()}
                className={style.addCartButton}
              >
                <IconShoppingCartPlus />
              </Button> */}
            </div>
          )}
        </>
      );
    } else if (data?.attribute4 === "repair") {
      return (
        <>
          <Text className={style.inventoryText} c={"red"}>
            <IconPhone size={16} />
            Đặt dịch vụ: 1800.8091
          </Text>
        </>
      );
    }
  };

  return (
    // <a className={style.productCard} href={data?.link}>
    <div className={style.productCard}>
      <Box className={style.infoBox}>
        <Link
          className={style.link}
          href={data?.url ? `/product-detail/${data.url}` : "#"}
        >
          <Box className={style.imgBox}>
            {data?.primaryImage ? (
              <Image src={data?.primaryImage} alt={data?.itemName || ""} />
            ) : (
              <Image2 src={NullImage} alt={data?.itemName ?? "Product"} />
            )}
          </Box>
          <Box className={style.ratingBox}>
            <Rating size="xs" value={data?.rate || 5} fractions={2} readOnly />
            <div className={style.code}>
              <span className={style.codeText}>Mã:</span>
              {data?.itemCode}
            </div>
          </Box>

          <Box className={style.nameBox}>
            <Tooltip
              position="bottom-start"
              label={data?.itemName}
              color="rgba(36, 36, 36, 1)"
            >
              <h3 className={style.nameText}>{data?.itemName}</h3>
            </Tooltip>
            <Box className={style.priceBox}>
              {marketPrice >= unitSellingPrice &&
                marketPrice !== 0 &&
                unitSellingPrice !== 0 && (
                  <>
                    <span className={style.prePrice}>
                      <NumberFormatter
                        thousandSeparator
                        value={marketPrice}
                        suffix="đ"
                      />
                    </span>{" "}
                    <span className={style.prePrice2}>
                      (tiết kiệm {percent.toFixed(0)}%)
                    </span>
                  </>
                )}
            </Box>
            <Box className={style.priceBox}>
              <span className={style.price}>
                <NumberFormatter
                  thousandSeparator
                  value={
                    unitSellingPrice === 0 ? marketPrice | 0 : unitSellingPrice
                  }
                  suffix="đ"
                />
              </span>
            </Box>
          </Box>
        </Link>
        {renderContent()}
      </Box>
    </div>
  );
};

export default ProductCard;
