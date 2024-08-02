import React, { useState, useEffect } from "react";
import { tblStore } from "@/model/TblStore";
import { getDataStore } from "@/api/apistore";
import style from "../style.module.scss";
import {
  IconMapPin,
  IconPhoneFilled,
  IconMapStar,
  IconPhoto,
  IconPhone,
  IconMail,
  IconClock,
} from "@tabler/icons-react";
const page = () => {
  const [dataAllStore, setDataAllStore] = useState<tblStore[]>([]);
  const fetchDataStore = async () => {
    const data = await getDataStore();
    const dataSort = sortDataById(data?.data.store);
    const filteredData = dataSort?.filter((item: any) => item.side === 3);
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
                  className={`${style.headerTitle} ${style.trungNam} ${style.boxShadow}`}
                >
                  HACOM MIỀN NAM
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
                          <IconMail /> Email: {item.email}
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

              <div className={style.headerx2023Row}>
                <div className={style.tet2021}>
                  <p
                    className={`${style.headerx2023TitleTrungnam} ${style.headerx2023TitleMientrung} ${style.boxshadowx2023}`}
                  >
                    HỖ TRỢ TẠI TP. HỒ CHÍ MINH
                  </p>
                </div>
                <div
                  className={`${style.headerx2023Col2} ${style.headerx2023ColWrap} ${style.headerx2023Khcanhan}`}
                >
                  <p className={style.headerx2023Title}>NHÂN VIÊN KINH DOANH</p>
                  <div className={style.headerx2023Row}>
                    <div
                      className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap}`}
                    >
                      <div className={style.header2023Info}>
                        <p className={style.header2023Name}>Mr. THÀNH</p>
                        <p className={style.header2023Email}>
                          <IconPhoneFilled /> 0767482109
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap}`}
                    >
                      <div className={style.header2023Info}>
                        <p className={style.header2023Name}>Mr. HUY</p>
                        <p className={style.header2023Email}>
                          <IconPhoneFilled /> 0988364811
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap}`}
                    >
                      <div className={style.header2023Info}>
                        <p className={style.header2023Name}>Mr. DANH</p>
                        <p className={style.header2023Email}>
                          <IconPhoneFilled /> 0901391682
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap}`}
                    >
                      <div className={style.header2023Info}>
                        <p className={style.header2023Name}>Mr. ĐOÀN</p>
                        <p className={style.header2023Email}>
                          <IconPhoneFilled /> 0922065064
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap}`}
                    >
                      <div className={style.header2023Info}>
                        <p className={style.header2023Name}>Mr. TÍN</p>
                        <p className={style.header2023Email}>
                          <IconPhoneFilled /> 0847777586
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap}`}
                    >
                      <div className={style.header2023Info}>
                        <p className={style.header2023Name}>Mr. BẢO</p>
                        <p className={style.header2023Email}>
                          <IconPhoneFilled /> 0326059410
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap}`}
                    >
                      <div className={style.header2023Info}>
                        <p className={style.header2023Name}>Mr. TUẤN</p>
                        <p className={style.header2023Email}>
                          <IconPhoneFilled /> 0559554003
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap}`}
                    >
                      <div className={style.header2023Info}>
                        <p className={style.header2023Name}>Mr. TÂN</p>
                        <p className={style.header2023Email}>
                          <IconPhoneFilled /> 0898012012
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`${style.headerx2023Col2} ${style.headerx2023ColWrap} ${style.headerx2023Khdoanhnghiep}`}
                >
                  <p className={style.headerx2023Title}>
                    SALES ONLINE (Doanh nghiệp, Cá nhân)
                  </p>
                  <div className={style.headerx2023Row}>
                    <div
                      className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap}`}
                    >
                      <div className={style.header2023Info}>
                        <p className={style.header2023Name}>Mr. DANH</p>
                        <p className={style.header2023Email}>
                          <IconPhoneFilled /> 0901391682
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap}`}
                    >
                      <div className={style.header2023Info}>
                        <p className={style.header2023Name}>Mr. HUY</p>
                        <p className={style.header2023Email}>
                          <IconPhoneFilled /> 0988364811
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap}`}
                    >
                      <div className={style.header2023Info}>
                        <p className={style.header2023Name}>Mr. NGUYÊN</p>
                        <p className={style.header2023Email}>
                          <IconPhoneFilled /> 0908971358
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${style.headerx2023Col2} ${style.headerx2023Col2Wrap}`}
                    >
                      <div className={style.header2023Info}>
                        <p className={style.header2023Name}>Mr. THÀNH</p>
                        <p className={style.header2023Email}>
                          <IconPhoneFilled /> 0767482109
                        </p>
                      </div>
                    </div>
                    <div className={style.headerx2023Row}>
                      <div
                        className={`${style.headerx2023Col2} ${style.headerx2023ColWrap} ${style.headerx2023Khdoanhnghiep} ${style.headerCustom}`}
                      >
                        <p className={style.headerx2023Title}>
                          HỖ TRỢ BẢO HÀNH
                        </p>
                        <div className={style.headerx2023Row}>
                          <div
                            className={`${style.headerx2023Col1} ${style.headerx2023Col2Wrap}`}
                          >
                            <div className={style.header2023Info}>
                              <p className={style.header2023Name}>Mr. TOÀN</p>
                              <p>
                                <IconPhoneFilled /> 0965352863
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${style.headerx2023Col2} ${style.headerx2023ColWrap} ${style.headerx2023Khdoanhnghiep} ${style.headerCustom}`}
                      >
                        <p className={style.headerx2023Title}>
                          CHĂM SÓC KHÁCH HÀNG
                        </p>
                        <div className={style.headerx2023Row}>
                          <div
                            className={`${style.headerx2023Col1} ${style.headerx2023Col2Wrap}`}
                          >
                            <div className={style.header2023Info}>
                              <p className={style.header2023Name}>
                                dichvukhachhang@hacom.vn
                              </p>
                              <p>
                                <IconPhoneFilled /> 0978580088
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
