import { Roboto } from "next/font/google";
import { Metadata } from "next";
import AppContainer from "@/common/AppContainer";
import Verified from "@/assets/IconVerified.png";
import Image from "next/image";
import Style from "./verified.module.scss";
import { Text, Button } from "@mantine/core";
import Link from "next/link";
import { IconArrowRightBar } from "@tabler/icons-react";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Product Detail Page",
  description: "Product Detail Page",
};

export default function VerifiedActive() {
  return (
    <div className={roboto.className}>
      <AppContainer>
        <div className={Style.box}>
          <Image src={Verified} alt="" />
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "blue", to: "indigo", deg: 90 }}
          >
            Email của bạn đã kích hoạt!
          </Text>
          <div className={Style.content}>
            <Text>
              Email của bạn đã được xác thực có thể chuyển đến trang chủ
            </Text>
          </div>
          <Button
            variant="gradient"
            component={Link}
            href="/"
            gradient={{ from: "blue", to: "indigo", deg: 100 }}
            rightSection={<IconArrowRightBar size={18} strokeWidth="2" />}
          >
            Trang chủ
          </Button>
        </div>
      </AppContainer>
    </div>
  );
}
