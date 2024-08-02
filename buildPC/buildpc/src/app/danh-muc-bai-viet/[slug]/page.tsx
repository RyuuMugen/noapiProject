import React from "react";
import NewCategory from "@/feature/Article/ArticleCategory";
import { Metadata } from "next";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "firebase/firestore";

export const metadata: Metadata = {
  title: "Danh mục bài viết",
  description: "Trang tin tức , thủ thuật công nghệ và máy tính",
};

export default async function ArticleCategory({ params: { slug } }: any) {
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

  const db = getFirestore();

  //articlCategory
  const q = query(collection(db, "articleCategory"));

  const dataCategory = await getDocs(q)
    .then((snapshot) => {
      let dataCategory: any = [];
      snapshot.docs.forEach((doc) => {
        dataCategory.push({ ...doc.data(), id: doc.id });
      });
      return dataCategory;
    })
    .catch((err) => {
      console.log(err.message);
    });

  //article
  const result = dataCategory?.find(
    (element: any) => element.url === `/${slug}`
  );
  const articlesRef = collection(db, "articles");
  const articlesQuery = query(
    articlesRef,
    where("articleCategoryId", "array-contains", result?.id),
    limit(4)
  );
  const dataArticles = await getDocs(articlesQuery)
    .then((snapshot) => {
      let dataArticle: any = [];
      snapshot.docs.forEach((doc) => {
        dataArticle.push({ ...doc.data(), id: doc.id });
      });
      return dataArticle;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return (
    <NewCategory dataCategory={dataCategory} dataArticles={dataArticles} />
  );
}
