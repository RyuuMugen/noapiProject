"use client";
import ProductCarousel from "@/common/CarouselProductCard";
import HeaderSection from "@/components/HeaderSection";
import { TblItem } from "@/model/ProductList";

interface dataProps {
  data: TblItem[];
}
const Screen: React.FC<dataProps> = ({ data }) => {
  const title = "Sửa chữa màn hình";
  const listButton = [
    {
      label: "Xem tất cả",
      value: "/thay-man-hinh-laptop",
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

export default Screen;
