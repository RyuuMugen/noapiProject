import AppContainer from "@/common/AppContainer";
import Payment from "@/feature/Payment";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Payment Page",
  description: "Payment Page",
};

function PaymentPage() {
  return (
    <div className={roboto.className}>
      <AppContainer>
        <div style={{ marginTop: 18 }}>
          <Payment />
        </div>
      </AppContainer>
    </div>
  );
}

export default PaymentPage;
