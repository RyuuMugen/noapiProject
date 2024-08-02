import { Roboto } from "next/font/google";
import style from "./style.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function camera() {
  return (
    <main className={roboto.className}>
      <div className={style.container}>
        <div className={style.boxIntro}>
          <div className={style.content}>
            <p>
              Khi mua các sản phẩm tại HACOM, quý khách sẽ được miễn phí toàn bộ
              tất cả các vật tư kèm theo bộ có sẵn. Với một số thiết bị khác khi
              lắp đặt, cài đặt có thể phát sinh thêm chi phí vật dụng kèm theo,
              HACOM xin phép gửi quý khách bảng giá thành dịch vụ lắp đặt, sữa
              chữa, bảo trì … để tham khảo thêm.{" "}
            </p>
          </div>

          <div className={style.image}>
            <img
              src="https://hanoicomputercdn.com/media/lib/10-07-2023/cameraanninh1.png"
              alt="Camera"
              title="Camera"
            />
          </div>
        </div>
        <div className={style.title}>GIÁ DỊCH VỤ LẮP ĐẶT CƠ BẢN</div>
        <div className={style.subTitle}>
          Phí nhân công tối thiểu 200.000đ/ lần lắp đặt
        </div>
        <img src="https://hanoicomputercdn.com/media/lib/10-07-2023/bang-gia-lap-dat-camera-thiet-bi-an-ninh1.png" />
      </div>

      <div className={style.title}>GIÁ DỊCH VỤ LẮP ĐẶT NÂNG CAO</div>
      <div className={style.box}>
        <p>
          <span style={{ fontWeight: 700 }}>Thiết bị lắp đặt</span>: Camera an
          ninh, tổng đài điện thoại, thiết bị báo động chống trộm, thiết bị kiểm
          soát, thiết bị mạng
        </p>
        <p>
          <span style={{ fontWeight: 700 }}>Đơn giá dịch vụ</span>: THỎA THUẬN
          theo khảo sát thực tế và yêu cầu của khách hàng.
        </p>
        <p>
          <span style={{ fontWeight: 700 }}>Dịch vụ bao gồm</span>:
        </p>
        <ul>
          <li>Tại các vị trí khó lắp đặt, nguy hiểm (cao quá 4mét, …)</li>
          <li>Cài đặt, kết nối trên nhiều thiết bị, nhiều khu vực.</li>
          <li>Cài đặt các chức năng thông minh nâng cao.</li>
          <li>Kiểm đầu cuối hệ thống tổng đài.</li>
        </ul>
      </div>

      <div className={style.title}>
        GIÁ DỊCH VỤ VỆ SINH, BẢO TRÌ – BẢO DƯỠNG, SỬA CHỮA
      </div>
      <img src="https://hanoicomputercdn.com/media/lib/10-07-2023/bang-gia-sua-chua-bao-tri-bao-duong2.png" />

      <div className={style.title}>GIÁ DỊCH VỤ SỬA CHỮA NÂNG CAO</div>

      <div className={style.box}>
        <p>
          – <span style={{ fontWeight: 700 }}>Đơn giá</span>: Theo khảo sát thực
          tế và yêu cầu của khách hàng.
        </p>
        <p>
          – <span style={{ fontWeight: 700 }}>Dịch vụ bao gồm</span>:
        </p>
        <ul>
          <li>
            Lắp đặt tại các vị trí khó lắp đặt camera, nguy hiểm (cao quá 4m…)
          </li>
          <li>Kiểm tra nhiều thiết bị, nhiều điểm kết nối, kết nối xa.</li>
          <li>Hệ thống bị chập chờn, khó xác định lý do.</li>
          <li>
            Phạm vi thực hiện trên 20km tính từ trung tâm HCM/HN sẽ tính theo
            dịch vụ nâng cao.
          </li>
        </ul>
      </div>

      <div className={style.box2}>
        <span style={{ fontWeight: 700 }}>Lưu ý:</span>
        <ul>
          <li>Bảng giá trên áp dụng khu vực trong 20km tại TpHCM, Hà Nội.</li>
          <li>
            Bảng giá trên chưa bao gồm VAT, không bao gồm phí thuê khác như giàn
            giáo, cẩu hàng, …
          </li>
          <li>
            Bảng giá có thể được điều chỉnh trên hệ thống mà không kịp báo trước
            (<span style={{ fontWeight: 700 }}>*</span>)
          </li>
          <li>
            HACOM chỉ hỗ trợ cài đặt, cấu hình phần mềm liên quan các thiết bị
            sử dụng có đăng ký bản quyền theo luật định.
          </li>
          <li>
            Khách hàng{" "}
            <span style={{ fontWeight: 700 }}>
              tự chịu mọi rủi ro, tổn thất, thiệt hại
            </span>{" "}
            liên quan đến sản phẩm và con người trong trường hợp{" "}
            <span style={{ fontWeight: 700 }}>tự ý lắp đặt /cài đặt</span> sản
            phẩm, tự mua vật tư hoặc sử dụng vật tư có sẵn.
          </li>
          <li>
            Các phát sinh ngoài danh mục trên sẽ được thực hiện theo khảo sát
            thực tế và đơn giá thoả thuận.
          </li>
        </ul>
      </div>
    </main>
  );
}
