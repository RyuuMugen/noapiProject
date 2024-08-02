"use client";
import { Button, Flex, Select, Text, TextInput, Title } from "@mantine/core";
import style from "./buildpcAi.module.scss";
import { useContext } from "react";
import { AppContext } from "@/useContext/DeviceContext";
import FormBuildPcAi from "./formBuildPcAi";
import Content from "./ContentFooter";
const data = ["Gaming", "Workstatus"];

const BuildPcAi = ({ dataTypePc }: any) => {
  const { isMobile, isDesktop, isTablet } = useContext(AppContext);
  return (
    <>
      <Flex
        className={style.buildpcAi}
        my={30}
        w={isMobile ? "100%" : "448px"}
        justify="center"
        align="center"
        direction="column"
        style={{ width: "448px", margin: "0 auto" }}
        gap="1rem"
      >
        <Flex justify="center" align="center" direction="column" gap="1rem">
          <Flex></Flex>
          <Title style={{ textAlign: "center" }} fz={30}>
            Xây dựng cấu hình bằng{" "}
            <span style={{ color: "rgb(238, 77, 45)" }}> AI</span>
          </Title>
          <Text fz={14} style={{ color: "rgb(55 65 81)" }}>
            Tối đa hiệu năng PC phù hợp với tài chính bạn bỏ ra
          </Text>
        </Flex>
        <FormBuildPcAi data={dataTypePc} />
        {/* <Parameterproduct /> */}
      </Flex>
      <Content />
    </>
  );
};

export default BuildPcAi;
