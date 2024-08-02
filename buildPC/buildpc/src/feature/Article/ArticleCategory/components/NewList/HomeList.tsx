"use client";
import RowArticleCard from "@/common/ArticleCommon/ArticleRowCard";
import ProductCard from "@/common/ProductCard";
import { ArticlesModel } from "@/model/ArticlesModel";
import { ItemShopeModel } from "@/model/ItemsShopeModel";
import { Box, Button, Flex, Loader } from "@mantine/core";
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
} from "firebase/firestore";
import { useEffect, useState } from "react";
import ArticleCard from "../../../../../common/ArticleCommon/ArticleCard";
import style from "./HomeList.module.scss";

const NewsList = ({
  dataArticle,
  productData,
}: {
  dataArticle: ArticlesModel[];
  productData: ItemShopeModel[];
}) => {
  const [dataArticles, setDataArticles] = useState<ArticlesModel[]>([]);
  const [lastVisible, setLastVisible] =
    useState<QueryDocumentSnapshot<DocumentData> | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

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
      articlesQuery = query(articlesRef, limit(4));
    } else {
      articlesQuery = query(articlesRef, startAfter(lastVisible), limit(4));
    }
    try {
      const snapshot = await getDocs(articlesQuery);
      const articlesData = snapshot?.docs?.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      setDataArticles((prevData) => {
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
    fetchArticles(currentPage);
  }, []);

  return (
    <div className={style.flexBox}>
      <h2 className={style.newTitle}>Tin tức nổi bật</h2>
      <div className={style.topBox}>
        <a className={style.link} href={`/bai-viet/${dataArticle[0]?.url}`}>
          <div
            className={style.leftTopBox}
            style={{
              backgroundImage: `url('${
                dataArticle ? dataArticle[0]?.imageThumbnail : ""
              }')`,
            }}
          >
            <Box className={style.contentBox}>
              <a
                href={`/bai-viet/${dataArticle ? dataArticle[0]?.url : ""}`}
                className={style.title}
              >
                {dataArticle ? dataArticle[0].title : ""}
              </a>
              <p className={style.summary}>
                {dataArticle ? dataArticle[0]?.summary : ""}
              </p>
            </Box>
          </div>
        </a>
        <div className={style.rightTopBox}>
          {dataArticle?.slice(1, 4)?.map((item, index) => (
            <RowArticleCard data={item} key={index} />
          ))}
        </div>
      </div>
      <h2 className={style.newTitle}>Tin tức mới</h2>
      <div className={style.bottomBox}>
        <div className={style.bottomBoxLeft}>
          {loading ? (
            <div className={style.nullBox}>
              <Loader color="orange" type="bars" />
            </div>
          ) : (
            <>
              <Flex className={style.boxCategories} gap="10px">
                {dataArticles?.map((item, index) => (
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

        <div className={style.bottomBoxRight}>
          <h3>Sản phẩm nổi bật</h3>
          <div className={style.boxListProductPopup}>
            {productData?.map((item: any, index: number) => {
              return (
                <div key={index} className={style.productCard}>
                  <ProductCard data={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsList;
