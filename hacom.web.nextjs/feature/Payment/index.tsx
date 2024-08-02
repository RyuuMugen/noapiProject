"use client";
import bgOrderSuccess from "@/assets/bgOrderSuccess.png";
import {
  Box,
  Button,
  Flex,
  List,
  NumberFormatter,
  Radio,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { useEffect, useState } from "react";
import style from "./Payment.module.scss";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import { createQrCode, getDetailsQrCodePayment } from "@/api/apiMBQR";
import VisaForm from "./VisaForm";
import TransferForm from "./TransferForm";
import CodForm from "./CodForm";
import crypto from "crypto";
import { apiRequestPayment } from "@/api/apiAlePay";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/useContext/useAuthContext";
import { getDataProvice } from "@/api/ApiAddress";
import { tblProvince } from "@/model/TblAddress";
import { FormOrderBuyerInfo } from "@/model/TblSaleOrder";
import { AxiosResponse } from "axios";
import { api2 } from "@/library/axios";
import { API_ROUTE } from "@/const/apiRoute";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { isNullOrUndefined } from "@/extension/StringExtension";
import Link from "next/link";
import { modifySaleOrderPaymentMethod } from "@/api/apiSaleOrder";
import { postLoggingAction } from "@/api/apiLogging";

type PaymentType = {
  transfer: boolean;
  visa: boolean;
  cod: boolean;
};

const Payment = () => {
  const router = useRouter();
  const { userInfo, handleGetUserInfo } = useAuthContext();
  const { dataSaleOderSuccess } = useSaleOrder();
  const [dataAllProvince, setDataAllProvince] = useState<tblProvince[]>([]);
  const [valueQrCode, setValueQrCode] = useState("");
  const [isRender, setIsRender] = useState(false);
  const [idPaymentMoneyActive, setIdPaymentMoneyActive] = useState(0);
  const [confirmPaymentType, setConfirmPaymentType] = useState("");
  const [selectedPaymentType, setSelectedPaymentType] = useState("");
  const [listSelectedPaymentType, setListSelectedPaymentType] =
    useState<PaymentType>({
      transfer: false,
      visa: false,
      cod: false,
    });
  const [signature, setSignature] = useState("");
  const [linkAlePay, setLinkAlePay] = useState("");
  const [payMentSuccess, setPayMentSuccess] = useState(false);

  const handleChangPaymentMoneyActive = (id: number) => {
    setIdPaymentMoneyActive(id);
  };

  const handleChangeSelectedPaymentType = (value: string) => {
    setListSelectedPaymentType((prev) => {
      const updatedState = { ...prev };
      Object.keys(updatedState).forEach((key) => {
        updatedState[key as keyof PaymentType] = false;
      });
      updatedState[value as keyof PaymentType] = true;
      return updatedState;
    });
    setSelectedPaymentType(value);
  };

  const handleConfirmPaymentType = async () => {
    NotificationExtension.Success("Xác nhận hình thức thanh toán thành công!");
    postLoggingAction({
      userName: localStorage.getItem("userName"),
      actionType: "PaymentMethodLink",
      actionDetail:
        selectedPaymentType === "cod"
          ? "COD"
          : selectedPaymentType === "transfer"
          ? "Thanh toán bằng chuyển khoản"
          : selectedPaymentType === "visa"
          ? "Thanh toán bằng thẻ quốc tế Visa, Master"
          : null,
    });

    const dataModify = {
      id: dataSaleOderSuccess?.orderNumber,
      paymentMethodId:
        selectedPaymentType === "cod"
          ? 2
          : selectedPaymentType === "transfer"
          ? 8
          : selectedPaymentType === "visa"
          ? 4
          : null,
      payStatus:
        selectedPaymentType === "cod"
          ? "COD"
          : selectedPaymentType === "transfer"
          ? "Thanh toán bằng chuyển khoản"
          : selectedPaymentType === "visa"
          ? "Thanh toán bằng thẻ quốc tế Visa, Master"
          : null,
    };
    await modifySaleOrderPaymentMethod(
      `?Id=${dataModify.id}&PayMethodId=${dataModify.paymentMethodId}&PayStatus=${dataModify.payStatus}`
    );

    if (selectedPaymentType === "transfer" && !isRender) {
      handleCreateQrCode();
      setIsRender(true);
    }
    setConfirmPaymentType(selectedPaymentType);
    if (confirmPaymentType === "visa" || selectedPaymentType === "visa") {
      router.push(linkAlePay);
    }
  };

  const convertToQueryString = (input: any) => {
    const queryString = Object.keys(input)
      .map((key) => {
        return `${encodeURIComponent(key)}=${decodeURIComponent(
          encodeURIComponent(input[key])
        )}`;
      })
      .join("&");
    return queryString;
  };

  const generateSignature = (data: any, checksumKey: any) => {
    // Sắp xếp dữ liệu theo key theo thứ tự alphabet
    const sortedData: { [key: string]: any } = {};
    Object.keys(data)
      .sort()
      .forEach((key) => {
        sortedData[key] = data[key];
      });

    // Tạo chuỗi dữ liệu từ mảng key-value
    const dataString = convertToQueryString(sortedData);
    // Tạo signature sử dụng HMAC_SHA256
    const signature = crypto
      .createHmac("sha256", checksumKey)
      .update(dataString)
      .digest("hex");

    return signature;
  };

  // console.log("dataSaleOderSuccess", dataSaleOderSuccess);

  const handleGetLinkAlePay = async () => {
    handleChangeSelectedPaymentType("visa");
    const request = {
      allowDomestic: false,
      amount: dataSaleOderSuccess?.totalRemaining?.toString(),
      bankCode: null,
      buyerAddress: dataSaleOderSuccess?.shippingAddress,
      buyerCity: dataAllProvince?.find(
        (province) =>
          province?.provinceId ===
          userInfo?.data?.tblCustomerSiteModels?.find(
            (item: FormOrderBuyerInfo) => item?.isMain === "Y"
          )?.provinceId
      )?.provinceName,
      buyerCountry: "Viet Nam",
      buyerEmail: userInfo?.data?.email || userInfo?.data?.userName,
      buyerName: dataSaleOderSuccess?.buyerName,
      buyerPhone: dataSaleOderSuccess?.buyerTelephone,
      cancelUrl: "http://web-dev.hacom.vn/",
      checkoutType: 1,
      currency: "vnd",
      customMerchantId: "270081",
      installment: false,
      language: null,
      month: null,
      orderCode: dataSaleOderSuccess?.orderNumber,
      orderDescription: "don hang",
      paymentHours: null,
      paymentMethod: null,
      promotionCode: null,
      returnUrl:
        "http://apis-dev.hacom.vn:8086/api-cart/api/v1/TblAlepayPayment/create",
      tokenKey: "IqbEf0b53pk3D6kWgUIhFjpnxMWAu1",
      totalItem: "2",
      signature: signature,
    };

    const data = await apiRequestPayment(request);
    setLinkAlePay(data?.checkoutUrl);
  };

  const handleCreateQrCode = async () => {
    const data = await createQrCode({
      terminalID: "MB_HACOM10",
      qrcodeType: 4,
      parterType: 2,
      initMethod: 14,
      transactionAmount: dataSaleOderSuccess?.totalRemaining?.toString(),
      billNumber: "",
      referenceLabelTime: "",
      referenceLabelCode: dataSaleOderSuccess?.orderNumber,
      transactionPurpose: "",
      additionAddress: dataSaleOderSuccess?.shippingAddress,
      additionMobile: dataSaleOderSuccess?.buyerTelephone,
      additionEmail: dataSaleOderSuccess?.buyerName,
      createdBy: "",
      lastUpdateDate: "",
      lastUpdatedBy: "",
      lastUpdateLogin: "",
      creationDate: "",
      qrcodevalue: "",
    });

    setValueQrCode(data?.data?.qrcodevalue);
  };

  const handleGetDetailQRCode = async () => {
    if (dataSaleOderSuccess?.orderNumber) {
      try {
        const response: AxiosResponse = await api2.post(
          API_ROUTE.GET_DETAILS_QR_CODE_PAYMENT +
            `?id=${dataSaleOderSuccess?.orderNumber}`
        );
        if (!isNullOrUndefined(response) && response?.data?.success) {
          NotificationExtension.Success("Bạn đã thanh toán thành công!");
          setPayMentSuccess(true);
          window.scroll(0, 0);
        } else if (response != null)
          NotificationExtension.Fails(
            "Xác nhận thất bại! Vui lòng liên hệ hotline 1900.1903 để được hỗ trợ!"
          );
      } catch {
        NotificationExtension.Fails(
          "Xác nhận thất bại! Vui lòng liên hệ hotline 1900.1903 để được hỗ trợ!"
        );
      }
    }
  };

  // console.log("Signature", signature);

  useEffect(() => {
    const data = {
      allowDomestic: false,
      amount: dataSaleOderSuccess?.totalRemaining?.toString(),
      bankCode: "",
      buyerAddress: dataSaleOderSuccess?.shippingAddress,
      buyerCity: dataAllProvince?.find(
        (province) =>
          province?.provinceId ===
          userInfo?.data?.tblCustomerSiteModels?.find(
            (item: FormOrderBuyerInfo) => item?.isMain === "Y"
          )?.provinceId
      )?.provinceName,
      buyerCountry: "Viet Nam",
      buyerEmail: userInfo?.data?.email || userInfo?.data?.userName,
      buyerName: dataSaleOderSuccess?.buyerName,
      buyerPhone: dataSaleOderSuccess?.buyerTelephone,
      cancelUrl: "http://web-dev.hacom.vn/",
      checkoutType: 1,
      currency: "vnd",
      customMerchantId: "270081",
      installment: false,
      language: "",
      month: "",
      orderCode: dataSaleOderSuccess?.orderNumber,
      orderDescription: "don hang",
      paymentHours: "",
      paymentMethod: "",
      promotionCode: "",
      returnUrl:
        "http://apis-dev.hacom.vn:8086/api-cart/api/v1/TblAlepayPayment/create",
      tokenKey: "IqbEf0b53pk3D6kWgUIhFjpnxMWAu1",
      totalItem: "2",
    };
    // Checksum key
    const checksumKey = "YJxg5zFlRuz93L0qFh6KpZmCMgY6IU";
    // Tạo signature
    const dataSignature = generateSignature(data, checksumKey);
    setSignature(dataSignature);
  }, [dataAllProvince, userInfo]);

  useEffect(() => {
    if (!dataSaleOderSuccess) {
      router.replace("/");
    }
  });

  useEffect(() => {
    const fetchDataProvince = async () => {
      const data = await getDataProvice("Active=true&Skip=0&Take=1000");
      setDataAllProvince(data?.data);
    };
    fetchDataProvince();
  }, []);

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  useEffect(() => {
    if (!userInfo) {
      handleGetUserInfo();
    }
  }, [userInfo]);

  return (
    <div className={style.main}>
      <Flex align={"center"} direction={"column"}>
        <Image height={111} src={bgOrderSuccess} alt="bgOrderSuccess" />
        {payMentSuccess ? (
          <Text mt={25} c={"#2CA519"} fw={700} style={{ fontSize: 28 }}>
            Thanh toán thành công!
          </Text>
        ) : (
          <Text mt={25} c={"#2CA519"} fw={700} style={{ fontSize: 23 }}>
            Đặt hàng thành công!
          </Text>
        )}

        <Text mt={20}>Cảm ơn quý khách đã đặt hàng tại HACOM</Text>
        <Box mt={15} style={{ backgroundColor: "#2CA519", borderRadius: 6 }}>
          <Text m={"6px 13px"} c={"#FFFFFF"}>
            Mã đơn hàng:{" "}
            <Text span fw={700}>
              {dataSaleOderSuccess?.orderNumber}
            </Text>
          </Text>
        </Box>
      </Flex>
      <Flex
        p={"28px 40px"}
        justify={"space-between"}
        align={"center"}
        className={style.customerInfo}
      >
        <Box>
          <List>
            <List.Item>
              <Text fw={700}>
                Khách hàng: <Text span>{dataSaleOderSuccess?.buyerName}</Text>
              </Text>
            </List.Item>
            <List.Item>
              <Text fw={700}>
                Số điện thoại:{" "}
                <Text span>{dataSaleOderSuccess?.buyerTelephone}</Text>
              </Text>
            </List.Item>
            <List.Item>
              <Text fw={700}>
                Địa chỉ giao hàng:{" "}
                <Text span>{dataSaleOderSuccess?.shippingAddress}h</Text>
              </Text>
            </List.Item>
            <List.Item>
              <Text fw={700}>
                Tổng thanh toán:{" "}
                <NumberFormatter
                  value={dataSaleOderSuccess?.totalRemaining}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
            </List.Item>
          </List>

          <Text fs="italic" style={{ fontSize: 16 }} c={"red"} m={"xs"}>
            Nhân viên sẽ gọi điện xác nhận lại thông tin trước khi giao hàng
          </Text>
          <Link href={{ pathname: "/" }}>
            <Button w={220} h={40} radius={8}>
              Tiếp tục mua hàng
            </Button>
          </Link>
        </Box>
        {/* <Button
          type="button"
          variant="default"
          color="#C9C9C9"
          style={{ backgroundColor: "#F0F0F0", borderRadius: 8 }}
        >
          Huỷ đơn hàng
        </Button> */}
      </Flex>

      {/* <Box mt={42}>
        <Text fw={700} size="lg">
          Chọn số tiền bạn muốn thanh toán:
        </Text>

        <Flex mt={15}>
          {dataPaymentMoney.map((item, index) => (
            <Flex
              justify={"center"}
              align={"center"}
              key={index}
              onClick={() => handleChangPaymentMoneyActive(index)}
              className={`${style.paymentMoney} 
                    ${
                      idPaymentMoneyActive === index && style.paymentMoneyActive
                    }`}
            >
              <Flex direction={"column"} align={"center"}>
                <Text className={style.paymentMoneyTitle}>{item.title}</Text>
                <Text fw={700} c={"#1F67D2"}>
                  <NumberFormatter
                    value={item.value}
                    thousandSeparator
                    suffix="₫"
                  />
                </Text>
              </Flex>

              <Image
                className={style.bgCheck}
                src={bgCheckDelivery}
                alt="bgCheckDelivery"
              />
              <IconCheck
                className={style.checkMark}
                color="#FFFFFF"
                size={14}
              />
            </Flex>
          ))}
        </Flex>

        <List mt={20} className={style.listIntroMoney}>
          <List.Item>
            Cần thanh toán tối thiểu 2.000.000đ trước{" "}
            <Text span fw={700}>
              16h00 Ngày mai (30/12)
            </Text>{" "}
            để giữ hàng. Sau thời gian này đơn hàng sẽ tự động hủy nếu chưa được
            thanh toán.
          </List.Item>
          <List.Item>
            Số tiền còn lại của đơn hàng quý khách sẽ thanh toán nốt cho nhân
            viên giao hàng bằng bất kỳ hình thức thanh toán nào.
          </List.Item>
          <List.Item>
            Thanh toán trước chỉ áp dụng với các hình thức thanh toán online.
          </List.Item>
        </List>
      </Box> */}

      <Box mt={30} className={` ${payMentSuccess && style.displayNone}`}>
        <Text fw={700} size="lg">
          Hình thức thanh toán:
        </Text>
        <div
          className={`${style.paymentsType} ${
            selectedPaymentType === "transfer" && style.paymentsTypeActive
          } ${payMentSuccess && style.displayNone}`}
          onChange={() => handleChangeSelectedPaymentType("transfer")}
        >
          <Radio
            variant="outline"
            label={
              <Text fw={700} size="lg">
                Thanh toán bằng chuyển khoản
              </Text>
            }
            checked={listSelectedPaymentType.transfer}
          />
          {confirmPaymentType === "transfer" ? (
            <TransferForm
              valueQr={valueQrCode}
              handleGetDetailQRCode={handleGetDetailQRCode}
              showLoading={isRender}
              handleCreateQrCode={handleCreateQrCode}
            />
          ) : null}
        </div>

        <div
          className={`${style.paymentsType} ${
            selectedPaymentType === "visa" && style.paymentsTypeActive
          }
          ${payMentSuccess && style.displayNone}
               `}
          onChange={() => handleGetLinkAlePay()}
        >
          <Radio
            variant="outline"
            label={
              <Text fw={700} size="lg">
                Thanh toán bằng thẻ quốc tế, VISA
              </Text>
            }
            checked={listSelectedPaymentType.visa}
          />
          {/* {confirmPaymentType === "visa" ? <VisaForm /> : null} */}
        </div>

        <div
          // className={`${style.paymentsType} ${
          //   selectedPaymentType === "cod" && style.paymentsTypeActive
          // }
          // ${idPaymentMoneyActive === 0 && style.disabled}`}
          className={`${style.paymentsType} ${
            selectedPaymentType === "cod" && style.paymentsTypeActive
          }
          ${idPaymentMoneyActive === 0} 
          ${payMentSuccess && style.displayNone}`}
          onChange={() => handleChangeSelectedPaymentType("cod")}
        >
          <Radio
            variant="outline"
            label={
              <Text fw={700} size="lg">
                Thanh toán khi nhận hàng (COD)
              </Text>
            }
            checked={listSelectedPaymentType.cod}
          />
          {confirmPaymentType === "cod" ? <CodForm /> : null}
        </div>

        <Button
          ml={10}
          radius={8}
          w={170}
          disabled={selectedPaymentType ? false : true}
          onClick={handleConfirmPaymentType}
        >
          Xác nhận
        </Button>
      </Box>
    </div>
  );
};

export default Payment;
