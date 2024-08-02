import { dataFakeList } from "@/const/fakedata";
import Accessory from "@/common/Accessory";
import ArticleList from "@/feature/home/Article";
import FlashSale from "@/feature/home/FlashSale";
import AirPurifier from "@/feature/home/AirPurifier";
import Menu from "@/feature/home/Menu";
import Charger from "@/feature/home/Charger";
import Keyboard from "@/feature/home/Keyboard";
import LaptopService from "@/feature/home/LaptopService";
import SaleCarousel from "@/feature/home/Sale";
import SalePayment from "@/feature/home/SalePayment";
import Screen from "@/feature/home/Screen";
import PhoneBattery from "@/feature/home/PhoneBattery";
import { TblItem } from "@/model/ProductList";
import { tblBanner } from "@/model/Banner";
import { DataArticle } from "@/model/DataArticle";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { getListBannerSlideData } from "@/api/apiBanner";
import { getDataListProductFull } from "@/api/apiProduct";
import { getListArticle } from "@/api/apiArticle";
const Home = async () => {
  const callDataProductLaptopService = async () => {
    const callApi = await getDataListProductFull(
      "?Skip=0&Take=20&Active=true&CategoryId=1475"
    );

    if (!isNullOrUndefined(callApi) && !isNullOrUndefined(callApi?.data)) {
      const dataApi = callApi?.data;
      if (dataApi != null && !isNullOrUndefined(dataApi)) {
        return dataApi;
      } else {
        // NotificationExtension.Fails("Dữ liệu không tồn tại");
        console.log("Dữ liệu không tồn tại");
      }
      close();
    } else {
      // NotificationExtension.Fails("Dữ liệu không tồn tại");
      console.log("Dữ liệu không tồn tại");
    }
  };

  const callDataProductPhoneBattery = async () => {
    const callApi = await getDataListProductFull(
      "?Skip=0&Take=20&Active=true&CategoryId=1535"
    );

    if (!isNullOrUndefined(callApi) && !isNullOrUndefined(callApi?.data)) {
      const dataApi = callApi?.data;
      if (dataApi != null && !isNullOrUndefined(dataApi)) {
        return dataApi;
      } else {
        // NotificationExtension.Fails("Dữ liệu không tồn tại");
        console.log("Dữ liệu không tồn tại");
      }
      close();
    } else {
      // NotificationExtension.Fails("Dữ liệu không tồn tại");
      console.log("Dữ liệu không tồn tại");
    }
  };

  const callDataProductScreen = async () => {
    const callApi = await getDataListProductFull(
      "?Skip=0&Take=20&Active=true&CategoryId=1495"
    );

    if (!isNullOrUndefined(callApi) && !isNullOrUndefined(callApi?.data)) {
      const dataApi = callApi?.data;
      if (dataApi != null && !isNullOrUndefined(dataApi)) {
        return dataApi;
      } else {
        // NotificationExtension.Fails("Dữ liệu không tồn tại");
        console.log("Dữ liệu không tồn tại");
      }
      close();
    } else {
      // NotificationExtension.Fails("Dữ liệu không tồn tại");
      console.log("Dữ liệu không tồn tại");
    }
  };

  const callDataProductKeyboard = async () => {
    const callApi = await getDataListProductFull(
      "?Skip=0&Take=20&Active=true&CategoryId=1498"
    );

    if (!isNullOrUndefined(callApi) && !isNullOrUndefined(callApi?.data)) {
      const dataApi = callApi?.data;
      if (dataApi != null && !isNullOrUndefined(dataApi)) {
        return dataApi;
      } else {
        // NotificationExtension.Fails("Dữ liệu không tồn tại");
        console.log("Dữ liệu không tồn tại");
      }
      close();
    } else {
      // NotificationExtension.Fails("Dữ liệu không tồn tại");
      console.log("Dữ liệu không tồn tại");
    }
  };

  const callDataProductLaptopBattery = async () => {
    const callApi = await getDataListProductFull(
      "?Skip=0&Take=20&Active=true&CategoryId=1499"
    );

    if (!isNullOrUndefined(callApi) && !isNullOrUndefined(callApi?.data)) {
      const dataApi = callApi?.data;
      if (dataApi != null && !isNullOrUndefined(dataApi)) {
        return dataApi;
      } else {
        // NotificationExtension.Fails("Dữ liệu không tồn tại");
        console.log("Dữ liệu không tồn tại");
      }
      close();
    } else {
      // NotificationExtension.Fails("Dữ liệu không tồn tại");
      console.log("Dữ liệu không tồn tại");
    }
  };

  const [
    dataProductLaptop,
    dataPhoneBattery,
    dataScreen,
    dataKeyboard,
    dataProductLaptopBattery,
  ] = await Promise.all([
    callDataProductLaptopService(),
    callDataProductPhoneBattery(),
    callDataProductScreen(),
    callDataProductKeyboard(),
    callDataProductLaptopBattery(),
  ]);
  return (
    <>
      <Menu />
      <FlashSale data={dataProductLaptop} />
      <LaptopService data={dataProductLaptop} />
      <PhoneBattery data={dataPhoneBattery} />
      <Screen data={dataScreen} />
      <Keyboard data={dataKeyboard} />
      <AirPurifier data={dataProductLaptopBattery} />
    </>
  );
};

export default Home;
