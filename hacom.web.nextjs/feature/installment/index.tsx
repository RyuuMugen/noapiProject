"use client";
import InstallmentTop from "./installmentTop";
import InstallmentBottom from "./installmentBottom";
import { CartDetail } from "@/model/Cart";
import { InstallmentDataProps } from "@/model/TblInstallment";
import { useEffect, useState } from "react";
import {
  Checkbox,
  CheckboxProps,
  Divider,
  Flex,
  NumberFormatter,
  Table,
  Text,
} from "@mantine/core";
import { IconChevronLeft } from "@tabler/icons-react";
import style from "./style.module.scss";
import { postLoggingAction } from "@/api/apiLogging";
import Link from "next/link";

export default function Installment() {
  const [formHidden, setFormHidden] = useState(true);
  const [completeHidden, setCompleteHidden] = useState(true);

  const [installmentItem, setInstallmentItem] = useState<CartDetail[]>([]);
  const [dataInstallment, setDataInstallment] = useState<InstallmentDataProps>({
    prePay: 0,
    total: 0,
    month: 0,
    perMonth: 0,
    interestRate: 0,
    company: "",
    prePayPercent: 0,
  });

  const onBackClick = () => {
    setFormHidden(true);
  };

  useEffect(() => {
    postLoggingAction({
      userName: localStorage.getItem("userName"),
      actionType: "PaymentMethodLink",
      actionDetail: "Trả góp",
    });
  }, []);

  return (
    <div>
      {formHidden || !completeHidden ? null : (
        <div className={style.backBox}>
          <p className={style.back} onClick={() => onBackClick()}>
            <IconChevronLeft />
            Quay lại
          </p>
          <p>Đặt mua trả góp</p>
        </div>
      )}

      <div className={style.box}>
        <InstallmentTop
          formHidden={formHidden}
          dataInstallment={dataInstallment}
          completeHidden={completeHidden}
          setInstallmentItem={setInstallmentItem}
        />
        {completeHidden ? (
          <InstallmentBottom
            formHidden={formHidden}
            setFormHidden={setFormHidden}
            setCompleteHidden={setCompleteHidden}
            dataInstallment={dataInstallment}
            setDataInstallment={setDataInstallment}
            installmentItem={installmentItem}
          />
        ) : (
          <div>
            <div className={style.informationBox}>
              <Text fw={700}>
                <strong style={{ color: "#f71c1c" }}>Quan trọng:</strong> Mời
                bạn mang giấy tờ đã đăng ký đến Showroom HACOM để làm hồ sơ trả
                góp.
              </Text>
              <ul>
                <li>
                  <Text>
                    Trả trước:{" "}
                    <span style={{ fontWeight: 700 }}>
                      <NumberFormatter
                        className={style.cost}
                        value={dataInstallment.prePay}
                        thousandSeparator="."
                        decimalSeparator=","
                        suffix="₫"
                        decimalScale={0}
                      />
                    </span>
                  </Text>
                </li>
                <li>
                  <Text>
                    Khoản vay:{" "}
                    <span style={{ fontWeight: 700 }}>
                      <NumberFormatter
                        className={style.cost}
                        value={dataInstallment.total - dataInstallment.prePay}
                        thousandSeparator="."
                        decimalSeparator=","
                        suffix="₫"
                        decimalScale={0}
                      />
                    </span>
                  </Text>
                </li>
                <li>
                  <Text>
                    Lãi suất:{" "}
                    <span style={{ fontWeight: 400, color: "#f71c1c" }}>
                      {dataInstallment.interestRate}%
                    </span>
                  </Text>
                </li>
                <li>
                  <Text>
                    số tiền trả góp mỗi tháng:{" "}
                    <span style={{ fontWeight: 700 }}>
                      <NumberFormatter
                        className={style.cost}
                        value={dataInstallment.perMonth}
                        thousandSeparator="."
                        decimalSeparator=","
                        suffix="₫"
                        decimalScale={0}
                      />
                      (trong {dataInstallment.month} tháng)
                    </span>
                  </Text>
                </li>
                <li>
                  <Text>
                    Phí chuyển hàng: <span className={style.cost}>Liên hệ</span>
                  </Text>
                </li>
                <li>
                  <Text>
                    Tổng tiền:{" "}
                    <span style={{ fontWeight: 700 }}>
                      <NumberFormatter
                        className={style.cost}
                        value={dataInstallment.total}
                        thousandSeparator="."
                        decimalSeparator=","
                        suffix="₫"
                        decimalScale={0}
                      />
                    </span>
                  </Text>
                </li>
                <li>
                  <Text>
                    Công ty tài chính:{" "}
                    <span style={{ fontWeight: 700 }}>
                      {dataInstallment.company}
                    </span>
                  </Text>
                </li>
              </ul>
            </div>
            <Text>
              HACOM hỗ trợ hủy hợp đồng trong 14 ngày kể từ khi ký hợp đồng, sau
              14 ngày sẽ mất phí nếu hủy Khi cần trợ giúp vui lòng gọi{" "}
              <strong style={{ color: "#4283fb" }}>1900.1903</strong>
              (8h30 - 21h30)
            </Text>
            <div className={style.linkbox}>
              <Link href="/home">
                <div className={style.homeBack}>Mua thêm sản phẩm khác</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
