"use client";
import React, { useEffect, useState } from "react";

import HomeCollectionProduct from "@/feature/ProductCollection/Product";
import { postLoggingAction } from "@/api/apiLogging";

const productCollection = () => {
  useEffect(() => {
    postLoggingAction({
      userName: localStorage.getItem("userName") || "",
      actionType: "HomePageClickedLink",
      actionDetail: window.location.href,
    });
  }, []);
  return (
    <div>
      <HomeCollectionProduct />
    </div>
  );
};

export default productCollection;
