"use client";
import { getDataListProductFull } from "@/api/apiProduct";
import ProductCarousel from "@/common/CarouselProductCard";
import HeaderSection from "@/components/HeaderSection";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { TblItem } from "@/model/ProductList";
import { useEffect, useState } from "react";

// interface BannerCarouselDemoProps {
//   data: TblItem[];
// }
const Charger = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const callapi = await getDataListProductFull(
          "?Skip=0&Take=20&Active=true&CategoryId=61 "
        );

        if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
          const dataApi = callapi?.data;
          if (dataApi != null && !isNullOrUndefined(dataApi)) {
            setData(dataApi);
          }
        } else {
          console.log("Dữ liệu không tồn tại");
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const title = "Sạc";
  const listButton = [
    "Thay Loa",
    "Thay cáp sạc",
    "Lỗi Nguồn",
    "Thay ép kính",
    "Thay pin",
    "Thay camera",
    "Thay, độ vỏ",
    "Xem tất cả",
  ];
  return (
    <div style={{ padding: "10px 0px" }}>
      <HeaderSection title={title} />
      <ProductCarousel data={data.slice(0, 10)} rows={1} />
      <ProductCarousel data={data.slice(10, 20)} rows={1} />
    </div>
  );
};

export default Charger;
