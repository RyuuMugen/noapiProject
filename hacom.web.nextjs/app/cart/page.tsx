import { Roboto } from "next/font/google";
import Bottom from "@/feature/Card/Bottompage";
import AppContainer from "@/common/AppContainer";

import { Metadata } from "next";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Cart Page",
  description: "Cart Page",
};

export default function CartPage() {
  return (
    <div className={roboto.className}>
      <AppContainer>
        <Bottom />
        <div style={{ paddingBottom: 20, paddingTop: 200 }}></div>
      </AppContainer>
    </div>
  );
}
