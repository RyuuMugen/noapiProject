"use client";
import ArticleListCard from "@/common/ArticleCard";
import HeaderSection from "@/components/HeaderSection";
import { DataArticle } from "@/model/DataArticle";

interface dataProps {
  data: DataArticle[];
}
const ArticleList: React.FC<dataProps> = ({ data }) => {
  return (
    <div style={{ padding: "10px 0px" }}>
      <HeaderSection title={"TIN TỨC CÔNG NGHỆ"} />
      <ArticleListCard data={data} type="col" />
    </div>
  );
};

export default ArticleList;
