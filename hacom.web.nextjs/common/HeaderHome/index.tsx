"use client";
import { useCardItems } from "@/useContext/CardContext";
import { Container, Flex, Grid } from "@mantine/core";
import AppContainer from "../AppContainer";
import Style from "./HeaderHome.module.scss";
import BuildPC from "./components/BuildPC";
import Cart from "./components/Cart";
import Logo from "./components/Logo";
import Search from "./components/Search";
import MenuButton from "./components/MenuButon";
import User from "./components/User";
import React, { useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import InfomationBox from "./components/InfomationBox";

const HeaderHome = () => {
  const { values, totalPrice, fetchDataHeader } = useCardItems();
  const [styleClass, setStyleClass] = useState("");
  const [partName, setPartName] = useState("");
  const containerRef = useRef(null);
  const pathname = usePathname();

  const [scrollInfo, setScrollInfo] = useState("notFixed");

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const offset = window.scrollY;
      if (
        (offset > 840 && scrollInfo === "notFixed") ||
        (offset > 60 && scrollInfo === "notFixed2")
      ) {
        switch (true) {
          case /^\/product-category\/.*/.test(pathname):
            setScrollInfo("fixed2");
            break;
          case pathname === "/brand" || pathname === "/buildpc":
            setScrollInfo("fixed2");
            break;
          case pathname === "/search":
            setScrollInfo("fixed2");
            break;
          default:
            setScrollInfo("fixed");
            break;
        }
      } else if (
        (offset <= 840 && scrollInfo === "fixed") ||
        (offset <= 60 && scrollInfo === "fixed2")
      ) {
        switch (true) {
          case /^\/product-category\/.*/.test(pathname):
            setScrollInfo("notFixed2");
            break;
          case pathname === "/brand" || pathname === "/buildpc":
            setScrollInfo("notFixed2");
            break;
          case pathname === "/search":
            setScrollInfo("notFixed2");
            break;
          default:
            setScrollInfo("notFixed");
            break;
        }
      }
    }
  };

  useEffect(() => {
    switch (true) {
      case pathname === "/cart":
        setStyleClass("cart");
        setPartName("Giỏ hàng");

        break;
      case pathname === "/order":
        setStyleClass("order");
        setPartName("Thanh toán");

        break;
      case pathname === "/payment":
        setStyleClass("payment");

        break;
      case pathname === "/installment":
        setStyleClass("installment");

        break;
      default:
        setStyleClass(scrollInfo);

        break;
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [scrollInfo, pathname]);

  useEffect(() => {
    switch (true) {
      case /^\/product-category\/.*/.test(pathname):
        setScrollInfo("notFixed2");
        break;
      case pathname === "/brand" || pathname === "/buildpc":
        setScrollInfo("notFixed2");
        break;
      case pathname === "/search":
        setStyleClass("notFixed2");
        break;
      default:
        setScrollInfo("notFixed");
        break;
    }
  }, [pathname]);

  return (
    <div ref={containerRef} className={Style.main}>
      <div className={Style.informationBox}>
        <InfomationBox />
      </div>
      <div className={`${Style.headerBar} ${Style[styleClass]}`}>
        <AppContainer>
          <Container
            style={{
              minWidth: "100%",
              paddingLeft: "0px",
              paddingRight: "0px",
            }}
            className={Style.container}
          >
            <Flex gap={20} align={"center"} style={{ zIndex: 100 }}>
              <div className={Style.logoBox} style={{ flex: "17.5%" }}>
                <div className={Style.button}>
                  <MenuButton />
                </div>
                <div className={Style.logo}>
                  <Logo />
                  <div className={Style.param}>
                    {partName}{" "}
                    {pathname === "/cart" && <span>({values} sản phẩm)</span>}
                  </div>
                </div>
              </div>

              <div style={{ flex: "37.5%" }}>
                <Search />
              </div>

              <div className={Style.action} style={{ flex: "45%" }}>
                <BuildPC />
                <User />
                <Cart products={values} price={totalPrice} />
              </div>
            </Flex>
          </Container>
        </AppContainer>
      </div>
    </div>
  );
};

export default HeaderHome;
