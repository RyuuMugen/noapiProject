import AppContainer from "@/common/AppContainer";
import TopPage from "@/feature/OldAutumnRenewed/Top";
import BodyPage from "@/feature/OldAutumnRenewed/Body";
import { Roboto } from "next/font/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Old Autumn Renewed Page",
  description: "Old Autumn Renewed Page",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function oldAutumnRenewed() {
  return (
    <div className={roboto.className}>
      <AppContainer>
        <TopPage />
        <BodyPage />
      </AppContainer>
    </div>
  );
}
