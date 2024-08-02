"use client";
import Service from "@/assets/service.png";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import style from "./navigationCard.module.scss";
import Link from "next/link";

const CommonNavigationCard: React.FC<CommonIconProps> = ({ iconCards }) => {
  return (
    <div className={style.container}>
      <div className={style.infomationBox}>
        <div className={style.clip1}></div>
        <div className={style.contentBox}>
          <p>Hỗ trợ người dùng</p>
          <Image className={style.icon} src={Service} alt="Common Icon" />
        </div>
        <div className={style.clip2}></div>
      </div>

      {iconCards.map((icon, index) => {
        return (
          <div key={index} className={style.childBox}>
            <div className={style.chilBoxContent}>
              <h3 className={style.title}>{icon.title}</h3>
              <Image
                className={style.iconContent}
                src={icon.icon}
                alt="Common Icon"
              />

              {icon.href === "#" ? (
                <p className={style.button}>Đang update</p>
              ) : (
                <Link className={style.button} href={icon.href}>
                  Xem thêm
                </Link>
              )}
            </div>

            <Image
              className={style.imageBackground}
              src={icon.background}
              alt="Common Icon"
            />
          </div>
        );
      })}
    </div>
  );
};

export default CommonNavigationCard;

type CommonIconProps = {
  iconCards: {
    icon: StaticImageData;
    title: string;
    href: string;
    background: StaticImageData;
  }[];
};
