import React from "react";
import CategoryList from "./components/CategoryList";
import Newlist from "./components/NewList";
import AppContainer from "../../../common/AppContainer";
import { ArticlesCategoryModel } from "@/model/ArticlesCategoryModel";
import style from "./home.module.scss";
import { ItemShopeModel } from "@/model/ItemsShopeModel";

const NewCategory = ({
  dataCategory,
  dataArticles,
}: {
  dataCategory: ArticlesCategoryModel[];
  dataArticles: ItemShopeModel[];
}) => {
  return (
    <AppContainer>
      <div className={style.flexBox}>
        <div className={style.leftBox}>
          <CategoryList dataCategory={dataCategory} />
        </div>

        <div className={style.rightBox}>
          <Newlist dataArticles={dataArticles}/>
        </div>
      </div>
    </AppContainer>
  );
};

export default NewCategory;
