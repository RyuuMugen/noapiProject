
import AppContainer from "@/common/AppContainer";
import Link from "@/common/Link";

import BottomBox from "@/feature/news/boxBottomNews";
import MiddleBox1 from "@/feature/news/boxMiddleNew1";
import MiddleBox2 from "@/feature/news/boxMiddleNew2";
import TopBox from "@/feature/news/boxTopNews";
import { Roboto } from "next/font/google";
import { Metadata } from "next";
import style from "./news.module.scss";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Tin tức",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const NewsPage = () => {
  const link = { title: "Tin tức", url: "/news" };

  return (
    <main className={roboto.className}>
      <AppContainer>
        <Link link={link} />
        <TopBox />
      </AppContainer>

      <div className={style.middleNews}>
        <AppContainer>
          <MiddleBox1 />
        </AppContainer>
      </div>

      <AppContainer>
        <MiddleBox2 />
      </AppContainer>

      <div className={style.middleNews}>
        <AppContainer>
          <BottomBox />
        </AppContainer>
      </div>
    </main>
  );
};
export default NewsPage;
