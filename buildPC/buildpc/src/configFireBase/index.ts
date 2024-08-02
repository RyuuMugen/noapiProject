// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore, getDocs, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_BASE_URL_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_BASE_URL_AUTH_DOMAIN,
  projectId: "test-2c9a0",
  storageBucket: "test-2c9a0.appspot.com",
  messagingSenderId: "432649207852",
  appId: "1:432649207852:web:41c871d514edb1bf6d1189",
  measurementId: "G-XKSSCK55JJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const colRef = collection(db, "/buildpc/buildpc");

getDocs(colRef).then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
});
