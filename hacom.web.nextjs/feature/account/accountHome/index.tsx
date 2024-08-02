"use client";
import { getListArticle } from "@/api/apiArticle";
import avatarAccount from "@/assets/avatar-account.png";
import bannerSlider1 from "@/assets/build-pc 1.png";
import infoIsRank from "@/assets/Group 1131.png";
import infoPack from "@/assets/info-pack.svg";
import infoPoint from "@/assets/info-point.svg";
import infoPromotion from "@/assets/info-promotion.svg";
import infoRank from "@/assets/info-rank.svg";
import infoTime from "@/assets/info-time.svg";
import NewsCard from "@/common/NewsCard";
import { DataArticle } from "@/model/DataArticle";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import { Button, Flex, Text, NumberFormatter } from "@mantine/core";
import { IconChevronRight } from "@tabler/icons-react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { MembershipCard } from "@/model/TblMembershipCard";
import { useEffect, useState } from "react";

import style from "./accountHome.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function accountHome({
  data,
  dataCount,
  dataMemberCard,
  setActiveTab,
}: {
  data: any;
  dataCount: number;
  dataMemberCard?: MembershipCard;
  setActiveTab: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const userData = data?.data;
  const [dataArticleRight, setDataArticleRight] = useState<DataArticle[]>();

  const getRankDisplayName = (rank: any) => {
    switch (rank) {
      case "Customer0":
        return "Silver";
      case "Customer1":
        return "Gold";
      case "Customer2":
        return "Platinum";
      case "Customer3":
        return "Diamond";
      default:
        return "Chưa có";
    }
  };

  const rankName =
    Array.isArray(dataMemberCard) || dataMemberCard?.tblRank?.name === "null"
      ? "Chưa có"
      : getRankDisplayName(dataMemberCard?.tblRank?.name || "Chưa có");

  const formatDateStringToDay = (dateString: any) => {
    const dateObject = new Date(dateString);

    // Lấy ngày, tháng, năm từ đối tượng Date
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1; // Tháng bắt đầu từ 0 nên cần cộng thêm 1
    const day = dateObject.getDate();

    // Tạo chuỗi ngày tháng
    const formattedDate = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;

    return formattedDate;
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getListArticle(
        "Status=1&ArticleCategoryId=57&Skip=0&Take=4"
      );
      setDataArticleRight(data.data);
    };
    fetchData();
  }, []);

  return (
    <main className={roboto.className}>
      <div className={style.main}>
        <Flex style={{ marginBottom: "20px" }}>
          <Flex
            className={style.mainInfo}
            gap={20}
            justify="center"
            direction="column"
          >
            <div className={style.mainInfoTop}>
              <Image src={avatarAccount} alt="avatar" />
              <Text fw={700} c="#571717">
                Xin chào
              </Text>
              <Text fw={700} c="#E91D3E">
                {userData?.customerName ||
                  userData?.userName ||
                  userData?.email}
              </Text>
            </div>
            <Flex className={style.mainInfoBottom} justify="center">
              <div className={style.mainInfoItem}>
                <Image src={infoTime} alt="info" />
                <Text c="#571717">Ngày tham gia</Text>
                <Text fw={700} c="#571717">
                  {userData?.creationDate !== null
                    ? formatDateStringToDay(userData?.creationDate)
                    : ""}
                </Text>
              </div>
              <div className={style.mainInfoItem}>
                <Image src={infoRank} alt="info" />
                <Text c="#571717">Hạng thành viên</Text>
                <Text fw={700} c="#571717">
                  {rankName}
                </Text>
              </div>
              <div className={style.mainInfoItem}>
                <Image src={infoPoint} alt="info" />
                <Text c="#571717">Điểm tích lũy</Text>
                <Text fw={700} c="#571717">
                  <NumberFormatter
                    thousandSeparator
                    value={dataMemberCard?.exchangepoint || 0}
                  />
                </Text>
              </div>
            </Flex>
          </Flex>
          <div className={style.slideBanner} style={{ height: 400 }}>
            <Carousel withIndicators height="100%">
              <Carousel.Slide>
                <Image src={bannerSlider1} alt="slider" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image src={bannerSlider1} alt="slider" />
              </Carousel.Slide>
              <Carousel.Slide>
                <Image src={bannerSlider1} alt="slider" />
              </Carousel.Slide>
            </Carousel>
          </div>
        </Flex>
        {/* End: Row 1 */}

        {/* Row 2 */}
        <Flex
          className={style.infoMiddle}
          justify="center"
          gap="30px"
          style={{ marginBottom: "50px" }}
        >
          <div
            className={style.infoMiddleItem}
            style={{ backgroundColor: "#E6F1FF" }}
          >
            <Image src={infoPack} alt="info" />
            <Text c="#2D4E74" size="16px" style={{ marginBottom: "8px" }}>
              Đơn hàng của bạn
            </Text>
            <Text
              fw={700}
              c="#1F67D2"
              size="24px"
              style={{ marginBottom: "36px" }}
            >
              {dataCount} đơn hàng
            </Text>
            <Button
              radius="90px"
              onClick={() => setActiveTab("account-history")}
              rightSection={<IconChevronRight size={11} />}
            >
              Xem chi tiết
            </Button>
          </div>
          <div
            className={style.infoMiddleItem}
            style={{ backgroundColor: "#FFF4E8" }}
          >
            <Image src={infoIsRank} alt="info" />
            <Text c="#774B1A" size="16px" style={{ marginBottom: "8px" }}>
              Hạng thành viên
            </Text>
            <Text
              fw={700}
              c="#FF7A00"
              size="24px"
              style={{ marginBottom: "36px" }}
            >
              {rankName}
            </Text>
            <Button
              radius="90px"
              onClick={() => setActiveTab("account-rank")}
              rightSection={<IconChevronRight size={11} />}
            >
              Xem chi tiết
            </Button>
          </div>
        </Flex>
        {/* End: Row 2 */}

        {/* Row 3 */}
        <Text c="#1F2123" fw={700} size="26px" style={{ marginBottom: "24px" }}>
          Tin tức khuyến mại
        </Text>
        <div className={style.bottomNewsList}>
          {dataArticleRight?.map((item) => (
            <div className={style.bottomNewsItem}>
              <NewsCard data={item} />
            </div>
          ))}
        </div>
        {/* End: Row 3 */}
      </div>
    </main>
  );
}
