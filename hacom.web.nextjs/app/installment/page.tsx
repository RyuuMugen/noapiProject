import AppContainer from "@/common/AppContainer";
// import HomeFooterIconCard from "@/feature/Home/HomeFooterIconCards";
import FooterCustomer from "@/common/FooterCustomer";
import Help from "@/feature/installment/help";
import Installment from "@/feature/installment";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Suspense } from "react";
import style from "./style.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Installment",
  description: "Installment",
};

function InstallmentPage() {
  return (
    <div className={roboto.className}>
      <Suspense fallback={<p>Loading feed...</p>}>
        <AppContainer>
          <Installment />
          <Help />
          <FooterCustomer />
        </AppContainer>
      </Suspense>
    </div>
  );
}

export default InstallmentPage;
