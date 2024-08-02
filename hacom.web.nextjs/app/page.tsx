import HomePage from "./home/page";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Page() {
  return (
    <main className={roboto.className}>
      <HomePage />
    </main>
  );
}
