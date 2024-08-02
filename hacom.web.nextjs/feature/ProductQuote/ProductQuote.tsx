"use client";

import React, { useEffect, useRef } from "react";
import ProductQuoteHeader from "./ProductQuoteHeader";
import ProductQuoteBody from "./ProductQuoteBody";
import ProductQuoteFooter from "./ProductQuoteFooter";
import style from "./style.module.scss";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";

type ProductQuoteProps = {
  type: string | undefined;
  download: string | undefined;
};

const ProductQuote = ({ type, download }: ProductQuoteProps) => {
  const componentRef = useRef(null);
  const router = useRouter();
  const currentTime = new Date();

  // Lấy ngày, tháng, năm
  const date = currentTime.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  // Lấy giờ, phút
  const time = currentTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });
  // Kết hợp thành định dạng cuối cùng
  const formattedDateTime = `${date}-${time}`;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleDownloadImage = async (element: HTMLElement | null) => {
    if (element) {
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL("image/jpg");
      let link = document.createElement("a");

      link.href = data;
      link.download = `Bao-gia-${formattedDateTime}.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      router.push("/cart");
    }
  };

  useEffect(() => {
    if (download && download === "Y") {
      handleDownloadImage(componentRef.current);
    }
  }, []);

  return (
    <div className={style.box} ref={componentRef}>
      <ProductQuoteHeader />
      <ProductQuoteBody type={type} handlePrint={handlePrint} />
      <ProductQuoteFooter />
    </div>
  );
};

export default ProductQuote;
