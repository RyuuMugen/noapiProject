import Image, { StaticImageData } from "next/image";
import React from "react";
import commonIconServiceStyle from "./CommonIconService.module.scss";

const CommonIconService: React.FC<CommonIconServiceProps> = ({
  iconServiceCards,
  height,
}) => {
  return (
    <div>
      <div className={commonIconServiceStyle.main} style={{ height }}>
        {iconServiceCards.map((service, index) => {
          return (
            <div className={commonIconServiceStyle.serviceCard} key={index}>
              <Image
                className={commonIconServiceStyle.icon}
                src={service.icon}
                alt="icon"
              />
              <span className={commonIconServiceStyle.title}>
                {service.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommonIconService;

type CommonIconServiceProps = {
  iconServiceCards: {
    icon: StaticImageData;
    title: string;
  }[];
  height: number;
};
