import { Roboto } from "next/font/google";
import { Metadata } from "next";
import AppContainer from "@/common/AppContainer";
import Timeout from "@/assets/IconTimeOut.png";
import Image from "next/image";
import Style from "./timeout.module.scss";
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

export default function TimeOutActive() {
  return (
    <div className={roboto.className}>
      <AppContainer>
        <div className={Style.box}>
          <Image src={Timeout} alt="" />
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "yellow", to: "orange", deg: 90 }}
          >
            Hết thời gian xác thực!
          </Text>
          <div className={Style.content}>
            <Text>
              Xác thực Email thất bại do quá thời gian xác thực. Bạn có thể thử
              lại.
            </Text>
          </div>
          <Button
            variant="gradient"
            component={Link}
            href="#"
            gradient={{ from: "yellow", to: "orange", deg: 100 }}
            rightSection={<IconArrowRightBar size={18} strokeWidth="2" />}
          >
            Xác thực lại
          </Button>
        </div>
      </AppContainer>
    </div>
  );
}
