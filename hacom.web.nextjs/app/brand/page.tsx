import { Metadata } from "next";
import { Roboto } from "next/font/google";
import AppContainer from "@/common/AppContainer";
import { TblBrand } from "@/model/TblBrand";
import { getListBrandSearch } from "@/api/apiProduct";
import BrandList from "@/feature/brand";

export const metadata: Metadata = {
  title: "Thương hiệu",
  description: "Thương hiệu",
};
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const Brand = async () => {
  const fetchData = async () => {
    const dataBrand = await getListBrandSearch("?Skip=0&Take=1000");
    return dataBrand;
  };
  const dataBrand = await fetchData();

  return (
    <AppContainer>
      <BrandList data={dataBrand?.data?.lists} />
    </AppContainer>
  );
};
export default Brand;
