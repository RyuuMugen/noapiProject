"use client";
import { Button, Flex } from "@mantine/core";
import Image from "next/image";
import style from "./buildpc.module.scss";

import iconExcel from "@/assets/icon-excel.svg";
import iconImage from "@/assets/icon-image.svg";
import iconPrint from "@/assets/icon-print.svg";
import iconShare from "@/assets/icon-share.svg";
import Link from "next/link";

const ActionBuildPc = () => {
  return (
    <Flex className={style.groupBtnBottom} gap="12px">
      {/* <Button className={style.btnBottom}>
        <Image
          src={iconExcel}
          alt="Icon"
          width={20}
          height={20}
          style={{ marginRight: "10px" }}
        />
        TẢI FILE EXCEL CẤU HÌNH
      </Button>
      <Button className={style.btnBottom}>
        <Image
          src={iconImage}
          alt="Icon"
          width={20}
          height={20}
          style={{ marginRight: "10px" }}
        />
        TẢI ẢNH CẤU HÌNH
      </Button>
      <Button className={style.btnBottom}>
        <Image
          src={iconShare}
          alt="Icon"
          width={20}
          height={20}
          style={{ marginRight: "10px" }}
        />
        CHIA SẺ CẤU HÌNH
      </Button> */}
      <Link
        href={{
          pathname: "/product-quote",
          query: { type: "buildPc" },
        }}
        style={{ flex: 1 }}
      >
        <Button className={style.btnBottom}>
          <Image
            src={iconPrint}
            alt="Icon"
            width={20}
            height={20}
            style={{ marginRight: "10px" }}
          />
          XEM VÀ IN
        </Button>
      </Link>
    </Flex>
  );
};

export default ActionBuildPc;
