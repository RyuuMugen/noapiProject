import AppContainer from "@/common/AppContainer";
import ProductCategory from "@/feature/ProductCategory";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import style from "./product-category.module.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Search Page",
  description: "Search Page",
};

const SearchPage = () => {
  return (
    <main className={roboto.className}>
      <div className={style.background}>
        <AppContainer>
          <ProductCategory page={54} type="search" />
        </AppContainer>
      </div>
    </main>
  );
};

export default SearchPage;
