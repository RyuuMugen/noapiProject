import { Roboto } from "next/font/google";
import { Metadata } from "next";
import AppContainer from "@/common/AppContainer";
import Succsess from "@/assets/imagesSuccess.png";
import Image from "next/image";
import Style from "./succsess.module.scss";
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

export default function SuccessActive() {
  return (
    <div className={roboto.className}>
      <AppContainer>
        <div className={Style.box}>
          <Image src={Succsess} alt="" />
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "teal", to: "green", deg: 100 }}
          >
            Xác thực Email thành công!
          </Text>
          <div className={Style.content}>
            <Text>
              Bạn đã xác thực Email thành công có thể chuyển đến trang chủ
            </Text>
          </div>
          <Button
            variant="gradient"
            component={Link}
            href="/"
            gradient={{ from: "blue", to: "indigo", deg: 90 }}
            rightSection={<IconArrowRightBar size={18} strokeWidth="2" />}
          >
            Trang chủ
          </Button>
        </div>
      </AppContainer>
    </div>
  );
}
