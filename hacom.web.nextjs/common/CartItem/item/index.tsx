"use client";
import IconDelete from "@/assets/iconDelete.svg";
import More from "@/common/AddUserLike";
import { useRouter } from "next/navigation";
import { CartDetail } from "@/model/Cart";
import {
  Checkbox,
  CheckboxProps,
  NumberFormatter,
  SimpleGrid,
  Table,
  Text,
  Box,
  NumberInput,
} from "@mantine/core";
import { IconCheck, IconMinus, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import style from "./item.module.scss";

type CartItemActions = {
  handleChangeCheckbox: (itemid: number, newValue: boolean) => void;
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
  handleChangeCheckbox,
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
          <div>
            <Checkbox
              icon={CheckboxIcon}
              ml={33}
              checked={checked}
              onChange={(event) =>
                handleChangeCheckbox(
                  id ?? "undefined",
                  event.currentTarget.checked
                )
              }
            />
          </div>

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
              {/* <More idItem={itemId} /> */}
            </div>
          </div>
        </div>
      </Table.Td>
      <Table.Td className={style.productinfo1}>
        <div
          className={style.numinput}
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "100px",
          }}
        >
          <NumberInput
            rightSection={
              <IconMinus
                size={18}
                className={style.iconMinus}
                onClick={() => handleChangeValue(id, Math.max(1, quantity - 1))}
              />
            }
            leftSection={
              <IconPlus
                size={18}
                className={style.iconPlus}
                onClick={() => handleChangeValue(id, Math.max(1, quantity + 1))}
              />
            }
            value={quantity}
            radius={6}
            min={1}
            variant="unstyled"
            allowDecimal={false}
            w={80}
          />
        </div>
      </Table.Td>
      <Table.Td className={style.productinfo}>
        <SimpleGrid cols={1} spacing="xs" verticalSpacing="xs">
          {itemSalePrice !== itemPrice ? (
            <Text truncate="end">
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
          ) : (
            <Text truncate="end">
              <Box h={13}></Box>
            </Text>
          )}
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
          {handleDelete && (
            <button
              className={style.deletebuttom}
              onClick={() => handleDelete(id)}
            >
              <Image src={IconDelete} alt="delete" />
              <span>Xóa</span>
            </button>
          )}
        </SimpleGrid>
      </Table.Td>
    </Table.Tr>
  );
};

export default CartItem;
