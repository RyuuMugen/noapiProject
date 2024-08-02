import AscLogo from "@/assets/acs-tg-logo.png";
import HdSaison from "@/assets/hd-saigon-tg-logo.png";
import HomeCreditLogo from "@/assets/home-credit-tg-logo.png";
import { TblInstallment } from "@/model/TblInstallment";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import { Box, Select, Text } from "@mantine/core";
import Loader from "@/common/Loader";
import { InstallmentDataProps } from "@/model/TblInstallment";
import NextImage from "next/image";
import { useState } from "react";
import style from "./style.module.scss";

const logoList = [HomeCreditLogo, HdSaison, AscLogo];

export default function Company({
  installmentWeb,
  setFormHidden,
  setDataInstallment,
}: {
  installmentWeb: TblInstallment[];
  setFormHidden: React.Dispatch<React.SetStateAction<boolean>>;
  setDataInstallment: React.Dispatch<
    React.SetStateAction<InstallmentDataProps>
  >;
}) {
  const [selectedMonth, setSelectedMonth] = useState(6);
  const [valuePercent, setValuePercent] = useState<string | null>("");
  const monthList = [6, 8, 9, 12, 15, 18, 20];
  const dataPrepay = [
    { value: "20", label: "20%" },
    { value: "30", label: "30%" },
    { value: "40", label: "40%" },
    { value: "50", label: "50%" },
    { value: "60", label: "60%" },
    { value: "70", label: "70%" },
    { value: "80", label: "80%" },
  ];
  const { totalAmount } = useSaleOrder();
  const handleClick = (button: any) => {
    setSelectedMonth(button);
  };

  function calculateMonthlyPayment(
    item: any,
    value: string | null,
    totalAmount: number
  ) {
    const prepayment = value !== null ? parseInt(value) : 0;
    const isSupported = item?.tblInstallmentPayModels.some(
      (model: any) => model.prepayment === prepayment
    );

    if (isSupported) {
      const monthlyPayment = (totalAmount / 100) * prepayment;
      return (
        <>
          {monthlyPayment.toLocaleString("vi-VN", {
            style: "currency",
            currency: "VND",
          })}
        </>
      );
    } else {
      return <>Không hỗ trợ mức trả trước này</>;
    }
  }

  function calculateInterestRate(item: any, selectedMonth: number | null) {
    if (selectedMonth === null) return <>Không xác định</>;

    const interestRate = item?.tblInstallmentDurationModels.find(
      (model: any) => model.duration === selectedMonth
    )?.interestRate;

    if (interestRate !== undefined) {
      return <>{interestRate}%</>;
    } else {
      return <>Không xác định</>;
    }
  }

  function calculatePayment(
    item: TblInstallment,
    value: string | null,
    totalAmount: number,
    selectedMonth: number | null,
    type: string
  ) {
    if (selectedMonth === null) return <>Không xác định</>;

    const prepayment = value !== null ? parseInt(value) : 0;
    const isSupported = item?.tblInstallmentPayModels.some(
      (model: any) => model.prepayment === prepayment
    );

    const interestRate = item?.tblInstallmentDurationModels.find(
      (model: any) => model.duration === selectedMonth
    )?.interestRate;

    const isActive = item?.tblInstallmentModel.active === "A";

    if (isSupported && interestRate !== undefined) {
      const downPayment = totalAmount * (prepayment / 100); // trả trước
      const remainingAmount = totalAmount - downPayment; // còn thiếu
      const monthlyInterest =
        remainingAmount * (interestRate / 100) +
        remainingAmount / selectedMonth; //lãi hàng tháng

      const calcTotal = downPayment + monthlyInterest * selectedMonth; // tổng phải trả
      const differenceTotal = calcTotal - totalAmount; //chêch lệch

      const handleOnclick = () => {
        setDataInstallment({
          prePay: downPayment,
          total: calcTotal,
          month: selectedMonth,
          perMonth: monthlyInterest,
          interestRate: interestRate,
          company: item?.tblInstallmentModel?.companyName || "",
          prePayPercent: parseInt(valuePercent ?? "0"),
        });
        setFormHidden(false);
      };
      if (type === "PerMonth") {
        return (
          <>
            {monthlyInterest.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </>
        );
      } else if (type === "Toltal") {
        return (
          <>
            {calcTotal.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </>
        );
      } else if (type === "Difference") {
        return (
          <>
            {differenceTotal.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </>
        );
      } else if (type === "Support") {
        if (isActive) {
          return (
            <div className={style.orderButton2} onClick={() => handleOnclick()}>
              <p>Đặt mua</p>
              <span>Duyệt qua điện thoại</span>
            </div>
          );
        } else {
          return <span className={style.orderButton}>Hiện không hỗ trợ</span>;
        }
      }
    } else {
      if (type === "Support") {
        return <span className={style.orderButton}>Hiện không hỗ trợ</span>;
      } else {
        return <>Không xác định</>;
      }
    }
  }

  return (
    <div>
      {installmentWeb.length === 0 ? (
        <Loader />
      ) : (
        <Box>
          <Text fw={700} mb={15} style={{ margin: "20px 0px" }}>
            Chọn số tháng trả góp
          </Text>
          <div className={style.monthGroup}>
            {monthList.map((button, index) => (
              <button
                key={index}
                onClick={() => handleClick(button)}
                className={
                  selectedMonth === button ? style.unSelect : style.select
                }
              >
                {button} Tháng
              </button>
            ))}
          </div>
          <div className={style.tableBox}>
            <table className={style.table}>
              <tr>
                <th className={style.tableHead}>
                  <span style={{ color: "white" }}>Công ty</span>
                </th>
                {installmentWeb.map((item, index) => (
                  <td key={index}>
                    <div>
                      {item.tblInstallmentModel.companyName}
                      <NextImage
                        src={logoList[index]}
                        alt={item.tblInstallmentModel.companyName || "#"}
                      />
                    </div>
                  </td>
                ))}
              </tr>

              <tr>
                <th className={style.tableHead}>
                  <span>Giá sản phẩm</span>
                </th>
                {installmentWeb.map((item, index) => (
                  <td key={index}>
                    {totalAmount.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                ))}
              </tr>

              <tr>
                <th className={style.tableHead}>
                  <span>Giá mua trả góp</span>
                </th>
                {installmentWeb.map((item, index) => (
                  <td key={index}>
                    <span className={style.highlight}>
                      {totalAmount.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <th className={style.tableHead2}>
                  <span>Trả trước</span>
                  <Select
                    data={dataPrepay}
                    value={valuePercent}
                    onChange={setValuePercent}
                  />
                </th>
                {installmentWeb.map((item, index) => (
                  <td key={index}>
                    {calculateMonthlyPayment(item, valuePercent, totalAmount)}
                  </td>
                ))}
              </tr>

              <tr>
                <th className={style.tableHead}>
                  <span>Lãi suất thực</span>
                </th>
                {installmentWeb.map((item, index) => (
                  <td key={index}>
                    {calculateInterestRate(item, selectedMonth)}
                  </td>
                ))}
              </tr>

              <tr>
                <th className={style.tableHead}>
                  <span>Giấy tờ cần có</span>
                </th>
                {installmentWeb.map((item, index) => (
                  <td key={index}>
                    <a
                      className={style.link}
                      href="/hacom-huong-dan-mua-hang-tra-gop"
                    >
                      Xem chi tiết tại đây
                    </a>
                  </td>
                ))}
              </tr>

              <tr>
                <th className={style.tableHead}>
                  <span>Góp mỗi tháng</span>
                </th>
                {installmentWeb.map((item, index) => (
                  <td key={index}>
                    {calculatePayment(
                      item,
                      valuePercent,
                      totalAmount,
                      selectedMonth,
                      "PerMonth"
                    )}
                  </td>
                ))}
              </tr>

              <tr>
                <th className={style.tableHead}>
                  <span>Tổng tiền phải trả</span>
                </th>
                {installmentWeb.map((item, index) => (
                  <td key={index}>
                    <span className={style.highlight}>
                      {calculatePayment(
                        item,
                        valuePercent,
                        totalAmount,
                        selectedMonth,
                        "Toltal"
                      )}
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <th className={style.tableHead}>
                  <span>Chênh lệch với mua trả thẳng</span>
                </th>
                {installmentWeb.map((item, index) => (
                  <td key={index}>
                    {calculatePayment(
                      item,
                      valuePercent,
                      totalAmount,
                      selectedMonth,
                      "Difference"
                    )}
                  </td>
                ))}
              </tr>

              <tr>
                <th className={style.tableHead}>
                  <span>Ghi chú</span>
                </th>
                {installmentWeb.map((item, index) => (
                  <td key={index}>
                    Chi phí trả góp chưa gồm bảo hiểm khoản vay.
                  </td>
                ))}
              </tr>

              <tr>
                <th className={style.tableHead}></th>
                {installmentWeb.map((item, index) => (
                  <td key={index}>
                    <span className={style.orderButton}>
                      {calculatePayment(
                        item,
                        valuePercent,
                        totalAmount,
                        selectedMonth,
                        "Support"
                      )}
                    </span>
                  </td>
                ))}
              </tr>
            </table>
          </div>
          <Text mb={15} style={{ margin: "20px 0px" }}>
            <strong>Lưu ý:</strong> Số tiền thực tế có thể chênh lệch đến
            10.000đ/tháng
          </Text>
        </Box>
      )}
    </div>
  );
}
