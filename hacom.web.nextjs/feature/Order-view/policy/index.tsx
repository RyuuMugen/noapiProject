import { Roboto } from "next/font/google";
import style from "./style.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function policy() {
  return (
    <main className={roboto.className}>
      <div className={style.container}>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://hanoicomputercdn.com/media/lib/27-12-2022/logo-hacom-faster.png"
            style={{ width: 303 }}
          />
        </div>
        <h3 className={style.title}>GIAO HÀNG SIÊU TỐC 2H</h3>
        <div className={style.fasterContainer}>
          <div className={style.fasterElement}>
            <div className={style.fasterElementTitle}>Miễn phí vận chuyển</div>
            <div className={style.fasterElementContent}>
              <p>Không giới hạn giá trị đơn hàng.</p>
              <p>Không giới hạn địa điểm nhận hàng.</p>
            </div>
          </div>
          <div className={style.fasterElement}>
            <div className={style.fasterElementTitle}>Nhanh chóng</div>
            <div className={style.fasterElementContent}>
              <p>Nhận hàng ngay sau 2h.</p>
            </div>
          </div>
          <div className={style.fasterElement}>
            <div className={style.fasterElementTitle}>Khuyến mại, giảm giá</div>
            <div className={style.fasterElementContent}>
              <p>
                Hưởng đầy đủ chương trình khuyến mại, giảm giá của sản phẩm.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
