import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import BuildPcHacom from "../../feature/buildpc/page";
import BuildPcAi from "@/feature/buildpc-ai/buildpcAi";

const BuildPcAI = async () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCvKKEBOrdkJDdXGliiIvplNMcGELmJmTA",
    authDomain: "hacom-manage.firebaseapp.com",
    projectId: "hacom-manage",
    storageBucket: "hacom-manage.appspot.com",
    messagingSenderId: "212274649508",
    appId: "1:212274649508:web:09eb789e4e7d1f0aca0931",
    measurementId: "G-HTHPET4PC1",
  };

  // init firebase
  initializeApp(firebaseConfig);

  // init services
  const db = getFirestore();

  // collection ref
  const colRef = collection(db, "pc-types");

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

  return (
    <div>
      <BuildPcAi dataTypePc={data} />
    </div>
  );
};

export default BuildPcAI;
