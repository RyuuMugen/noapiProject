import Contact from "@/common/Contact";
import LayOutWithSSR from "@/components/LayOutWithSSR";
import Providers from "@/redux/Provider";
import "@/styles/variables.scss";
import "@mantine/carousel/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "@mantine/dates/styles.css";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
import type { Metadata } from "next";
import React from "react";
import { theme } from "../theme";
import style from "./layout.module.scss";

export const metadata: Metadata = {
  title: "HỆ THỐNG CHUỖI SỬA CHỮA ĐIỆN THOẠI - LAPTOP - MÁY TÍNH",
  keywords:
    "sửa laptop, sửa chữa điện thoại, sửa điện thoại, sửa laptop, sửa chữa máy tính, sửa máy tính, dịch vụ sửa chữa",
  description:
    "DICHVUTOT - Chuỗi sửa chữa điện thoại - laptop - máy tính - linh kiện hàng Chính Hãng, Giá Rẻ, Trả Góp 0%. Đảm bảo dịch vụ sửa chữa Nhanh Chóng, Uy Tín, Đáng Tin Cậy Số 1 hiện nay.",
};

export default function RootLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/dichvutot-01-01.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        />
      </head>
      <body className={style.body}>
        <h1 style={{ display: "none" }}>
          HỆ THỐNG CHUỖI SỬA CHỮA ĐIỆN THOẠI - LAPTOP - MÁY TÍNH
        </h1>
        <Providers>
          <MantineProvider theme={theme}>
            {/* <NavigationEvents /> */}
            <ModalsProvider>
              <Notifications position="top-center" zIndex={1000} color="red" />
              <LayOutWithSSR>
                {props.children}
                {props.auth}
                <Contact />
              </LayOutWithSSR>
            </ModalsProvider>
          </MantineProvider>
        </Providers>
      </body>
    </html>
  );
}
