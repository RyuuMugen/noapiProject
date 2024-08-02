import { isNullOrUndefined } from "@/extension/StringExtension";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import { Box, Flex, Image, NumberFormatter, Table, Text } from "@mantine/core";
import React from "react";
import style from "./ProductQuoteBody.module.scss";

type TableSaleOrderProps = {
  handlePrint: (
    event?: unknown,
    content?: () => React.ReactInstance | null
  ) => void;
};

const TableSaleOrder = ({ handlePrint }: TableSaleOrderProps) => {
  const { SaleOrderDetail, totalAmount, shipfeeSaleOrder } = useSaleOrder();

  const rows = SaleOrderDetail?.map((item, index) =>
    !isNullOrUndefined(item) ? (
      <Table.Tr key={item?.id}>
        <Table.Td>{index + 1}</Table.Td>
        <Table.Td>{item?.itemCode}</Table.Td>
        <Table.Td>
          <Image src={item?.itemImage} alt="image" className={style.image} />
        </Table.Td>
        <Table.Td>
          <Text fw={700} style={{ fontSize: 14 }}>
            {item?.itemName}
          </Text>
          {item.promotion && (
            <Box className={style.promotion}>
              <Text fw={600} mt={3}>
                Khuyến mại:
              </Text>
              <Text dangerouslySetInnerHTML={{ __html: item.promotion }} />
            </Box>
          )}
        </Table.Td>
        <Table.Td>{item?.warrantyDescription}</Table.Td>
        <Table.Td>{item?.quantity}</Table.Td>
        <Table.Td>
          <NumberFormatter
            value={item?.itemSalePrice || 0}
            thousandSeparator="."
            decimalSeparator=","
            suffix="₫"
          />
        </Table.Td>
        <Table.Td>
          <Text fw={700}>
            <NumberFormatter
              value={
                item.totalAmount ||
                (item?.itemSalePrice || 0) * (item?.quantity || 0)
              }
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </Text>
        </Table.Td>
      </Table.Tr>
    ) : null
  );

  return (
    <div>
      <Table
        horizontalSpacing="sm"
        highlightOnHover
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

          <Table.Tr>
            <Table.Td colSpan={5}></Table.Td>
            <Table.Td colSpan={2}>
              <Text fw={700}>Phí vận chuyển</Text>
            </Table.Td>
            <Table.Td>
              <Text fw={700} c={"#d2171b"}>
                <NumberFormatter
                  value={shipfeeSaleOrder}
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
                  value={totalAmount + shipfeeSaleOrder}
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
          <p className={style.btnConfirm} onClick={handlePrint}>
            In đơn hàng
          </p>
        </Flex>
      </Flex>
    </div>
  );
};

export default TableSaleOrder;
