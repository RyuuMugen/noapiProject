import { Roboto } from "next/font/google";
import style from "./style.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function projector() {
  return (
    <main className={roboto.className}>
      <div className={style.container}>
        <div className={style.boxIntro}>
          <div className={style.image}>
            <img
              src="https://hanoicomputercdn.com/media/lib/08-07-2023/maychieu1.png"
              alt="Máy chấm công"
              title="máy chấm công"
            />
          </div>
          <div className={style.content}>
            <p>
              HACOM là đơn vị chuyên cung cấp các sản phẩm máy chiếu, màn chiếu,
              phụ kiện chính hãng. Ngoài ra, với nhiều năm kinh nghiệm trong
              ngành, chúng tôi còn cung cấp dịch vụ lắp đặt máy chiếu: lắp đặt
              máy chiếu lớp học, lắp đặt máy chiếu hội trường lớn, lắp đặt máy
              chiếu phòng chiếu phim... với nhiều loại trần nhà nhà khác nhau:
              trần bê tông, trần thạch cao...
            </p>
            <ul>
              <li>
                Lắp đặt nhanh chóng: Triển khai ngay trong ngày, hoặc theo thỏa
                thuận với khách hàng
              </li>
              <li>
                Đảm bảo tiến độ, đáp ứng số lượng lớn khi khách hàng yêu cầu
              </li>
              <li>
                Đặc biệt: Chúng tôi miễn phí khảo sát, tư vấn giải pháp, bảo
                hành dài lâu, hỗ trợ kỹ thuật bất kỳ lúc nào có yêu cầu.
              </li>
              <li>
                Khảo sát, tư vấn giải pháp tận nơi với độ ngũ kỹ thuật giàu kinh
                nghiệm
              </li>
              <li>
                Đảm bảo tính thẩm mỹ, và tính tiện dụng cho khách hàng, đáp ứng
                yêu cầu của khách hàng
              </li>
            </ul>
          </div>
        </div>
        <div className={style.title}>GIÁ DỊCH VỤ LẮP ĐẶT CƠ BẢN</div>
        <img src="https://hanoicomputercdn.com/media/lib/08-07-2023/bang-gia-lap-dat-may-chieu2.png" />
      </div>
      <div className={style.box}>
        <span style={{ fontWeight: 700 }}>Lưu ý:</span>
        <ul>
          <li>
            <span style={{ fontWeight: 700 }}>
              Bảng giá trên chỉ áp dụng với những văn phòng, phòng họp tiêu
              chuẩn, điều kiện thi công lắp đặt thuận lợi. Với các văn phòng,
              phòng họp, hội trường và phòng chiếu phim có thiết kế đặc biệt hay
              có những yêu cầu chi tiết từ chủ đầu tư thì cần khảo sát thực tế
              để đưa ra mức giá chuẩn nhất cho từng hạng mục.
            </span>
          </li>
          <li>
            Bán kính được tính từ vị trí Showroom gần nhất đến địa điểm lắp đặt.
          </li>
          <li>
            Báo giá chưa bao gồm thuế VAT, Quý khách có nhu cầu xuất hóa đơn,
            vui lòng liên hệ kinh doanh để tư vấn chi tiết.
          </li>
          <li>
            Vật tư phụ như dây điện, ống ghen, ốc vit... tính theo thực tế sử
            dụng trực tiếp tại công trình.
          </li>
          <li>
            Khách hàng có nhu cầu lắp đặt/ treo máy chiếu tại ngoại thành Hà
            Nội, HCM như các huyện Sóc Sơn, Đông Anh, Gia Lâm... và các tỉnh lân
            cận như Bắc Ninh, Hưng Yên, Hải Dương... Bán kính trên 20km vui lòng
            liên hệ Kinh doanh để được tư vấn chi tiết.
          </li>
          <li>
            Báo giá trên cho các sản phẩm màn chiếu treo tường, màn chiếu điện
            thông thường. Với các loại màn chiếu chuyên dụng như màn chiếu âm
            trần, màn chiếu tab- tention, màn chiếu quang học... vui lòng liên
            hệ Kinh doanh để được tư vấn chi tiết.
          </li>
        </ul>
      </div>

      <div className={style.title}>QUY TRÌNH LẮP ĐẶT MÁY CHIẾU</div>

      <div className={style.stepBox}>
        {/* <!--Item 1--> */}
        <div className={style.box2}>
          <div className={style.stepTitle}>Bước 1: Tư vấn lắp đặt</div>
          <div className={style.contentBox1}>
            <ul>
              <li>
                Tiếp nhận thông tin khách hàng nhu cầu sử dụng, không gian, môi
                trường trình chiếu để tư vấn trọn bộ máy chiếu phù hợp.
              </li>
              <li>
                Xác định không gian trình chiếu và nhu cầu lắp máy chiếu để tư
                vấn lắp máy chiếu phù hợp.
              </li>
              <li>Lắp máy chiếu treo trần cố định</li>
              <li>Lắp máy chiếu di động có thể cơ động di chuyển</li>
              <li>
                Chọn loại máy chiếu, màn chiếu phù hợp với không gian, ánh sáng
                nơi sử dụng, nhu cầu sử dụng.
              </li>
              <li>
                Sau khi chọn máy chiếu, màn chiếu phù hợp với không gian và nhu
                cầu.
              </li>
            </ul>
            <p>
              Các phụ kiện lắp đặt máy chiếu bao gồm: giá treo máy chiếu, cáp
              tín hiệu, dây nguồn,…
            </p>
            <p>
              Dụng cụ lắp đặt: khoan, tua vít, kìm, các loại ốc vít, vít nở
              thạch cao, bê tông,…
            </p>
          </div>
        </div>
        {/* <!--End: Item 1--> */}

        {/* <!--Item 2--> */}
        <div className={style.box2}>
          <div className={style.stepTitle}>
            Bước 2: Tiến hành lắp đặt máy chiếu
          </div>
          <div className={style.contentBox1}>
            <p>
              Sau khi chọn được vị trí lắp đặt máy chiếu và màn chiếu ở vị trí
              thích hợp, chúng ta tiến hành lắp màn chiếu vào vị trí và xác định
              khoảng cách phù hợp để treo máy chiếu đảm bảo hình ảnh hiển thị
              tốt nhất, an toàn nhất.
            </p>
          </div>
        </div>
        {/* <!--End: Item 2-->
            
            <!--Item 3--> */}
        <div className={style.box2}>
          <div className={style.stepTitle}>
            Bước 3: Căn chỉnh máy chiếu lắp đặt
          </div>
          <div className={style.contentBox2}>
            <p>
              Việc lắp đặt máy chiếu hoàn thành sau khi treo máy chiếu và màn
              chiếu. Dây tín hiệu máy chiếu kết nối với tín hiệu, chúng ta căn
              chỉnh máy chiếu phù hợp với việc treo và căn chỉnh các thông số
              máy chiếu phù hợp.
            </p>
          </div>
        </div>
        {/* <!--End: Item 3-->
            
            <!--Item 4--> */}
        <div className={style.box2}>
          <div className={style.stepTitle}>
            Bước 4: Bàn giao nghiệm thu hướng dẫn sử dụng
          </div>
          <div className={style.contentBox2}>
            <p>
              Kiểm tra lại toàn bộ quá trình lắp đặt máy chiếu và màn chiếu đảm
              bảo an toàn, chính xác và bàn giao cho khách hàng.
            </p>
          </div>
        </div>
        {/* <!--End: Item 4--> */}
      </div>
    </main>
  );
}
