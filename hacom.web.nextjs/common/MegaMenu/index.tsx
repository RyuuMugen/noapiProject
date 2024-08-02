"use client";
import iconMegaMenuHover from "@/assets/iconMegaMenuHover.png";
import { MegaMenuModels, dataMenu } from "@/model/MegaMenu";
import { Flex, Grid, Image, Text } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import style from "./MegaMenu.module.scss";
import Banner from "./components/Banner";
import ExtraCard from "./components/ExtraCard";
import LogoProducer from "./components/LogoProducer";
import SubMenuContent from "./components/SubMenuContent";
import { useRouter } from "next/navigation";
import { useHeaderContext } from "@/useContext/useContextSearch";
import { useOverlayContext } from "@/useContext/OverLayContext";

const MegaMenu = ({ dataBanner, dataMenu, headerMenu }: dataMenu) => {
  const router = useRouter();
  const { setActive } = useOverlayContext();
  const { setCategorySearch } = useHeaderContext();
  const [hoveredItemIndex, setHoveredItemIndex] = useState<number | null>(null);
  const handleHoverItem = (index: any, hover: boolean) => {
    setHoveredItemIndex(hover ? index : null);
  };

  const isHovered = hoveredItemIndex !== null && hoveredItemIndex !== undefined;

  const handleHoverListMenu = {
    display: isHovered ? "block" : "none",
  };
  const handleHoverBanner = {
    display: isHovered ? "none" : "block",
  };

  const handleRedirectMegaMenu = (
    link: string,
    name: string | null,
    id: number
  ) => {
    setCategorySearch({
      categoryCode: link,
      categoryName: name,
      categoryId: id,
    });
    setActive(false);
    router.push(`/product-category/${link}`);
  };

  useEffect(() => {
    setActive(isHovered);
  }, [isHovered]);

  return (
    <Grid classNames={style}>
      <Grid.Col
        span={{ base: 12, xs: 2 }}
        className={style.menu}
        // onMouseEnter={() => setActive(true)}
        // onMouseLeave={() => setActive(false)}
      >
        <Flex direction={"column"} className={style.listMenu}>
          {dataMenu &&
            dataMenu?.map((menu: MegaMenuModels, index: number) => (
              <Flex
                onClick={() =>
                  handleRedirectMegaMenu(
                    menu.urlRedirect || "",
                    menu.categoryName,
                    menu.id
                  )
                }
                justify={"space-between"}
                align={"center"}
                key={index}
                onMouseEnter={() => handleHoverItem(index, true)}
                onMouseLeave={() => handleHoverItem(index, false)}
                id={hoveredItemIndex?.toString()}
                className={`${style.items} ${
                  hoveredItemIndex === index && style.hoveredItem
                }`}
              >
                <Flex gap={"md"} align={"center"}>
                  <Image src={menu?.icon} width={21} height={21} alt="icon" />
                  <Text truncate="end" className={style.text}>
                    {menu?.categoryName}
                  </Text>
                </Flex>
                <IconChevronRight size={15} className={style.iconArrow} />
                <NextImage
                  src={iconMegaMenuHover}
                  alt="iconMegaMenuHover"
                  className={`${style.iconMenuHover} ${style.customImage}`}
                  id={hoveredItemIndex?.toString()}
                />
              </Flex>
            ))}
        </Flex>
      </Grid.Col>
      <Grid.Col className={style.banner} span={{ base: 12, xs: 10 }}>
        <div>
          <div
            className={style.subMenu}
            style={handleHoverListMenu}
            onMouseEnter={() => handleHoverItem(hoveredItemIndex, true)}
            onMouseLeave={() => handleHoverItem(hoveredItemIndex, false)}
          >
            <Grid>
              <Grid.Col span={{ base: 12, xs: 9.3 }}>
                <Flex
                  direction={"column"}
                  justify={"space-between"}
                  align="flex-start"
                  style={{ margin: "10px 30px", height: "775px" }}
                >
                  <div id={hoveredItemIndex?.toString()}>
                    <SubMenuContent
                      data={
                        dataMenu[Number(hoveredItemIndex)]
                          ?.megaMenuCategoryChild
                      }
                    />
                  </div>
                  <div>
                    <ExtraCard
                      data={dataMenu[Number(hoveredItemIndex)]?.images}
                    />
                  </div>
                </Flex>
              </Grid.Col>
              <Grid.Col span={{ base: 12, xs: 2.7 }}>
                <div>
                  <LogoProducer
                    data={dataMenu[Number(hoveredItemIndex)]?.images}
                  />
                </div>
              </Grid.Col>
            </Grid>
          </div>
          <div style={handleHoverBanner} className={style.bannerBox}>
            {!headerMenu && <Banner dataBanner={dataBanner} />}
          </div>
        </div>
      </Grid.Col>
    </Grid>
  );
};

export default MegaMenu;
