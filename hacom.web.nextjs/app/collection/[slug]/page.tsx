import AppContainer from "@/common/AppContainer";
import FooterCustomer from "@/common/FooterCustomer";
import ProductCollection from "@/feature/ProductCollection";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import style from "./product-collection.module.scss";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Product Category Page",
  description: "Product Category Page",
};

const CollectionPage = () => {
  return (
    <main className={roboto.className}>
      <div className={style.background}>
        <AppContainer>
          <ProductCollection />
          <FooterCustomer />
        </AppContainer>
      </div>
    </main>
  );
};

export default CollectionPage;
