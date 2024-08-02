"use client";
import { Roboto } from "next/font/google";
import { useHeaderContext } from "@/useContext/useContextSearch";
import { getListArticle } from "@/api/apiArticle";
import { Flex, Pagination } from "@mantine/core";
import Image from "next/image";
import Loader from "@/common/Loader";
import NewsCard from "@/common/NewsCard";
import imageNull from "@/assets/noValue.png";
import CategoryList from "@/feature/news/CategoryList";
import { DataArticle } from "@/model/DataArticle";
import { useEffect, useState } from "react";
import AppContainer from "@/common/AppContainer";
import { useParams } from "next/navigation";
import style from "./NewsCategory.module.scss";

export default function newsCategory() {
  const { categorySearch } = useHeaderContext();
  const [dataArticle, setDataArticle] = useState<DataArticle[]>();
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 20;
  const skip = (currentPage - 1) * itemsPerPage;
  const params = useParams();

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  const callApiGetData = async () => {
    const fetchData = async () => {
      const data = await getListArticle(
        `Status=1&ArticleCategoryId=${params.slug}&Skip=${skip}&Take=${itemsPerPage}`
      );
      const totalPages = Math.ceil(data.totalCount / itemsPerPage);
      setDataArticle(data.data);
      setTotalPages(totalPages);
    };
    fetchData();
  };

  useEffect(() => {
    callApiGetData();
  }, [loading, currentPage]);

  return (
    <>
      <CategoryList setLoading={setLoading} />
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <AppContainer>
          {!dataArticle || dataArticle.length === 0 ? (
            <div className={style.message}>
              <div className={style.noValue}>
                <Image src={imageNull} alt="" />
                <div>Danh mục bạn chọn hiện tại chưa có bài viết nào</div>
              </div>
            </div>
          ) : (
            <div className={style.Main}>
              <div className={style.listNews}>
                {dataArticle?.map((item, index) => (
                  <Flex className={style.itemNews}>
                    <NewsCard data={item} />
                  </Flex>
                ))}
              </div>
              <div className={style.pagination}>
                <Pagination
                  total={totalPages}
                  value={currentPage}
                  color="#1F67D2"
                  onChange={handlePageChange}
                />
              </div>
            </div>
          )}
        </AppContainer>
      )}
    </>
  );
}
