import React from "react";
import CategoryList from "./components/CategoryList";
import Newlist from "./components/NewList/HomeList";
import AppContainer from "../../../common/AppContainer";
import { ArticlesCategoryModel } from "@/model/ArticlesCategoryModel";
import style from "./home.module.scss";
import { ArticlesModel } from "@/model/ArticlesModel";
import { ItemShopeModel } from "@/model/ItemsShopeModel";
const HomeNewCategory = ({
  dataCategory,
  dataArticle,
  productData,
}: {
  dataCategory: ArticlesCategoryModel[];
  dataArticle: ArticlesModel[];
  productData: ItemShopeModel[];
}) => {
  return (
    <AppContainer>
      <div className={style.flexBox}>
        <div className={style.leftBox}>
          <CategoryList dataCategory={dataCategory} />
        </div>

        <div className={style.rightBox}>
          <Newlist dataArticle={dataArticle} productData={productData} />
        </div>
      </div>
    </AppContainer>
  );
};

export default HomeNewCategory;
