import { Roboto } from "next/font/google";
import { Metadata } from "next";
import AppContainer from "@/common/AppContainer";
import Verified from "@/assets/IconCancel.png";
import Image from "next/image";
import Style from "./failed.module.scss";
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

export default function FailedActive() {
  return (
    <div className={roboto.className}>
      <AppContainer>
        <div className={Style.box}>
          <Image src={Verified} alt="" />
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "red", to: "pink", deg: 90 }}
          >
            Xác thực thất bại!
          </Text>
          <div className={Style.content}>
            <Text>
              Xác thực Email thất bại có thể có lỗi trong quá trình xác thực.
              Bạn có thể thử lại.
            </Text>
          </div>
          <Button
            variant="gradient"
            component={Link}
            href="#"
            gradient={{ from: "red", to: "pink", deg: 100 }}
            rightSection={<IconArrowRightBar size={18} strokeWidth="2" />}
          >
            Xác thực lại
          </Button>
        </div>
      </AppContainer>
    </div>
  );
}
