import Overlay from "../Overlay";
import Footer from "./Footer";
import Header from "./Header";

export default function LayOutWithSSR({ children }: { children: any }) {
  return (
    <div style={{ position: "relative" }}>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
      <Overlay />
    </div>
  );
}
