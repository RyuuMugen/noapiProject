"use client";
import iconExtra from "@/assets/iconExtra.svg";
import iconGift from "@/assets/iconGift.svg";
import { TblItem } from "@/model/ProductList";
import { Box, Button, Flex, NumberFormatter, Text } from "@mantine/core";
import Image from "next/image";
import { useState } from "react";
import style from "./Specifications.module.scss";
import {
  IconCaretDownFilled,
  IconCaretUpFilled,
  IconGift,
  IconInfoOctagon,
} from "@tabler/icons-react";

const Summary = ({ data }: { data: TblItem | null }) => {
  function replaceNewlineWithBreak(htmlString: any) {
    // Chia chuỗi thành các dòng
    const lines = htmlString.split(/\r\n|\r|\n/);

    // Thêm "- " vào trước dòng đầu tiên
    if (lines.length > 0) {
      lines[0] = "- " + lines[0];
    }

    // Tái tạo chuỗi từ các dòng đã được chỉnh sửa
    return lines.join("<br> - ");
  }

  return (
    <Box className={style.summaryBox}>
      <Box className={style.header}>
        <IconInfoOctagon color="white" />
        <Text>Thông tin sản phẩm</Text>
      </Box>
      <Box
        className={` ${style.showMoreContainer}`}
        dangerouslySetInnerHTML={{
          __html: replaceNewlineWithBreak(data?.itemSummary || ""),
        }}
      ></Box>
    </Box>
  );
};

export default Summary;
