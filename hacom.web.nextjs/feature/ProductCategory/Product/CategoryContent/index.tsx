import { useState } from "react";
import { Box, Button, Flex, Text } from "@mantine/core";
import Image from "next/image";
import iconArrow from "@/assets/iconarrow.svg";
import style from "./HomeSectionProduct.module.scss";

export default function CategoryContent({ data }: { data: string }) {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  function replaceHtml(htmlString: any) {
    let replacedSrc = htmlString.replace(
      /src="\/media/g,
      'src="https://hanoicomputercdn.com/media'
    );
    return replacedSrc;
  }

  return (
    <Box
      className={`${style.contentContainer} ${
        showMore && style.showMoreContainer
      }`}
    >
      <Box
        className={style.content}
        dangerouslySetInnerHTML={{ __html: replaceHtml(data) }}
      ></Box>
      {!showMore ? (
        <div className={style.overlay}>
          <Button
            className={style.button}
            variant="default"
            radius={"md"}
            id="showMoreButton"
            rightSection={<Image src={iconArrow} alt="iconArrow" />}
            onClick={handleShowMoreClick}
          >
            Xem thêm
          </Button>
        </div>
      ) : (
        <Flex justify={"center"} mb={20}>
          <Button
            className={style.button}
            variant="default"
            radius={"md"}
            onClick={handleShowMoreClick}
          >
            Thu gọn
          </Button>
        </Flex>
      )}
    </Box>
  );
}
