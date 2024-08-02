import { Roboto } from "next/font/google";
import style from "./style.module.scss";
import {
  IconArrowBigRightFilled,
  IconBoxSeam,
  IconTruck,
  IconDiscountCheck,
  IconTool,
  IconClipboardList,
} from "@tabler/icons-react";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function procedure() {
  return (
    <main className={roboto.className}>
      <div className={style.container}>
        <div className={style.shippingProcess}>
          <div className={style.shippingIcon}>
            <IconClipboardList />
          </div>
          <div className="shipping-step">
            <div className={style.shippingStepTittle}>Chờ thực hiện</div>
            <div className={style.shippingStepContent}>
              <p>HACOM đang thực hiện lên đơn cho khách hàng.</p>
            </div>
          </div>
        </div>
        <div className={style.shippingProcess}>
          <div className={style.shippingIcon}>
            <IconBoxSeam />
          </div>
          <div className="shipping-step">
            <div className={style.shippingStepTittle}>Kho xuất hàng</div>
            <div className={style.shippingStepContent}>
              <p>
                Kho tiếp nhận đơn hàng
                <IconArrowBigRightFilled className={style.icon} /> Kiểm tra chất
                lượng và số lượng sản phẩm trên đơn hàng{" "}
                <IconArrowBigRightFilled className={style.icon} /> Bàn giao hàng
                hoá cho nhân viên kỹ thuật.
              </p>
            </div>
          </div>
        </div>
        <div className={style.shippingProcess}>
          <div className={style.shippingIcon}>
            <IconTool />
          </div>
          <div className="shipping-step">
            <div className={style.shippingStepTittle}>Lắp ráp, cài đặt</div>
            <div className={style.shippingStepContent}>
              <p>
                Kỹ thuật nhận đơn hàng{" "}
                <IconArrowBigRightFilled className={style.icon} /> Thực hiện lắp
                đặt sản phẩm cho khách hàng{" "}
                <IconArrowBigRightFilled className={style.icon} /> Bàn giao cho
                nhân viên giao vận.
              </p>
            </div>
          </div>
        </div>
        <div className={style.shippingProcess}>
          <div className={style.shippingIcon}>
            <IconTruck />
          </div>
          <div className="shipping-step">
            <div className={style.shippingStepTittle}>Đơn hàng đang giao</div>
            <div className={style.shippingStepContent}>
              <p>Nhân viên giao vận thực hiện giao hàng cho khách hàng.</p>
            </div>
          </div>
        </div>
        <div className={style.shippingProcess}>
          <div className={style.shippingIcon}>
            <IconDiscountCheck />
          </div>
          <div className="shipping-step">
            <div className={style.shippingStepTittle}>
              Đã giao hàng thành công
            </div>
            <div className={style.shippingStepContent}>
              <p>
                Nhân viên giao vận bàn giao sản phẩm tận nơi
                <IconArrowBigRightFilled className={style.icon} /> Khách hàng ký
                tên xác nhận nhận đơn thành công.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
