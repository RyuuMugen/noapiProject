import style from "./LogoProducer.module.scss";
import { Flex, Image } from "@mantine/core";
import { MegaMenuImageModels } from "@/model/MegaMenu";

const LogoProducer = ({ data }: { data: MegaMenuImageModels[] }) => {
  return (
    <Flex className={style.main} gap={8} wrap="wrap">
      {data?.map((image, index) =>
        image.type === "IR" ? (
          <Flex
            align={"center"}
            justify={"center"}
            className={style.logoCard}
            key={index}
          >
            <Image
              className={style.logo}
              maw={80}
              mah={40}
              src={image.image || ""}
              alt="logo"
            />
          </Flex>
        ) : image.type === "BR" ? (
          <Image
            key={index}
            maw={"100%"}
            mah={"100%"}
            className={style.banner}
            src={image.image || ""}
            alt="Banner"
          />
        ) : null
      )}
    </Flex>
  );
};

export default LogoProducer;
