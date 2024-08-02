"use client";
import AppContainer from "@/common/AppContainer";
import icon3 from "@/assets/icon_1.3.png";
import commonIcon from "./CommonIcon.module.scss";
import Image from "next/image";
const HomeFooterIconCard = () => {
  const handleGoto = () => {
    window.scroll(0, 0);
  };
  return (
    <AppContainer>
      <div>
        <div
          className={commonIcon.main}
          style={{ width: "100%", height: "110px" }}
        >
          <div onClick={() => handleGoto()} className={commonIcon.card}>
            <div className={commonIcon.content}>
              <div className={commonIcon.circleIcon}>
                <Image
                  className={commonIcon.icon}
                  src={icon3}
                  alt="Common Icon"
                />
              </div>
              <p className={commonIcon.title}>Lên đầu trang</p>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default HomeFooterIconCard;
