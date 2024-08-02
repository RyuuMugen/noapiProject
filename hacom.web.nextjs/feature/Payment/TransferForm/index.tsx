import { Button, Flex, Text } from "@mantine/core";
import Link from "next/link";
import Loader from "@/common/Loader";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import style from "./TransferForm.module.scss";

interface FormPaymentProps {
  valueQr: string;
  handleGetDetailQRCode: any;
  handleCreateQrCode: any;
  showLoading: boolean;
}
const TransferForm = ({
  valueQr,
  handleGetDetailQRCode,
  handleCreateQrCode,
  showLoading,
}: FormPaymentProps) => {
  // const [showLoading, setShowLoading] = useState(true);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    let timer: any;
    if (valueQr) {
      timer = setTimeout(() => {
        setShowQR(true);
      }, 1000); // 10 giây
    } else {
      timer = setTimeout(() => {
        setShowQR(false);
      }, 10000); // 10 giây
    }
    return () => clearTimeout(timer);
  }, [valueQr]);

  return (
    <div className={style.main}>
      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      ></div>
      <div>
        <Text mt={15}>
          Quý khách có thể tra cứu trạng thái đơn hàng tại link:{" "}
          <Link href={"http://web.hacom.local/tra-don-hang"}>Tra đơn hàng</Link>
        </Text>
      </div>

      <Text mt={11} fs="italic" c={"#F43453"}>
        Quý Khách vui lòng không tắt trình duyệt cho đến khi nhận được thông báo
        kết quả giao dịch. Xin cảm ơn!
      </Text>

      <Flex mt={20}>
        <div className={style.QRBox}>
          {/* {showLoading && (
            <div>
              <Loader color="blue" type="bars" />
              <Text fw={700}>Vui lòng đợi một chút!</Text>
            </div>
          )} */}
          {showLoading === true && valueQr !== "" && valueQr !== undefined ? (
            <QRCode
              size={256}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={valueQr}
            />
          ) : (
            <div>
              <Loader />
              <Text fw={700}>Vui lòng đợi một chút!</Text>
            </div>
          )}
          {!showLoading && !showQR && (
            <div>
              <p>
                Hiện QR lỗi, bạn có thể thử lại theo các bước sau
                <ol>
                  <li>Chọn sang mục khác "Thanh toán bằng chuyển khoản"</li>
                  <li>Chọn xác nhận</li>
                  <li>Chọn lại "Thanh toán bằng chuyển khoản"</li>
                  <li>Chọn xác nhận</li>
                </ol>
                nếu còn lỗi hay thử lại các bước trên
              </p>
            </div>
          )}
          <Button
            type="button"
            variant="default"
            color="#C9C9C9"
            onClick={handleCreateQrCode}
            style={{
              backgroundColor: "#F0F0F0",
              borderRadius: 8,
              marginTop: 12,
            }}
          >
            Tải mã QR Code
          </Button>

          <p className={style.QRTitle}>
            Dùng ứng dụng ngân hàng quét mã QR code để chuyển khoản
          </p>

          {/* <Button
            type="button"
            variant="default"
            color="#C9C9C9"
            w={"100%"}
            style={{ backgroundColor: "#F0F0F0", borderRadius: 8 }}
          >
            Huỷ giao dịch
          </Button> */}

          <Text mt={10}>
            Hotline hỗ trợ:{" "}
            <Text span fw={700}>
              1900 1903
            </Text>
          </Text>

          <Button mt={10} radius={8} onClick={handleGetDetailQRCode}>
            Xác nhận thanh toán thành công
          </Button>
        </div>
      </Flex>
    </div>
  );
};

export default TransferForm;
