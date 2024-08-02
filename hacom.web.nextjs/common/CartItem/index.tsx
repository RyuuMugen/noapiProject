import { getCartProduct, deleteCartProduct } from "@/api/apiCart";
import { CartDetail } from "@/model/Cart";
import IconDelete from "@/assets/iconDelete.svg";
import { Checkbox, CheckboxProps, Table, Text } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import style from "./CartIteam.module.scss";
import CartItem from "./item";
import { getCustomerInfo } from "@/api/apiCustomer";
import { useCardItems } from "@/useContext/CardContext";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import { useAuthContext } from "@/useContext/useAuthContext";
import Link from "next/link";

type CartItemListProps = {
  totalAmount: number;
  setTotalAmount: React.Dispatch<React.SetStateAction<number>>;
};

const CheckboxIcon: CheckboxProps["icon"] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconCheck {...others} /> : <IconCheck {...others} />;

const CartItemList: React.FC<CartItemListProps> = ({
  totalAmount,
  setTotalAmount,
}) => {
  const { fetchDataHeader } = useCardItems();
  const [values, setValues] = useState<CartDetail[]>([]);
  const { setSaleDetailOrder } = useSaleOrder();
  const allChecked = values.every((value) => value.checked);
  const indeterminate2 = values.every((value) => value.checked) && !allChecked;
  const getItemIndex = (itemId: number) => {
    return values.findIndex((item) => item.id === itemId);
  };
  const { userInfo, handleGetUserInfo } = useAuthContext();
  const [userName, setUserName] = useState("");

  const handleCheckInfoUser = async (userLogin?: string) => {
    if (!userLogin) {
      const customerInfo = await getCustomerInfo();
      const userName = customerInfo?.data?.userName;
      setUserName(userName);
    } else {
      setUserName(userLogin);
    }
  };
  const fetchData = async () => {
    try {
      const userData = localStorage.getItem("userInfo");
      const id = userData ? JSON.parse(userData).data.customerId : 0;
      const cartData = await getCartProduct(id);
      const cartDetailModel = cartData.data.tblShoppingCartDetailModel;
      if (cartDetailModel) {
        const cartItem = cartDetailModel.map((item: any) => ({
          ...item,
          checked: true,
          totalAmount: (item?.quantity || 0) * (item?.itemSalePrice || 0),
        }));
        setValues(cartItem);
      } else {
        console.log("Dữ liệu không tồn tại");
      }
    } catch (error) {
      console.log("Lỗi khi lấy dữ liệu giỏ hàng", error);
    }
  };
  const handleChangeCheckbox = (itemId: number, newValue: boolean) => {
    setValues((currentValues) => {
      const valuesIndex = getItemIndex(itemId);
      const updatedValues = [...currentValues];
      updatedValues[valuesIndex] = {
        ...currentValues[valuesIndex],
        checked: !newValue,
      };
      return updatedValues;
    });
  };
  const handleChangeValue = (itemId: number, newValue: number) => {
    setValues((currentValues) => {
      const valuesIndex = getItemIndex(itemId);
      const updatedValues = [...currentValues];
      updatedValues[valuesIndex] = {
        ...currentValues[valuesIndex],
        quantity: newValue,
        totalAmount: newValue * currentValues[valuesIndex].itemSalePrice,
      };
      return updatedValues;
    });
  };

  useEffect(() => {
    const checkedItems = values.filter((item) => item.checked);
    const newTotalAmount = checkedItems.reduce(
      (acc, item) => acc + item.itemSalePrice * item.quantity,
      0
    );

    setSaleDetailOrder(
      checkedItems.map((item) => {
        const { checked, ...restGroup } = item;
        return { ...restGroup, cartDetailId: item.id };
      })
    );
    setTotalAmount(newTotalAmount);
  }, [values, setTotalAmount]);

  const handleDeleteAll = async () => {
    const data = values.map((item) => item.id);
    const dataItem = values.map((item) => ({
      id: item.itemId,
      itemName: item.itemName,
    }));
    await deleteCartProduct(data, dataItem);
    setValues([]);
    fetchDataHeader();
  };
  const handleDeleteItem = async (item: CartDetail) => {
    await deleteCartProduct(
      [item.id],
      [{ id: item.itemId, itemName: item.itemName }]
    );
    fetchData();
    fetchDataHeader();
  };

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    handleCheckInfoUser();
  }, [userInfo]);

  return (
    <div>
      {values.length === 0 ? (
        <div className={style.empty}>
          <div>
            <p>Giỏ hàng trống</p>
            <span>
              Đến trang chủ để lựa chọn mặt hàng
              <Link href="/home">Trang chủ</Link>
            </span>
          </div>
        </div>
      ) : (
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th style={{ paddingLeft: 31 }}>
                <Checkbox
                  icon={CheckboxIcon}
                  checked={allChecked}
                  indeterminate={indeterminate2}
                  label="CHỌN TẤT CẢ"
                  onChange={() => {
                    setValues((currentValues) =>
                      currentValues.map((value) => ({
                        ...value,
                        checked: !allChecked,
                      }))
                    );
                  }}
                />
              </Table.Th>
              <Table.Th
                className={style.dele}
                style={{ paddingLeft: 0 }}
              ></Table.Th>
              <Table.Th className={style.dele}>
                <Text truncate="end">
                  <p className={style.deleteall} onClick={handleDeleteAll}>
                    <Image src={IconDelete} alt="delete" />
                    XÓA TOÀN BỘ
                  </p>
                </Text>
              </Table.Th>
            </Table.Tr>
            <Table.Tr className={style.tablerow}>
              <Table.Th className={style.th1}>Sản phẩm</Table.Th>
              <Table.Th className={style.th2}>Số lượng</Table.Th>
              <Table.Th className={style.th3}>Đơn giá</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody className={style.table}>
            {values.map((item) => (
              <CartItem
                key={item.id}
                {...item}
                handleChangeCheckbox={() =>
                  handleChangeCheckbox(item.id, item.checked)
                }
                handleChangeValue={handleChangeValue}
                handleDelete={() => handleDeleteItem(item)}
              />
            ))}
          </Table.Tbody>
        </Table>
      )}
    </div>
  );
};

export default CartItemList;
