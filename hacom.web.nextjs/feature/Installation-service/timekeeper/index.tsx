import { Roboto } from "next/font/google";
import style from "./style.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function timeKeeper() {
  return (
    <main className={roboto.className}>
      <div className={style.container}>
        <div className={style.boxIntro}>
          <div className={style.content}>
            <p>
              Hệ thống chấm công văn phòng góp phần quản lý nhân viên ra vào dễ
              dàng và đảm bảo tính bảo mật. Tiết kiệm thời gian cho nhà quản lý
              với chương trình tự động chấm công và tính lương. Máy chấm công
              vân tay cho văn phòng có thể được sử dụng như là một hệ thống tích
              hợp cơ bản. Mà không cần sử dụng thêm bất kỳ các thiết bị thu thập
              dữ liệu chấm công hay bất kỳ thiết bị nào khác.
            </p>
            <p>
              Hiện nay tại HACOM cung cấp các sản phẩm máy chấm công vân tay,
              khuôn mặt, thẻ từ chính hãng. Và các sản phẩm liên quan hệ thống
              kiểm soát ra – vào, hệ thống đóng mở cửa.
            </p>
          </div>
          <div className={style.image}>
            <img
              src="https://hanoicomputercdn.com/media/lib/08-07-2023/may-cham-cong91.png"
              alt="Máy chấm công"
              title="máy chấm công"
            />
          </div>
        </div>
        <div className={style.title}>GIÁ DỊCH VỤ LẮP ĐẶT CƠ BẢN</div>
        <img src="https://hanoicomputercdn.com/media/lib/08-07-2023/bang-gia-lap-dat-may-cham-cong3.png" />
      </div>
      <div className={style.box}>
        <span style={{ fontWeight: 700 }}>Lưu ý:</span>
        <ul>
          <li>
            <span style={{ fontWeight: 700 }}>
              Bảng giá trên chỉ áp dụng với những văn phòng, nơi lắp đặt có điều
              kiện thi công lắp đặt thuận lợi. Vị trí modem mạng và nguồn đến
              máy chấm công không quá 5m. Với các văn phòng, phòng họp, khu vực
              có thiết kế đặc biệt hay có những yêu cầu chi tiết từ chủ đầu tư
              thì cần khảo sát thực tế để đưa ra mức giá chuẩn nhất cho từng
              hạng mục.
            </span>
          </li>
          <li>
            Báo giá chưa bao gồm thuế VAT, Quý khách có nhu cầu xuất hóa đơn,
            vui lòng liên hệ kinh doanh để tư vấn chi tiết.
          </li>
          <li>
            Vật tư phụ như dây điện,dây mạng, hạt mạng, ống ghen, ốc vit... tính
            theo thực tế sử dụng trực tiếp tại công trình.
          </li>
          <li>
            Khách hàng có nhu cầu lắp đặt máy chấm công và hệ thống kiểm soát
            cửa tại ngoại thành Hà Nội, HCM như các huyện Sóc Sơn, Đông Anh, Gia
            Lâm... và các tỉnh lân cận như Bắc Ninh, Hưng Yên, Hải Dương... Bán
            kính trên 20km vui lòng liên hệ Kinh doanh để được tư vấn chi tiết.
          </li>
          <li>
            Báo giá trên cho các sản phẩm máy chấm công thông thường, các máy
            chấm công quang học cao cấp, hệ thống kiểm soát tòa nhà, công xưởng
            lớn sẽ được báo giá sau khi khảo sát.
          </li>
        </ul>
      </div>
    </main>
  );
}
