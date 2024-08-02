import { Box, Button, Flex, Text } from "@mantine/core";
import style from "./Details.module.scss";
import { useEffect, useState } from "react";
import Image from "next/image";
import iconArrow from "@/assets/iconarrow.svg";
import imageDetail from "@/assets/imageDetail.png";
import { TblItem } from "@/model/ProductList";

const Details = ({ data }: { data: TblItem | null }) => {
  const [showMore, setShowMore] = useState(false);
  const [processedHTML, setProcessedHTML] = useState<string | null>(null);

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    if (data && data.description) {
      const modifiedHTML = data?.description.replace(
        /src="\/media/gi,
        'src="https://hanoicomputercdn.com/media'
      );
      setProcessedHTML(modifiedHTML);
    }
  }, [data]);

  if (!processedHTML) {
    return null; // Or display a suitable message instead of null
  }

  return (
    <div className={style.main}>
      {data?.description && (
        <Box
          className={`${style.contentContainer} ${
            showMore && style.showMoreContainer
          }`}
        >
          <Text fw={700} className={style.headerTitle}>
            Đánh giá: {data.itemName}
          </Text>
          <Box
            className={style.content}
            dangerouslySetInnerHTML={{ __html: processedHTML || "" }}
          ></Box>
          {!showMore ? (
            <div className={style.overlay}>
              <Button
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
                variant="default"
                radius={"md"}
                onClick={handleShowMoreClick}
              >
                Thu gọn
              </Button>
            </Flex>
          )}
        </Box>
      )}
    </div>
  );
};

export default Details;
