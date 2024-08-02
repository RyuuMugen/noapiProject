"use client";
import { CartDetail } from "@/model/Cart";
import { CheckboxProps, NumberFormatter, Table, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import style from "./item.module.scss";

type CartItemActions = {
  handleChangeValue: (itemid: number, newValue: number) => void;
  handleDelete?: (itemid: number) => void;
};

const CheckboxIcon: CheckboxProps["icon"] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconCheck {...others} /> : <IconCheck {...others} />;

const CartItem: React.FC<CartDetail & CartItemActions> = ({
  id,
  itemImage,
  itemName,
  itemSalePrice,
  itemPrice,
  quantity,
  checked,
  itemId,
  itemUrl,
  handleChangeValue,
  handleDelete,
}) => {
  const router = useRouter();
  const handleGotoProductDetail = () => {
    router.push(`/product-detail/${itemUrl}`);
  };

  return (
    <Table.Tr key={id}>
      <Table.Td>
        <div className={style.product}>
          <div className={style.imageContainer}>
            <img
              src={itemImage}
              alt="Product Image"
              className={style.img}
              onClick={handleGotoProductDetail}
            />
          </div>
          <div>
            <div className={style.productbox}>
              <Text lineClamp={2} className={style.title}>
                {itemName}
              </Text>
              <div className={style.finalPrice}>
                <Text truncate="end">
                  <span className={style.saleprice}>
                    <NumberFormatter
                      className={style.promotionPrice}
                      value={itemSalePrice}
                      thousandSeparator="."
                      decimalSeparator=","
                      suffix="₫"
                    />
                  </span>
                </Text>
                {itemPrice !== undefined && itemSalePrice !== itemPrice ? (
                  <div className={style.percent}>
                    -{Math.floor(100 - (itemSalePrice / itemPrice) * 100)}%
                  </div>
                ) : null}
              </div>
              {itemPrice !== undefined && itemSalePrice !== itemPrice ? (
                <div>
                  <Text truncate="end">
                    <span className={style.priceSave}>
                      Tiết kiệm:
                      <NumberFormatter
                        className={style.promotionPrice}
                        value={itemPrice - itemSalePrice}
                        thousandSeparator="."
                        decimalSeparator=","
                        suffix="₫"
                      />
                    </span>
                  </Text>
                  <Text truncate="end">
                    Giá chính hãng:
                    <span className={style.price}>
                      <NumberFormatter
                        className={style.promotionPrice}
                        value={itemPrice}
                        thousandSeparator="."
                        decimalSeparator=","
                        suffix="₫"
                      />
                    </span>
                  </Text>
                </div>
              ) : null}

              <Text>SL: {quantity}</Text>
            </div>
          </div>
        </div>
      </Table.Td>
    </Table.Tr>
  );
};

export default CartItem;
