"use client";
import AppContainer from "@/common/AppContainer";
import { TblBrand } from "@/model/TblBrand";
import { useEffect, useState } from "react";
import AcerIcon from "@/assets/iconBrand/acer.jpg";
import AmdIcon from "@/assets/iconBrand/amd.jpg";
import Asus from "@/assets/iconBrand/asus.jpg";
import Dell from "@/assets/iconBrand/dell.jpg";
import Hp from "@/assets/iconBrand/hp.jpg";
import Intel from "@/assets/iconBrand/intel.png";
import Lenovo from "@/assets/iconBrand/lenovo.jpg";
import Msi from "@/assets/iconBrand/msi.jpg";
import Image from "next/image";
import style from "./outstandingBrand.module.scss";
import Link from "next/link";

const BrandListOutstanding = () => {
  const data = [
    {
      icon: AcerIcon,
      href: "#",
    },
    {
      icon: AmdIcon,
      href: "#",
    },
    {
      icon: Asus,
      href: "#",
    },
    {
      icon: Dell,
      href: "#",
    },
    {
      icon: Hp,
      href: "#",
    },
    {
      icon: Intel,
      href: "#",
    },
    {
      icon: Lenovo,
      href: "#",
    },
    {
      icon: Msi,
      href: "#",
    },
  ];
  return (
    <AppContainer>
      <div className={style.box}>
        {data.map((item, index) => (
          <Link href={item.href} key={index} className={style.item}>
            <Image src={item.icon} alt="" />
          </Link>
        ))}
      </div>
    </AppContainer>
  );
};

export default BrandListOutstanding;
