"use client";
import ProductCarousel from "@/common/CarouselProductCard";
import HeaderSection from "@/components/HeaderSection";
import { TblItem } from "@/model/ProductList";

interface dataProps {
  data: TblItem[];
}
const LaptopService: React.FC<dataProps> = ({ data }) => {
  const title = "Sửa chữa laptop";
  const listButton = [
    {
      value: "sua-main-laptop",
      label: "Sửa Main Laptop",
    },
    {
      value: "sua-cong-lan-laptop",
      label: "Sửa Cổng LAN Laptop",
    },
    {
      value: "sua-audio-laptop",
      label: "Sửa Audio Laptop",
    },
    {
      value: "sua-ban-le-laptop",
      label: "Sửa Bản Lề Laptop",
    },

    {
      value: "sua-man-hinh-laptop",
      label: "Sửa Màn Hình Laptop",
    },
    {
      value: "sua-wifi-laptop",
      label: "Sửa Wifi Laptop",
    },

    {
      value: "sua-nguon-laptop",
      label: "Sửa Nguồn Laptop",
    },
    {
      label: "Xem tất cả",
      value: "sua-chua-laptop",
    },
  ];
  return (
    <div style={{ padding: "10px 0px" }}>
      <HeaderSection title={title} listButton={listButton} />
      <ProductCarousel data={data.slice(0, 10)} rows={1} />
      <ProductCarousel data={data.slice(10, 20)} rows={1} />
    </div>
  );
};

export default LaptopService;
