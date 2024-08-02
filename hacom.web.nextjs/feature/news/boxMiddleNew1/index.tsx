"use client";
import { getListArticle } from "@/api/apiArticle";
import featureNews from "@/assets/featureNews.png";
import NewsCard2 from "@/common/NewsCard2";
import NewsCategory from "@/common/NewsCategory";
import { DataArticle } from "@/model/DataArticle";
import { Anchor, Flex, Image, Text } from "@mantine/core";
import {
  IconBrandFacebookFilled,
  IconChevronRight,
  IconShare,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";
import style from "./boxMiddleNew1.module.scss";
export default function boxMiddleNew1() {
  const [dataArticleRight, setDataArticleRight] = useState<DataArticle[]>();
  const [dataArticleSale, setDataArticleSale] = useState<DataArticle[]>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getListArticle(
        "Status=1&ArticleCategoryId=4&Skip=0&Take=4"
      );
      setDataArticleRight(data.data);
    };
    fetchData();
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getListArticle(
        "Status=1&ArticleCategoryId=57&Skip=0&Take=4"
      );
      setDataArticleSale(data.data);
    };
    fetchData();
  }, []);

  return (
    <Flex gap="40px">
      <Flex className={style.middleNewsLeft} direction="column">
        <Flex className={style.titleBlockNews} align="center">
          <Text fw={700} c="#1F2123" size="24px">
            TIN TỨC CÔNG NGHỆ
          </Text>
          <p className={style.viewMore}>
            <NewsCategory
              link={"xem thêm"}
              title={"Tin tức công nghệ"}
              code={"tin-tuc-cong-nghe"}
              id={57}
            />
            <IconChevronRight
              color="#1F67D2"
              style={{ width: "15px", height: "15px", marginLeft: "5px" }}
            />
          </p>
        </Flex>

        <Flex className={style.listNews2} direction="column" gap={10}>
          {dataArticleRight?.map((item, index) => (
            <div key={index} className={style.card}>
              <NewsCard2 data={item} />
            </div>
          ))}
        </Flex>
      </Flex>
      <Flex className={style.middleNewsRight} direction="column">
        <Text fw={700} c="#1F2123" size="24px" style={{ marginBottom: "25px" }}>
          TIN KHUYẾN MẠI
        </Text>
        <Flex className={style.featureNewsList} direction="column">
          {dataArticleSale && dataArticleSale.length > 0 && (
            <Flex className={style.featureBigItem} direction="column">
              <div className={style.featureImg}>
                <Image src={dataArticleSale[0].thumnail} alt="item" />
              </div>
              <Flex className={style.infoBigItem}>
                <div className={style.counterBig}>
                  <span>01</span>
                </div>

                <Flex direction="column">
                  <Text
                    fw={700}
                    c="#1F67D2"
                    size="22px"
                    style={{ marginBottom: "10px" }}
                  >
                    {dataArticleSale[0].title}
                  </Text>
                  <Flex className={style.share} align="center">
                    <div className={style.shareFacebook}>
                      <IconBrandFacebookFilled color="#fff" />
                      <span>Chia sẻ</span>
                    </div>

                    <div className={style.shareTweet}>
                      <a href="" target="_blank">
                        Tweet
                      </a>
                    </div>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          )}
          <Flex className={style.featureItem} direction="column">
            {dataArticleRight?.slice(1, 4).map((item, index) => (
              <Flex className={style.infoSmallItem} align="center">
                <div className={style.counter}>
                  <span>0{index + 2}</span>
                </div>
                <div className={style.shareLink}>
                  <Flex direction="column">
                    <Text
                      fw={700}
                      c="#1F2123"
                      size="16px"
                      style={{ marginBottom: "10px" }}
                    >
                      {item.title}
                    </Text>
                    <Flex className={style.share} align="center">
                      <IconShare
                        color="#848484"
                        style={{ marginRight: "5px" }}
                      />
                      <span>Chia sẻ</span>
                    </Flex>
                  </Flex>
                </div>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
