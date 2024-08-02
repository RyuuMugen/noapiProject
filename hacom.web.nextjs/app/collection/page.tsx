import AppContainer from "@/common/AppContainer";
import ProductCollection from "@/feature/ProductCollection";
import FooterCustomer from "@/common/FooterCustomer";
import style from "./product-collection.module.scss";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Bộ sưu tập",
  description: "Bộ sưu tập",
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
