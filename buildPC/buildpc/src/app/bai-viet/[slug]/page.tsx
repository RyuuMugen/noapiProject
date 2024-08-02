import LeftBox from "@/feature/Article/ArticleView/components/leftBox";
import RightBox from "@/feature/Article/ArticleView/components/rightBox";
import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "firebase/firestore";
import AppContainer from "../../../common/AppContainer";
import style from "./ArticleView.module.scss";
import { Metadata } from "next";
import { ArticlesModel } from "@/model/ArticlesModel";

interface ArticlesPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params: { slug },
}: ArticlesPageProps): Promise<Metadata> {
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

  const q = query(collection(db, "articles"), where("url", "==", `${slug}`));

  const dataArticle = await getDocs(q)
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
  return {
    title: dataArticle ? dataArticle[0]?.metaTitle : "",
    description: dataArticle ? dataArticle[0]?.metaDescription : "",
    // openGraph: {
    //   images: [
    //     {
    //       url: post.imageUrl
    //     }
    //   ]
    // }
  };
}

export default async function ArticleView({ params: { slug } }: any) {
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

  const q = query(collection(db, "articles"), where("url", "==", `${slug}`));

  const dataArticle = await getDocs(q)
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

  const q2 = query(
    collection(db, "articles"),
    where("url", "!=", `${slug}`),
    limit(7)
  );
  const dataArticleList = await getDocs(q2)
    .then((snapshot) => {
      let dataArticleList: any = [];
      snapshot.docs.forEach((doc) => {
        dataArticleList?.push({ ...doc.data(), id: doc.id });
      });
      return dataArticleList;
    })
    .catch((err) => {
      console.log(err.message);
    });

  return (
    <AppContainer>
      <div className={style.flexBox}>
        <div className={style.leftBox}>
          <LeftBox dataArticle={dataArticle ? dataArticle[0] : {}} />
        </div>
        <div className={style.rightBox}>
          <RightBox dataArticleList={dataArticleList} />
        </div>
      </div>
    </AppContainer>
  );
}
