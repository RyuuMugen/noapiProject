"use client";
import { Grid, Text } from "@mantine/core";
import logo from "@/assets/logo-hacom-compressed 2.svg";
import Image from "next/image";
import NewsCategory from "@/common/NewsCategory";
import style from "./FooterHome.module.scss";
import AppContainer from "@/common/AppContainer";
import Connection from "./components/Connection";
import FooterAddress from "./components/FooterAddress";
import Link from "next/link";
const footerContents = [
  {
    title: "Hỗ trợ",
    content: [
      { label: "Xây dựng cấu hình", href: "/buildpc" },
      { label: "Tra cứu đơn hàng", href: "/tra-don-hang" },
      {
        label: "Hướng dẫn mua hàng trực tuyến",
        href: "/hacom-huong-dan-mua-hang-truc-tuyen",
      },
      { label: "Hướng dẫn thanh toán", href: "/hacom-huong-dan-thanh-toan" },
      {
        label: "Hướng dẫn mua hàng trả góp",
        href: "/hacom-huong-dan-mua-hang-tra-gop",
      },
      {
        label: "In hóa đơn điện tử",
        href: "/hacom-huong-dan-tra-cuu-va-nhan-hoa-don-dien-tu",
      },
      {
        label: "Bảng giá vật tư",
        href: "/bang-gia-vat-tu-va-dich-vu-lap-dat-hacom",
      },
      { label: "Góp ý, Khiếu lại", href: "/lien-he" },
    ],
  },
  {
    title: "Chính sách",
    content: [
      {
        label: "Chính sách, quy định chung",
        href: "/hacom-chinh-sach-quy-dinh-chung",
      },
      {
        label: "Chính sách giao hàng",
        href: "/hacom-faster-giao-hang-sieu-toc",
      },
      { label: "Chính sách bảo hành", href: "/hacom-chinh-sach-bao-hanh" },
      {
        label: "Chính sách cho doanh nghiệp",
        href: "/hacom-chinh-sach-cho-doanh-nghiep",
      },
      {
        label: "Chính sách hàng chính hãng",
        href: "/hacom-chinh-sach-hang-chinh-hang",
      },
      {
        label: "Bảo mật thông tin khách hàng",
        href: "/hacom-chinh-sach-bao-mat-thong-tin-khach-hang",
      },
      {
        label: "Chính sách nhập lại tính phí",
        href: "/hacom-chinh-sach-nhap-lai-tinh-phi",
      },
    ],
  },
];

const FooterHome = () => {
  return (
    <div className={style.footerMargin}>
      {/* <AppContainer> */}
      <FooterAddress />

      <AppContainer>
        <div className={style.flexService}>
          <div className={style.footerService}>
            <Image className={style.logo} src={logo} alt="Logo" />
            <ul>
              <li>
                <Link className={style.link} href={"/gioi-thieu-ve-hacom"}>
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <a
                  className={style.link}
                  href={"/hacom-lien-he-hop-tac-kinh-doanh"}
                >
                  Liên hệ hợp tác kinh doanh
                </a>
              </li>
              <li>
                {/* <NewsCategory
                  link={"Tuyển dụng nhân sự"}
                  title={"Tuyển dụng nhân sự"}
                  code={"tuyen-dung-nhan-su"}
                  id={60}
                /> */}
                <a className={style.link} href={"/news-category/60"}>
                  Tuyển dụng nhân sự
                </a>
              </li>
              <li>
                {/* <NewsCategory
                  link={"Tin tức công nghệ"}
                  title={"Tin tức công nghệ"}
                  code={"tin-tuc-cong-nghe"}
                  id={4}
                /> */}
                <a className={style.link} href={"/news-category/4"}>
                  Tin tức công nghệ
                </a>
              </li>
              <li>
                <Link className={style.link} href={"/news"}>
                  Tin tức
                </Link>
              </li>
            </ul>
          </div>
          {footerContents.map((contents, index) => {
            return (
              <div className={style.footerService} key={index}>
                <Text className={style.contentTitle}>{contents.title}</Text>
                <ul>
                  {contents.content.map((content, index) => {
                    return (
                      <li key={index}>
                        <Link className={style.link} href={content.href}>
                          {content.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className={style.footerService}>
            <Connection />
          </div>
        </div>
      </AppContainer>
      <div>
        <div className={style.address}>
          <AppContainer>
            <div className={style.flexService}>
              <div>
                <Text>© 2021 Công ty Cổ phần đầu tư công nghệ HACOM</Text>
                <Text>
                  <span>Địa chỉ: </span>
                  Tầng 3 Tòa nhà LILAMA, số 124 Minh Khai, Phường Minh Khai,
                  Quận Hai Bà Trưng, Hà Nội
                </Text>
                <Text>
                  GPĐKKD số 0101161194 do Sở KHĐT Tp.Hà Nội cấp ngày 31/8/2001
                </Text>
                <Text>
                  <span>Email: </span> info@hacom.vn
                </Text>
                <Text>
                  <span>Điện thoại: </span>
                  1900 1903
                </Text>
              </div>
            </div>
          </AppContainer>
        </div>
      </div>

      {/* </AppContainer> */}
    </div>
  );
};

export default FooterHome;
