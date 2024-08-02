import React from "react";
import Link from "next/link";
import { Text, Button } from "@mantine/core";

const CodForm = () => {
  return (
    <div>
      <ul>
        <li>
          <Text style={{ fontSize: 16 }} m={"xs"}>
            Đơn hàng đã được tiếp nhận thành công
          </Text>
        </li>
        <li>
          <Text style={{ fontSize: 16 }} m={"xs"}>
            Vui lòng để ý điện thoại!
          </Text>
        </li>
        <li>
          <Text style={{ fontSize: 16 }} m={"xs"}>
            Nhân viên sẽ gọi điện xác nhận lại thông tin trước khi giao hàng
          </Text>
        </li>
      </ul>

      <Button
        component={Link}
        href="/home"
        ml={10}
        radius={8}
        gradient={{ from: "blue", to: "teal", deg: 90 }}
      >
        Mua thêm sản phẩm khác
      </Button>
    </div>
  );
};

export default CodForm;
