import AppContainer from "@/common/AppContainer";
import CardProductNormal from "@/common/CardProductNormal";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { TblItem } from "@/model/ProductList";
import { Carousel } from "@mantine/carousel";
import { Flex, Text } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";
import style from "./ProductDetailSimilarProduct.module.scss";

const ProductDetailSimilarProduct = ({
  dataProductRelation,
}: {
  dataProductRelation: TblItem[];
}) => {
  const [idActive, setIdActive] = useState(0);
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnMouseEnter: true, stopOnInteraction: false })
  );
  const dataTopic = ["Sản phẩm tương tự", "Sản phẩm đã xem"];
  const isDataReady =
    !isNullOrUndefined(dataProductRelation) && dataProductRelation.length > 0;

  const slides = isDataReady
    ? dataProductRelation.map((item: any, index: any) => (
        <Carousel.Slide key={index}>
          <CardProductNormal key={index} data={item} />
        </Carousel.Slide>
      ))
    : [];
  const handleChangeTopic = (id: number) => {
    setIdActive(id);
  };

  return (
    <AppContainer>
      <Flex
        align={"center"}
        gap="sm"
        style={{ borderBottom: "1px solid #E7E7E7 ", marginBottom: 20 }}
      >
        {dataTopic?.map((topic, index) => (
          <Flex
            key={index}
            align={"center"}
            justify={"center"}
            className={`${style.topic} ${
              idActive == index && style.topicActive
            }`}
            onClick={() => handleChangeTopic(index)}
          >
            <Text>{topic}</Text>
          </Flex>
        ))}
      </Flex>
      <Flex style={{ paddingBottom: 50 }} gap={25}>
        {
          idActive === 0 ? (
            isDataReady && dataProductRelation.length > 6 ? (
              <div className={style.box}>
                <Carousel
                  slideSize="1%"
                  align="start"
                  // loop
                  controlSize={40}
                  slideGap={20}
                  plugins={[autoplay.current]}
                  slidesToScroll={6}
                  dragFree
                >
                  {slides}
                </Carousel>
              </div>
            ) : (
              dataProductRelation?.map((item, index) => (
                <CardProductNormal key={index} data={item} />
              ))
            )
          ) : (
            <div className={style.box}>
              <Carousel
                slideSize="1%"
                align="start"
                // loop
                controlSize={40}
                slideGap={20}
                plugins={[autoplay.current]}
                slidesToScroll={6}
                dragFree
              >
                {JSON.parse(
                  localStorage.getItem("viewed-products") || "[]"
                )?.map((item: TblItem, index: number) => (
                  <Carousel.Slide key={index}>
                    <CardProductNormal key={index} data={item} />
                  </Carousel.Slide>
                ))}
              </Carousel>
            </div>
          )
          // Hiển thị danh sách sản phẩm thường nếu chuyển sang tab "Sản phẩm đã xem"
        }
      </Flex>
    </AppContainer>
  );
};

export default ProductDetailSimilarProduct;
