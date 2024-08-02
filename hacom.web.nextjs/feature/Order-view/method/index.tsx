import { Roboto } from "next/font/google";
import style from "./style.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function method() {
  return (
    <main className={roboto.className}>
      <div className={style.container}>
        <h4 className={style.shippingTitle}>Khách hàng tự tra cứu thông tin</h4>
        <p className={style.shippingContent}>
          Sau khi HACOM lên đơn hàng, khách hàng sẽ được cung cấp mã đơn hàng.
          Khách hàng nhập thông tin tra cứu theo form trong tab Tra cứu đơn
          hàng.
        </p>
        <h4 className={style.shippingTitle}>Gọi điện qua Hotline</h4>
        <p className={style.shippingContent}>
          Tổng đài chăm sóc khách hàng: 1900 1903.
        </p>
        <p className={style.shippingContent}>
          Thời gian làm việc: Từ 8h30 đến 20h tất cả các ngày trong tuần (trừ
          Tết Nguyên Đán).
        </p>
      </div>
    </main>
  );
}
