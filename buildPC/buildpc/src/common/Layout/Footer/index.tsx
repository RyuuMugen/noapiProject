"use client";
import AppContainer from "@/common/AppContainer";
import { Box, Text } from "@mantine/core";
import { IconDeviceImac, IconDevicesPc, IconNews } from "@tabler/icons-react";
import style from "./footer.module.scss";
import React, { useContext } from "react";
import { AppContext } from "@/useContext/DeviceContext";

const Footer = () => {
  const { isMobile, isDesktop, isTablet } = useContext(AppContext);

  return (
    <div
      style={{ marginTop: 30, paddingBottom: 30, backgroundColor: "#ee4d2d" }}
    >
      <AppContainer>
        <Box className={style.main}>
          <Box className={style.leftFooter}>
            <IconDeviceImac color="white" size={"34px"} />
            <Text style={{ fontWeight: "bold", color: "white", fontSize: 24 }}>
              BuildPc.VN
            </Text>
          </Box>
          <Box className={style.mainFooter}>
            <Text style={{ color: "white" }}>
              Chúng tôi chuyên cung cấp dịch vụ cấu hình PC tối ưu về hiệu năng
              và giá cả trên Shopee và Lazada. Với kinh nghiệm, chúng tôi giúp
              bạn chọn linh kiện tốt nhất, đảm bảo máy tính hoạt động mượt mà và
              mạnh mẽ với chi phí hợp lý. Trải nghiệm dịch vụ để sở hữu bộ PC
              hoàn hảo cho nhu cầu của bạn!
            </Text>
          </Box>
          <Box className={style.rightFooter}>
            <div
              className="fb-page"
              data-href="https://www.facebook.com/buildpc.vn"
              data-tabs="timeline"
              data-width="500"
              data-height="100"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/buildpc.vn"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/buildpc.vn">Buildpc.vn</a>
              </blockquote>
            </div>
          </Box>
        </Box>
      </AppContainer>
    </div>
  );
};

export default Footer;
