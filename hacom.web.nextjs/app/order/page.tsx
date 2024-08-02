import AppContainer from "@/common/AppContainer";
// import HomeFooterIconCard from "@/feature/Home/HomeFooterIconCards";
import Order from "@/feature/Order";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Suspense } from "react";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Order Page",
  description: "Order Page",
};

function OrderPage() {
  return (
    <div className={roboto.className}>
      <Suspense fallback={<p>Loading feed...</p>}>
        <AppContainer>
          <div style={{ marginTop: 18 }}>
            <Order />
            {/* <HomeFooterIconCard /> */}
          </div>
        </AppContainer>
      </Suspense>
    </div>
  );
}

export default OrderPage;
