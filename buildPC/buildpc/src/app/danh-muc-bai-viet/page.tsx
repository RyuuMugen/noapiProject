import React from "react";
import HomeNewCategory from "@/feature/Article/ArticleCategory/home";
import { Metadata } from "next";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
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

  // articleCategory
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
  const q2 = query(collection(db, "articles"), limit(4));

  const dataArticle = await getDocs(q2)
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

  //Product
  const q3 = query(collection(db, "products"), limit(4));
  const productData = await getDocs(q3)
    .then((snapshot) => {
      let itemPc: any = [];
      snapshot.docs.forEach((doc) => {
        itemPc.push({ ...doc.data(), id: doc.id });
      });
      return itemPc;
    })
    .catch((err) => {
      console.log(err.message);
    });
  return (
    <HomeNewCategory
      dataCategory={dataCategory}
      dataArticle={dataArticle}
      productData={productData}
    />
  );
}
