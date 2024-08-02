"use client";
import { Roboto } from "next/font/google";
import CategoryList from "@/feature/news/CategoryList";
import { Anchor, Flex, Pagination, Text, Image, Center } from "@mantine/core";
import ImgNewsBig from "@/assets/imgNewsBig.png";
import style from "./boxTopNews.module.scss";
import { useEffect, useState } from "react";
import NewsCard from "@/common/NewsCard";
import Link from "next/link";
import { DataArticle } from "@/model/DataArticle";
import {
  IconUserCircle,
  IconCalendar,
  IconEye,
  IconBrandFacebookFilled,
} from "@tabler/icons-react";
import { getListArticle } from "@/api/apiArticle";
export default function BoxTopNews() {
  const [dataArticleRight, setDataArticleRight] = useState<DataArticle[]>();
  const [dataArticleReview, setDataArticleReview] = useState<DataArticle[]>();
  const [loading, setLoading] = useState(true);
  const formatDateStringToDay = (dateString: any) => {
    const dateObject = new Date(dateString);

    // Lấy ngày, tháng, năm từ đối tượng Date
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
    const day = dateObject.getDate();

    // Tạo chuỗi ngày tháng
    const formattedDate = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;

    return formattedDate;
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await getListArticle("Status=1&Take=6");
      setDataArticleRight(data.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getListArticle(
        "Status=1&ArticleCategoryId=59&Skip=0&Take=1"
      );
      setDataArticleReview(data.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <CategoryList setLoading={setLoading} />
      <Flex className={style.boxTopNews} gap="40px">
        <Flex className={style.topNewsLeft} gap="30px">
          <div className={style.bigItem}>
            {dataArticleReview?.slice(0, 1).map((item) => (
              <div className={style.wrapBigItem}>
                <Link
                  className={style.link}
                  href={{
                    pathname: "/bai-viet",
                    query: { id: item.id },
                  }}
                >
                  <Image src={item.thumnail || ""} alt="Image News Big" />
                </Link>
                <div className={style.infoBigItem}>
                  <Text
                    size="13px"
                    c="#fff"
                    fw={400}
                    className={style.categoryItem}
                  >
                    Review sản phẩm
                  </Text>
                  <Text
                    size="22px"
                    c="#fff"
                    fw={700}
                    className={style.titleItem}
                  >
                    {item.title}
                  </Text>
                  <Flex
                    className={style.infoWithIcon}
                    align="center"
                    gap="18px"
                  >
                    <Flex align="center" gap="5px">
                      <IconUserCircle color="#fff" />
                      <Text size="13px" c="#fff" fw={400}>
                        HACOM
                      </Text>
                    </Flex>
                    <Flex align="center" gap="5px">
                      <IconCalendar color="#fff" />
                      <Text size="13px" c="#fff" fw={400}>
                        {formatDateStringToDay(item.creationDate)}
                      </Text>
                    </Flex>
                    <Flex align="center" gap="5px">
                      <IconEye color="#fff" />
                      <Text size="13px" c="#fff" fw={400}>
                        {item.visit}
                      </Text>
                    </Flex>
                  </Flex>
                </div>
              </div>
            ))}
          </div>
          <Flex className={style.childList} direction="column">
            {dataArticleRight?.slice(2, 6).map((item, index) => (
              <Flex
                className={style.childItem}
                justify={Center}
                gap="20px"
                align="center"
              >
                <div className={style.imageBox}>
                  <Link
                    className={style.link}
                    href={{
                      pathname: "/bai-viet",
                      query: { id: item.id },
                    }}
                  >
                    <Image src={item.thumnail} alt="item" />
                  </Link>
                </div>
                <div className={style.contentBox}>
                  <Link
                    className={style.link}
                    href={{
                      pathname: "/bai-viet",
                      query: { id: item.id },
                    }}
                  >
                    <Text
                      className={style.childItemTitle}
                      size="16px"
                      c="#1F2123"
                      fw={700}
                    >
                      {item.title}
                    </Text>
                  </Link>
                </div>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <Flex className={style.topNewsRight} direction="column">
          <Text
            size="24px"
            c="#1F2123"
            fw={700}
            style={{ marginBottom: "26px" }}
          >
            BÀI VIẾT MỚI NHẤT
          </Text>
          <div className={style.card}>
            <Flex gap="20px">
              {dataArticleRight?.slice(0, 2)?.map((item) => (
                <NewsCard data={item} />
              ))}
            </Flex>
          </div>
        </Flex>
      </Flex>
    </>
  );
}
