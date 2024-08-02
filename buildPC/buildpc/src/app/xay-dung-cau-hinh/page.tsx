import { initializeApp } from "firebase/app";
import {
  collection,
  getDocs,
  getFirestore,
  limit,
  query,
} from "firebase/firestore";
import BuildPcHacom from "../../feature/buildpc/page";

const BuildPc = async () => {
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
  const colRef = collection(db, "/products");

  const data = await getDocs(colRef)
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

  //article
  const q2 = query(collection(db, "articles"), limit(2));

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

  return (
    <div>
      <BuildPcHacom
        dataProducts={data}
        dataArticle={dataArticle}
      ></BuildPcHacom>
    </div>
  );
};

export default BuildPc;
