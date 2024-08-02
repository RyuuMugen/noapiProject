"use client";
import BannerCarousel from "@/common/BannerCarousel/ForMenu";
import { Box } from "@mantine/core";
import style from "./ContentMenu.module.scss";
import ProductAdvertising from "./ProductAdvertising/ProductAdvertising";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import { getListBannerSlideData } from "@/api/apiBanner";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { tblBanner } from "@/model/Banner";
interface dataProps {
  data: tblBanner[];
}
const ContentMenu: React.FC<dataProps> = ({ data }) => {
  return (
    <Box className={style.container_menu}>
      <SidebarMenu />
      <BannerCarousel data={data} />
      {/* <ProductAdvertising /> */}
    </Box>
  );
};

export default ContentMenu;
