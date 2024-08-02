import { getDataCollection } from "@/api/apiCollection";

import AppContainer from "@/common/AppContainer";
import CardCarousel from "@/common/ProductCarousel";
import { Grid } from "@mantine/core";
import style from "./productCarousle.module.scss";

const HomeCarouselCard = async () => {
  const fetchDataCollection = async () => {
    // Sử dụng Promise.all để gửi các yêu cầu API đồng thời
    const [toppc, topscreen, topcase, topchair] = await Promise.all([
      getDataCollection("Skip=0&Take=8&KeySearch=/top-pc"),
      getDataCollection("Skip=0&Take=8&KeySearch=/top-man-hinh"),
      getDataCollection("Skip=0&Take=8&KeySearch=/top-vo-case"),
      getDataCollection("Skip=0&Take=8&KeySearch=/ghe-gaming"),
    ]);
    // Trả về dữ liệu đã được gọi trong một lần
    return {
      toppc: toppc?.data,
      topscreen: topscreen?.data,
      topcase: topcase?.data,
      topchair: topchair?.data,
    };
  };

  const dataBanner = await fetchDataCollection();
  const dataProductCard = [
    {
      idCategory: 557,
      title: "TOP PC DOANH NGHIỆP BÁN CHẠY NHẤT 2024",
      categoryCode: "top-pc",
      data: dataBanner.toppc,
    },
    {
      idCategory: 558,
      title: "TOP MÀN HÌNH BÁN CHẠY NHẤT 2024",
      categoryCode: "top-man-hinh",
      data: dataBanner.topscreen,
    },
    {
      idCategory: 559,
      title: "TOP VỎ CASE ĐƯỢC ƯA CHUỘNG NHẤT",
      categoryCode: "top-vo-case",
      data: dataBanner.topcase,
    },
    {
      idCategory: 560,
      title: "GHẾ GAMING CÔNG THÁI HỌC BEST SELLER",
      categoryCode: "ghe-gaming",
      data: dataBanner.topchair,
    },
  ];

  return (
    <AppContainer>
      <div className={style.main}>
        {dataProductCard?.map((item: any, index) => {
          return (
            <div className={style.item} key={index}>
              <CardCarousel item={item} />
            </div>
          );
        })}
      </div>
    </AppContainer>
  );
};

export default HomeCarouselCard;
