"use client";
import ProductCarousel from "@/common/CarouselProductCard";
import HeaderSection from "@/components/HeaderSection";
import { TblItem } from "@/model/ProductList";

interface dataProps {
  data: TblItem[];
}
const Keyboard: React.FC<dataProps> = ({ data }) => {
  const title = "Sửa chữa & thay bàn phím laptop";
  const listButton = [
    // {
    //   value: "sua-may-pos",
    //   label: "Sửa Máy POS",
    // },
    // {
    //   value: "sua-may-photo",
    //   label: "Sửa Máy Photo",
    // },
    // {
    //   value: "sua-may-scan",
    //   label: "Sửa Máy Scan",
    // },
    // {
    //   value: "sua-may-chieu",
    //   label: "Sửa Máy Chiếu",
    // },
    // {
    //   value: "sua-may-huy-giay",
    //   label: "Sửa Máy Hủy Giấy",
    // },
    // {
    //   value: "sua-may-ban-ma-vach",
    //   label: "Sửa Máy Bắn Mã Vạch",
    // },
    // {
    //   value: "sua-may-cham-cong",
    //   label: "Sửa Máy Chấm Công",
    // },
    // {
    //   value: "sua-chua-may-in",
    //   label: "Sửa Chữa Máy In",
    // },
    {
      label: "Xem tất cả",
      value: "thay-ban-phim-laptop",
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

export default Keyboard;
