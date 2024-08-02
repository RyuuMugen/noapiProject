import { Roboto } from "next/font/google";
import style from "./style.module.scss";
import AppContainer from "@/common/AppContainer";
import {
  IconMapPinFilled,
  IconMailFilled,
  IconPhoneFilled,
} from "@tabler/icons-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HACOM - Hướng Dẫn Tra Cứu Và Nhận Hoá Đơn Điện Tử",
  description: "HACOM - Hướng Dẫn Tra Cứu Và Nhận Hoá Đơn Điện Tử",
};
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Page() {
  return (
    <main className={roboto.className}>
      <AppContainer>
        <div id="Header" className={style.head}>
          <div id="HEADLINE20" className={style.headElement}>
            <h3 className={style.headLine}>
              HƯỚNG DẪN
              <br />
              TRA CỨU VÀ NHẬN HOÁ ĐƠN ĐIỆN TỬ
            </h3>
          </div>
        </div>
        <div id="body" className={style.body}>
          <div className={style.bodyItem}>
            <div id="HEADLINE518">
              <h3 className={style.bodyTitle}>CÁCH TRA CỨU HOÁ ĐƠN ĐIỆN TỬ</h3>
            </div>

            <div id="BUTTON_TEXT409" className={style.stepBox}>
              <p className={style.stepTitle}>BƯỚC 1</p>
            </div>

            <div id="HEADLINE540">
              <h3 className={style.stepContent}>
                ● Truy cập trang web Tra cứu hóa đơn điện tử:
              </h3>
            </div>

            <a
              href="https://www.meinvoice.vn/tra-cuu"
              target="_blank"
              id="BUTTON410"
              className={style.link}
            >
              <div className={style.linkButton}>
                <p className={style.stepTitle}>www.meinvoice.vn/tra-cuu</p>
              </div>
            </a>

            <div id="IMAGE557">
              <div className={style.step1Image}>
                <div className={style.step1Background}></div>
              </div>
            </div>

            <div id="BUTTON_TEXT409" className={style.stepBox}>
              <p className={style.stepTitle}>BƯỚC 2</p>
            </div>

            <div id="HEADLINE540">
              <h3 className={style.stepContent}>
                ● Nhập mã số:&nbsp;
                <span style={{ fontWeight: 500 }}>7KI9T6D4868</span>
              </h3>
            </div>

            <div id="IMAGE557">
              <div className={style.step2Image}>
                <div className={style.step2Background}></div>
              </div>
            </div>

            <div id="HEADLINE518">
              <h3 className={style.bodyTitle}>
                CÁCH NHẬN BIẾT HOÁ ĐƠN ĐIỆN TỬ
              </h3>
            </div>

            <div id="HEADLINE540">
              <h3 className={style.ContentMail}>
                ● Kiểm tra email (tài khoản email của khách hàng) HACOM sẽ gửi
                email cho khách hàng bằng email:
                <span className={style.mail}>
                  <IconMailFilled /> hoadonhacom@hanoicomputer.com
                </span>
              </h3>
            </div>

            <div>
              <div id="HEADLINE512">
                <div className={style.customerCareBox}>
                  <div className={style.customerCare}>
                    <h3 className={style.customerCareBoxTitle}>
                      CHĂM SÓC KHÁCH HÀNG
                    </h3>
                    <div className={style.informationBox}>
                      <div className={style.informationItem}>
                        <IconMapPinFilled />
                        <a
                          href="https://www.google.com/maps/place/HACOM+HAI+B%C3%80+TR%C6%AFNG/@21.001694,105.8427376,17z/data=!3m1!4b1!4m5!3m4!1s0x3135addd9fd46d5b:0x507a55e8748aa104!8m2!3d21.0018418!4d105.8436575"
                          target="_blank"
                          id="HEADLINE513"
                        >
                          Tầng 3 Tòa nhà LILAMA, 124 Minh Khai - Hai Bà Trưng -
                          Hà Nội.
                        </a>
                      </div>
                      <div className={style.informationItem}>
                        <IconMailFilled />
                        dichvukhachhang@hacom.vn
                      </div>
                      <div className={style.informationItem}>
                        <IconPhoneFilled />
                        1900 1903
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AppContainer>
    </main>
  );
}
