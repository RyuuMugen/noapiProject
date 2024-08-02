"use client";
import { getDataStore } from "@/api/apistore";
import AppContainer from "@/common/AppContainer";
import { tblStore } from "@/model/TblStore";
import { Select } from "@mantine/core";
import {
  IconClockFilled,
  IconMailFilled,
  IconMapPinFilled,
  IconPhoneFilled,
  IconPhoto,
} from "@tabler/icons-react";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import style from "./style.module.scss";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function warrantyMap({ title }: { title: string }) {
  const [dataAllStore, setDataAllStore] = useState<tblStore[]>([]);
  const [dataFillter, setDataFillter] = useState<tblStore[]>([]);
  const [selectedItem, setSelectedItem] = useState(0);
  const [selectedItemMap, setSelectedItemMap] = useState<string | null>(null);

  const selected = (index: any, linkMap: any) => {
    setSelectedItem(index);
    setSelectedItemMap(linkMap);
  };

  const fetchDataStore = async () => {
    const data = await getDataStore();
    const dataSort = sortDataById(data?.data.store);
    setDataAllStore(dataSort);
    setDataFillter(dataSort);
  };

  const handleChangeValue = (params: any) => {
    if (params === null) {
      setDataFillter(dataAllStore);
    } else {
      const dataFillter = dataAllStore.filter(
        (item) => item.side === parseInt(params)
      );
      setDataFillter(dataFillter);
    }
  };

  function sortDataById(data: any) {
    data.sort((a: any, b: any) => {
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
    <main className={roboto.className}>
      <AppContainer>
        <div className={style.showroomTitleBox}>
          <p className={style.showroomTitle}>{title}</p>
        </div>
        <div className={style.showroomMapBox}>
          <div className={style.showroomBox}>
            <div className={style.select}>
              <div className={style.showroom}>
                Hệ thống {dataAllStore.length} showroom của hacom
              </div>
              <Select
                placeholder="Chọn khu vực"
                data={[
                  { value: "1", label: "Miền Bắc" },
                  { value: "2", label: "Miền Trung" },
                  { value: "3", label: "Miền Nam" },
                ]}
                onChange={(e) => handleChangeValue(e)}
              />
            </div>
            <div className={style.showroomList}>
              {dataFillter.map((item, index) => (
                <div
                  className={`${style.showroomContainer} ${
                    selectedItem === index ? style.selected : ""
                  }`}
                  key={index}
                  onClick={() => selected(index, item.mapEmbeded)}
                >
                  <div className={style.contentContainer}>
                    <Link
                      href={item.image ? item.image : "#"}
                      className={style.name}
                    >
                      {item.storeName}
                    </Link>
                    <span className={style.showRoomAddress}>
                      <IconMapPinFilled /> {item.address}
                    </span>
                    <span className={style.showRoomGallery}>
                      <Link href={item.image ? item.image : "#"}>
                        <IconPhoto /> Hình ảnh thực tế showroom
                      </Link>
                    </span>
                    <span className={style.showRoomPhone}>
                      <IconPhoneFilled />
                      Tel: {item.telephone}
                    </span>
                    <span className={style.showRoomOpeningTime}>
                      <IconMailFilled /> Email: {item.email}
                    </span>
                    <span className={style.showRoomOpeningTime}>
                      <IconClockFilled /> Thời gian mở cửa: Từ{" "}
                      {formatTime(item.openTime)}-{formatTime(item.closedTime)}{" "}
                      hàng ngày
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={style.showroomMap}>
            <iframe
              src={
                selectedItemMap ||
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.774013552288!2d105.84273759999999!3d21.001694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135addd9fd46d5b%3A0x507a55e8748aa104!2zSEFDT00gSEFJIELDgCBUUsavTkc!5e0!3m2!1svi!2s!4v1705312734316!5m2!1svi!2s"
              }
              style={{ border: 0 }}
            />
          </div>
        </div>
      </AppContainer>
    </main>
  );
}
