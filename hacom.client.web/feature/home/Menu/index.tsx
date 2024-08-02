"use client";
import { getListBannerSlideData } from "@/api/apiBanner";
import ContentMenu from "@/components/ContentMenu/ContentMenu";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { tblBanner } from "@/model/Banner";
import { useEffect, useState } from "react";

const Menu = () => {
  const [dataBanner, setDataBanner] = useState<tblBanner[]>([]);
  const callDataBannerMenu = async () => {
    const callApi = await getListBannerSlideData(
      `Skip=0&Take=8&Status=A&LocationIds=2`
    );
    if (!isNullOrUndefined(callApi) && !isNullOrUndefined(callApi?.data)) {
      const dataApi = callApi?.data;
      if (dataApi != null && !isNullOrUndefined(dataApi)) {
        setDataBanner(dataApi);
      } else {
        console.log("Dữ liệu không tồn tại");
      }
      close();
    } else {
      console.log("Dữ liệu không tồn tại");
    }
  };

  useEffect(() => {
    callDataBannerMenu();
  }, []);

  return (
    <div style={{ padding: "10px 0px" }}>
      <ContentMenu data={dataBanner} />
    </div>
  );
};
export default Menu;
