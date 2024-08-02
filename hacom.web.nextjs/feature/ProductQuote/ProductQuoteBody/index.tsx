"use client";

import { Flex, Table, Text } from "@mantine/core";
import style from "./ProductQuoteBody.module.scss";
import TableBuildPC from "./TableBuildPC";
import TableSaleOrder from "./TableSaleOrder";

type ProductQuoteBodyProps = {
  type: string | undefined;
  handlePrint: (
    event?: unknown,
    content?: () => React.ReactInstance | null
  ) => void;
};

const ProductQuoteBody = ({ type, handlePrint }: ProductQuoteBodyProps) => {
  const currentTime = new Date();

  // Lấy ngày, tháng, năm
  const date = currentTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  // Lấy giờ, phút
  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
  // Kết hợp thành định dạng cuối cùng
  const formattedDateTime = `${date}, ${time}`;

  return (
    <div className={style.box}>
      <Text className={style.title}>BẢNG BÁO GIÁ VẬT TƯ, THIẾT BỊ</Text>
      <Flex justify={"space-between"} m={"15 0"}>
        <Text fw={700}>Ngày báo giá: {formattedDateTime}</Text>
        <Text fw={700}>
          Đơn vị tính:{" "}
          <Text fw={700} span c={"#d2171b"}>
            VNĐ
          </Text>
        </Text>
      </Flex>

      {type && type === "buildPc" ? (
        <TableBuildPC handlePrint={handlePrint} />
      ) : type === "order" ? (
        <TableSaleOrder handlePrint={handlePrint} />
      ) : (
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
        </Table>
      )}

      <Text>
        {" "}
        <Text span fw={700} c={"#d2171b"}>
          Quý khách lưu ý:
        </Text>{" "}
        Giá bán, khuyến mại của sản phẩm và tình trạng còn hàng có thể bị thay
        đổi bất cứ lúc nào mà không kịp báo trước.
      </Text>
    </div>
  );
};

export default ProductQuoteBody;
