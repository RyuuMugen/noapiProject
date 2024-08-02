import ProductCarousel from "@/common/CarouselProductCard";
import HeaderSection from "@/components/HeaderSection";
import style from "./style.module.scss";
import TitleImage from "@/assets/70px Block Hotsale.webp";
import Image from "next/image";
import Countdown from "./components";
import { TblItem } from "@/model/ProductList";
import ProductCarouselSale from "@/common/CarouselProductCard/forSale";

interface ProductCarouselProps {
  data: TblItem[];
}

const FlashSale: React.FC<ProductCarouselProps> = ({ data }) => {
  return (
    <div className={style.saleBackground}>
      <div className={style.flashSaleTitle}>
        <span className={style.title}>DỊCH VỤ NỔI BẬT</span>
      </div>
      <div className={style.flashSaleItem}>
        <ProductCarouselSale data={data} rows={1} auto />
      </div>
    </div>
  );
};
export default FlashSale;
