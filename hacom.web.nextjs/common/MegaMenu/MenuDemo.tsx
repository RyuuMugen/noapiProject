"use client";
import MegaMenuDemo from "@/feature/MegaMenuDemo";
import { dataMenu } from "@/model/MegaMenu";
import style from "./MegaMenu.module.scss";
import Banner from "./components/Banner/BannerDemo";

const MegaMenu = ({ dataBanner, dataMenu, headerMenu }: dataMenu) => {
  return (
    <div className={style.demoMenu}>
      <MegaMenuDemo />
      {!headerMenu && <Banner dataBanner={dataBanner} />}
    </div>
  );
};

export default MegaMenu;
