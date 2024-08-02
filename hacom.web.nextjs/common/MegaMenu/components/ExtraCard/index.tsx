import { IconChevronRight } from "@tabler/icons-react";
import style from "./ExtraCard.module.scss";
import { Text, Flex, Image } from "@mantine/core";
import product from "@/assets/productCard_1.png";
// import Image from "next/image";
import { MegaMenuImageModels } from "@/model/MegaMenu";

const ExtraCard = ({ data }: { data: MegaMenuImageModels[] }) => {
  return (
    <div className={style.main}>
      <Flex className={style.extraCard}>
        {data?.map((card, index) =>
          card.type === "IB" ? (
            <div className={style.content} key={index}>
              <Text className={style.contentTitle}>{card.title}</Text>
              <div className={style.extra}>
                <Text className={style.extraTitle}>{card.description}</Text>
                <IconChevronRight />
              </div>
              <Image
                w={"auto"}
                h={"auto"}
                maw={100}
                mah={80}
                className={style.image}
                src={card.image || ""}
                alt="product"
              />
            </div>
          ) : null
        )}
      </Flex>
    </div>
  );
};

export default ExtraCard;
