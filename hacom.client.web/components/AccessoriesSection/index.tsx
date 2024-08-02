"use client";
import HeaderSection from "../HeaderSection";
import AccessoriesList from "./AccessoriesList";
import ImageAccessories from "@/assets/accessoriesCard1.png";
import UsbImage from "@/assets/accessoriesCard10.png";
import MemoryStickImage from "@/assets/accessoriesCard11.png";
import NetworkEquipmentImage from "@/assets/accessoriesCard12.png";
import CameraImage from "@/assets/accessoriesCard13.png";
import SmartHomeImage from "@/assets/accessoriesCard14.png";
import ConvenientAccessoriesImage from "@/assets/accessoriesCard15.png";
import SoftwareImage from "@/assets/accessoriesCard16.png";
import SimImage from "@/assets/accessoriesCard17.png";
import SmartWatchImage from "@/assets/accessoriesCard18.png";
import ChargerImage from "@/assets/accessoriesCard2.png";
import BatteryBackupImage from "@/assets/accessoriesCard3.png";
import ScreenProtectorImage from "@/assets/accessoriesCard4.png";
import LoudspeakerImage from "@/assets/accessoriesCard5.png";
import EarphoneImage from "@/assets/accessoriesCard6.png";
import PhoneCaseImage from "@/assets/accessoriesCard7.png";
import MouseImage from "@/assets/accessoriesCard8.png";
import BackpackImage from "@/assets/accessoriesCard9.png";
import styles from "./AccessoriesSection.module.scss";

const data = [
  {
    id: 1,
    name: "Sửa Chữa Laptop",
    img: ImageAccessories,
    url: "/category/sua-chua-laptop",
    color: "#ffcb8f",
  },
  {
    id: 2,
    name: "Sửa Chữa Linh Kiện Máy Tính",
    img: ChargerImage,
    url: "/category/sua-chua-linh-kien-may-tinh",
    color: "#f7784d",
  },
  {
    id: 3,
    name: "Thay Thế Linh Kiện Laptop",
    img: BatteryBackupImage,
    url: "/category/thay-main-laptop",
    color: "#ff8f8e",
  },
  {
    id: 4,
    name: "Cài Đặt",
    img: ScreenProtectorImage,
    url: "/category/cai-dat-may-chu",
    color: "#fdba74",
  },
  {
    id: 5,
    name: "Sửa Chữa Thiết Bị Văn Phòng",
    img: LoudspeakerImage,
    url: "/category/sua-chua-thiet-bi-van-phong",
    color: "#9d8dbe",
  },
  {
    id: 6,
    name: "Bảo Trì Bảo Dưỡng Máy Tính, TBVP",
    img: EarphoneImage,
    url: "/category/bao-tri-bao-duong-may-tinh-tbvp",
    color: "#7fd7b4",
  },
  {
    id: 7,
    name: "Dịch Vụ Bảo Hành Mở Rộng",
    img: PhoneCaseImage,
    url: "/category/dich-vu-bao-hanh-mo-rong",
    color: "#92c5fc",
  },
  {
    id: 8,
    name: "Thi Công",
    img: MouseImage,
    url: "/category/thi-cong",
    color: "#fc93b2",
  },
  {
    id: 9,
    name: "Sửa Main Laptop",
    img: BackpackImage,
    url: "/category/sua-main-laptop",
    color: "#889afe",
  },
  {
    id: 10,
    name: "Sửa Màn Hình Laptop",
    img: UsbImage,
    url: "/category/sua-man-hinh-laptop",
    color: "#c08fac",
  },
  {
    id: 11,
    name: "Sửa Bàn Phím, Chuột Máy Tính",
    img: MemoryStickImage,
    url: "/category/sua-ban-phim-chuot-may-tinh",
    color: "#fc93b2",
  },
  {
    id: 12,
    name: "Thay Pin Laptop",
    img: NetworkEquipmentImage,
    url: "/category/thay-pin-laptop",
    color: "#90d570",
  },
  {
    id: 13,
    name: "Thay Bàn Phím Laptop",
    img: CameraImage,
    url: "/category/thay-ban-phim-laptop",
    color: "#889afe",
  },
  {
    id: 14,
    name: "Cài Đặt Hệ Điều Hành",
    img: SmartHomeImage,
    url: "/category/cai-dat-he-dieu-hanh",
    color: "#92c5fc",
  },
  {
    id: 15,
    name: "Cài Đặt Máy Chủ",
    img: ConvenientAccessoriesImage,
    url: "/category/cai-dat-may-chu",
    color: "#fd6272",
  },
  {
    id: 16,
    name: "Bảo Trì Tại Chi Nhánh",
    img: SoftwareImage,
    url: "/category/bao-tri-tai-chi-nhanh",
    color: "#fbd34d",
  },
  {
    id: 17,
    name: "Bảo Trì Tại Nơi Sử Dụng",
    img: SimImage,
    url: "/category/bao-tri-tai-noi-su-dung",
    color: "#7fd7b4",
  },
  {
    id: 18,
    name: "Bảo Trì Theo Hợp Đồng",
    img: SmartWatchImage,
    url: "/category/bao-tri-theo-hop-dong",
    color: "#fdba74",
  },
];

export default function AccessoriesSection() {
  return (
    <section className={styles.accessoriesSection}>
      <HeaderSection title={"Sửa chữa linh kiện"} />
      <AccessoriesList accessoriesArr={data} />
    </section>
  );
}
