import { Box, Flex, NumberFormatter, Space, Table, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useEffect, useState } from "react";
import OrderList from "./ListItemOrder";
import OrderCancel from "./CancelOrder";
import style from "./infoSaleOder.module.scss";

type InfoSaleOderProps = {
  dataSaleOder: any;
  handleFetchDataSaleOder: () => void;
};

const InfoSaleOder = ({
  dataSaleOder,
  handleFetchDataSaleOder,
}: InfoSaleOderProps) => {
  const [limit, setLimit] = useState(6);

  const handleMore = () => {
    if (limit < dataSaleOder.length) {
      setLimit(limit + 4);
    } else {
      setLimit(dataSaleOder.length);
    }
  };
  const handleHidden = () => {
    if (limit > 6 && limit <= 9) {
      setLimit(6);
    } else if (limit > 9) {
      setLimit(limit - 4);
    }
  };

  function openOrderDetail(data: any) {
    modals.openConfirmModal({
      title: <div className={style.titleHeader}>Chi tiết đơn hàng</div>,
      size: "1800px",
      radius: "20px",
      centered: true,
      children: <OrderList data={data} />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  function openOrderCancel(id: any) {
    modals.openConfirmModal({
      id: "order",
      title: <div className={style.titleHeader}>Huỷ đơn hàng</div>,
      size: "600px",
      radius: "20px",
      centered: true,
      children: <OrderCancel onRefetch={handleFetchDataSaleOder} id={id} />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  function formatDateTime(dateTimeString: string): string {
    const dateTime = new Date(dateTimeString);

    // Lấy ngày, tháng, năm
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0
    const year = dateTime.getFullYear();

    // Lấy giờ, phút
    const hour = dateTime.getHours();
    const minute = dateTime.getMinutes();

    // Định dạng lại chuỗi
    const formattedDate = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
    const formattedTime = `${hour}h${minute < 10 ? "0" + minute : minute}p`;

    return `${formattedDate} - ${formattedTime}`;
  }

  return (
    <div>
      <Box className={style.textLeft}>
        <Space h="sm" />
      </Box>
      <Table>
        <Table.Thead>
          <Table.Tr className={style.tablerow}>
            <Table.Th className={style.th1}>Ngày tạo đơn</Table.Th>
            <Table.Th className={style.th1}>Mã đơn hàng</Table.Th>
            <Table.Th className={style.th1}>Thông tin khách hàng</Table.Th>
            <Table.Th className={style.th3}>Giá trị</Table.Th>
            {/* <Table.Th className={style.th3}>Trạng thái đơn hàng</Table.Th> */}
            <Table.Th className={style.th3}>Chi tiết đơn hàng</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {dataSaleOder?.slice(0, limit).map((item: any, index: any) => {
            return (
              <Table.Tr key={index} className={style.tablerow}>
                <Table.Td>
                  <Text className={style.title} fw={700} size="sm">
                    Thời gian: {formatDateTime(item?.orderDate)}
                  </Text>
                </Table.Td>
                <Table.Td style={{ padding: 0 }}>
                  <Text size="sm">{item?.id}</Text>
                </Table.Td>
                <Table.Td>
                  <Table withRowBorders={false}>
                    <Table.Tr className={style.trBorder}>
                      <Table.Th>Họ tên:</Table.Th>
                      <Table.Th>{item?.buyerName}</Table.Th>
                    </Table.Tr>
                    <Table.Tr className={style.trBorder}>
                      <Table.Th>Email:</Table.Th>
                      <Table.Th>{item?.buyerEmail}</Table.Th>
                    </Table.Tr>
                    <Table.Tr className={style.trBorder}>
                      <Table.Th>Địa chỉ:</Table.Th>
                      <Table.Th className={style.address}>
                        {item?.shippingAddress}
                      </Table.Th>
                    </Table.Tr>
                    <Table.Tr className={style.trBorder}>
                      <Table.Th>Điện thoại:</Table.Th>
                      <Table.Th>{item?.buyerTelephone}</Table.Th>
                    </Table.Tr>
                  </Table>
                </Table.Td>
                <Table.Td>
                  <Table withRowBorders={false}>
                    <Table.Tr className={style.trBorder}>
                      <Table.Th>Tổng tiền:</Table.Th>
                      <Table.Th>
                        <Text fw={700}>
                          {item.totalRemainingAmount ? (
                            <NumberFormatter
                              thousandSeparator="."
                              decimalSeparator=","
                              value={item?.totalRemainingAmount}
                              suffix="₫"
                            />
                          ) : (
                            <NumberFormatter
                              value={item?.totalAmount}
                              suffix="₫"
                              thousandSeparator="."
                              decimalSeparator=","
                            />
                          )}
                        </Text>
                      </Table.Th>
                    </Table.Tr>
                    <Table.Tr className={style.trBorder}>
                      <Table.Th>Phí vận chuyển:</Table.Th>
                      <Table.Th>
                        <Text fw={700}>
                          <NumberFormatter
                            thousandSeparator="."
                            decimalSeparator=","
                            value={item?.shippingFee}
                            suffix="₫"
                          />
                        </Text>
                      </Table.Th>
                    </Table.Tr>
                  </Table>
                </Table.Td>
                {/* <Table.Td>
                  <Text fw={700}>{item?.orderStatus}</Text>
                </Table.Td> */}
                <Table.Td>
                  <Text
                    className={style.title}
                    fw={700}
                    onClick={() => openOrderDetail(item)}
                  >
                    Xem chi tiết
                  </Text>
                  {/* item?.orderStatus?.includes("PAY_SUCCESS") || */}
                  {item?.orderStatus === "NEW" && (
                    <Text
                      className={style.cancel}
                      fw={700}
                      onClick={() => openOrderCancel(item?.id)}
                    >
                      Huỷ đơn hàng
                    </Text>
                  )}
                </Table.Td>
              </Table.Tr>
            );
          })}
        </Table.Tbody>
      </Table>
      <div className={style.buttonGroup}>
        {dataSaleOder.length !== limit && (
          <button className={style.button} onClick={handleMore}>
            Xem thêm
          </button>
        )}
        {limit !== 6 && (
          <button className={style.button} onClick={handleHidden}>
            Thu gọn
          </button>
        )}
      </div>
    </div>
  );
};

export default InfoSaleOder;
