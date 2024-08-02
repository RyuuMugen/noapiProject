import AppContainer from "@/common/AppContainer";
import FooterCustomer from "@/common/FooterCustomer";
import WarrantyCheck from "@/feature/warranty/warrantyCheck";
import WarrantyList from "@/feature/warranty/warrantyList";
import WarrantyMap from "@/feature/warranty/warrantyMap";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import style from "./style.module.scss";

export const metadata: Metadata = {
  title: "Tra cứu tình trạng bảo hành",
  description: "Tra cứu tình trạng bảo hành",
};
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function PagWarrantyChecked() {
  return (
    <main className={roboto.className}>
      <div className={style.headerBox}>
        <div className={style.header}>
          <div className={style.headerTitle}>
            <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/text-header.png" />
          </div>
          <div className={style.headerImage}>
            <img src="https://hanoicomputercdn.com/media/lib/07-08-2023/img-header.png" />
          </div>
        </div>
      </div>
      <WarrantyCheck />
      <div className={style.map}>
        <WarrantyMap title="DANH SÁCH CÁC ĐIỂM TIẾP NHẬN BẢO HÀNH" />
      </div>
      <AppContainer>
        <WarrantyList />
        <FooterCustomer />
      </AppContainer>
    </main>
  );
}
