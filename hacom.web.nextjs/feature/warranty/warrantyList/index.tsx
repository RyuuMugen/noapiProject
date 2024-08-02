"use client";
import { Roboto } from "next/font/google";
import { Table } from "@mantine/core";
import AppContainer from "@/common/AppContainer";
import style from "./style.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function warrantyList() {
  return (
    <main className={roboto.className}>
      <AppContainer>
        <div className={style.main}>
          <div>
            <h2 className={style.title}>
              Danh sách địa điểm bảo hành theo hãng
            </h2>
          </div>
          <div className={style.tableBox} id="resultIDBH">
            <Table withTableBorder withColumnBorders>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th w={40} className={style.tableHeader}>
                    STT
                  </Table.Th>
                  <Table.Th w={40} className={style.tableHeader}>
                    HÃNG
                  </Table.Th>
                  <Table.Th w={510} className={style.tableHeader}>
                    ĐỊA ĐIỂM TIẾP NHẬN BẢO HÀNH
                  </Table.Th>
                  <Table.Th w={260} className={style.tableHeader}>
                    SẢN PHẨM BẢO HÀNH
                  </Table.Th>
                  <Table.Th w={140} className={style.tableHeader}>
                    LIÊN HỆ
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {/* <!--Begin:Acer--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={10} className={style.tdNumber}>
                    <b>1</b>
                  </Table.Td>
                  <Table.Td rowSpan={10}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/acer.png" />
                    </div>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Tầng 1, số 9A Đường Đào Duy Anh, Q. Đống Đa, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    1900 969601
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 585-587 Điện Biên Phủ, P. 1, Q. 3, TP. Hồ Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    1900 969601
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Tầng 6, Số 7 Lê Hồng Phong, Ngô Quyền, Hải Phòng
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0313 522 522
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 44A Hoàng Văn Thụ, P. Hoàng Văn Thụ, TP Thái Nguyên, Tỉnh
                    Thái Nguyên
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0208 3856 567
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    26A Đại lộ Lê Lợi, P. Điện Biên, TP. Thanh Hóa, Thanh Hóa
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0237 372 8668
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 171 Lê Lợi, TP. Vinh, Nghệ An
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0383 598 238
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    296 Nguyễn Hoàng, P Vĩnh Trung, TP. Đà Nẵng
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0511 3584 488
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    25 Lê Thánh Tông, TP. Buôn Ma Thuột, Đắk Lắk
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0250 3855 800
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 86/16 Lý Tự Trọng, P. An Cư, Q. Ninh Kiều, TP. Cần Thơ
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>1900 2159</Table.Td>
                </Table.Tr>
                {/* <!--End:Acer-->
              
              <!--Begin:Asus--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={6} className={style.tdNumber}>
                    <b>2</b>
                  </Table.Td>
                  <Table.Td rowSpan={6}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/asus.png" />
                    </div>
                  </Table.Td>
                  <Table.Td className={style.tdNumber}>
                    Số 9 ngõ 117 Thái Hà, Đống Đa, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>1900 6588</Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Tầng 3, 292 Tây Sơn, Q. Đống Đa, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    024 7300 1800
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 111 Hoàng Hoa Thám, Q. Thanh Khê, TP. Đà Nẵng
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>1800 6588</Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Tòa nhà Quinimex, lầu 8, số 28 Nguyễn Thị Diệu, P. 6, Q. 3,
                    TP. Hồ Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    1900 555 581
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 34 Lý Tự Trọng, Q. Ninh Kiều, Cần Thơ
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    1900 555 581
                  </Table.Td>
                </Table.Tr>
                {/* <!--End:Asus-->
              
              <!--Begin:MSI--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={5} className={style.tdNumber}>
                    <b>3</b>
                  </Table.Td>
                  <Table.Td rowSpan={5}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/msi.png" />
                    </div>
                  </Table.Td>
                  <Table.Td className={style.tdNumber}>
                    27 Yên Lãng, Đống Đa, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Phụ kiện
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    028 7300 0911
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 71-73, Hàm Nghi, P. Vĩnh Trung, Q. Thanh Khê, Đà Nẵng
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Phụ kiện
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0236 356 2666
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 194/3 Nguyễn Trọng Tuyển, P. 8, Q.Phú Nhuận, TP. Hồ Chí
                    Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Phụ kiện
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    028 7300 0911
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 131D, Trần Hưng Đạo, P. An Phú, Q. Ninh Kiều, Cần Thơ
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Phụ kiện
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0292 3781 978
                  </Table.Td>
                </Table.Tr>
                {/* <!--End:MSI-->
              
              <!--Begin:Dell--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={5} className={style.tdNumber}>
                    <b>4</b>
                  </Table.Td>
                  <Table.Td rowSpan={5}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/dell.png" />
                    </div>
                  </Table.Td>
                  <Table.Td className={style.tdNumber}>
                    Tầng 02, Tòa nhà Hacinco, 110 Phố Thái Thịnh, P. Trung Liệt,
                    Q. Đống Đa, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    024 3537 5858
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 36 Hàm Nghi, P. Thạc Gián, Q.Thanh Khê, Đà Nẵng
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0511 3653 848
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 23 Nguyễn Thị Huỳnh, P. 8, Q.Phú Nhuận, TP. Hồ Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    028 3842 3333
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 211/2 Nguyễn Văn Linh. Q Ninh Kiều, Cần Thơ
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0710 378 3599
                  </Table.Td>
                </Table.Tr>
                {/* <!--End: Dell-->
              
              <!--Begin: Lenovo--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={7} className={style.tdNumber}>
                    <b>5</b>
                  </Table.Td>
                  <Table.Td rowSpan={7}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/lenovo.png" />
                    </div>
                  </Table.Td>
                  <Table.Td className={style.tdNumber}>
                    Số 156 Thái Thịnh, Láng Hạ, Đống Đa, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Điện thoại di động, Máy tính bảng, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    02432 757 666 <br /> 02432 767 666
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 1 Trần Bình Trọng, Ngô Quyền, Hải Phòng
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Điện thoại di động, Máy tính bảng, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0231 360 1390
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 171 Lê Lợi, Vinh, Nghệ An
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Điện thoại di động, Máy tính bảng, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0238 3833 933
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 30 Duy Tân, P.Hòa Thuận Đông, Q. Hải Châu, Đà Nẵng
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Điện thoại di động, Máy tính bảng, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0236 3688 266
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 45 Trần Quang Khải, P. Tân Định, Q. 1, TP. Hồ Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Điện thoại di động, Máy tính bảng, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    028 3526 8885
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 138 Trần Hưng Đạo, P. An Nghiệp, Q. Ninh Kiều, Cần Thơ
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Điện thoại di động, Máy tính bảng, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0292 3765 576
                  </Table.Td>
                </Table.Tr>
                {/* <!--End: Lenovo-->
              
              <!--Begin: HP--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={5} className={style.tdNumber}>
                    <b>6</b>
                  </Table.Td>
                  <Table.Td rowSpan={5}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/hp.png" />
                    </div>
                  </Table.Td>
                  <Table.Td className={style.tdNumber}>
                    Số 74 Cửa Bắc, Ba Đình, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>Laptop</Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0246 262 7095 <br /> 1800 588 868
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 60 Nguyễn Du, TP. Đà Nẵng
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>Laptop</Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    1800 588 868
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 162 Hai Bà Trưng, Đa Kao, Q. 1, Hồ Chí Minh, Việt Nam
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>Laptop</Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    1800 588 868
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 129 Lý Tự Trọng, Ninh Kiều, Cần Thơ
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>Laptop</Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    1800 588 868
                  </Table.Td>
                </Table.Tr>
                {/* <!--End: HP-->
              
              <!--Gigabyte--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={4} className={style.tdNumber}>
                    <b>7</b>
                  </Table.Td>
                  <Table.Td rowSpan={4}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/gigabyte.png" />
                    </div>
                  </Table.Td>
                  <Table.Td className={style.tdNumber}>
                    Số 117 Hồng Hà, P. 2, Q. Tân Bình, TP. Hồ Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Điện Thoại Di Động, Máy Tính Bảng, Laptop, Cấp Cứu Dữ Liệu,
                    Đồng Hồ Thông Minh, Máy Ảnh KTS, Máy Chơi Game, Mac-PC-All
                    In One
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    1800 1080
                    <br /> 0283 844 2008
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 178-180 Hoàng Văn Thụ, P9, Q Phú Nhuận, TP. Hồ Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Điện Thoại Di Động, Máy Tính Bảng, Laptop, Cấp Cứu Dữ Liệu,
                    Đồng Hồ Thông Minh, Máy Ảnh KTS, Máy Chơi Game, Mac-PC-All
                    In One
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    1800 1080
                    <br /> 0283 844 2008
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 265 Xô Viết Nghệ Tĩnh , P. 15 , Q. Bình Thạnh, TP. Hồ Chí
                    Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Điện Thoại Di Động, Máy Tính Bảng, Laptop, Cấp Cứu Dữ Liệu,
                    Đồng Hồ Thông Minh, Máy Ảnh KTS, Máy Chơi Game, Mac-PC-All
                    In One
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    1800 1080
                    <br /> 0283 844 2008
                  </Table.Td>
                </Table.Tr>
                {/* <!--End:Gigabyte-->
              
              <!--WD--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={3} className={style.tdNumber}>
                    <b>8</b>
                  </Table.Td>
                  <Table.Td rowSpan={3}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/wd.png" />
                    </div>
                  </Table.Td>
                  <Table.Td className={style.tdNumber}>
                    Phòng 402, Tầng 4, Tòa Nhà Sun Office, Số 38, Ngõ 133, Phố
                    Thái Hà, Đống Đa, Hà Nôi
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Thiết bị lưu Trữ
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    024 3259 5311
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 9, Đặng Thị Nhu, P. Nguyễn Thái Bình, Q1, TP. Hồ Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Thiết bị lưu Trữ
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    028 2246 9397
                  </Table.Td>
                </Table.Tr>
                {/* <!--End: WD-->
              
             <!--Begin:Brother--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={5} className={style.tdNumber}>
                    <b>9</b>
                  </Table.Td>
                  <Table.Td rowSpan={5}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/brother.png" />
                    </div>
                  </Table.Td>
                  <Table.Td className={style.tdNumber}>
                    85 Nguyễn Du, Q. Hai Bà Trưng, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Thiết bị văn phòng
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0243 972 6071
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    110 Hoàng Hoa Thám, Q. Thanh Khê, Đà Nẵng
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Thiết bị văn phòng
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    02363 889 789
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Tầng 5 tòa nhà Minh Long, 17 Bà Huyện Thanh Quan, P.6, Q. 3
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Thiết bị văn phòng
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>1900 6062</Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    1/53A Đinh Tiên Hoàng, Q. Cái Răng, Cần Thơ
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Thiết bị văn phòng
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0292 376 7557
                  </Table.Td>
                </Table.Tr>
                {/* <!--End:Brother-->
              
              <!--Canon--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={3} className={style.tdNumber}>
                    <b>10</b>
                  </Table.Td>
                  <Table.Td rowSpan={3}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/canon.png" />
                    </div>
                  </Table.Td>
                  <Table.Td className={style.tdNumber}>
                    130A Giảng Võ, Q. Ba Đình, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Thiết bị văn phòng
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    024 3722 6666
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    10A Trần Hưng Đạo, P. Phạm Ngũ Lão, Q1, TP. Hồ Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Thiết bị văn phòng
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    028 3836 5666
                  </Table.Td>
                </Table.Tr>
                {/* <!--End:Canon-->
              
              <!--Epson--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={3} className={style.tdNumber}>
                    <b>11</b>
                  </Table.Td>
                  <Table.Td rowSpan={3}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/epson.png" />
                    </div>
                  </Table.Td>
                  <Table.Td className={style.tdNumber}>
                    29 Tuệ Tĩnh, P. Bùi Thị Xuân, Q. Hai Bà Trưng, TP. Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Thiết bị văn phòng
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    024 3978 4775
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    71 Trương Định, P. Bến Thành, Q. I, TP. Hồ Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Thiết bị văn phòng
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    028 3823 4235
                  </Table.Td>
                </Table.Tr>
                {/* <!--End:Epson-->
              <!--Samsung--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={10} className={style.tdNumber}>
                    <b>12</b>
                  </Table.Td>
                  <Table.Td rowSpan={10}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/samsung.png" />
                    </div>
                  </Table.Td>
                  <Table.Td className={style.tdNumber}>
                    Số 6, Ngõ Hàng Bột, Q. Đống Đa, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Màn hình, Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    024 3732 5111
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    68 Hoàng Cầu, Đống Đa, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Màn hình, Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    024 3737 3008
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Tổ 27, P. Phan Thiết, TP. Tuyên Quang
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Màn hình, Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0207 382 2008
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Lô 4.06 Ngô Quyền, Khu đô thị cao cấp Trần Lãm, P. Trần Lãm,
                    TP. Thái Bình
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Màn hình, Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0277 383 1341
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Khối 2, TT. Yên Thành, H. Yên Thành, Nghệ An
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Màn hình, Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0238 3863 079
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    118 Nguyễn Trường Tộ, P. Cẩm Phô, TP. Hội An, Quảng Nam
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Màn hình, Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0235 3939 123
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    20/7 Nguyễn Ảnh Thủ, Ấp Hưng Lân, X. Bà Điểm, H. Hóc Môn,
                    TP. Hồ Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Màn hình, Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0283 301 7688
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    308 Đường 30/4 - P. Xuân Khánh, Ninh Kiều, Cần Thơ
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Màn hình, Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0225 3859 305
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    100 Trần Phú, P. Xuân An, TX. Long Khánh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Màn hình, Máy tính, Laptop
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    0251 364 7658
                  </Table.Td>
                </Table.Tr>
                {/* <!--End:Samsung-->
              
              <!--Begin: Edra--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={4} className={style.tdNumber}>
                    <b>13</b>
                  </Table.Td>
                  <Table.Td rowSpan={4}>
                    <div>
                      <img src="https://hanoicomputercdn.com/media/lib/08-08-2023/logoedra.png" />
                    </div>
                  </Table.Td>
                  <Table.Td className={style.tdNumber}>
                    160 Trần Đại Nghĩa, phường Đồng Tâm, Hai Bà Trưng, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Chuột, Bàn phím, Tai nghe, Ghế
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    024. 3.628.5888
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    343/4 Nguyễn Phước Nguyên, P. An Khê, Q. Thanh Khê, TP Đà
                    Nẵng
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Chuột, Bàn phím, Tai nghe, Ghế
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    093.255.4885
                  </Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 104 Đường 14 Khu đô thị Him Lam, P.Tân Hưng, Q7, TP. Hồ
                    Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Chuột, Bàn phím, Tai nghe, Ghế
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>
                    028. 6.2865888
                  </Table.Td>
                </Table.Tr>
                {/* <!--End:Edra-->
              
              <!--Begin:LG--> */}
                <Table.Tr className="Table.TrclolorBH">
                  <Table.Td rowSpan={10} className={style.tdNumber}>
                    <b>14</b>
                  </Table.Td>
                  <Table.Td rowSpan={10}>
                    <div className={style.LogoBH}>
                      <img src="https://hanoicomputercdn.com/media/lib/08-08-2023/lg.png" />
                    </div>
                  </Table.Td>
                </Table.Tr>
                <Table.Td className={style.tdNumber}>
                  Số 27 Lê Văn Lương, Nhân Chính, Thanh Xuân, Hà Nội
                </Table.Td>
                <Table.Td className={style.tdProduct}>
                  Laptop, Màn hình
                </Table.Td>
                <Table.Td className={style.tdPhoneNumber}>1800 1503</Table.Td>
                <Table.Tr className={style.oddAdress}></Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Tầng 1 tòa nhà Phúc Đồng, Đàm Quan Trung, Phúc Đồng, Long
                    Biên, Hà Nội
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Laptop, Màn hình
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>1800 1503</Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 9, Lô 22B, Lê Hồng Phong, TP. Hải Phòng
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Laptop, Màn hình
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>1800 1503</Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 274 Nguyễn Văn Linh, Đà Nẵng
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Laptop, Màn hình
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>1800 1503</Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 28,33, Phạm Ngọc Thạch, Cẩm Khê, Ninh Kiều, Cần Thơ
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Laptop, Màn hình
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>1800 1503</Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 98A, Võ Thị Sáu, P. Quyết Thắng, TP. Biên Hòa, Đồng Nai
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Laptop, Màn hình
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>1800 1503</Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 55 Sương Nguyệt Ánh, P. Bến Thành, Q1, TP. Hồ Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Laptop, Màn hình
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>1800 1503</Table.Td>
                </Table.Tr>
                <Table.Tr className={style.oddAdress}>
                  <Table.Td className={style.tdNumber}>
                    Số 18C, Phan Văn Trị, Phường 10, Q. Gò Vấp, TP. Hồ Chí Minh
                  </Table.Td>
                  <Table.Td className={style.tdProduct}>
                    Laptop, Màn hình
                  </Table.Td>
                  <Table.Td className={style.tdPhoneNumber}>1800 1503</Table.Td>
                </Table.Tr>
                {/* <!--End:LG--> */}
              </Table.Tbody>
            </Table>
          </div>
        </div>
      </AppContainer>
    </main>
  );
}
