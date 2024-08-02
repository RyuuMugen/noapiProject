"use client";
import {
  Box,
  Button,
  Flex,
  NumberFormatter,
  Text,
  TextInput,
  Anchor,
  Loader,
} from "@mantine/core";
import { IconChevronRight, IconMail, IconMapPin } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

import style from "./rightbox.module.scss";

import {
  FormOrderBuyerInfo,
  SaleOrderHeader,
  tblSaleOrder,
  tblSaleOrderDetailCommands,
} from "@/model/TblSaleOrder";
import { createSaleOrder } from "@/api/apiSaleOrder";
import { useCardItems } from "@/useContext/CardContext";
import { NotificationExtension } from "@/extension/NotificationExtension";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import { getDataDetailVoucher } from "@/api/apiVoucher";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { useAuthContext } from "@/useContext/useAuthContext";
import { useDisclosure } from "@mantine/hooks";

type RightBoxProps = {
  totalAmount: number;
  listAddress: FormOrderBuyerInfo[];
  SaleOrderDetail: tblSaleOrderDetailCommands[];
  setDataSaleOderSuccess: any;
  typeDelivery: number;
  companyDelivery: string;
  shipfee: number;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  readytoCreateOrder: boolean;
  isCreateUser: boolean;
  setIsCreateUser: React.Dispatch<React.SetStateAction<boolean>>;
  customerId: number;
};

const RightBox: React.FC<RightBoxProps> = ({
  totalAmount,
  listAddress,
  SaleOrderDetail,
  setDataSaleOderSuccess,
  typeDelivery,
  companyDelivery,
  shipfee,
  loading,
  setLoading,
  readytoCreateOrder,
  isCreateUser,
  setIsCreateUser,
  customerId,
}) => {
  const {
    shipfeeSaleOrder,
    setShipfeeSaleOrder,
    voucherApply,
    setVoucherApply,
  } = useSaleOrder();
  const [topPosition, setTopPosition] = useState(175);
  const [discountCode, setDiscountCode] = useState("");
  const { userInfo } = useAuthContext();
  const [captcha, setCaptcha] = useState(false);
  const [visible, { toggle, close, open }] = useDisclosure(false);
  const [dataSaleOrder, setDataSaleOrder] = useState<tblSaleOrder>({
    tblSaleOrderCommand: {
      assignToId: null,
      assignToName: null,
      orderNumber: "string",
      orderDate: null,
      orderType: null,
      customerId: null,
      customerSiteId: null,
      buyerId: 0,
      buyerEmail: null,
      provinceId: null,
      districtId: null,
      communeId: null,
      buyerName: null,
      buyerTelephone: null,
      buyerInfo: null,
      taxCode: null,
      taxCompany: null,
      taxAddress: null,
      totalAmount: totalAmount,
      orderPromotion: null,
      shipMethod: null,
      shippingStatus: null,
      shippingInfo: null,
      shippingComment: null,
      shippingUpdateTime: null,
      shippingUpdateBy: null,
      shippingCompany: null,
      shippingFee: null,
      codfee: null,
      shippingNote: null,
      shippingAddress: null,
      payMethodId: null,
      payStatus: null,
      receivePayStatus: null,
      successStatus: null,
      buyerInstruction: null,
      description: null,
      buyerFeedBackId: null,
      discountPrice: null,
      discountInfo: null,
      orderFees: null,
      orderDiscount: null,
      discount: null,
      discountNote: null,
      orderStatus: null,
      orderMessage: null,
      orderComment: null,
      orderStatusDate: null,
      orderStatusUpdateBy: null,
      caresoftTicketId: null,
      voucherId: null,
      creationDate: null,
      createdBy: null,
      lastUpdateDate: null,
      lastUpdatedBy: null,
      lastUpdateLogin: null,
    },
    tblSaleOrderDetailCommands:
      SaleOrderDetail.map((order) => ({
        ...order,
        itemPrice: order.itemSalePrice,
      })) || [],
  });
  const { fetchDataHeader } = useCardItems();
  const router = useRouter();

  const handleApplyDiscount = async () => {
    if (discountCode) {
      const dataApi = await getDataDetailVoucher(`?id=${discountCode}`);

      if (!isNullOrUndefined(dataApi) && dataApi?.success) {
        if (dataApi?.data?.usageStatus === "NO") {
          if (dataApi?.data?.tblVoucherModels[0].expireDate) {
            if (
              new Date(dataApi?.data?.tblVoucherModels[0].expireDate) <
              new Date()
            ) {
              NotificationExtension.Warn("Mã giảm giá đã hết hạn!");
            } else {
              setVoucherApply(dataApi.data);

              dataApi.data.tblVoucherModels[0].currency === "VND"
                ? totalAmount -
                    (dataApi.data?.tblVoucherModels[0]?.value || 0) <
                  0
                  ? NotificationExtension.Fails(
                      "Voucher quá giá trị của sản phẩm!"
                    )
                  : NotificationExtension.Success(
                      "Áp dụng mã giảm giá thành công!"
                    )
                : NotificationExtension.Success(
                    "Áp dụng mã giảm giá thành công!"
                  );
            }
          } else {
            setVoucherApply(dataApi.data);
            // NotificationExtension.Success("Áp dụng mã giảm giá thành công!");
            dataApi.data.tblVoucherModels[0].currency === "VND"
              ? totalAmount - (dataApi.data?.tblVoucherModels[0]?.value || 0) <
                0
                ? NotificationExtension.Fails(
                    "Voucher quá giá trị của sản phẩm!"
                  )
                : NotificationExtension.Success(
                    "Áp dụng mã giảm giá thành công!"
                  )
              : NotificationExtension.Success(
                  "Áp dụng mã giảm giá thành công!"
                );
          }
        } else NotificationExtension.Fails("Mã giảm giá này đã được sử dụng!");
      } else if (dataApi != null)
        NotificationExtension.Fails("Áp dụng mã giảm giá thất bại!");
    } else NotificationExtension.Warn("Bạn chưa nhập mã giảm giá");
  };

  const handleDeleteVoucher = () => {
    setVoucherApply(null);
    setDiscountCode("");
  };

  const handleConfirmAndPayment = () => {
    setLoading(true);
    if (
      readytoCreateOrder === true &&
      isCreateUser === true &&
      customerId !== 0 &&
      dataSaleOrder.tblSaleOrderCommand.buyerId !== 0
    ) {
      const handleCreatePayment = async () => {
        open();
        if (
          dataSaleOrder &&
          dataSaleOrder?.tblSaleOrderDetailCommands.length != 0
        ) {
          const dataSaleOder = await createSaleOrder(dataSaleOrder);
          setDataSaleOderSuccess(dataSaleOder?.data);
          setShipfeeSaleOrder(shipfee);
          setVoucherApply(null);
          fetchDataHeader();
          router.push(`/payment`);
        } else {
          NotificationExtension.Info(
            "Bạn chưa chọn sản phẩm nào vui lòng quay lại giỏ hàng"
          );
        }
        close();
      };
      handleCreatePayment();
    }
  };

  const onChangeCaptcha = (value: any) => {
    setCaptcha(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolledTop = Math.max(64, 175 - window.scrollY);
      setTopPosition(scrolledTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const address = listAddress?.find(
      (item: FormOrderBuyerInfo) => item?.isMain === "Y"
    );
    if (address) {
      const data = {
        ...dataSaleOrder,
        tblSaleOrderCommand: {
          ...dataSaleOrder?.tblSaleOrderCommand,
          buyerId: customerId,
          buyerEmail: address?.email,
          buyerName: address?.customerSiteName,
          communeId: address?.wardId,
          districtId: address?.districtId,
          provinceId: address?.provinceId,
          shippingAddress: address?.address,
          buyerTelephone: address?.telephone,
          shippingFee: shipfee,
          shipMethod: typeDelivery,
          shippingCompany: companyDelivery,
          totalAmount: totalAmount,
          voucherId: voucherApply?.id || null,
          // totalRemainingAmount:
          //   totalAmount +
          //   shipfee -
          //   (voucherApply?.tblVoucherModels[0].value || 0),
          // taxAddress: address?.taxAddress,
          // taxCode: address?.taxCode,
          // taxCompany: address?.taxCompany,
        },
      };
      setDataSaleOrder(data);
    }
  }, [
    listAddress,
    shipfee,
    voucherApply,
    typeDelivery,
    companyDelivery,
    customerId,
  ]);

  return (
    <div className={style.box} style={{ top: `${topPosition}px` }}>
      <div className={style.content}>
        <div className={style.title}>
          <p>Tóm tắt đơn hàng</p>
        </div>
        <div className={style.pricebox}>
          <div className={style.flexbox}>
            <span className={style.val}>Tạm tính:</span>
            <span className={style.price}>
              <NumberFormatter
                className={style.promotionPrice}
                value={totalAmount}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </span>
          </div>
          <div className={style.flexbox}>
            <span className={style.val}>Phí vận chuyển:</span>
            {/* <span className={style.price}>0Đ</span> */}
            <NumberFormatter
              className={style.price}
              value={shipfee}
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </div>
          {voucherApply && voucherApply?.tblVoucherModels[0]?.value && (
            <div className={`${style.flexbox} ${style.voucherBox}`}>
              <span className={style.val}>Mã giảm giá:</span>
              {voucherApply.tblVoucherModels[0].currency === "VND" ? (
                <NumberFormatter
                  className={style.price}
                  value={-voucherApply?.tblVoucherModels[0]?.value}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              ) : (
                <span className={style.price}>
                  {-voucherApply?.tblVoucherModels[0]?.value} %
                </span>
              )}
              {/* <span className={style.price}>0Đ</span> */}
            </div>
          )}
        </div>
        <div className={style.salecodebox}>
          <span>Mã giảm giá</span>
          <div className={style.inputgroup}>
            <input
              className={`${style.input} ${voucherApply && style.disabled}`}
              value={discountCode || voucherApply?.voucherCode || ""}
              placeholder="Nhập mã giảm giá"
              onChange={(e) => setDiscountCode(e.target.value)}
            ></input>
            <button
              className={`${style.inputbutton} ${
                voucherApply && style.disabled
              }`}
              onClick={handleApplyDiscount}
            >
              ÁP DỤNG
            </button>
          </div>

          {voucherApply && (
            <Flex mt={13} justify={"space-between"} align={"center"}>
              <Text style={{ fontSize: 14 }}>{voucherApply?.voucherCode}</Text>
              <Anchor onClick={() => handleDeleteVoucher()}>Xóa mã</Anchor>
            </Flex>
          )}
        </div>
        <div className={style.orderbox}>
          <div className={style.flexbox}>
            <span className={style.val}>Tổng thanh toán:</span>
            <span className={style.orderprice}>
              <NumberFormatter
                className={style.promotionPrice}
                value={
                  (voucherApply
                    ? voucherApply.tblVoucherModels[0].currency === "VND"
                      ? totalAmount +
                        shipfee -
                        (voucherApply?.tblVoucherModels[0]?.value || 0)
                      : totalAmount *
                          (1 -
                            (voucherApply?.tblVoucherModels[0]?.value || 0) /
                              100) +
                        shipfee
                    : totalAmount + shipfee) || 0
                }
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </span>
          </div>
          <div className={style.orderbox2}>
            {loading && typeDelivery !== 0 ? (
              <Button className={style.orderbutton} disabled>
                <Loader color="rgba(255, 255, 255, 1)" type="bars" />
              </Button>
            ) : (
              <Flex direction={"column"} gap={10}>
                <ReCAPTCHA
                  sitekey="6LfM6M4pAAAAAMU-poYkJbP6a1EJ81MZn6-uY__s"
                  onChange={onChangeCaptcha}
                />
                <Button
                  rightSection={<IconChevronRight />}
                  className={style.orderbutton}
                  onClick={() => handleConfirmAndPayment()}
                  disabled={
                    !captcha ||
                    !listAddress ||
                    listAddress.length === 0 ||
                    (voucherApply &&
                    voucherApply.tblVoucherModels[0].currency === "VND" &&
                    totalAmount +
                      shipfee -
                      (voucherApply?.tblVoucherModels[0]?.value || 0) <
                      0
                      ? true
                      : false)
                      ? true
                      : false
                  }
                  loading={visible}
                >
                  Xác nhận và thanh toán
                </Button>
                <Flex gap={10}>
                  <Link
                    href={{
                      pathname: "/product-quote",
                      query: { type: "order" },
                    }}
                    style={{ flex: 1 }}
                    onClick={() => setShipfeeSaleOrder(shipfee)}
                  >
                    <Button className={style.btnQuote}>In báo giá</Button>
                  </Link>
                  <Link
                    href={{
                      pathname: "/product-quote",
                      query: { type: "order", download: "Y" },
                    }}
                    style={{ flex: 1 }}
                    onClick={() => setShipfeeSaleOrder(shipfee)}
                  >
                    <Button className={style.btnQuote}>Tải ảnh báo giá</Button>
                  </Link>
                </Flex>
              </Flex>
            )}
          </div>
        </div>
        <Box>
          <Flex mb={13}>
            <IconMapPin style={{ width: 24, height: 30 }} />
            <Text lineClamp={2} className={style.infoTitle}>
              Đảm bảo bạn đã nhập đúng địa chỉ:{" "}
              <Text span className={style.infoSpan}>
                {dataSaleOrder?.tblSaleOrderCommand?.shippingAddress}
              </Text>
            </Text>
          </Flex>
          <Flex>
            <IconMail size={24} />
            <Text lineClamp={2} className={style.infoTitle}>
              Thông tin chi tiết đơn hàng sẽ được gửi đến địa chỉ email:{" "}
              <Text span className={style.infoSpan}>
                {dataSaleOrder?.tblSaleOrderCommand?.buyerEmail}
              </Text>
            </Text>
          </Flex>
        </Box>
      </div>
    </div>
  );
};

export default RightBox;
