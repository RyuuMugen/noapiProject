import AppContainer from "@/common/AppContainer";
import Body from "@/feature/Installation-service/page";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import style from "./style.module.scss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bảng giá vật tư và dịch vụ lắp đặt Hacom",
  description: "Bảng giá vật tư và dịch vụ lắp đặt Hacom",
};
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Page() {
  return (
    <main className={roboto.className}>
      <div className={style.headerBox}>
        <div className={style.header}>
          <div className={style.headerTitle}>
            <p>
              BẢNG GIÁ VẬT TƯ <br /> VÀ DỊCH VỤ LẮP ĐẶT HACOM
            </p>
          </div>
          <div className={style.headerImage}>
            <img src="https://hanoicomputercdn.com/media/lib/07-07-2023/nhanvienkythuat3.png" />
          </div>
        </div>
      </div>
      <AppContainer>
        <div className={style.body}>
          <Body />
        </div>
      </AppContainer>
      <div className={style.bottomPage}>
        <Link href="https://hacom.vn/hacom-lien-he-hop-tac-kinh-doanh">
          LIÊN HỆ VỚI BỘ PHẬN KINH DOANH
        </Link>
      </div>
    </main>
  );
}
