"use client";
import { Roboto } from "next/font/google";
import { Flex, Text } from "@mantine/core";
import { useState } from "react";
import Search from "./search";
import Policy from "./policy";
import Procedure from "./procedure";
import Method from "./method";
import style from "./style.module.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function orderView() {
  const [idActive, setIdActive] = useState(0);
  const [tabActive, setTabActive] = useState(<Search />);
  const dataTopic = [
    { title: "Tra cứu đơn hàng", page: <Search /> },
    { title: "Chính sách giao hàng", page: <Policy /> },
    { title: "Quy trình giao hàng", page: <Procedure /> },
    { title: "Cách thức tra cứu", page: <Method /> },
  ];
  const handleChangeTopic = (id: number, page: any) => {
    setIdActive(id);
    setTabActive(page);
  };
  return (
    <div className={roboto.className}>
      <div className={style.body}>
        <Flex className={style.topicWrap}>
          {dataTopic.map((topic, index) => (
            <Flex
              key={index}
              align={"center"}
              justify={"center"}
              className={`${style.topic} ${
                idActive == index && style.topicActive
              }`}
              onClick={() => handleChangeTopic(index, topic.page)}
            >
              <Text className={style.topicTitle}>{topic.title}</Text>
            </Flex>
          ))}
        </Flex>
        {tabActive}
        <div className={style.title}>
          <h2>GIAO HÀNG MIỄN PHÍ</h2>
        </div>

        <div className={style.faster2}>
          <div className={style.fasterHalf}>
            <h3>BÁN KÍNH 20KM</h3>
            <div className={style.fasterHalfText}>
              Thời gian giao hàng <b>2h</b> chưa bao gồm thời gian lắp ráp linh
              kiện, cài đặt phần mềm (nếu có).
            </div>
          </div>
          <div className={style.fasterHalf}>
            <h3>BÁN KÍNH TRÊN 20KM</h3>
            <div className={style.fasterHalfText}>
              Hình thức giao hàng chậm, chuyển xe khách (xe đò), thời gian giao
              hàng do HACOM chủ động sắp xếp và sẽ thông tin tới Khách hàng
              trước khi giao.
            </div>
          </div>
        </div>

        <div className={style.faster}>
          Những trường hợp khách hàng chịu phí vận chuyển: Chuyển phát nhanh,
          giao hàng COD (thanh toán tiền tại nơi nhận hàng), giao hàng đảm bảo,
          những hình thức giao hàng theo yêu cầu từ Khách hàng, những sản phẩm
          cồng kềnh như bàn ghế, màn chiếu.
        </div>

        <div className={style.title}>
          <h2>THỜI GIAN GIAO HÀNG</h2>
        </div>

        <div className={style.faster3}>
          <div className={style.faster3Item}>
            <img
              src="https://hanoicomputercdn.com/media/lib/27-12-2022/logo-hacom-faster.png"
              style={{ width: 303 }}
              data-was-processed="true"
            />
            <h4>2H</h4>
          </div>
          <div className={style.faster3Item}>
            <h5>THỜI GIAN ĐẶT HÀNG</h5>
            <div className={style.timeOrder}>Đặt hàng từ 8H - 17H mỗi ngày</div>
            <div className={style.timeOrder}>Đặt hàng sau 17H mỗi ngày</div>
          </div>
          <div className={style.faster3Item}>
            <h5>THỜI GIAN GIAO HÀNG</h5>
            <div className={style.timeOrder}>
              Giao ngay trong 2H (Tính từ thời điểm đơn hàng được xác nhận)
            </div>
            <div className={style.timeOrder}>
              Giao ngay vào Buổi sáng ngày hôm sau
            </div>
          </div>
        </div>

        <div className={style.title}>
          <h2>TRÁCH NHIỆM VỚI HÀNG HÓA</h2>
        </div>

        <div className={style.faster2}>
          <div className={style.fasterHalf}>
            <h3>CHÍNH SÁCH BẢO HÀNH</h3>
            <div className={style.fasterHalfText}>
              Các sản phẩm HACOM FASTER được áp dụng đầy đủ tất cả các chính
              sách bảo hành của HACOM như các hình thức mua hàng khác
            </div>
          </div>
          <div className={style.fasterHalf}>
            <h3>HÌNH THỨC THANH TOÁN</h3>
            <div className={style.fasterHalfText}>
              Các sản phẩm HACOM FASTER được áp dụng đầy đủ tất cả các hình thức
              thanh toán của HACOM ở hiện tại
            </div>
          </div>
        </div>

        <div className={style.faster}>
          <ul>
            <li>
              Quý khách có trách nhiệm kiểm tra hàng hóa khi nhận hàng.
              <br />
              Khi phát hiện hàng hóa bị hư hại, trầy xước, bể vỡ, móp méo, hoặc
              sai hàng hóa thì ký xác nhận tình trạng hàng hóa với nhân viên
              giao nhận và thông báo ngay cho bộ phận chăm sóc khách hàng: 1900
              1903.
            </li>
            <li>
              Sau khi Quý khách đã ký nhận hàng mà không ghi chú hoặc có ý kiến
              về hàng hóa. HACOM không có trách nhiệm với những yêu cầu đổi trả
              vì hư hỏng, trầy xước, bể vỡ, móp méo, sai hàng hóa,... từ Quý
              khách sau này.
            </li>
            <li>
              Nếu dịch vụ vận chuyển do Quý khách chỉ định và lựa chọn thì Quý
              khách sẽ chịu trách nhiệm với hàng hóa và các rủi ro như mất mát
              hoặc hư hại của hàng hóa trong suốt quá trình vận chuyển hàng từ
              HACOM đến Quý khách. Khách hàng sẽ chịu trách nhiệm cước phí và
              tổn thất liên quan.
            </li>
            <li>
              Để bảo vệ quyền lợi khi mua sắm trực tuyến, tránh các thủ đoạn lừa
              đảo không mong muốn HACOM khuyến cáo khách hàng:
              <br />- Chỉ thanh toán mua hàng trên Website, các kênh online và
              cửa hàng chính thống của HACOM.
              <br />- Khi thanh toán bằng hình thức chuyển khoản, chỉ thanh toán
              qua số tài khoản tên chính thức của HACOM.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
