"use client";
import infoPointDetail from "@/assets/iconAdd.svg";
import infoDate from "@/assets/iconDate.svg";
import infoFlag from "@/assets/iconFlag.svg";
import infoIsRank from "@/assets/info-is-rank.svg";
import rank1 from "@/assets/rank-1.svg";
import rank3 from "@/assets/rank-2.svg";
import rank2 from "@/assets/rank-3.svg";
import rank4 from "@/assets/rank-4.svg";
import "@mantine/carousel/styles.css";
import { MembershipCard, tblRank } from "@/model/TblMembershipCard";
import { remainingMoney, getRankList } from "@/api/apiMembershipCard";
import {
  Flex,
  Tabs,
  Text,
  rem,
  NumberFormatter,
  Progress,
} from "@mantine/core";
import { IconGift, IconPointFilled } from "@tabler/icons-react";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import Image from "next/image";
import style from "./accountRank.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function accountRank({
  data,
  dataMemberCard,
}: {
  data: any;
  dataMemberCard?: MembershipCard;
}) {
  const userData = data?.data;
  const [dataMoneyRemaining, setDataMoneyRemaining] = useState<any>();
  const [dataRank, setDataMoneyRank] = useState<tblRank[]>([]);
  const [remainingRank, setDataRemainingRank] = useState("Silver");
  function formatDateStringToDay(dateString: any) {
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
  }

  const rankColors: { [key: string]: string } = {
    Silver: "rgb(103,136,156)",
    Gold: "rgb(255,184,0)",
    Platinum: "rgb(80,182,94)",
    Diamond: "rgb(86,107,164)",
    // Các màu sắc khác cho các rank khác
  };

  const rankLogos: { [key: string]: any } = {
    Silver: <Image src={rank1} alt="info" />,
    Gold: <Image src={rank2} alt="info" />,
    Platinum: <Image src={rank3} alt="info" />,
    Diamond: <Image src={rank4} alt="info" />,
    // Các màu sắc khác cho các rank khác
  };

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

  const rankColor =
    rankName !== "Chưa có" ? rankColors[rankName] || "#FF7A00" : "#FF7A00";

  const rankLogo =
    rankName !== "Chưa có" ? (
      rankLogos[rankName] || (
        <Image className={style.imageWhite} src={infoIsRank} alt="info" />
      )
    ) : (
      <Image className={style.imageWhite} src={infoIsRank} alt="info" />
    );

  const getNextLevel = (remainMoney: number) => {
    return dataRank?.find(
      (level) => level.maxPoint !== null && remainMoney < level.maxPoint!
    );
  };

  const nextLevel =
    dataMemberCard?.exchangepoint !== null
      ? getNextLevel(dataMemberCard?.exchangepoint || 0)
      : null;
  const percentage = nextLevel
    ? ((dataMemberCard?.exchangepoint || 0) / nextLevel.maxPoint!) * 100
    : 100;

  useEffect(() => {
    if (dataMemberCard && dataMemberCard.id) {
      const fetchData = async () => {
        try {
          const data = await remainingMoney(
            `membershipCardId=${dataMemberCard.id}`
          );
          setDataMoneyRemaining(data.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, [dataMemberCard]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRankList(`Skip=0&Take=5`);
        setDataMoneyRank(data.lists);
      } catch (error) {
        setDataMoneyRank([]);
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (
      dataMemberCard?.tblRank?.name &&
      dataMemberCard?.tblRank?.name !== "null"
    ) {
      setDataRemainingRank(getRankDisplayName(dataMemberCard.tblRank.name));
    }
  }, [dataMemberCard]);

  return (
    <main className={roboto.className}>
      <div className={style.main}>
        <Flex className={style.blockRankTop}>
          <Flex gap="30px" className={style.blockRankTopInner}>
            <div
              className={style.infoIsRank}
              style={{ backgroundColor: "#FFF4E8" }}
            >
              {/* <Image src={infoIsRank} alt="info" /> */}
              <div
                className={style.rankBackground}
                style={{
                  backgroundColor: rankColor,
                }}
              >
                {rankLogo}
              </div>
              <Text c="#774B1A" size="16px" style={{ marginBottom: "8px" }}>
                Hạng thành viên
              </Text>
              <Text fw={700} c={rankColor} size="24px">
                {rankName}
              </Text>
            </div>
            <div className={style.infoRankDetail}>
              <Flex
                className={style.infoDateAndPoint}
                gap="90px"
                justify="center"
              >
                <Flex className={style.infoDate} gap="13px" justify="center">
                  <Image src={infoDate} alt="info" />
                  <div>
                    <Text
                      fw={400}
                      c="#1F2123"
                      size="16px"
                      style={{ marginBottom: "8px" }}
                    >
                      Ngày tham gia
                    </Text>
                    <Text fw={700} c="#1F2123" size="20px">
                      {userData?.creationDate !== null
                        ? formatDateStringToDay(userData?.creationDate)
                        : ""}
                    </Text>
                  </div>
                </Flex>
                <Flex className={style.infoPoint} gap="13px" justify="center">
                  <Image src={infoPointDetail} alt="info" />
                  <div>
                    <Text
                      fw={400}
                      c="#1F2123"
                      size="16px"
                      style={{ marginBottom: "8px" }}
                    >
                      Điểm tích lũy
                    </Text>
                    <Text fw={700} c="#1F2123" size="20px">
                      <NumberFormatter
                        thousandSeparator
                        value={dataMemberCard?.exchangepoint || 0}
                      />
                    </Text>
                  </div>
                </Flex>
              </Flex>
              <div className={style.rankProcessBar}>
                <div className={style.rankProcessBarOuter}>
                  {/* <div
                    className={style.rankProcessBarInner}
                    style={{ width: "60%" }}
                  ></div> */}
                  <Progress value={percentage} color="#e11b1e" />
                  <span className={style.rankProcessBarFlag}>
                    <Image src={infoFlag} alt="flag" />
                  </span>
                </div>
              </div>
              <Text c="#1F2123" size="15px" fw={400} fs="italic" ta="center">
                Bạn cần mua thêm{" "}
                <span style={{ fontWeight: 700 }}>
                  <NumberFormatter
                    thousandSeparator="."
                    decimalSeparator=","
                    value={dataMoneyRemaining}
                    suffix="₫"
                  />
                </span>{" "}
                để lên hạng tiếp theo
              </Text>
            </div>
          </Flex>
        </Flex>
        <Flex className={style.blockRankBottom}>
          <Tabs value={remainingRank} className={style.tabsRankConditional}>
            <Tabs.List className={style.tabListRank}>
              <Tabs.Tab
                value="Silver"
                className={style.tabTitle}
                onClick={() => setDataRemainingRank("Silver")}
              >
                <div className={style.imageRank}>
                  <Image src={rank1} alt="rank" />
                </div>
                <span>Silver</span>
              </Tabs.Tab>

              <Tabs.Tab
                value="Gold"
                className={style.tabTitle}
                onClick={() => setDataRemainingRank("Gold")}
              >
                <div className={style.imageRank}>
                  <Image src={rank2} alt="rank" />
                </div>
                <span>Gold</span>
              </Tabs.Tab>

              <Tabs.Tab
                value="Platinum"
                className={style.tabTitle}
                onClick={() => setDataRemainingRank("Platinum")}
              >
                <div className={style.imageRank}>
                  <Image src={rank3} alt="rank" />
                </div>
                <span>Platinum</span>
              </Tabs.Tab>

              <Tabs.Tab
                value="Diamond"
                className={style.tabTitle}
                onClick={() => setDataRemainingRank("Diamond")}
              >
                <div className={style.imageRank}>
                  <Image src={rank4} alt="rank" />
                </div>
                <span>Diamond</span>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="Silver" className={style.tabContent}>
              <Text
                c="#1F2123"
                size="15px"
                fw={700}
                style={{ marginBottom: "8px" }}
              >
                ĐIỀU KIỆN DÀNH CHO THÀNH VIÊN KHÁCH HÀNG HẠNG SILVER
              </Text>
              <Text c="#1F2123" size="15px" style={{ marginBottom: "30px" }}>
                <IconPointFilled
                  style={{ width: rem(10), height: rem(10) }}
                  stroke={1.5}
                  color="#1F2123"
                />
                Tổng số tiền mua hàng tích luỹ trong năm nay và năm liền trước
                đạt từ 15 đến 50 triệu đồng, không tính đơn hàng doanh nghiệp
                B2B
              </Text>
              <div className={style.tablePromotion}>
                <div className={style.tableTitle}>
                  <IconGift
                    style={{ width: rem(22), height: rem(22) }}
                    stroke={1.5}
                    color="#FFFFFF"
                  />
                  <Text
                    c="#FFFFFF"
                    size="15px"
                    fw={700}
                    style={{ marginLeft: "10px" }}
                  >
                    ĐIỀU KIỆN DÀNH CHO THÀNH VIÊN KHÁCH HÀNG HẠNG SILVER
                  </Text>
                </div>
                <div className={style.tableContent}>
                  <ul>
                    <li>
                      Giảm ngay <span className={style.highlight}>50.000Đ</span>{" "}
                      khi mua Balo, Cặp, Túi chống sốc cao cấp...
                    </li>
                    <li>
                      Giảm ngay{" "}
                      <span className={style.highlight}>100.000Đ</span> khi mua
                      Ram Laptop thương hiệu KINGSTON
                    </li>
                    <li>
                      Giảm ngay{" "}
                      <span className={style.highlight}>100.000Đ</span> khi mua
                      Ram Laptop thương hiệu LEXAR
                    </li>
                    <li>
                      Giảm ngay{" "}
                      <span className={style.highlight}>200.000Đ</span> khi mua
                      Ghế công thái học thương hiệu LEGION
                    </li>
                    <li>
                      Giảm thêm <span className={style.highlight}>1%</span> khi
                      mua các sản phẩm máy (điện thoại, máy tính, máy tính bảng,
                      Apple Watch)
                    </li>
                    <li>
                      Giảm thêm <span className={style.highlight}>5%</span> (tối
                      đa 500.000đ) khi thực hiện thu cũ lên đời
                    </li>
                  </ul>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="Gold" className={style.tabContent}>
              <Text
                c="#1F2123"
                size="15px"
                fw={700}
                style={{ marginBottom: "8px" }}
              >
                ĐIỀU KIỆN DÀNH CHO THÀNH VIÊN HẠNG GOLD
              </Text>
              <Text c="#1F2123" size="15px" style={{ marginBottom: "30px" }}>
                <IconPointFilled
                  style={{ width: rem(10), height: rem(10) }}
                  stroke={1.5}
                  color="#1F2123"
                />
                Tổng số tiền mua hàng tích luỹ trong năm nay và năm liền trước
                đạt từ 15 đến 50 triệu đồng, không tính đơn hàng doanh nghiệp
                B2B
              </Text>
              <div className={style.tablePromotion}>
                <div className={style.tableTitle}>
                  <IconGift
                    style={{ width: rem(22), height: rem(22) }}
                    stroke={1.5}
                    color="#FFFFFF"
                  />
                  <Text
                    c="#FFFFFF"
                    size="15px"
                    fw={700}
                    style={{ marginLeft: "10px" }}
                  >
                    ĐIỀU KIỆN DÀNH CHO THÀNH VIÊN HẠNG GOLD
                  </Text>
                </div>
                <div className={style.tableContent}>
                  <ul>
                    <li>
                      Giảm ngay <span className={style.highlight}>50.000Đ</span>{" "}
                      khi mua Balo, Cặp, Túi chống sốc cao cấp...
                    </li>
                    <li>
                      Giảm ngay{" "}
                      <span className={style.highlight}>100.000Đ</span> khi mua
                      Ram Laptop thương hiệu KINGSTON
                    </li>
                    <li>
                      Giảm ngay{" "}
                      <span className={style.highlight}>100.000Đ</span> khi mua
                      Ram Laptop thương hiệu LEXAR
                    </li>
                    <li>
                      Giảm ngay{" "}
                      <span className={style.highlight}>200.000Đ</span> khi mua
                      Ghế công thái học thương hiệu LEGION
                    </li>
                    <li>
                      Giảm thêm <span className={style.highlight}>1%</span> khi
                      mua các sản phẩm máy (điện thoại, máy tính, máy tính bảng,
                      Apple Watch)
                    </li>
                    <li>
                      Giảm thêm <span className={style.highlight}>5%</span> (tối
                      đa 500.000đ) khi thực hiện thu cũ lên đời
                    </li>
                  </ul>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="Platinum" className={style.tabContent}>
              <Text
                c="#1F2123"
                size="15px"
                fw={700}
                style={{ marginBottom: "8px" }}
              >
                ĐIỀU KIỆN DÀNH CHO THÀNH VIÊN HẠNG PLATINUM
              </Text>
              <Text c="#1F2123" size="15px" style={{ marginBottom: "30px" }}>
                <IconPointFilled
                  style={{ width: rem(10), height: rem(10) }}
                  stroke={1.5}
                  color="#1F2123"
                />
                Tổng số tiền mua hàng tích luỹ trong năm nay và năm liền trước
                đạt từ 15 đến 50 triệu đồng, không tính đơn hàng doanh nghiệp
                B2B
              </Text>
              <div className={style.tablePromotion}>
                <div className={style.tableTitle}>
                  <IconGift
                    style={{ width: rem(22), height: rem(22) }}
                    stroke={1.5}
                    color="#FFFFFF"
                  />
                  <Text
                    c="#FFFFFF"
                    size="15px"
                    fw={700}
                    style={{ marginLeft: "10px" }}
                  >
                    ĐIỀU KIỆN DÀNH CHO THÀNH VIÊN HẠNG PLATINUM
                  </Text>
                </div>
                <div className={style.tableContent}>
                  <ul>
                    <li>
                      Giảm ngay <span className={style.highlight}>50.000Đ</span>{" "}
                      khi mua Balo, Cặp, Túi chống sốc cao cấp...
                    </li>
                    <li>
                      Giảm ngay{" "}
                      <span className={style.highlight}>100.000Đ</span> khi mua
                      Ram Laptop thương hiệu KINGSTON
                    </li>
                    <li>
                      Giảm ngay{" "}
                      <span className={style.highlight}>100.000Đ</span> khi mua
                      Ram Laptop thương hiệu LEXAR
                    </li>
                    <li>
                      Giảm ngay{" "}
                      <span className={style.highlight}>200.000Đ</span> khi mua
                      Ghế công thái học thương hiệu LEGION
                    </li>
                    <li>
                      Giảm thêm <span className={style.highlight}>1%</span> khi
                      mua các sản phẩm máy (điện thoại, máy tính, máy tính bảng,
                      Apple Watch)
                    </li>
                    <li>
                      Giảm thêm <span className={style.highlight}>5%</span> (tối
                      đa 500.000đ) khi thực hiện thu cũ lên đời
                    </li>
                  </ul>
                </div>
              </div>
            </Tabs.Panel>

            <Tabs.Panel value="Diamond" className={style.tabContent}>
              <Text
                c="#1F2123"
                size="15px"
                fw={700}
                style={{ marginBottom: "8px" }}
              >
                ĐIỀU KIỆN DÀNH CHO THÀNH VIÊN HẠNG DIAMOND
              </Text>
              <Text c="#1F2123" size="15px" style={{ marginBottom: "30px" }}>
                <IconPointFilled
                  style={{ width: rem(10), height: rem(10) }}
                  stroke={1.5}
                  color="#1F2123"
                />
                Tổng số tiền mua hàng tích luỹ trong năm nay và năm liền trước
                đạt từ 15 đến 50 triệu đồng, không tính đơn hàng doanh nghiệp
                B2B
              </Text>
              <div className={style.tablePromotion}>
                <div className={style.tableTitle}>
                  <IconGift
                    style={{ width: rem(22), height: rem(22) }}
                    stroke={1.5}
                    color="#FFFFFF"
                  />
                  <Text
                    c="#FFFFFF"
                    size="15px"
                    fw={700}
                    style={{ marginLeft: "10px" }}
                  >
                    ĐIỀU KIỆN DÀNH CHO THÀNH VIÊN DIAMOND
                  </Text>
                </div>
                <div className={style.tableContent}>
                  <ul>
                    <li>
                      Giảm ngay
                      <span className={style.highlight}>50.000Đ</span> khi mua
                      Balo, Cặp, Túi chống sốc cao cấp...
                    </li>
                    <li>
                      Giảm ngay
                      <span className={style.highlight}>100.000Đ</span> khi mua
                      Ram Laptop thương hiệu KINGSTON
                    </li>
                    <li>
                      Giảm ngay
                      <span className={style.highlight}>100.000Đ</span> khi mua
                      Ram Laptop thương hiệu LEXAR
                    </li>
                    <li>
                      Giảm ngay
                      <span className={style.highlight}>200.000Đ</span> khi mua
                      Ghế công thái học thương hiệu LEGION
                    </li>
                    <li>
                      Giảm thêm <span className={style.highlight}>1%</span>
                      khi mua các sản phẩm máy (điện thoại, máy tính, máy tính
                      bảng, Apple Watch)
                    </li>
                    <li>
                      Giảm thêm <span className={style.highlight}>5%</span>
                      (tối đa 500.000đ) khi thực hiện thu cũ lên đời
                    </li>
                  </ul>
                </div>
              </div>
            </Tabs.Panel>
          </Tabs>
        </Flex>
      </div>
    </main>
  );
}
