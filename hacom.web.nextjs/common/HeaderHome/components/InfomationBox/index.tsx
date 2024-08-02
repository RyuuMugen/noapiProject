import Icon1 from "@/assets/headericon1.svg";
import Icon2 from "@/assets/headericon2.svg";
import Icon3 from "@/assets/headericon3.svg";
import Icon4 from "@/assets/headericon4.svg";
import logo from "@/assets/phone.svg";
import NewsCategory from "@/common/NewsCategory";
import { Grid } from "@mantine/core";
import Image from "next/image";
import AppContainer from "../../../AppContainer";
import style from "./Infomation.module.scss";
import MienBac from "./Store/MienBac";
import MienNam from "./Store/MienNam";
import MienTrung from "./Store/MienTrung";
import Online from "./Store/online";
import Button from "./button";
import Link from "./link";
const Logo = () => {
  const buttonData = [
    {
      id: 1,
      title: "Mua hàng online",
      data: <Online />,
    },
    {
      id: 2,
      title: "Miền Bắc",
      data: <MienBac />,
    },
    {
      id: 3,
      title: "Miền Trung",
      data: <MienTrung />,
    },
    {
      id: 4,
      title: "Miền Nam",
      data: <MienNam />,
    },
  ];

  const linkData = [
    {
      title: "Hệ thống Showroom",
      icon: Icon1,
      src: "/showroom",
    },
    {
      title: "Hỗ trợ",
      icon: Icon2,
      src: "#",
      srcGroup: [
        {
          href: "/hacom-chinh-sach-quy-dinh-chung",
          name: "Chính sách quy định chung",
        },
        {
          href: "/hacom-chinh-sach-bao-hanh",
          name: "Chính sách bảo hành",
        },
        {
          href: "/hacom-chinh-sach-cho-doanh-nghiep",
          name: "Chính sách cho doanh nghiệp",
        },
        {
          href: "/hacom-chinh-sach-hang-chinh-hang",
          name: "Chính sách hàng chính hãng",
        },
        {
          href: "/hacom-chinh-sach-nhap-lai-tinh-phi",
          name: "Chính sách nhập lại tính phí",
        },
        {
          href: "/hacom-huong-dan-mua-hang-truc-tuyen",
          name: "Hướng dẫn mua hàng trực tuyến",
        },
        {
          href: "/hacom-huong-dan-thanh-toan",
          name: "Hướng dẫn thanh toán",
        },
        {
          href: "/hacom-huong-dan-mua-hang-tra-gop",
          name: "Hướng dẫn mua hàng trả góp",
        },
      ],
    },
    {
      title: "Trung tâm dịch vụ",
      icon: Icon3,
      src: "/service-list",
      srcGroup: [
        {
          href: "/tra-don-hang",
          name: "Tra cứu đơn hàng",
        },
        {
          href: "/tra-bao-hanh",
          name: "Tra cứu bảo hành",
        },
        {
          href: "/hacom-huong-dan-tra-cuu-va-nhan-hoa-don-dien-tu",
          name: "In hoá đơn điện tử",
        },
        // {
        //   href: "/lien-he",
        //   name: "In hoá đơn điện tử"
        // },
        {
          href: "/bang-gia-vat-tu-va-dich-vu-lap-dat-hacom",
          name: "Bảng giá dịch vụ lắp đặt",
        },
      ],
    },
  ];
  return (
    <AppContainer>
      <div style={{ display: "flex" }}>
        <div className={style.HotlineBox} style={{ flex: "10.5%" }}>
          <div className={style.flexBox1}>
            <Image src={logo} alt="logo" />
            <span>
              <span className={style.hotline}>Hotline mua hàng:</span>{" "}
              <span className={style.hotlinePhone}>1900 1903</span>
            </span>
          </div>
        </div>
        <div className={style.storeBox} style={{ flex: "42%" }}>
          {buttonData.map((button, index) => (
            <Button key={index} data={button} />
          ))}
        </div>

        <div className={style.serviceBox} style={{ flex: "21.5%" }}>
          <div className={style.endBox}>
            {linkData.map((link, index) => (
              <Link
                key={index}
                title={link.title}
                icon={link.icon}
                src={link.src}
                srcGroup={link.srcGroup}
              />
            ))}
            <div className={style.sale}>
              <Image src={Icon4} alt="logo" />
              <NewsCategory
                link={"Khuyến mại"}
                title={"Tin huyến mại"}
                code={"tin-khuyen-mai-su-kien"}
                id={57}
              />
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  );
};

export default Logo;
