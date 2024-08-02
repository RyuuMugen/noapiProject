import { Roboto } from "next/font/google";
import { Input, Button } from "@mantine/core";
import { isNullOrUndefined } from "@/extension/StringExtension";
import {
  IconSearch,
  IconFileDescription,
  IconStar,
  IconTool,
  IconTruck,
  IconMailDollar,
} from "@tabler/icons-react";
import { isNotEmpty, useForm } from "@mantine/form";
import { getDetailStatusSaleOrder } from "@/api/apiSaleOrder";
import { useEffect, useState } from "react";
import style from "./style.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

interface OrderStatus {
  orderNumber: number;
  status: string;
  createdDate: string | null;
}

export default function search() {
  const [data, setData] = useState<OrderStatus>();
  const [log, setLog] = useState("");
  const form = useForm({
    initialValues: {
      phone: "",
      code: "",
    },
    validate: {
      phone: isNotEmpty("- Bạn chưa nhập SĐT"),
      code: isNotEmpty("- Bạn chưa nhập Mã đơn hàng"),
    },
  });

  const handleCheckStatus = async (dataSubmit: any) => {
    try {
      const callapi = await getDetailStatusSaleOrder(
        `buyerTelephone=${dataSubmit.phone}&orderNumber=${dataSubmit.code}`
      );
      if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
        const dataApi = callapi?.data;
        if (dataApi != null && !isNullOrUndefined(dataApi)) {
          setData(dataApi);
        }
      } else {
        setLog("Không có dữ liệu đơn hàng");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };
  return (
    <main className={roboto.className}>
      <div className={style.container}>
        <h2 className={style.heading}>TRA CỨU ĐƠN HÀNG GẦN ĐÂY</h2>
        <form
          onSubmit={form.onSubmit((e) => {
            handleCheckStatus(e);
          })}
        >
          <div className={style.inputBox}>
            <div className={style.inputTitle}>Nhập số điện thoại của bạn:</div>
            <Input
              className={style.input}
              size="xs"
              radius="md"
              type="number"
              {...form.getInputProps("phone")}
            />
          </div>
          <div className={style.inputBox}>
            <div className={style.inputTitle}>Nhập mã đơn hàng của bạn:</div>
            <Input
              className={style.input}
              size="xs"
              radius="md"
              {...form.getInputProps("code")}
            />
          </div>
          <div className={style.submit}>
            <div className={style.errorBox}>
              {form.errors.code && (
                <div className={style.errorMessage}>{form.errors.code}</div>
              )}
              {form.errors.phone && (
                <div className={style.errorMessage}>{form.errors.phone}</div>
              )}
            </div>

            <Button
              className={style.button}
              type="submit"
              variant="filled"
              color="#ed1b24"
            >
              <IconSearch />
              TRA CỨU
            </Button>
          </div>
        </form>

        <div className={style.orderStatus} id="js-track-status">
          {data && data.status === "Đơn hàng chưa thực hiện!" ? (
            <div
              className={style.itemActive}
              data-step="1"
              data-type="chờ thực hiện"
            >
              <IconFileDescription />
              <span className="title">Chờ thực hiện</span>
            </div>
          ) : (
            <div className={style.item} data-step="1" data-type="chờ thực hiện">
              <IconFileDescription />
              <span className="title">Chờ thực hiện</span>
            </div>
          )}
          <div className={style.item} data-step="2" data-type="kho hoàn thành">
            <IconMailDollar />
            <span className="title">Kho xuất hàng</span>
          </div>

          <div
            className={style.item}
            data-step="3"
            data-type="kỹ thuật hoàn thành"
          >
            <IconTruck />
            <span className="title">Lắp ráp, cài đặt</span>
          </div>

          <div
            className={style.item}
            data-step="4"
            data-type="kỹ thuật/giao vận đang giao  hàng"
          >
            <IconTool />
            <span className="title">Đang giao hàng</span>
          </div>

          <div className={style.item} data-step="5" data-type="hàng đã giao">
            <IconStar />
            <span className="title">Giao hàng thành công</span>
          </div>
        </div>
        {data && (
          <div className={style.orderStatusBox} id="js-track-status">
            <div>
              <div className={style.titleBox}>
                <span>Trạng thái đơn hàng</span>
              </div>
              <div className={style.contentBox}>
                <p>Mã đơn hàng: {data.orderNumber}</p>
                <p>Trạng thái đơn hàng: {data.status}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
