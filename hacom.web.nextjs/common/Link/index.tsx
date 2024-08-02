"use client";
import IconArrow from "@/assets/iconarrow10px.png";
import React from "react";
import Image from "next/image";
import style from "./Link.module.scss";
import { usePathname } from "next/navigation";
import { TblItemBreadcrumb } from "@/model/ProductList";
import Link from "next/link";
interface LinkData {
  title: string;
  url: string;
}

interface LinkProps {
  link: LinkData;
  breadcrumbs?: TblItemBreadcrumb[] | [];
}

const Links: React.FC<LinkProps> = ({ link, breadcrumbs }) => {
  const pathname = usePathname();
  return (
    <div className={style.link}>
      <div className={style.linkItem}>
        <Link href="/">Trang chủ</Link>
        <span>
          <Image
            src={IconArrow}
            alt="icon"
            width={10}
            height={10}
            layout="fixed"
          />
        </span>
        {breadcrumbs &&
          breadcrumbs?.map((breadcrumb, index) => (
            <span key={index}>
              <Link href={`/product-category/${breadcrumb?.categoryUrl}`}>
                {breadcrumb?.categoryName}
              </Link>{" "}
              <span>
                <Image
                  src={IconArrow}
                  alt="icon"
                  width={10}
                  height={10}
                  layout="fixed"
                />
              </span>
            </span>
          ))}
        {pathname?.startsWith("/news-category") ||
        pathname?.startsWith("/bai-viet") ? (
          <span>
            <Link href={"/news"}>Tin tức</Link>{" "}
            <span>
              <Image
                src={IconArrow}
                alt="icon"
                width={10}
                height={10}
                layout="fixed"
              />
            </span>
            <Link href={link?.url}>{link?.title}</Link>
          </span>
        ) : (
          <Link href={link?.url}>{link?.title}</Link>
        )}
      </div>
    </div>
  );
};

export default Links;
