import AppContainer from "@/common/AppContainer";
import Body from "@/feature/Order-view/page";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import style from "./style.module.scss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tra cứu đơn hàng",
  description: "Tra cứu đơn hàng",
};
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function OrderCheck() {
  return (
    <main className={roboto.className}>
      <div className={style.headerBox}>
        <div className={style.header}>
          <div className={style.headerTitle}>
            <img src="https://hanoicomputercdn.com/media/lib/02-06-2023/tra-cuu-don-hang-left.png" />
          </div>
          <div className={style.headerImage}>
            <img src="https://hanoicomputercdn.com/media/lib/02-06-2023/tra-cuu-don-hang-right.png" />
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
