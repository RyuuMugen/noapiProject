import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Group,
  Highlight,
  List,
  NumberFormatter,
  Text,
} from "@mantine/core";
import styles from "./Warranty.module.scss";
import { NotificationExtension } from "@/extension/NotificationExtension";
import sharedVariables from "../sharedVariables/sharedVariables";

const PurchasedOrder = ({
  dataDetailOrder,
  PurchasedOrder,
  handleOrderSelection,
}: any) => {
  const [selectedOrders, setSelectedOrders] = useState<any[]>([]);

  const getIdDetail = (order: any) => {
    PurchasedOrder(order);
    if (order !== null) {
      handleOrderSelection(order);
      sharedVariables.isFormSubmitted = true;
      setSelectedOrders((prevSelectedOrders) => [...prevSelectedOrders, order]);
    } else {
      NotificationExtension.Fails("Chọn thất bại!");
    }
  };

  return (
    <Box className={styles.container}>
      <Box pt={20} className={styles.content}>
        {dataDetailOrder.length ? (
          <>
            <List type="ordered">
              {dataDetailOrder.map((item: any, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <Box mt={10} mb={10}>
                      <List.Item mt={10}>
                        <Group gap="sm" wrap="wrap">
                          <Highlight fw={700} highlight="Tên đơn hàng:">
                            Thanh toán bằng:
                          </Highlight>
                          {item.pay_Status}
                        </Group>
                        <Group mt={10} gap="sm" wrap="wrap">
                          <Highlight
                            fw={700}
                            color="orange"
                            highlight="Tổng tiền:"
                          >
                            Tổng tiền:
                          </Highlight>
                          <NumberFormatter
                            thousandSeparator="."
                            decimalSeparator=","
                            value={item.total_Amount}
                            suffix=" VNĐ"
                          />
                        </Group>
                        <Group mt={10} gap="sm" wrap="wrap">
                          <Highlight
                            fw={700}
                            color="orange"
                            highlight="Ngày xuất đơn:"
                          >
                            Ngày xuất đơn:
                          </Highlight>
                          {item.order_Date}
                        </Group>
                        <Button
                          variant="filled"
                          color={"rgba(41, 127, 207, 1)"}
                          size="xs"
                          mt={10}
                          onClick={() => getIdDetail(item)}
                          disabled={selectedOrders.includes(item)} // Thêm disabled prop
                        >
                          {selectedOrders.includes(item) ? "Đã chọn" : "Chọn"}
                        </Button>
                      </List.Item>
                    </Box>
                    <Divider size="md" />
                  </React.Fragment>
                );
              })}
            </List>
          </>
        ) : (
          <Text>Chưa có đơn hàng nào tại đây.</Text>
        )}
      </Box>
    </Box>
  );
};

export default PurchasedOrder;
