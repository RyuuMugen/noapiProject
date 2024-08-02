"use client";
import ProductCard from "@/common/ProductCard";
import { ItemShopeModel } from "@/model/ItemsShopeModel";
import {
  Button,
  Flex,
  Image,
  NumberFormatter,
  Rating,
  Text,
} from "@mantine/core";
import { initializeApp } from "firebase/app";
import style from "./style.module.scss";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Card = ({ productId }: { productId: any }) => {
  const [dataProduct, setDataProduct] = useState<any>();
  const firebaseConfig = {
    apiKey: "AIzaSyCORwwB0ZJixQhlr5zYCJnrETx6ClZsDQ8",
    authDomain: "test-2c9a0.firebaseapp.com",
    projectId: "test-2c9a0",
    storageBucket: "test-2c9a0.appspot.com",
    messagingSenderId: "432649207852",
    appId: "1:432649207852:web:41c871d514edb1bf6d1189",
    measurementId: "G-XKSSCK55JJ",
  };

  initializeApp(firebaseConfig);

  const db = getFirestore();

  useEffect(() => {
    // Initialize Firebase
    initializeApp(firebaseConfig);
    // Initialize services
    const db = getFirestore();

    const fetchCategory = async () => {
      const docRef = doc(db, "products", productId);
      const docData = await getDoc(docRef);
      if (docData.exists()) {
        setDataProduct(docData.data());
        return docData.data();
      } else {
        console.log("Document not found with ID:", productId);
        return null;
      }
    };

    fetchCategory();
  }, [productId]);

  return (
    <div className={style.flexBox}>
      <div className={style.imgProductPopup}>
        <Image
          src={dataProduct?.image}
          alt="product"
          className={style.image}
          width={225}
          height={225}
        />
      </div>
      <Flex className={style.infoProductPopup} direction="column">
        <Rating pt={5} pb={5} defaultValue={5} readOnly />
        <Text lineClamp={2} fw={700} c="#303841" size="sm">
          {dataProduct?.name}
        </Text>
        <Text fw={700} c="#EE4D2D" pt={10} pb={10} size="sm">
          <NumberFormatter
            value={dataProduct?.price || 0}
            thousandSeparator
            suffix="₫"
          />
        </Text>
        <Button
          component={Link}
          href={`${dataProduct?.linkAffiliate}`}
          color="rgb(238, 77, 45)"
          className={style.btnChoosePopup}
        >
          Xem ngay
        </Button>
      </Flex>
    </div>
  );
};

export default Card;
