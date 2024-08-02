"use client";
import FooterHome from "@/common/FooterHome";
import HeaderHome from "@/common/HeaderHome";
import Overlay from "@/common/Overlay";
import PluginContact from "@/common/PluginContact";
import { usePathname } from "next/navigation";

export default function LayOutWithSSR({ children }: { children: any }) {
  const pathname = usePathname();
  return (
    <div style={{ position: "relative" }}>
      {pathname != "/hacom-yeu-cau-bao-hanh" && (
        <header>
          <HeaderHome />
        </header>
      )}
      <main>{children}</main>
      {pathname != "/hacom-yeu-cau-bao-hanh" && (
        <footer>
          <FooterHome />
        </footer>
      )}

      {pathname != "/hacom-yeu-cau-bao-hanh" && <PluginContact />}

      <Overlay />
    </div>
  );
}
