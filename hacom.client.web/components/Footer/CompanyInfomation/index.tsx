import { Box, Flex, Text } from "@mantine/core";
import Image from "next/image";
import FacebookLogo from "@/assets/FaceBookIcon.png";
import InstagramLogo from "@/assets/instagram.png";
import YouTubeLogo from "@/assets/youtubeIcon.png";
import Verify from "@/assets/logo-da-thong-bao-bo-cong-thuong.png";
import style from "./CompanyInfomation.module.scss";

const CompanyInfo = () => {
  return (
    <Box className={style.companyInfo}>
      <Flex w={"100%"} direction={"column"} gap={2}>
        <Text size="xs">@ 2024 Hệ thống chuỗi dichvutot</Text>
        <Text size="xs">
          Trụ sở chính: Số 129+131 Lê Thanh Nghị, Phường Đồng Tân, Quận Hai Bà
          Trưng, Thành phố Hà Nội
        </Text>
        <Text size="xs">
          VPGD: Tầng 3 tòa nhà LILAMA, số 124 Minh Khai, Phường Minh Khai, Quận
          Hai Bà Trưng, Thành phố Hà Nội{" "}
        </Text>
        <Text size="xs">
          GPĐKKD số 0101161194 do Sở KHĐT Tp.Hà Nội cấp ngày 31/8/2001
        </Text>
        <Text size="xs">Email: info@dichvutot.vn. Điện thoại: 1800 8091</Text>
      </Flex>
      <Flex
        w={"100%"}
        direction={"row"}
        align={"center"}
        justify={"center"}
        gap={2}
      >
        <Image width={35} src={FacebookLogo} alt="Facebook"></Image>
        <Image width={45} src={InstagramLogo} alt="Instagram"></Image>
        <Image width={35} src={YouTubeLogo} alt="Youtube"></Image>
        {/* <Image
          className={style.verify}
          width={100}
          src={Verify}
          alt="Đã thông báo bộ công thương"
        ></Image> */}
      </Flex>
    </Box>
  );
};

export default CompanyInfo;
