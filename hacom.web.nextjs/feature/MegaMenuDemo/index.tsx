"use client";
import { Anchor } from "@mantine/core";
import "./MegaMenu.css";
import NextImage from "next/image";
import IconLaptop from "@/assets/IconMegaMenu/iconlaptop.png";
import IconCamera from "@/assets/IconMegaMenu/iconcamera (1).png";
import IconChair from "@/assets/IconMegaMenu/iconchair.png";
import IconConsole from "@/assets/IconMegaMenu/iconconsole.png";
import IconExchange from "@/assets/IconMegaMenu/iconexchange.png";
import IconFan from "@/assets/IconMegaMenu/iconfan.png";
import IconHeadPhone from "@/assets/IconMegaMenu/iconheadphone.png";
import IconKeyBoard from "@/assets/IconMegaMenu/iconkeyboard.png";
import IconMonitor from "@/assets/IconMegaMenu/iconmonitor.png";
import IconPc from "@/assets/IconMegaMenu/iconpc.png";
import IconPrinter from "@/assets/IconMegaMenu/iconprinter.png";
import IconSmartHome from "@/assets/IconMegaMenu/iconsmarthome.png";
import IconStorage from "@/assets/IconMegaMenu/iconstorage.png";
import IconUsb from "@/assets/IconMegaMenu/iconusb.png";
import IconWifi from "@/assets/IconMegaMenu/iconwifi.png";
import IconUsb2 from "@/assets/IconMegaMenu/iconusb2.png";

import iconMegaMenuHover from "@/assets/iconMegaMenuHover.png";
import { IconChevronRight } from "@tabler/icons-react";
import CategoryLink from "@/common/CategoryLink";
import LaptopMacbookSurface from "./LaptopMacbookSurface";
import LaptopGamingDoHoa from "./LaptopGamingDoHoa";
import PkLaptopPcMobile from "./PkLaptopPcMobile";
import PcChoiGameHocTap from "./PcChoiGameHocTap";
import PcDoHoaThietKe from "./PcDoHoaThietKe";
import PcVanPhongLamViec from "./PcVanPhongLamViec";
import LinhKienMayTinh from "./LinhKienMayTinh";
import TanNhietFanDenLed from "./TanNhietFanDenLed";
import ManHinhMayTinh from "./ManHinhMayTinh";
import PhimChuotBanGheGear from "./PhimChuotBanGheGear";
import PsXbox from "./PsXbox";
import LoaTaiNgheMicWebcam from "./LoaTaiNgheMicWebcam";
import CameraChuongKhoaChay from "./CameraChuongKhoaChay";
import TbVanPhongHoiNghi from "./TbVanPhongHoiNghi";
import TbSieuThiMayBanHang from "./TbSieuThiMayBanHang";
import TbMangLuuTruPhanMem from "./TbMangLuuTruPhanMem";
import OtoDuLich from "./OtoDuLich";
import DvSuaChuaLapDat from "./DvSuaChuaLapDat";
import ThuCuDoiMoiLenDoi from "./ThuCuDoiMoiLenDoi";
import HangHieuCu from "./HangHieuCu";
import { useOverlayContext } from "@/useContext/OverLayContext";

const MegaMenu = () => {
  const { setActive } = useOverlayContext();
  return (
    <div
      className="leftSidebar"
      // onMouseEnter={() => setActive(true)}
      // onMouseLeave={() => setActive(false)}
    >
      <ul className="menuList">
        {/* Menu Item */}
        <li className="menuItem">
          <div className="iconTitle">
            <NextImage src={IconLaptop} alt="icon" />
            <CategoryLink
              title={"Laptop, Macbook, Surface"}
              code={"laptop-tablet-mobile"}
              id={1106}
            />
          </div>

          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <LaptopMacbookSurface />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          <div className="iconTitle">
            <NextImage src={IconLaptop} alt="icon" />
            <CategoryLink
              title={"Laptop Gaming, Đồ Họa"}
              code={"laptop-gaming-do-hoa"}
              id={1087}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <LaptopGamingDoHoa />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            Phụ Kiện Laptop, PC, Mobile
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconUsb2} alt="icon" />
            <CategoryLink
              title={"Phụ Kiện Laptop, PC, Mobile"}
              code={"phu-kien"}
              id={455}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <PkLaptopPcMobile />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            PC - Chơi Game, Học Tập
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconPc} alt="icon" />
            <CategoryLink
              title={"PC - Chơi Game, Học Tập"}
              code={"pc-gaming-streaming"}
              id={178}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <PcChoiGameHocTap />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            PC - Đồ Họa, Thiết Kế
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconPc} alt="icon" />
            <CategoryLink
              title={"PC - Đồ Họa, Thiết Kế"}
              code={"pc-workstations"}
              id={388}
            />
          </div>

          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <PcDoHoaThietKe />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            PC - Văn Phòng, Làm Việc
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconPc} alt="icon" />
            <CategoryLink
              title={"PC - Văn Phòng, Làm Việc"}
              code={"may-tinh-de-ban"}
              id={137}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <PcVanPhongLamViec />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            Linh Kiện Máy Tính
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconKeyBoard} alt="icon" />
            <CategoryLink
              title={"Linh Kiện Máy Tính"}
              code={"linh-kien-may-tinh"}
              id={6}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <LinhKienMayTinh />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            Tản Nhiệt, Fan, Đèn Led
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconFan} alt="icon" />
            <CategoryLink
              title={"Tản Nhiệt, Fan, Đèn Led"}
              code={"tan-nhiet-cooling"}
              id={379}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <TanNhietFanDenLed />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            Màn Hình Máy Tính
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconMonitor} alt="icon" />
            <CategoryLink
              title={"Màn Hình Máy Tính"}
              code={"man-hinh-may-tinh"}
              id={39}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <ManHinhMayTinh />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            Phím Chuột, Bàn, Ghế, Gear
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconChair} alt="icon" />
            <CategoryLink
              title={"Phím Chuột, Bàn, Ghế, Gear"}
              code={"phim-chuot-gaming-gear"}
              id={105}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <PhimChuotBanGheGear />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            PS5, Xbox, Nintendo, Ally, Retro
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconConsole} alt="icon" />
            <CategoryLink
              title={"PS5, Xbox, Nintendo, Ally, Retro"}
              code={"may-choi-game-tay-game"}
              id={992}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <PsXbox />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            Loa, Tai Nghe, Mic, Webcam
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconHeadPhone} alt="icon" />
            <CategoryLink
              title={"Loa, Tai Nghe, Mic, Webcam"}
              code={"thiet-bi-nghe-nhin"}
              id={41}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <LoaTaiNgheMicWebcam />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            Camera, Chuông, Khóa, Cháy
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconCamera} alt="icon" />
            <CategoryLink
              title={"Camera, Chuông, Khóa, Cháy"}
              code={"camera-thiet-bi-bao-chay"}
              id={260}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <CameraChuongKhoaChay />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            TB Văn Phòng, Hội Nghị
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconPrinter} alt="icon" />
            <CategoryLink
              title={"TB Văn Phòng, Hội Nghị"}
              code={"thiet-bi-van-phong"}
              id={12}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <TbVanPhongHoiNghi />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            TB Siêu Thị, Máy Bán Hàng
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconPrinter} alt="icon" />
            <CategoryLink
              title={"TB Siêu Thị, Máy Bán Hàng"}
              code={"thiet-bi-sieu-thi-cua-hang"}
              id={395}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <TbSieuThiMayBanHang />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            TB Mạng, Lưu Trữ, Phần Mềm
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconWifi} alt="icon" />
            <CategoryLink
              title={"TB Mạng, Lưu Trữ, Phần Mềm"}
              code={"thiet-bi-mang"}
              id={23}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <TbMangLuuTruPhanMem />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            Ôtô, Du Lịch, Nhà Thông Minh
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconSmartHome} alt="icon" />
            <CategoryLink
              title={"Ôtô, Du Lịch, Nhà Thông Minh"}
              code={"oto-gia-dung-du-lich"}
              id={1166}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />

          <div className="wrapContent">
            <OtoDuLich />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            Dịch Vụ Sửa Chữa, Lắp Đặt
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconStorage} alt="icon" />
            <CategoryLink
              title={"Dịch Vụ Sửa Chữa, Lắp Đặt"}
              code={"dich-vu-sua-chua"}
              id={1441}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <DvSuaChuaLapDat />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}

        <li className="menuItem">
          <div className="iconTitle">
            <NextImage src={IconExchange} alt="icon" />
            <Anchor
              href="/old-autumn-renewed"
              target="_blank"
              className="root link"
            >
              Thu Cũ Đổi Mới, Lên Đời
            </Anchor>
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <ThuCuDoiMoiLenDoi />
          </div>
        </li>
        {/* End: Menu Item */}

        {/* Menu Item */}
        <li className="menuItem">
          {/* <Anchor href="#" target="_blank" className="root">
            Hàng Hiệu Cũ, Siêu Tiết Kiệm
          </Anchor> */}
          <div className="iconTitle">
            <NextImage src={IconStorage} alt="icon" />
            <CategoryLink
              title={"Hàng Hiệu Cũ, Siêu Tiết Kiệm"}
              code={"xa-kho-hang-cong-nghe"}
              id={935}
            />
          </div>
          <IconChevronRight color="white" size={20} className="iconArrow" />
          <NextImage
            src={iconMegaMenuHover}
            className="arrowHover"
            alt="iconMegaMenuHover"
          />
          <div className="wrapContent">
            <HangHieuCu />
          </div>
        </li>
        {/* End: Menu Item */}
      </ul>
    </div>
  );
};
export default MegaMenu;
