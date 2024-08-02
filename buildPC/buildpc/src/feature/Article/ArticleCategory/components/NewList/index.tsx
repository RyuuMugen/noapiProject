"use client";
import { ArticlesCategoryModel } from "@/model/ArticlesCategoryModel";
import { ArticlesModel } from "@/model/ArticlesModel";
import { Carousel } from "@mantine/carousel";
import { Box, Button, Flex, Loader, Text } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { initializeApp } from "firebase/app";
import {
  DocumentData,
  QueryDocumentSnapshot,
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
  startAfter,
  where,
} from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ArticleCard from "../../../../../common/ArticleCommon/ArticleCard";
import style from "./CatList.module.scss";

const NewsList = ({ dataArticles }: { dataArticles: ArticlesModel[] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { slug } = params;
  const { width } = useViewportSize();
  const [dataArticle, setDataArticle] = useState<ArticlesModel[]>([]);
  const [dataArticleCat, setDataArticleCat] = useState<ArticlesCategoryModel[]>(
    []
  );
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setLastVisible(null);
    fetchArticles(page);
  };

  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_BASE_URL_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_BASE_URL_AUTH_DOMAIN,
    projectId: "test-2c9a0",
    storageBucket: "test-2c9a0.appspot.com",
    messagingSenderId: "432649207852",
    appId: "1:432649207852:web:41c871d514edb1bf6d1189",
    measurementId: "G-XKSSCK55JJ",
  };

  initializeApp(firebaseConfig);

  const fetchArticles = async (page: number) => {
    const db = getFirestore();
    const articlesRef = collection(db, "articles");
    let articlesQuery;

    if (page === 1) {
      articlesQuery = query(
        articlesRef,
        limit(4),
        where("articleCategoryId", "array-contains", dataArticleCat[0]?.id)
      );
    } else {
      articlesQuery = query(
        articlesRef,
        startAfter(lastVisible),
        limit(4),
        where("articleCategoryId", "array-contains", dataArticleCat[0]?.id)
      );
    }
    try {
      const snapshot = await getDocs(articlesQuery);
      const articlesData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDataArticle((prevData) => {
        // Lọc và kiểm tra dữ liệu mới
        const newData = articlesData.filter(
          (newItem) => !prevData.some((prevItem) => prevItem.id === newItem.id)
        );
        // Thêm dữ liệu mới vào mảng đã có sẵn
        return [...prevData, ...newData];
      });

      const lastVisibleDocument = snapshot.docs[snapshot.docs.length - 1];
      setLastVisible(lastVisibleDocument);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching articles:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Initialize Firebase
    initializeApp(firebaseConfig);
    // Initialize services
    const db = getFirestore();

    const fetchCategory = async () => {
      const q = query(
        collection(db, "articleCategory"),
        where("url", "==", `/${slug}`)
      );
      const snapshot = await getDocs(q);
      const categoryData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDataArticleCat(categoryData);
    };

    fetchCategory();
  }, [slug]);

  useEffect(() => {
    fetchArticles(currentPage);
  }, [dataArticleCat]);

  return (
    <>
      {loading ? (
        <div className={style.nullBox}>
          <Loader color="orange" type="bars" />
        </div>
      ) : (
        <>
          <h2 className={style.newTitle}>Tin tức Mới nhất</h2>
          <div>
            <Carousel
              slideSize={"50%"}
              slideGap="md"
              loop={dataArticles.length > 2}
              align="start"
              withControls={dataArticles.length < 2}
              controlSize={34}
              // plugins={[autoplay.current]}
            >
              {dataArticles?.map((item, index) => (
                <Carousel.Slide key={index}>
                  <a href={`/bai-viet/${item.url}`} className={style.title}>
                    <div
                      className={style.leftTopBox}
                      style={{
                        backgroundImage: `url('${item.imageThumbnail}')`,
                      }}
                    >
                      <Box className={style.contentBox}>
                        <a
                          href={`/bai-viet/${item.url}`}
                          className={style.title}
                        >
                          <Text lineClamp={2} className={style.summary}>
                            {item.title}
                          </Text>
                        </a>
                        <Text lineClamp={3} className={style.summary}>
                          {item.summary}
                        </Text>
                      </Box>
                    </div>
                  </a>
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>

          <>
            <h2>Tin tức</h2>
            {dataArticle.length > 0 ? (
              <div className={style.bottomBox}>
                <div className={style.bottomBoxLeft}>
                  {loading ? (
                    <div className={style.nullBox}>
                      <Loader color="orange" type="bars" />
                    </div>
                  ) : (
                    <>
                      <Flex className={style.boxCategories} gap="10px">
                        {dataArticle?.map((item, index) => (
                          <div key={index} className={style.card}>
                            <ArticleCard data={item} />
                          </div>
                        ))}
                      </Flex>
                      <Button
                        variant="light"
                        color="orange"
                        className={style.moreButton}
                        onClick={() => handlePageChange(currentPage + 1)}
                      >
                        Xem thêm
                      </Button>
                    </>
                  )}
                </div>
                {/* <div className={style.bottomBoxRight}></div> */}
              </div>
            ) : (
              <div className={style.nullBox}>
                <Text
                  size="24"
                  fw={700}
                  variant="gradient"
                  gradient={{ from: "white", to: "orange", deg: 90 }}
                >
                  Danh mục bài viết bạn chọn hiện chưa có bài viết nào!
                </Text>
              </div>
            )}
          </>
        </>
      )}
    </>
  );
};

export default NewsList;
