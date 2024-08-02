import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_BASE_URL_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_BASE_URL_AUTH_DOMAIN,
    projectId: "test-2c9a0",
    storageBucket: "test-2c9a0.appspot.com",
    messagingSenderId: "432649207852",
    appId: "1:432649207852:web:41c871d514edb1bf6d1189",
    measurementId: "G-XKSSCK55JJ",
  };

  // init firebase
  initializeApp(firebaseConfig);

  // init services
  const db = getFirestore();

  // collection ref
  const colRef = collection(db, "/articles");
  const colRef2 = collection(db, "/articleCategory");

  const article = await getDocs(colRef)
    .then((snapshot) => {
      let article: any = [];
      snapshot.docs.forEach((doc) => {
        article.push({ ...doc.data(), id: doc.id });
      });
      return article;
    })
    .catch((err) => {
      console.log(err.message);
    });

  const articleCategory = await getDocs(colRef2)
    .then((snapshot) => {
      let post: any = [];
      snapshot.docs.forEach((doc) => {
        post.push({ ...doc.data(), id: doc.id });
      });
      return post;
    })
    .catch((err) => {
      console.log(err.message);
    });

  const postEntries: MetadataRoute.Sitemap = article.map((item: any) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/bai-viet/${item?.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const articleCategoryEntries: MetadataRoute.Sitemap = articleCategory.map(
    (item: any) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/danh-muc-bai-viet${item?.url}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: "daily",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/xay-dung-cau-hinh`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: "daily",
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/danh-muc-bai-viet`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: "daily",
    },

    ...postEntries,
    ...articleCategoryEntries,
  ];
}
