import { Roboto } from "next/font/google";
import style from "./help.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Page() {
  return (
    <div className={style.box}>
      <div className={style.title}>
        Hướng dẫn mua <strong>Trả góp</strong>
      </div>
      <div className={style.row}>
        <div className={style.rowChild}>
          <p>
            <strong>1. Chọn sản phẩm muốn mua trả góp</strong>
          </p>
          <img
            src="https://hanoicomputercdn.com/media/lib/22-03-2021/tragop.png"
            alt=""
            className={style.image}
          />
          <p className={style.rowContent}>
            Từ chi tiết sản phẩm, bấm vào nút <strong>MUA TRẢ GÓP</strong> và
            điền đủ các thông tin trong bảng đăng ký trả góp
          </p>
        </div>
        <div className={style.rowChild}>
          <p>
            <strong>2. Chờ điện thoại từ tổng đài viên</strong>
          </p>
          <img
            src="https://hacom.vn/media/lib/13-03-2021/3tragop.png"
            alt=""
            className={style.image}
          />
          <p className={style.rowContent}>
            Nhân viên của chúng tôi sẽ gọi cho bạn để tư vấn và xác nhận thông
            tin
          </p>
        </div>
        <div className={style.rowChild}>
          <p>
            <strong>3. Nhận sản phẩm tại Shop</strong>
          </p>
          <img
            src="https://hanoicomputercdn.com/media/lib/01-09-2022/hinhanhnguoido-2.jpg"
            alt=""
            className={style.image}
          />
          <p className={style.rowContent}>
            Nhận sản phẩm ngay khi hồ sơ được công ty tài chính duyệt
          </p>
        </div>
      </div>
    </div>
  );
}
