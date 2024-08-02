"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import FeatureUpdate from "../FeatureUpdate";
import commonIcon from "./CommonIcon.module.scss";

const CommonIcon: React.FC<CommonIconProps> = ({
  iconCards,
  widthCard,
  heightCard,
}) => {
  const router = useRouter();

  const handleGoto = (link: string) => {
    if (link === "#") {
    } else {
      router.push(`/${link}`);
    }
  };

  return (
    <div>
      <div
        className={commonIcon.main}
        style={{ width: widthCard, height: heightCard }}
      >
        {iconCards.map((icon, index) => {
          return (
            <div
              key={index}
              onClick={() => handleGoto(icon.href)}
              className={commonIcon.card}
            >
              <div className={commonIcon.content}>
                <div className={commonIcon.circleIcon}>
                  <Image
                    className={commonIcon.icon}
                    src={icon.icon}
                    alt="Common Icon"
                  />
                </div>
                <p className={commonIcon.title}>
                  {icon.title}
                  <span className={commonIcon.hightlight}>
                    {icon.hightlight}
                  </span>
                </p>
              </div>
              {icon.href === "#" && (
                <div className={commonIcon.updateBox}>
                  <FeatureUpdate />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommonIcon;

type CommonIconProps = {
  iconCards: {
    icon: StaticImageData;
    title: string;
    hightlight: string;
    href: string;
  }[];
  widthCard: number | string | undefined;
  heightCard: number | string | undefined;
};
