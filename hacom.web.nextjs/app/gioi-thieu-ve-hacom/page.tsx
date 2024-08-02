import { Roboto } from "next/font/google";
import style from "./style.module.scss";
import AppContainer from "@/common/AppContainer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Công ty Cổ phần Đầu tư Công nghệ HACOM",
  description: "Công ty Cổ phần Đầu tư Công nghệ HACOM",
};
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Page() {
  return (
    <main className={roboto.className}>
      <AppContainer>
        <h1 className={style.title}>GIỚI THIỆU VỀ HACOM</h1>
        <h2 className={style.category}>GIỚI THIỆU CHUNG</h2>
        <div className={style.bottomLine}></div>
        <p style={{ lineHeight: "1.5em" }}>
          <strong>Công ty Cổ phần Đầu tư Công nghệ HACOM</strong> (viết tắt là “
          <strong>HACOM</strong>”, tiền thân là Công ty Cổ phần Máy tính Hà Nội,
          sở hữu thương hiệu <strong>HANOICOMPUTER</strong>), được thành lập vào
          tháng 9/2001, hoạt động chủ yếu trong lĩnh vực bán lẻ các sản phẩm máy
          tính và thiết bị văn phòng. Trải qua chặng đường hơn 20 năm phát
          triển, đến nay HACOM đã trở thành một trong những thương hiệu hàng đầu
          trong lĩnh vực kinh doanh các sản phẩm Công nghệ thông tin tại Việt
          Nam với hệ thống các showroom quy mô và hiện đại trải dài từ Bắc vào
          Nam.
        </p>
        <p style={{ lineHeight: "1.5em" }}>
          Nhiều tổ chức uy tín liên tục đánh giá cao HACOM với nhiều giải thưởng
          danh giá: Top 50 Nhãn hiệu nổi tiếng Việt Nam do Hội Sở hữu Trí tuệ
          Việt Nam công nhận và trao tặng; Top 500 Doanh nghiệp tăng trưởng
          nhanh nhất Việt Nam 2021 và 2022 (FAST500), top 500 Doanh nghiệp lớn
          nhất Việt Nam 2021 (VNR500) do Vietnam Report công nhận và trao tặng,
          top 50 Thương hiệu Uy tín Hàng đầu Châu Á 2022 do Trung tâm Nghiên cứu
          Phát triển Doanh nghiệp Châu Á phối hợp với tổ chức Giám sát Chất
          lượng Quốc tế xét chọn.
        </p>
        <p style={{ lineHeight: "1.5em" }}>
          Với khẩu hiệu <strong>“Uy tín tạo dựng niềm tin”</strong>, HACOM mong
          muốn xây dựng “niềm tin” của Khách hàng bằng chất lượng dịch vụ tốt
          nhất, vượt trội nhất. Đó cũng chính là kim chỉ nam cho sự phát triển
          bền vững mà HACOM hướng đến.
        </p>
        <h2 className={style.category}>TẦM NHÌN VÀ SỨ MỆNH</h2>
        <div className={style.bottomLine}></div>
        <p style={{ lineHeight: "1.5em", fontWeight: 500 }}>Tầm nhìn:</p>

        <p style={{ lineHeight: "1.5em" }}>
          - Là chuỗi bán lẻ các sản phẩm công nghệ hàng đầu với độ phủ rộng khắp
          các tỉnh thành trên cả nước.
        </p>

        <p style={{ lineHeight: "1.5em", fontWeight: 500 }}>Sứ mệnh:</p>

        <p style={{ lineHeight: "1.5em" }}>
          - Với sứ mệnh phụng sự, chúng tôi đem đến cho khách hàng những trải
          nghiệm và dịch vụ ưu việt, qua đó tạo nên những giá trị tốt đẹp hơn
          cho cộng đồng và cuộc sống.
        </p>
        <br />
        <h2 className={style.category}>GIÁ TRỊ CỐT LÕI</h2>
        <div className={style.bottomLine}></div>
        <p>
          Văn hóa HACOM được thể hiện qua bốn giá trị cốt lõi:{" "}
          <span style={{ color: "#000080" }}>
            <strong>TẬN TÂM – TRÁCH NHIỆM – SÁNG TẠO – KHÁC BIỆT</strong>
          </span>
        </p>
        {/* <!-- Chỉ trên pc --> */}
        <div className={style.staticEqualBox}>
          <div
            className={style.staticEqualHalf}
            style={{ border: "1px solid #FA8C11" }}
          >
            <img
              src="https://hacom.vn/media/lib/gia-tri-cot-loi-my-4-150x150.jpg"
              alt=""
              className={style.staticEqualHalfImage}
              data-was-processed="true"
            />
            <h3
              className={style.staticEqualHalfTitle}
              style={{ color: "#FA8C11" }}
            >
              TẬN TÂM
            </h3>
            <p className={style.staticEqualHalfSlogan}>
              <em style={{ fontSize: " 1rem" }}>“Vượt trên sự mong đợi”</em>
            </p>
            <p className={style.staticEqualHalfExplain}>
              HACOM đặt tận tâm là nền tảng của phục vụ, lấy khách hàng làm
              trung tâm, mang đến những giá trị đích thực tới khách hàng và đối
              tác.
            </p>
          </div>
          <div
            className={style.staticEqualHalf}
            style={{ border: "1px solid #EC1922" }}
          >
            <img
              src="https://hacom.vn/media/lib/gia-tri-cot-loi-my-5-150x150.jpg"
              alt=""
              className={style.staticEqualHalfImage}
              data-was-processed="true"
            />
            <h3
              className={style.staticEqualHalfTitle}
              style={{ color: "#EC1922" }}
            >
              TRÁCH NHIỆM
            </h3>
            <p className={style.staticEqualHalfSlogan}>
              <em style={{ fontSize: " 1rem" }}>“Chúng ta luôn cố gắng”</em>
            </p>
            <p className={style.staticEqualHalfExplain}>
              HACOM đặt chữ TÍN lên hàng đầu, luôn thể hiện tinh thần trách
              nhiệm cao cùng phương châm “Làm hết việc chứ không làm hết giờ”.
            </p>
          </div>
          <div
            className={style.staticEqualHalf}
            style={{ border: "1px solid #26A9E1" }}
          >
            <img
              src="https://hacom.vn/media/lib/gia-tri-cot-loi-my-7-150x150.jpg"
              alt=""
              className={style.staticEqualHalfImage}
              data-was-processed="true"
            />
            <h3
              className={style.staticEqualHalfTitle}
              style={{ color: "#26A9E1" }}
            >
              KHÁC BIỆT
            </h3>
            <p className={style.staticEqualHalfSlogan}>
              <em style={{ fontSize: " 1rem" }}>“Dám nghĩ – Dám làm”</em>
            </p>
            <p className={style.staticEqualHalfExplain}>
              HACOM đặt sự khác biệt là chủ trương để xây dựng công ty thành một
              doanh nghiệp dẫn đầu.
            </p>
          </div>
          <div
            className={style.staticEqualHalf}
            style={{ border: "1px solid #242156" }}
          >
            <img
              src="https://hacom.vn/media/lib/gia-tri-cot-loi-my-6-150x150.jpg"
              alt=""
              className={style.staticEqualHalfImage}
              data-was-processed="true"
            />
            <h3
              className={style.staticEqualHalfTitle}
              style={{ color: "#242156" }}
            >
              SÁNG TẠO
            </h3>
            <p className={style.staticEqualHalfSlogan}>
              <em style={{ fontSize: " 1rem" }}>“Không gì là không thể”</em>
            </p>
            <p className={style.staticEqualHalfExplain}>
              HACOM coi sáng tạo là đòn bẩy để phát triển, luôn đề cao các sáng
              kiến để hoàn thiện, hiệu quả hơn, nâng tầm giá trị.
            </p>
          </div>
        </div>
        <br />
        <h2 className={style.category} style={{ marginTop: 30 }}>
          HÀNH TRÌNH PHÁT TRIỂN
        </h2>
        <div className={style.bottomLine}></div>
        <ul className={style.group}>
          <li>
            <span className={style.groupItem}>2001</span>: Thành lập công ty
            TNHH MÁY TÍNH HÀ NỘI
          </li>
          <li>
            <span className={style.groupItem}>2007</span>: Áp dụng ISO
            9000:2001, Hệ thống tiêu chuẩn quản lý chất lượng sản phẩm trên toàn
            cầu
          </li>
          <li>
            <span className={style.groupItem}>2010</span>: Khai trương chi nhánh
            HACOM Đống Đa tại 43 Thái Hà – Đống Đa – Hà Nội
          </li>
          <li>
            <span className={style.groupItem}>2014</span>: Cổ phần hóa công ty,
            đổi tên thành Công ty Cổ phần Máy tính Hà Nội
          </li>
          <li>
            <span className={style.groupItem}>2016</span>: Khai trương chi nhánh
            HACOM Hải Phòng tại A6 Lê Hồng Phong – Ngô Quyền – Hải Phòng (chuyển
            địa điểm về 406 Tô Hiệu - Lê Chân - Hải Phòng từ tháng 8/2021)
          </li>
          <li>
            <span className={style.groupItem}>2017</span>: Khai trương chi nhánh
            HACOM Cầu Giấy tại 79 Nguyễn Văn Huyên – Cầu Giấy – Hà Nội
          </li>
          <li>
            <span className={style.groupItem}>2018</span>: Khai trương chi nhánh
            HACOM Hà Đông 1 tại 511 Quang Trung – Hà Đông – Hà Nội
          </li>
          <li>
            <span className={style.groupItem}>2019</span>: Khai trương chi nhánh
            HACOM Q3 TP Hồ Chí Minh tại 520 đường Cách Mạng Tháng Tám – Quận 3 –
            Hồ Chí Minh (chuyển địa điểm về 478 đường Cách Mạng Tháng Tám – Quận
            3 – Hồ Chí Minh từ tháng 1/2024)
          </li>
          <li>
            <span className={style.groupItem}>2020</span>: Khai trương chi nhánh
            HACOM Long Biên tại 398 Nguyễn Văn Cừ - Long Biên - Hà Nội
          </li>
          <li>
            <span className={style.groupItem}>2020</span>: Đạt Top 50 nhãn hiệu
            nổi tiếng nhất Việt Nam năm 2020
          </li>
          <li>
            <span className={style.groupItem}>2021</span>: Khai trương chi nhánh
            HACOM Từ Sơn tại 299 Minh Khai - Từ Sơn - Bắc Ninh
          </li>
          <li>
            <span className={style.groupItem}>2021</span>: Đổi tên thành Công ty
            Cổ phần đầu tư công nghệ HACOM
          </li>
          <li>
            <span className={style.groupItem}>2021</span>: Đạt Top 500 doanh
            nghiệp lớn nhất Việt Nam năm 2021
          </li>
          <li>
            <span className={style.groupItem}>2021</span>: Đạt Top 500 doanh
            nghiệp tăng trưởng nhanh nhất 2021 (FAST500)
          </li>
          <li>
            <span className={style.groupItem}>2021</span>: Khai trương chi nhánh
            HACOM Thanh Trì CT4A Bắc Linh Đàm - Hoàng Mai - Hà Nội
          </li>
          <li>
            <span className={style.groupItem}>2022</span>: Khai trương chi nhánh
            HACOM Đông Anh tại 77 Cao Lỗ - Đông Anh - Hà Nội
          </li>
          <li>
            <span className={style.groupItem}>2022</span>: Khai trương chi nhánh
            HACOM Bắc Giang tại 135 Hùng Vương - Hoàng Văn Thụ - Bắc Giang
            (chuyển địa điểm về 356 Nguyễn Thị Minh Khai – Dĩnh Kế - Bắc Giang
            từ tháng 12/2023)
          </li>
          <li>
            <span className={style.groupItem}>2022</span>: Đạt Top 500 doanh
            nghiệp tăng trưởng nhanh nhất Việt Nam năm 2022
          </li>
          <li>
            <span className={style.groupItem}>2022</span>: Khai trương chi nhánh
            HACOM Hà Đông 2 tại 57 Trần Phú - Hà Đông - Hà Nội
          </li>
          <li>
            <span className={style.groupItem}>2022</span>: Khai trương chi nhánh
            HACOM Phủ Lý tại 136 Lê Hoàn - Quốc Lộ 1A - Phủ Lý - Hà Nam (chuyển
            địa điểm về 145B Trường Chinh - Phủ Lý - Hà Nam từ tháng 7/2023)
          </li>
          <li>
            <span className={style.groupItem}>2022</span>: Khai trương chi nhánh
            HACOM Vinh tại 147 Lê Lợi - Thành Phố Vinh - Nghệ An (chuyển địa
            điểm về 156 Nguyễn Sỹ Sách - Thành Phố Vinh - Nghệ An từ tháng
            7/2023)
          </li>
          <li>
            <span className={style.groupItem}>2022</span>: Khai trương chi nhánh
            HACOM Thái Nguyên tại 126 Lương Ngọc Quyến - Quang Trung - Thái
            Nguyên (chuyển địa điểm về 118 Lương Ngọc Quyến - Quang Trung - Thái
            Nguyên từ tháng 7/2023)
          </li>
          <li>
            <span className={style.groupItem}>2022</span>: Top 50 thương hiệu uy
            tín hàng đầu châu Á 2022
          </li>
          <li>
            <span className={style.groupItem}>2022</span>: Khai trương chi nhánh
            HACOM Thanh Hóa tại 6 Trần Phú - Điện Biên - Thanh Hóa (chuyển địa
            điểm về 164 Lạc Long Quân - Đông Vệ - Thanh Hóa từ tháng 11/2023)
          </li>

          <li>
            <span className={style.groupItem}>2023</span>: Đạt Top 500 doanh
            nghiệp lớn nhất Việt Nam năm 2022
          </li>
          <li>
            <span className={style.groupItem}>2023</span>: Đạt Top 50 doanh
            nghiệp tăng trưởng xuất sắc nhất 2023 (Top 50 Vietnam Best Growth)
          </li>
          <li>
            <span className={style.groupItem}>2023</span>: Đạt Top 500 doanh
            nghiệp tăng trưởng nhanh nhất 2023 (FAST500)
          </li>
        </ul>
        <br />
        <br />
        <h2 className={style.category}>SƠ ĐỒ TỔ CHỨC</h2>
        <div className={style.bottomLine}></div>
        <img
          className={style.diagram}
          src="https://hanoicomputercdn.com/media/lib/08-01-2024/hacom-so-do-to-chuc-v4.jpg"
          data-was-processed="true"
        />
        <br />
        <br />
        <h2 className={style.category}>CÁC LĨNH VỰC KINH DOANH</h2>
        <div className={style.bottomLine}></div>
        <div>
          <div className={style.fieldImage}>
            <img
              src="https://hanoicomputercdn.com/media/lib/09-05-2022/hacomprofile-072.jpg"
              alt="Lĩnh Vực Kinh Doanh"
            />
          </div>
          <div className={style.fieldText}>
            <p>
              Đặc biệt trong lĩnh vực Tin học, HACOM chú trọng các hoạt động
              như:
            </p>
            <br />
            <ul className={style.group}>
              <li>
                Thiết kế giải pháp tổng thể (thiết kế hệ thống, xây dựng mạng
                LAN, WAN,..)
              </li>
              <li>
                Cung cấp các thiết bị tin học (Máy chủ, máy tính PC, máy tính
                NOTEBOOKS, các thiết bị ngoại vi, các ứng dụng)
              </li>
              <li>
                Cung cấp phần mềm của các hãng trên thế giới, các phần mềm quản
                lý, truyền thông…
              </li>
              <li>Tư vấn và đào tạo cho khách hàng</li>
              <li>Các dịch vụ bảo hành, bảo trì…</li>
            </ul>

            <br />
            <p>
              Qua thời gian hoạt động, HACOM đã tạo được uy tín và sự tin cậy
              của khách hàng giúp công ty ngày càng lớn mạnh trong các lĩnh vực
              hoạt động.
            </p>
          </div>
        </div>
        <br />
        <br />
        <h2>NHỮNG THÀNH TỰU ĐÃ ĐẠT ĐƯỢC</h2>
        <div className={style.bottomLine}></div>
        <img
          className={style.achievements}
          src="https://hanoicomputercdn.com/media/lib/30-05-2023/hacom-web.jpg"
          data-was-processed="true"
        />
        <br />
        <h2 className={style.category} style={{ marginTop: 30 }}>
          {" "}
          KHÁCH HÀNG CỦA HACOM
        </h2>
        <div className={style.bottomLine}></div>
        <div>
          <div className={style.client}>
            <img
              src="https://hanoicomputercdn.com/media/lib/31-08-2022/khtieubieu.png"
              alt="KH tiêu biểu"
            />
          </div>
          <div className={style.client}>
            <img
              src="https://hanoicomputercdn.com/media/lib/09-05-2022/bencanhkhtieubieu.jpg"
              alt="KH khác"
            />
          </div>
        </div>
        <br />
        <h2 className={style.category} style={{ marginTop: 30 }}>
          ĐỐI TÁC CỦA HACOM
        </h2>
        <div className={style.bottomLine}></div>
        <br />
        <br />
        <div>
          <div className={style.client}>
            <img
              src="https://hanoicomputercdn.com/media/lib/09-05-2022/doitac1m.jpg"
              alt="Đối tác HACOM"
            />
          </div>
          <div className={style.client}>
            <img
              src="https://hanoicomputercdn.com/media/lib/09-05-2022/doitac2.jpg"
              alt="Đối tác HACOM"
            />
          </div>
        </div>
        <br />
        <h2 className={style.category} style={{ marginTop: 30 }}>
          NHÂN SỰ HACOM
        </h2>
        <div className={style.bottomLine}></div>
        <br />
        <div>
          <div className={style.fieldImage}>
            <img
              style={{ width: "64%", margin: "auto", display: "block" }}
              src="https://hanoicomputercdn.com/media/lib/09-05-2022/hocvanhacom.jpg"
              alt="Học vấn HACOM"
            />
          </div>
          <div className={style.fieldText}>
            <p>
              Công Ty Cổ Phần Đầu Tư Công Nghệ HACOM sở hữu đội ngũ cán bộ, nhân
              viên, kỹ thuật viên lên đến trên 500 người với tay nghề kỹ thuật
              cao, giàu chuyên môn và kinh nghiệm.
            </p>
            <br />
            <p>
              Mục tiêu của HACOM là đem đến chất lượng sản phẩm và dịch vụ công
              nghệ hoàn hảo nhất, đáp ứng nhu cầu đa dạng của khách hàng, sản
              phẩm phù hợp tiêu chuẩn quốc tế.
            </p>
            <br />
            <p>
              Với tiêu chí "Môi trường tốt tạo ra những giá trị tuyệt vời”,
              HACOM luôn là đơn vị tiên phong xây dựng môi trường làm việc trẻ
              trung, năng động với chính sách phúc lợi và đãi ngộ hàng đầu cho
              đội ngũ CBNV.
            </p>
          </div>
        </div>
        <br />
        <h2 className={style.category} style={{ marginTop: 30 }}>
          CÁC HOẠT ĐỘNG XÃ HỘI
        </h2>
        <div className={style.bottomLine}></div>
        <ul className={style.group}>
          <li>
            <span className={style.staticEqual}>2022</span>
          </li>
          <p>
            - T10/2022: Chương trình thiện nguyện ủng hộ trẻ em, người dân nghèo
            tại xã Suối Hoa, huyện Tân Lạc, tỉnh Hoà Bình
          </p>
          <p>
            - T10/2022: Chương trình thiện nguyện ủng hộ lũ lụt tại Huyện Kỳ
            Sơn, tỉnh Nghệ An
          </p>
          <p>
            - T8/2022: Chương trình đào tạo và thiện nguyện tại Làng trẻ em
            Birla Hà Nội
          </p>
          <li>
            <span className={style.staticEqual}>2021</span>
          </li>
          <p>
            - T9/2021: Ủng hộ các cán bộ y tế Bệnh viện Bạch Mai trong công tác
            phòng chống dịch COVID-19
          </p>
          <p>
            - T8/2021: Ủng hộ những gia đình khó khăn phường Đồng Tâm – Quận Hai
            Bà Trưng trong dịch COVID-19
          </p>
          <p>
            - T8/2021: Ủng hộ hội IT - TP. Hồ Chí Minh trong công tác phòng
            chống dịch COVID-19
          </p>
          <p>
            - T4/2021: Ủng hộ đồng bào Bắc Giang phòng chống dịch bệnh COVID-19
          </p>
          <p>
            - T3/2021: Ủng hộ Trung tâm Y tế Từ Sơn - Bắc Ninh phòng chống dịch
            bệnh COVID-19
          </p>
          <li>
            <span className={style.staticEqual}>2020:</span>
          </li>
          <p>- T10/2020: Ủng hộ Miền Trung lũ lụt</p>
          <p>
            - T9/2020: Tài trợ Máy tính cho Sinh viên có hoàn cảnh khó khăn của
            trường Đại học Xây Dựng Hà Nội
          </p>
          <p>
            - T1/2020: Cán bộ nhân viên Công ty tham gia chương trình hiến máu
            nhân đạo "Sống là cho đâu chỉ nhận riêng mình"
          </p>
          <li>
            <span className={style.staticEqual}>2019:</span>
          </li>
          <p>
            - T7/2019: Thăm và tặng quà tại Trung tâm điều dưỡng thương binh
            Thuận Thành
          </p>
          <li>
            <span className={style.staticEqual}>2018:</span>
          </li>
          <p>
            - T11/2018: Cán bộ nhân viên Công ty tham gia chương trình hiến máu
            nhân đạo "Giọt hồng yêu thương"
          </p>
          <li>
            <span className={style.staticEqual}>2017:</span>
          </li>
          <p>
            - T10/2017: Ủng hộ các gia đình đồng bào bị ảnh hưởng lũ lụt tại
            Thanh Hóa
          </p>
          <p>
            - T9/2017: Ủng hộ các gia đình đồng bào bị ảnh hưởng lũ lụt tại Hà
            Tĩnh
          </p>
          <li>
            <span className={style.staticEqual}>2016:</span>
          </li>
          <p>
            - T3/2016: Hưởng ứng và tham gia chương trình Thiện Nguyện “Chung
            tay xây trường cho em” tại Thôn Sàn Sỳ Tùng, Xã Sà Phìn, Đồng Văn,
            Tỉnh Hà Giang
          </p>
        </ul>
      </AppContainer>
    </main>
  );
}
