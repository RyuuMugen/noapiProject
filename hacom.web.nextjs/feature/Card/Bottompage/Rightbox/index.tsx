"use client";
import React, { useEffect, useState } from "react";
import style from "./rightbox.module.scss";
import { Anchor, Flex, NumberFormatter, Text } from "@mantine/core";
import { useCardItems } from "@/useContext/CardContext";
import { useRouter } from "next/navigation";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import { getDataDetailVoucher } from "@/api/apiVoucher";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { NotificationExtension } from "@/extension/NotificationExtension";

type RightBoxProps = {
  totalAmount: number;
};

const RightBox: React.FC<RightBoxProps> = ({ totalAmount }) => {
  const { voucherApply, setVoucherApply } = useSaleOrder();
  const [topPosition, setTopPosition] = useState(210);
  const [discountCode, setDiscountCode] = useState("");
  const [discountCodeApply, setDiscountCodeApply] = useState(false);
  const router = useRouter();
  const { values } = useCardItems();

  const handleApplyDiscount = async () => {
    // NotificationExtension.Info("Mã giảm giá không được áp dụng");
    const dataApi = await getDataDetailVoucher(`?id=${discountCode}`);
    if (!isNullOrUndefined(dataApi) && dataApi?.success) {
      if (dataApi?.data?.usageStatus === "NO") {
        setVoucherApply(dataApi.data);
        setDiscountCodeApply(true);
        NotificationExtension.Success("Áp dụng mã giảm giá thành công");
      } else NotificationExtension.Fails("Mã giảm giá này đã được sử dụng!");
    } else if (dataApi != null)
      NotificationExtension.Fails("Áp dụng mã giảm giá thất bại!");
    // setDiscountCode("");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolledTop = Math.max(64, 210 - window.scrollY);
      setTopPosition(scrolledTop);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return totalAmount === 0 ? (
    <div className={style.box2} style={{ top: `${topPosition}px` }}>
      <div className={style.content}>
        <div className={style.title}>
          <p>Tóm tắt đơn hàng</p>
        </div>
        <div className={style.orderbox3}>
          <div className={style.flexbox}>
            <span className={style.val}>Số tiền thanh toán:</span>
            <span className={style.orderprice}>
              <NumberFormatter
                className={style.promotionPrice}
                value={totalAmount}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </span>
          </div>
          <div className={style.orderbox4}>
            <button className={style.disableButton}>TIẾP THEO</button>
          </div>
        </div>
      </div>
    </div>
  ) : (
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
            <span className={style.price}>0Đ</span>
          </div>
          {/* {voucherApply && voucherApply?.tblVoucherModels[0]?.value && (
            <div className={style.flexbox}>
              <span className={style.val}>Mã giảm giá:</span>
              <NumberFormatter
                className={style.price}
                value={voucherApply?.tblVoucherModels[0]?.value}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </div>
          )} */}
        </div>
        {/* <div className={style.salecodebox}>
          <span>Mã giảm giá</span>
          <div className={style.inputgroup}>
            <input
              className={style.input}
              placeholder="Nhập mã giảm giá"
              onChange={(e) => setDiscountCode(e.target.value)}
            ></input>
            <button className={style.inputbutton} onClick={handleApplyDiscount}>
              ÁP DỤNG
            </button>
          </div>
          {voucherApply && (
            <Flex>
              <Text>{voucherApply?.voucherCode}</Text>
              <Anchor>Xóa mã</Anchor>
            </Flex>
          )}
        </div> */}
        <div className={style.orderbox}>
          <div className={style.flexbox}>
            <span className={style.val}>Số tiền thanh toán:</span>
            <span className={style.orderprice}>
              <NumberFormatter
                className={style.promotionPrice}
                value={totalAmount}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </span>
          </div>
          <div className={style.orderbox2}>
            <button
              className={style.orderbutton}
              onClick={() => router.push(`/order`)}
            >
              TIẾP THEO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightBox;
