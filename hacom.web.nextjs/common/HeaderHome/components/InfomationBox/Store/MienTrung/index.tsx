import React, { useState, useEffect } from "react";
import { tblStore } from "@/model/TblStore";
import { getDataStore } from "@/api/apistore";
import style from "../style.module.scss";
import {
  IconMapPin,
  IconPhoto,
  IconMapStar,
  IconPhone,
  IconMail,
  IconClock,
} from "@tabler/icons-react";
const page = () => {
  const [dataAllStore, setDataAllStore] = useState<tblStore[]>([]);
  const fetchDataStore = async () => {
    const data = await getDataStore();
    const dataSort = sortDataById(data?.data.store);
    const filteredData = dataSort?.filter((item: any) => item.side === 2);
    setDataAllStore(filteredData);
  };
  function sortDataById(data: any) {
    data?.sort((a: any, b: any) => {
      return a.id - b.id;
    });
    return data;
  }
  function formatTime(time: any) {
    // Tách giờ và phút từ thời gian đầu vào
    const [hour, minute] = time.split(":");

    // Chuyển đổi giờ thành số
    let formattedTime = parseInt(hour).toString() + "h";

    // Nếu phút khác 0 thì thêm phần giờ vào
    if (parseInt(minute) !== 0) {
      formattedTime += parseInt(minute).toString();
    }

    return formattedTime;
  }
  useEffect(() => {
    fetchDataStore();
  }, []);

  return (
    <div className={style.body}>
      <div className={style.hOnline}>
        <div className={style.hOnlineOrder}>
          <div className={style.headerx2023Wrap}>
            <div className={style.headerx2023Row}>
              <div className={style.tet2021}>
                <p
                  className={`${style.headerx2023TitleTrungnam} ${style.headerx2023TitleMientrung} ${style.boxshadowx2023}`}
                >
                  HACOM MIỀN TRUNG
                </p>
              </div>
              <div className={style.headerx2023Row}>
                {dataAllStore?.map((item, index) => (
                  <div
                    key={index}
                    className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap} ${style.headerx2023ShowroomContainer}`}
                  >
                    <p>
                      <span className={style.numberFooter}>{index + 1}</span>
                      <span className={style.showRoomTableTitle}>
                        {item.storeName}
                      </span>
                    </p>
                    <div className={style.showRoomContainerInfo}>
                      <p>
                        <span
                          className={style.showRoomTableAddress}
                          style={{ fontWeight: 700 }}
                        >
                          <IconMapPin /> {item.address}
                        </span>
                      </p>
                      <p>
                        <span className={style.showRoomTableGallery}>
                          <a
                            rel="nofollow"
                            href={item.image ? item.image : "#"}
                          >
                            <IconPhoto /> Hình ảnh thực tế showroom
                          </a>
                        </span>
                      </p>
                      <p>
                        <span className={style.showRoomTableAddress}>
                          {" "}
                          <a
                            rel="nofollow"
                            href={item.linkMap ? item.linkMap : "#"}
                          >
                            <IconMapStar /> Xem bản đồ đường đi
                          </a>
                        </span>
                      </p>
                      <p>
                        <span className={style.showRoomTablePhone}>
                          <IconPhone /> Tel: {item.telephone}
                        </span>
                      </p>
                      <p>
                        <span className={style.showRoomTableEmail}>
                          <IconMail /> Email: {item.telephone}
                        </span>
                      </p>
                      <p>
                        <span className={style.showRoomTableOpening}>
                          <IconClock /> Thời gian mở cửa: Từ{" "}
                          {formatTime(item.openTime)} -{" "}
                          {formatTime(item.closedTime)} hàng ngày
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
