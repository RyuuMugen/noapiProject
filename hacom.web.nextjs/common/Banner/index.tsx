import Image, { StaticImageData } from "next/image";
import AppContainer from "../AppContainer";
import bannerStyle from "./Banner.module.scss";

const Banner: React.FC<BannerProps> = ({ bannerImgs, height }) => {
  return (
    <AppContainer>
      <div
        className={bannerStyle.main}
        style={{ height: height ? height : "auto" }}
      >
        {bannerImgs.map((img, index) => {
          return (
            <Image
              className={bannerStyle.banner}
              src={img}
              alt="banner"
              key={index}
            />
          );
        })}
      </div>
    </AppContainer>
  );
};

export default Banner;

type BannerProps = {
  bannerImgs: StaticImageData[];
  height?: number;
};
