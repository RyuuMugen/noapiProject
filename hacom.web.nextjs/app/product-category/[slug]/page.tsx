import AppContainer from "@/common/AppContainer";
import ProductCategory from "@/feature/ProductCategory";
import style from "./product-category.module.scss";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Product Category Page",
  description: "Product Category Page",
};

const CategoryPage = () => {
  return (
    <main className={roboto.className}>
      {/* <div className={style.background}>
        <AppContainer> */}
      <ProductCategory page={54} type="category" />
      {/* </AppContainer>
      </div> */}
    </main>
  );
};

export default CategoryPage;
