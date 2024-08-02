import { Roboto } from "next/font/google";
import style from "./style.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function airConditioner() {
  return (
    <main className={roboto.className}>
      <div className={style.container}>
        <img src="https://hanoicomputercdn.com/media/lib/11-07-2023/bang-gia-vat-tu-va-lap-dat-dieu-hoa1.png" />
      </div>
      <div className={style.box}>
        <span style={{ fontWeight: 700 }}>Lưu ý:</span>
        <ul>
          <li>
            Đối với các trường hợp địa hình khó thi công, phải thuê dàn giáo,
            hoặc công cụ hỗ trợ, khách hàng sẽ trả chi phí cho việc phát sinh
            này.
          </li>
          <li>Bảng giá vật tư trên chưa bao gồm thuế GTGT (VAT).</li>
        </ul>
      </div>
    </main>
  );
}
