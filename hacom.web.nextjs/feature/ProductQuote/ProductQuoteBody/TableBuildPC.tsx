import { TblBuildPcListItemBuild } from "@/model/TblBuildPc";
import {
  Button,
  Flex,
  Image,
  NumberFormatter,
  Table,
  Text,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import style from "./ProductQuoteBody.module.scss";
import { isNullOrUndefined } from "@/extension/StringExtension";
import Link from "next/link";

type TableBuildPCProps = {
  handlePrint: (
    event?: unknown,
    content?: () => React.ReactInstance | null
  ) => void;
};

const TableBuildPC = ({ handlePrint }: TableBuildPCProps) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [listItemBuildPc, setListItemBuildPc] = useState<
    (TblBuildPcListItemBuild | null)[]
  >([]);
  const [pricePCSale, setPricePCSale] = useState<{
    range: number;
    sale: number;
  }>({ range: 0, sale: 0 });
  const [isBuildPcSale, setIsBuildPcSale] = useState(false);

  const rows = listItemBuildPc?.map((item, index) => {
    return !isNullOrUndefined(item) ? (
      <Table.Tr key={item?.id}>
        <Table.Td>{index + 1}</Table.Td>
        <Table.Td>{item?.skuCode}</Table.Td>
        <Table.Td>
          <Image src={item?.image} alt="image" />
        </Table.Td>
        <Table.Td>
          <Text fw={700} style={{ fontSize: 14 }}>
            {item?.itemName}
          </Text>
        </Table.Td>
        <Table.Td>{item?.warrantyDescription}</Table.Td>
        <Table.Td>{item?.quantity}</Table.Td>
        <Table.Td>
          <NumberFormatter
            value={item?.unitPrice || 0}
            thousandSeparator="."
            decimalSeparator=","
            suffix="₫"
          />
        </Table.Td>
        <Table.Td>
          <Text fw={700}>
            <NumberFormatter
              value={(item?.unitPrice || 0) * (item?.quantity || 0)}
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </Text>
        </Table.Td>
      </Table.Tr>
    ) : null;
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedData = localStorage.getItem("BuildPc");

      const parsedData = storedData ? JSON.parse(storedData) : null;

      if (parsedData && Array.isArray(parsedData.listItemBuildPc)) {
        const filteredList = parsedData.listItemBuildPc.filter(
          (item: typeof listItemBuildPc) => item !== null
        );
        setListItemBuildPc(filteredList[parsedData.selectedConfiguration]);
      } else {
        setListItemBuildPc([]);
      }
      setPricePCSale(
        storedData ? JSON.parse(storedData)?.pricePCSale : { range: 0, sale: 0 }
      );

      setIsBuildPcSale(
        storedData ? JSON.parse(storedData)?.isBuildPcSale : false
      );

      setTotalAmount(storedData ? JSON.parse(storedData)?.totalPrice : 0);
    }
  }, [
    typeof window !== "undefined" &&
      window.localStorage &&
      localStorage.getItem("BuildPc"),
  ]);

  return (
    <div>
      <Table
        horizontalSpacing="sm"
        // highlightOnHover
        withTableBorder
        withColumnBorders
        mb={35}
        classNames={style}
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={"3%"}>STT</Table.Th>
            <Table.Th w={"8%"}>Mã SP</Table.Th>
            <Table.Th w={"10%"}>Hình ảnh</Table.Th>
            <Table.Th>Tên sản phẩm</Table.Th>
            <Table.Th w={"10%"}>Bảo hành</Table.Th>
            <Table.Th w={"6%"}>Số lượng</Table.Th>
            <Table.Th w={"9%"}>Đơn giá</Table.Th>
            <Table.Th w={"13%"}>Thành tiền</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {rows}
          {isBuildPcSale && (
            <Table.Tr>
              <Table.Td colSpan={8}>
                <Text>
                  Khuyến mại kèm theo: Tặng tiền mặt{" "}
                  <Text span fw={700} c={"#d2171b"}>
                    <NumberFormatter
                      value={pricePCSale.sale}
                      thousandSeparator="."
                      decimalSeparator=","
                      suffix="₫"
                    />
                  </Text>
                </Text>
              </Table.Td>
            </Table.Tr>
          )}

          <Table.Tr>
            <Table.Td colSpan={5}></Table.Td>
            <Table.Td colSpan={2}>
              <Text fw={700}>Phí vận chuyển</Text>
            </Table.Td>
            <Table.Td>
              <Text fw={700} c={"#d2171b"}>
                <NumberFormatter
                  value={0}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
            </Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Td colSpan={5}></Table.Td>
            <Table.Td colSpan={2}>
              <Text fw={700}>Chi phí khác</Text>
            </Table.Td>
            <Table.Td>
              <Text fw={700} c={"#d2171b"}>
                <NumberFormatter
                  value={0}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
            </Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Td colSpan={5}></Table.Td>
            <Table.Td colSpan={2}>
              <Text fw={700}>Tổng tiền đơn hàng</Text>
            </Table.Td>
            <Table.Td>
              <Text fw={700} c={"#d2171b"}>
                <NumberFormatter
                  value={totalAmount}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
            </Table.Td>
          </Table.Tr>

          <Table.Tr>
            <Table.Td colSpan={5}></Table.Td>
            <Table.Td colSpan={2}>
              <Text fw={700}>Tổng tiền thanh toán sau KM tiền mặt</Text>
            </Table.Td>
            <Table.Td>
              <Text fw={700} c={"#d2171b"}>
                <NumberFormatter
                  value={
                    isBuildPcSale
                      ? totalAmount - pricePCSale?.sale
                      : totalAmount
                  }
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
            </Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
      <Flex justify={"flex-end"} mb={30}>
        <Flex gap={10}>
          <Link href="/buildpc">
            <p className={style.btnBack}>Xây lại cấu hình</p>
          </Link>
          <p className={style.btnConfirm} onClick={handlePrint}>
            In đơn hàng
          </p>
        </Flex>
      </Flex>
    </div>
  );
};

export default TableBuildPC;
