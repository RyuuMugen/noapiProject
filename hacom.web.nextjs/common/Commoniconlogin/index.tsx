"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import commonIcon from "./CommonIcon.module.scss";

const CommonIcon: React.FC<CommonIconProps> = ({
  iconCards,
  widthCard,
  heightCard,
}) => {
  const router = useRouter();
  const handleGoto = (link: string) => {
    router.push(`/${link}`);
    // console.log(link);
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
              onClick={() => handleGoto(icon.href)}
              className={commonIcon.card}
              key={index}
            >
              <div className={commonIcon.content}>
                <Image
                  className={commonIcon.icon}
                  src={icon.icon}
                  alt="Common Icon"
                />

                <p className={commonIcon.title}>
                  {icon.title}
                  <span className={commonIcon.hightlight}>
                    {icon.hightlight}
                  </span>
                </p>
              </div>
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
