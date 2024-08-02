import React from "react";
import Warranty from "./Warranty/Warranty";
import { Box, Container, Flex, Group, Text } from "@mantine/core";
import styles from "./warrantyClaim.module.scss";
import Logo from "@/common/HeaderHome/components/Logo";
import logo from "@/assets/phone.svg";
import Image from "next/image";
import FooterHome from "@/common/FooterHome";
import AppContainer from "@/common/AppContainer";
const WarrantyClaimBox = () => {
  return (
    <Box>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Box>
          <div className={styles.HotlineBox}>
            <div className={styles.flexBox1}>
              <Image src={logo} alt="logo" />
              <span>
                <span className={styles.hotlinePhone}>1900 1903</span>
              </span>
            </div>
          </div>
        </Box>
      </header>
      <Warranty />
    </Box>
  );
};

export default WarrantyClaimBox;
