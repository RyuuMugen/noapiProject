"use client";
import AlbumSR1 from "@/assets/album-sr-1.png";
import AlbumSR2 from "@/assets/album-sr-2.png";
import AlbumSR3 from "@/assets/album-sr-3.png";
import AlbumSR4 from "@/assets/album-sr-4.png";
import AlbumSR5 from "@/assets/album-sr-5.png";
import AlbumSR6 from "@/assets/album-sr-6.png";
import iconCoreValue1 from "@/assets/core-value-1.png";
import iconCoreValue10 from "@/assets/core-value-10.png";
import iconCoreValue2 from "@/assets/core-value-2.png";
import iconCoreValue3 from "@/assets/core-value-3.png";
import iconCoreValue4 from "@/assets/core-value-4.png";
import iconCoreValue5 from "@/assets/core-value-5.png";
import iconCoreValue6 from "@/assets/core-value-6.png";
import iconCoreValue7 from "@/assets/core-value-7.png";
import iconCoreValue8 from "@/assets/core-value-8.png";
import iconCoreValue9 from "@/assets/core-value-9.png";
import CommonIcon_1 from "@/assets/icon-intro-1.png";
import CommonIcon_2 from "@/assets/icon-intro-2.png";
import CommonIcon_3 from "@/assets/icon-intro-3.png";
import contact from "@/assets/showroom-contact.jpg";
import cskh from "@/assets/showroom-cskh.jpg";
import ImageShowroom from "@/assets/showroom_HN_DD.png";
import WarrantyMap from "@/feature/warranty/warrantyMap";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Flex, Grid } from "@mantine/core";
import { Roboto } from "next/font/google";
import Image from "next/image";
import style from "./showroom.module.scss";
import { postLoggingAction } from "@/api/apiLogging";
import { useEffect } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const Showroom = () => {
  const iconCardTop = [
    { icon: CommonIcon_1, numberCount: "23", title: "Năm thành lập" },
    {
      icon: CommonIcon_2,
      numberCount: "+1.000.000",
      title: "Khách hàng tin tưởng",
    },
    { icon: CommonIcon_3, numberCount: "16", title: "Cửa hàng toàn quốc" },
  ];
  const showroom = [
    {
      id: 1,
      city: "Hà Nội",
      codecity: "ha_noi",
      stores: [
        {
          storename: "HACOM Hai Bà Trưng",
          address: "Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội",
          email: "kdbl.haibatrung@hacom.vn",
          hotline: "1900 1903 (máy lẻ 25398) - (0243) 6285551",
          timeworking: "Từ 8h-20h hàng ngày",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.774013552288!2d105.84273759999999!3d21.001694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135addd9fd46d5b%3A0x507a55e8748aa104!2zSEFDT00gSEFJIELDgCBUUsavTkc!5e0!3m2!1svi!2s!4v1705312734316!5m2!1svi!2s",
          imagestore: ImageShowroom,
        },
        {
          storename: "HACOM Đống Đa",
          address: "Số 43 Thái Hà - Đống Đa - Hà Nội",
          email: "kdbl.dongda@hacom.vn",
          hotline: "1900 1903 (máy lẻ 25375) - (0243) 5380088",
          timeworking: "Từ 8h-21h30 hàng ngày",
          map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5383835083185!2d105.82153059999999!3d21.0111334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7d94ae54b9%3A0x21aae6c934d53ad6!2zSEFDT00gxJDhu5BORyDEkEE!5e0!3m2!1svi!2s!4v1705312507643!5m2!1svi!2s",
          imagestore: ImageShowroom,
        },
      ],
    },
    {
      id: 2,
      city: "Thanh Hóa",
      codecity: "thanh_hoa",
      stores: [
        {
          storename: "HACOM - THANH HÓA",
          address: "Số 164 Lạc Long Quân - Đông Vệ - Thanh Hóa",
          email: "kdbl.thanhhoa@hacom.vn",
          hotline: "1900 1903 (máy lẻ 25429) – (023) 77308868",
          timeworking: "Từ 8h30–18h, Thứ 2 đến Thứ 7",
          map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3754.062293429998!2d105.7807396!3d19.794956!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3136f7d9c91d2b81%3A0xd28061b6b3f8484c!2sHACOM%20THANH%20H%C3%93A!5e0!3m2!1svi!2s!4v1705312824039!5m2!1svi!2s",
          imagestore: ImageShowroom,
        },
      ],
    },
    {
      id: 3,
      city: "TP HCM",
      codecity: "tp_hcm",
      stores: [
        {
          storename: "HACOM - Q3, TP. HỒ CHÍ MINH",
          address: "Số 478 Cách Mạng Tháng Tám - Quận 3 - TP. Hồ Chí Minh",
          email: "kdbl.quan3@hacom.vn",
          hotline: "1900 1903 (máy lẻ 25400) - (028) 73000322",
          timeworking: "Từ 8h30-20h30 hàng ngày",
          map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864180.830466662!2d102.6060665!3d13.8935053!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed17e3c9185%3A0x1e37f7c97db47fce!2zSEFDT00gUVXhuqxOIDMgSOG7kiBDSMONIE1JTkg!5e0!3m2!1svi!2s!4v1705312947876!5m2!1svi!2s",
          imagestore: ImageShowroom,
        },
      ],
    },
  ];

  const iconCardsValue = [
    { icon: iconCoreValue1, title: "Bảo hành tận nơi", hightlight: "" },
    { icon: iconCoreValue2, title: "Gửi xe miễn phí", hightlight: "" },
    {
      icon: iconCoreValue3,
      title: "Trải nghiệm sản phẩm miễn phí",
      hightlight: "",
    },
    { icon: iconCoreValue4, title: "Tư vấn miễn phí", hightlight: "" },
    {
      icon: iconCoreValue5,
      title: "Vệ sinh PC/ laptop miễn phí",
      hightlight: "",
    },
    { icon: iconCoreValue6, title: "Sản phẩm chính hãng", hightlight: "" },
    { icon: iconCoreValue7, title: "Trả góp lãi suất 0%", hightlight: "" },
    {
      icon: iconCoreValue8,
      title: "Giao hàng miễn phí toàn quốc",
      hightlight: "",
    },
    { icon: iconCoreValue9, title: "Wifi miễn phí", hightlight: "" },
    { icon: iconCoreValue10, title: "Thanh toán đa dạng", hightlight: "" },
  ];

  useEffect(() => {
    postLoggingAction({
      userName: localStorage.getItem("userName") || "",
      actionType: "HomePageClickedLink",
      actionDetail: window.location.href,
    });
  }, []);

  return (
    <div className={roboto.className}>
      <div className={style.backgroundTop}>
        <div className={style.showroomTitle}>
          Hệ thống các chi nhánh của Hacom
          <br /> trên toàn quốc
        </div>
      </div>
      <div className={style.intro}>
        <div className={style.container}>
          <Flex
            className={style.introTop}
            justify="center"
            align="center"
            gap="sm"
          >
            {iconCardTop?.map((item, index) => (
              <div className={style.boxIntro} key={index}>
                <div className={style.boxIntroIcon}>
                  <Image
                    height={50}
                    width={64}
                    alt={item.title}
                    src={item.icon}
                  />
                </div>
                <h5 className={style.boxIntroNumber}>{item.numberCount}</h5>
                <p className={style.boxIntroTitle}>{item.title}</p>
              </div>
            ))}
          </Flex>
        </div>
      </div>
      <div className={style.backgroundMid1}>
        <WarrantyMap title="Hệ thống showrom Hacom" />
      </div>
      {/* <Tabs defaultValue="ha_noi" className={style.tabStores}>
        <AppContainer>
          <Tabs.List className={style.tabStoresList}>
            {showroom?.map((item) => (
              <Tabs.Tab
                value={item.codecity}
                key={item.id}
                className={style.tabStoresListButton}
              >
                {item.city}
              </Tabs.Tab>
            ))}
          </Tabs.List>
        </AppContainer>

        {showroom?.map((item) => (
          <Tabs.Panel value={item.codecity} className={style.tabStoresContent}>
            <Carousel
              slideSize={{ base: "100%", sm: "100%", md: "100%" }}
              slideGap={{ base: 0, sm: "md" }}
              loop
              align="start"
              withControls={item.stores.length > 1 ? true : false}
              controlSize={40}
              className={style.tabStoresContentSlider}
            >
              {item.stores?.map((item, index) => (
                <Carousel.Slide
                  key={index}
                  className={style.tabStoresContentItem}
                >
                  <Text className={style.tabStoresContentItemName}>
                    {item.storename}
                  </Text>
                  <Flex className={style.tabStoresContentItemInfo}>
                    <div className={style.tabStoresContentItemInfoCol}>
                      <Text>
                        <Image src={iconMap} alt="iconMap" />{" "}
                        <span className={style.tabStoresContentItemInfoTitle}>
                          Địa chỉ:
                        </span>{" "}
                        {item.address}
                      </Text>
                      <Text>
                        <Image src={iconEmail} alt="iconEmail" />{" "}
                        <span className={style.tabStoresContentItemInfoTitle}>
                          Email:
                        </span>{" "}
                        {item.email}
                      </Text>
                    </div>
                    <div className={style.tabStoresContentItemInfoCol}>
                      <Text>
                        <Image src={iconHotline} alt="iconHotline" />{" "}
                        <span className="bold">Hotline:</span> {item.hotline}
                      </Text>
                      <Text>
                        <Image src={iconTime} alt="iconTime" />{" "}
                        <span className={style.tabStoresContentItemInfoTitle}>
                          Giờ làm việc:
                        </span>{" "}
                        {item.timeworking}
                      </Text>
                    </div>
                  </Flex>
                  <Grid className={style.tabStoresContentItemPosition}>
                    <Grid.Col
                      span={{ base: 12, md: 6, lg: 6 }}
                      className={style.tabStoresContentItemPositionMap}
                    >
                      <AspectRatio
                        ratio={16 / 9}
                        className={style.tabStoresContentItemPositionMapWrapper}
                      >
                        <iframe
                          src={item.map}
                          title={item.storename}
                          style={{ border: 0 }}
                        />
                      </AspectRatio>
                    </Grid.Col>
                    <Grid.Col
                      span={{ base: 12, md: 6, lg: 6 }}
                      className={style.tabStoresContentItemPositionImage}
                    >
                      <Image src={item.imagestore} alt={item.storename} />
                    </Grid.Col>
                  </Grid>
                </Carousel.Slide>
              ))}
            </Carousel>
          </Tabs.Panel>
        ))}
      </Tabs> */}

      {/* Album */}
      <div className={style.backgroundMid}>
        <div className={style.container}>
          <div className={style.showroomTitle}>
            Dạo online showroom của Hacom
          </div>
          <div className={style.sliderAlbum}>
            <Carousel
              withIndicators
              height={200}
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: 15, md: 30 }}
              loop
              controlSize={40}
              align="start"
              slidesToScroll={3}
            >
              <Carousel.Slide>
                <Image
                  fill={true}
                  objectFit="contain"
                  src={AlbumSR1}
                  alt="Album SR"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  fill={true}
                  objectFit="contain"
                  src={AlbumSR2}
                  alt="Album SR"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  fill={true}
                  objectFit="contain"
                  src={AlbumSR3}
                  alt="Album SR"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  fill={true}
                  objectFit="contain"
                  src={AlbumSR4}
                  alt="Album SR"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  fill={true}
                  objectFit="contain"
                  src={AlbumSR5}
                  alt="Album SR"
                />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image
                  fill={true}
                  objectFit="contain"
                  src={AlbumSR6}
                  alt="Album SR"
                />
              </Carousel.Slide>
            </Carousel>
          </div>
        </div>
      </div>
      {/* End: Album */}

      {/* Core Value */}
      <div className={style.coreValue}>
        <div className={style.container}>
          <div className={style.coreValueTitle}>
            Tận tâm - Trách nhiệm - Sáng tạo - Khác biệt
          </div>
          <div className={style.coreValueList}>
            {/* <CommonIcon iconCards={iconCardsValue} widthCard={"100%"} heightCard={"100%"} /> */}
          </div>
        </div>
        <div className={style.container}>
          <Grid gutter={{ base: 5, xs: "md", md: "xl", xl: 30 }}>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <div style={{ position: "relative", height: "249px" }}>
                <Image fill={true} objectFit="contain" src={cskh} alt="CSKH" />
              </div>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
              <div style={{ position: "relative", height: "249px" }}>
                <Image
                  fill={true}
                  objectFit="contain"
                  src={contact}
                  alt="contact"
                />
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </div>
      {/* End: Core Value */}
    </div>
  );
};
export default Showroom;
