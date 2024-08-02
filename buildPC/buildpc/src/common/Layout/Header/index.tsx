"use client";
import AppContainer from "@/common/AppContainer";
import { Badge, Box, Text } from "@mantine/core";
import { IconDevicesPc, IconNews, IconRobot } from "@tabler/icons-react";
import style from "./header.module.scss";
import { useContext } from "react";
import { AppContext } from "@/useContext/DeviceContext";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/logo.png";
const Header = () => {
  const { isMobile, isDesktop, isTablet } = useContext(AppContext);

  return (
    <div style={{ backgroundColor: "#ee4d2d", padding: 10 }}>
      <AppContainer>
        <Box className={style.main}>
          <Box>
            <Text style={{ color: "white" }} className={style.textItem}>
              <Link href={"/"}>
                BuildPC.VN
                {/* <Image
                  src={Logo}
                  className={style.logo}
                  alt="logo"
                  width={90}
                  height={60}
                /> */}
              </Link>
            </Text>
          </Box>
          <Box className={style.itemTablet}>
            <div>
              <Text style={{ color: "white" }}>
                Nền tảng <strong>xây dựng cấu hình PC</strong> tối ưu hiệu năng
                , giá cả trên các sàn Shopee - Lazada
              </Text>
            </div>
          </Box>
          <Box style={{ display: "flex", columnGap: 30, paddingLeft: 10 }}>
            <Link href={"/xay-dung-cau-hinh"}>
              <Box
                style={{ display: "flex", columnGap: 5 }}
                className={style.buildPC}
              >
                <IconDevicesPc color="white" />
                {isMobile ? (
                  ""
                ) : (
                  <Text
                    style={{ color: "white", cursor: "pointer" }}
                    className={style.textItem}
                  >
                    Xây dựng cấu hình
                  </Text>
                )}
                <div className={style.badge}>
                  <p className={style.badgeText}>
                    <span>H</span>
                    <span>o</span>
                    <span>t</span>
                  </p>
                </div>
              </Box>
            </Link>
            <Link href={"/xay-dung-cau-hinh-ai"}>
              <Box
                style={{ display: "flex", columnGap: 5 }}
                className={style.buildPC}
              >
                <IconRobot color="white" />
                {isMobile ? (
                  ""
                ) : (
                  <Text
                    style={{ color: "white", cursor: "pointer" }}
                    className={style.textItem}
                  >
                    Xây dựng cấu hình AI
                  </Text>
                )}
                <div className={style.badge}>
                  <p className={style.badgeText}>
                    <span>H</span>
                    <span>o</span>
                    <span>t</span>
                  </p>
                </div>
              </Box>
            </Link>
            <Link href={"/danh-muc-bai-viet"}>
              <Box style={{ display: "flex", columnGap: 5 }}>
                <IconNews color="white" />
                {isMobile ? (
                  ""
                ) : (
                  <Text
                    style={{ color: "white", cursor: "pointer" }}
                    className={style.textItem}
                  >
                    Bài viết công nghệ
                  </Text>
                )}
              </Box>
            </Link>
          </Box>
        </Box>
      </AppContainer>
    </div>
  );
};

export default Header;
