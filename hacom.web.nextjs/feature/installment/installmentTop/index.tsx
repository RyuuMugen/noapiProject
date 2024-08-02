"use client";

import { CartDetail } from "@/model/Cart";
import {
  Checkbox,
  CheckboxProps,
  Divider,
  Flex,
  NumberFormatter,
  Table,
  Text,
} from "@mantine/core";
import { IconCheck, IconCircleCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import style from "./installmentTop.module.scss";
import { InstallmentDataProps } from "@/model/TblInstallment";
import { getCartProduct } from "@/api/apiCart";
import CartItem from "@/common/CartItem/item";
import CartItemInstallment from "@/common/CartItem/itemInstallment";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import Link from "next/link";

const CheckboxIcon: CheckboxProps["icon"] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconCheck {...others} /> : <IconCheck {...others} />;

const InstallmentTop = ({
  dataInstallment,
  formHidden,
  completeHidden,
  setInstallmentItem,
}: {
  dataInstallment: InstallmentDataProps;
  formHidden: boolean;
  completeHidden: boolean;
  setInstallmentItem: React.Dispatch<React.SetStateAction<CartDetail[]>>;
}) => {
  const { totalAmount, setTotalAmount } = useSaleOrder();
  const [values, setValues] = useState<CartDetail[]>([]);
  const allChecked = values.every((value) => value.checked);
  const indeterminate2 = values.every((value) => value.checked) && !allChecked;
  const getItemIndex = (itemId: number) => {
    return values.findIndex((item) => item.id === itemId);
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
    fetchData();
  }, []);

  useEffect(() => {
    setInstallmentItem(values.filter((item) => item.checked === true));
  }, [values]);

  useEffect(() => {
    const checkedItems = values.filter((item) => item.checked);
    const newTotalAmount = checkedItems.reduce(
      (acc, item) => acc + item.itemSalePrice * item.quantity,
      0
    );

    setTotalAmount(newTotalAmount);
  }, [values, setTotalAmount]);

  return (
    <div>
      {completeHidden ? null : (
        <div className={style.completeImage}>
          <div className={style.completeBox}>
            <IconCircleCheck height={20} width={20} />
            <span>ĐẶT HÀNG THÀNH CÔNG</span>
          </div>
        </div>
      )}
      {formHidden ? (
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
            <Table mb={20}>
              <Table.Thead>
                <Table.Tr className={style.selectAll}>
                  <Table.Th style={{ paddingLeft: 31 }} colSpan={3}>
                    <Flex justify={"start"} align={"center"} gap={20}>
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

                      <Text>
                        Quý khách có thể chọn cùng lúc nhiều sản phẩm trên một
                        lần trả góp
                      </Text>
                    </Flex>
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
                  />
                ))}
              </Table.Tbody>
            </Table>
          )}

          <Flex direction={"column"} mb={20} ta={"end"}>
            <Divider my="md" />
            <Flex style={{ alignSelf: "flex-end" }}>
              <Text>Tổng tiền: </Text>
              <Text c={"red"} fw={700}>
                <NumberFormatter
                  value={totalAmount}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
            </Flex>
            <Text>(Các sản phẩm được tích chọn trả góp)</Text>
          </Flex>
        </div>
      ) : (
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
            <Table mb={20}>
              <Table.Tbody className={style.table}>
                {values
                  .filter((item) => item.checked === true)
                  .map((item) => (
                    <CartItemInstallment
                      key={item.id}
                      {...item}
                      handleChangeValue={handleChangeValue}
                    />
                  ))}
              </Table.Tbody>
            </Table>
          )}
          {completeHidden ? (
            <Flex direction={"column"} mb={20} ta={"end"}>
              <Divider my="md" />
              <Flex justify={"space-between"}>
                <Text>
                  Trả trước ({(dataInstallment.prePay / totalAmount) * 100}%){" "}
                </Text>
                <Text c={"red"} fw={700}>
                  <NumberFormatter
                    value={dataInstallment.prePay}
                    thousandSeparator="."
                    decimalSeparator=","
                    suffix="₫"
                  />
                </Text>
              </Flex>
              <Flex mt={10} justify={"space-between"}>
                <Text>Góp mỗi tháng (trong {dataInstallment.month} tháng)</Text>
                <Text c={"red"} fw={700}>
                  <NumberFormatter
                    value={dataInstallment.perMonth}
                    thousandSeparator="."
                    decimalSeparator=","
                    suffix="₫"
                    decimalScale={0}
                  />
                </Text>
              </Flex>
              <Flex mt={10} justify={"space-between"}>
                <Text fw={700} tt="uppercase">
                  Tổng tiền
                </Text>
                <Text c={"red"} fw={700}>
                  <NumberFormatter
                    value={dataInstallment.total}
                    thousandSeparator="."
                    decimalSeparator=","
                    suffix="₫"
                    decimalScale={0}
                  />
                </Text>
              </Flex>
              <Divider my="md" />
              <Flex justify={"space-between"}>
                <Text>
                  Công ty tài chính:{" "}
                  <span style={{ fontWeight: 700 }}>
                    {dataInstallment.company}
                  </span>
                </Text>
                <Text>(Các sản phẩm được tích chọn trả góp)</Text>
              </Flex>
              <Divider my="md" />
            </Flex>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default InstallmentTop;
