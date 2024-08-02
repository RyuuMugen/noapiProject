import React from "react";
import LayOutWithSSR from "@/components/LayOutWithSSR";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { Notifications } from "@mantine/notifications";
import { theme } from "../theme";
import { CardItemsProvider } from "@/useContext/CardContext";
import { HeaderProvider } from "@/useContext/useContextSearch";
import { SaleOrderProvider } from "@/useContext/SaleOrderContext";
import "@mantine/notifications/styles.css";
import { AuthProvider } from "@/useContext/useAuthContext";
import { OverLayProvider } from "@/useContext/OverLayContext";
import AuthProviderNext from "@/components/AuthProvider/AuthProviderNext";

export const metadata = {
  title: "HACOM | HI-END COMPUTER WORLD",
  description: "HACOM | HI-END COMPUTER WORLD",
};
// có thể viết các component con trong các thư mục router và chỉ định
// 'use client' cho các phần mà sẽ xử lý thuần js
// có thể đưa component client-side vào component server-side và ngược lại
// quan trọng phải định nghĩa
export default function RootLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <AuthProviderNext>
          <AuthProvider>
            <CardItemsProvider>
              <MantineProvider theme={theme}>
                {/* <NavigationEvents /> */}
                <ModalsProvider>
                  <Notifications position="top-center" autoClose={3000} />

                  <HeaderProvider>
                    <SaleOrderProvider>
                      <OverLayProvider>
                        <LayOutWithSSR>
                          {props.children}
                          {props.auth}
                        </LayOutWithSSR>
                      </OverLayProvider>
                    </SaleOrderProvider>
                  </HeaderProvider>
                </ModalsProvider>
              </MantineProvider>
            </CardItemsProvider>
          </AuthProvider>
        </AuthProviderNext>
      </body>
    </html>
  );
}
