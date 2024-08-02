"use client";
import AppContainer from "@/common/AppContainer";
import Link from "@/common/Link";
import ServiceCard from "@/common/ServiceCard";
import { Flex, Pagination, Select } from "@mantine/core";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import Service1 from "@/assets/service-1.jpg";
import Service10 from "@/assets/service-10.jpg";
import Service11 from "@/assets/service-11.jpg";
import Service12 from "@/assets/service-12.jpg";
import Service2 from "@/assets/service-2.jpg";
import Service3 from "@/assets/service-3.jpg";
import Service4 from "@/assets/service-4.jpg";
import Service5 from "@/assets/service-5.jpg";
import Service6 from "@/assets/service-6.jpg";
import Service7 from "@/assets/service-7.jpg";
import Service8 from "@/assets/service-8.jpg";
import Service9 from "@/assets/service-9.jpg";
import ServiceListBanner from "@/assets/service-list-banner-top.png";
import style from "./service-list.module.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const ServiceListPage = () => {
  const link = { title: "Dịch vụ sửa chữa, lắp đặt", url: "#" };

  const dataService = [
    {
      image: Service1,
      title: "Sửa chữa laptop cơ bản: phần nguồn sơ cấp trên main",
      price: "150,000Đ - 500,000Đ",
      rating: 4,
    },
    {
      image: Service2,
      title: "Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
    {
      image: Service3,
      title: "Sửa màn hình laptop",
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
    {
      image: Service7,
      title: "Sửa chữa laptop nâng cao: sửa chữa phần nguồn thứ cấp trên main",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
    {
      image: Service8,
      title: "Sửa chữa bản lề laptop quay 360 độ",
      price: "150,000Đ - 500,000Đ",
      rating: 3.5,
    },
    {
      image: Service9,
      title: "Sửa chữa bản lề laptop quay 360 độ",
      price: "150,000Đ - 500,000Đ",
      rating: 5,
    },
    {
      image: Service10,
      title: "Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 5,
    },
    {
      image: Service11,
      title: "Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 5,
    },
    {
      image: Service12,
      title: "Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 5,
    },
    {
      image: Service1,
      title: "Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
    {
      image: Service2,
      title: "Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
    {
      image: Service3,
      title: "Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
    {
      image: Service4,
      title: "Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
    {
      image: Service5,
      title: "Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
    {
      image: Service6,
      title: "Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
    {
      image: Service7,
      title: "Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
    {
      image: Service8,
      title: "Sửa card wifi laptop",
      price: "150,000Đ - 500,000Đ",
      rating: 4.3,
    },
  ];
  const [activePage, setPage] = useState(1);

  return (
    <main className={roboto.className}>
      <AppContainer>
        <Link link={link} />
      </AppContainer>
      <AppContainer>
        <h1 className={style.mainTitle}>Dịch vụ sửa chữa, lắp đặt</h1>
      </AppContainer>
      <div className={style.bannerTop}>
        <Image src={ServiceListBanner} alt="Service List Banner Top" />
      </div>
      <div className={style.serviceList}>
        <AppContainer>
          <Flex
            gap={{ base: "sm", sm: "md", md: "lg", lg: 15 }}
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
            className={style.serviceListFilter}
          >
            <Select
              placeholder="Sửa Laptop"
              data={["Màn Hình LT", "Bàn Phím LT", "Main Laptop", "Ram LT"]}
              className={style.selectForm}
              radius={8}
            />
            <Select
              placeholder="Sửa linh kiện máy tính"
              data={["Màn Hình LT", "Bàn Phím LT", "Main Laptop", "Ram LT"]}
              className={style.selectForm}
              radius={8}
            />
            <Select
              placeholder="Sửa máy in"
              data={["Màn Hình LT", "Bàn Phím LT", "Main Laptop", "Ram LT"]}
              className={style.selectForm}
              radius={8}
            />
            <Select
              placeholder="Sửa thiết bị văn phòng"
              data={["Màn Hình LT", "Bàn Phím LT", "Main Laptop", "Ram LT"]}
              className={style.selectForm}
              radius={8}
            />
            <Select
              placeholder="Sửa điện thoại"
              data={["Màn Hình LT", "Bàn Phím LT", "Main Laptop", "Ram LT"]}
              className={style.selectForm}
              radius={8}
            />
            <Select
              placeholder="Bảo dưỡng máy tính"
              data={["Màn Hình LT", "Bàn Phím LT", "Main Laptop", "Ram LT"]}
              className={style.selectForm}
              radius={8}
            />
            <Select
              placeholder="Thi công"
              data={["Màn Hình LT", "Bàn Phím LT", "Main Laptop", "Ram LT"]}
              className={style.selectForm}
              radius={8}
            />
            <Select
              placeholder="Cài đặt"
              data={["Màn Hình LT", "Bàn Phím LT", "Main Laptop", "Ram LT"]}
              className={style.selectForm}
              radius={8}
            />
          </Flex>

          <Flex justify="center" className={style.serviceListItems} wrap="wrap">
            {dataService?.map((item, index) => (
              <ServiceCard
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </Flex>
          <Pagination
            total={6}
            value={activePage}
            onChange={setPage}
            mt="sm"
            className={style.pagination}
          />
        </AppContainer>
      </div>
    </main>
  );
};
export default ServiceListPage;
