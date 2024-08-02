import { getListBannerSlideData } from "@/api/apiBanner";
import { getDataMegaMenu } from "@/api/apiMegaMenu";
import AppContainer from "@/common/AppContainer";
import MegaMenu from "@/common/MegaMenu";
import MegaMenuDemo from "@/common/MegaMenu/MenuDemo";
import { IconMenu2 } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import style from "./MenuButton.module.scss";
import { MegaMenuModels } from "@/model/MegaMenu";

interface DataBanner {
  slide: any;
  slideSide: any;
  slideBottom: any;
}
const Logo = () => {
  const [dataMenu, setDataMenu] = useState<MegaMenuModels[]>([]);
  const [dataBanner, setDataBanner] = useState<DataBanner>({
    slide: [],
    slideSide: [],
    slideBottom: [],
  });
  const fetchData = async () => {
    try {
      const dataMenuResponse = await getDataMegaMenu();
      setDataMenu(dataMenuResponse?.data || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []); // Chạy một lần sau khi component được mount

  return (
    <div>
      <div className={style.block}>
        <button className={style.button}>
          <IconMenu2 style={{ width: 20, height: 16 }} color="#1F67D2" />
          <span>Danh mục</span>
        </button>
        <AppContainer className={style.megaMenu}>
          <div id="megaMenu">
            {dataMenu !== null && (
              // <MegaMenu
              //   dataMenu={dataMenu}
              //   headerMenu={true}
              //   dataBanner={dataBanner}
              // />
              <MegaMenuDemo
                dataMenu={dataMenu}
                headerMenu={true}
                dataBanner={dataBanner}
              />
            )}
          </div>
        </AppContainer>
      </div>
      {/* <div className={style.overlay}></div> */}
    </div>
  );
};

export default Logo;
