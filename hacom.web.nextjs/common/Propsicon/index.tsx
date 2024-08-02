import Image, { StaticImageData } from "next/image";
import commonIcon from "./Propsicon.module.scss";

const CommonIcon: React.FC<CommonIconProps> = ({
  iconCards,
  widthCard,
  heightCard,
}) => {
  return (
    <div>
      <div
        className={commonIcon.main}
        style={{ width: widthCard, height: heightCard }}
      >
        {iconCards.map((icon, index) => {
          return (
            <div className={commonIcon.card} key={index}>
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
  }[];
  widthCard: number | string | undefined;
  heightCard: number | string | undefined;
};
