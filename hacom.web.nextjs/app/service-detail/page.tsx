"use client";
import ButtonHotline from "@/assets/btn-hotline.png";
import Service1 from "@/assets/service-1.jpg";
import Service2 from "@/assets/service-2.jpg";
import Service3 from "@/assets/service-3.jpg";
import Service4 from "@/assets/service-4.jpg";
import Service5 from "@/assets/service-5.jpg";
import Service6 from "@/assets/service-6.jpg";
import serviceDetail from "@/assets/service-detail-img.jpg";
import AppContainer from "@/common/AppContainer";
import Link2 from "@/common/Link";
import ServiceCard from "@/common/ServiceCard";
import Comments from "@/feature/ProductDetail/components/Comments";
import Reviews from "@/feature/ProductDetail/components/Reviews";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Rating, Text } from "@mantine/core";
import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import style from "./service-detail.module.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const ServiceDetailPage = () => {
  const params = useSearchParams();
  const serviceName = params.get("title");
  const link = { title: `${serviceName}`, url: "#" };
  const dataService = [
    {
      image: Service1,
      title: "Sửa chữa laptop cơ bản: phần nguồn sơ cấp trên main",
      price: "150,000Đ - 500,000Đ",
      rating: 4,
    },
    {
      image: Service2,
      title: "Sửa chữa laptop chuyên sâu: Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
    {
      image: Service3,
      title: "Sửa chữa laptop chuyên sâu:: Sửa màn hình laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 4.5,
    },
    {
      image: Service4,
      title: "Sửa chữa bản lề laptop 15,6-17,3 inch",
      price: "150,000Đ - 500,000Đ",
      rating: 5,
    },
    {
      image: Service5,
      title: "Sửa chữa laptop chuyên sâu: sửa chữa trên main bị cháy nổ rỉ sét",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
    {
      image: Service6,
      title: "Sửa chữa laptop đơn giản: thay thế cổng kết nối ngoại vi",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
  ];
  return (
    <div className={roboto.className}>
      <AppContainer>
        <Link2 link={link} />
      </AppContainer>
      <div className={style.main}>
        <AppContainer>
          <div className={style.detailService}>
            <Text
              className={style.detailServiceTitle}
              size="30px"
              fw={700}
              c="#fff"
              ta="center"
            >
              {serviceName}
            </Text>
            <div className={style.detailServiceTop}>
              <div className={style.detailServiceTopLeft}>
                <Image
                  width={567}
                  height={293}
                  src={serviceDetail}
                  alt="Service detail each id"
                />
              </div>
              <div className={style.detailServiceTopRight}>
                <Rating
                  value={4.5}
                  fractions={2}
                  readOnly
                  style={{ marginBottom: "30px" }}
                />
                <div
                  className={style.detailServiceTopRightPrice}
                  style={{ marginBottom: "47px" }}
                >
                  <Text size="14px" style={{ marginBottom: "16px" }}>
                    Giá dịch vụ:
                  </Text>
                  <Text c="#1F67D2" size="24px" fw={700}>
                    150,000Đ - 500,000Đ
                  </Text>
                </div>
                <div
                  className={style.detailServiceTopRightMore}
                  style={{ marginBottom: "26px" }}
                >
                  <Text c="#1F2123" fw={700}>
                    Thông tin liên hệ:
                  </Text>
                  <Text>
                    Địa chỉ: Tòa nhà Lilama, 124 Minh Khai, Hai Bà Trưng, Hà Nội
                  </Text>
                  <Text>
                    Giờ làm việc: 8h00 – 22h00 hằng ngày (Làm cả Thứ 7 & CN)
                  </Text>
                </div>
                <Link href="tel:19001903">
                  <Image src={ButtonHotline} alt="button hotline" />
                </Link>
              </div>
            </div>
            <div className={style.detailServiceBottom}>
              <Text fw={700} size="20px" style={{ marginBottom: "15px" }}>
                Sửa main laptop
              </Text>
              <Text c="#1F2123" size="15px" style={{ lineHeight: "24px" }}>
                Khi máy tính của bạn có những dấu hiệu bị hỏng main cần phải sửa
                kịp thời nhưng ở đâu uy tín thì đó lại là câu hỏi tiếp theo bạn
                đặt ra trong đầu. Bạn không cần quá lo lắng khi đã có HACOM -
                chuyên cung cấp các dòng laptop nhập khẩu, chất lượng tốt. Đây
                là cơ sở đáng tin cậy trong việc sửa chữa và thay thế các phụ
                kiện laptop cho người dùng. Cùng với đội ngũ nhân viên nhiệt
                tình, có chuyên môn cao sẽ là lựa chọn đáng để bạn cân nhắc.
              </Text>
              <Text c="#1F2123" size="14px">
                <ul style={{ paddingLeft: "12px" }}>
                  <li>
                    Sửa các lỗi: Bios, nạp ROM cho máy: 200.000Đ - 300.000Đ
                  </li>
                  <li>Sửa các lỗi hàn chip, chipset: 400.000Đ - 500.000Đ</li>
                  <li>Sửa lỗi khe RAM: 200.000Đ</li>
                </ul>
              </Text>
            </div>
          </div>
          {/* <Reviews />
          <Comments /> */}
          <div className={style.ralatedService}>
            <Text
              size="22px"
              fw={700}
              c="#1F67D2"
              tt="uppercase"
              className={style.ralatedServiceTitle}
            >
              Dịch vụ sửa chữa liên quan
            </Text>
            <Carousel
              withIndicators
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: "md", md: 30 }}
              loop
              align="start"
              controlSize={40}
            >
              {dataService?.map((item, index) => (
                <Carousel.Slide key={index}>
                  <ServiceCard
                    title={item.title}
                    rating={item.rating}
                    image={item.image}
                    price={item.price}
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>
        </AppContainer>
      </div>
    </div>
  );
};
export default ServiceDetailPage;
