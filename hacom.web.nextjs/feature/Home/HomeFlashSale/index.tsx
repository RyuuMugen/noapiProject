import { getDataListProductFlashSale } from "@/api/apiProduct";
import FlashSale from "./FlashSale/index";
import { getListBannerSlideData } from "@/api/apiBanner";
import AppContainer from "@/common/AppContainer";
import style from "./HomeFlashSale.module.scss";

const HomeFlashSale = async () => {
  const fetchData = async () => {
    const dataFlashSale = await getDataListProductFlashSale(
      "?Status=A&Priority=Y&Skip=0&Take=5&SearchType=0"
    );
    return dataFlashSale;
  };
  const fetchDataBanner = async () => {
    const dataFlashSaleTittle = await getListBannerSlideData(
      "LocationIds=109&Status=A&Take=1"
    );
    return dataFlashSaleTittle?.data;
  };

  const dataFlashSale = await fetchData();
  const dataFlashSaleTittle = await fetchDataBanner();

  return (
    <AppContainer>
      {dataFlashSale?.data?.length > 0 ? (
        <div className={style.saleBackground}>
          <FlashSale
            data={dataFlashSale?.data || []}
            title={dataFlashSaleTittle}
          />
        </div>
      ) : null}
    </AppContainer>
  );
};

export default HomeFlashSale;
