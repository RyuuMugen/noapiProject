import { Tabs, rem, Title, Text, Anchor } from "@mantine/core";
import register from "@/assets/Register_1.png";
import Image from "next/image";
import { modals } from "@mantine/modals";
import {
  IconPhoneFilled,
  IconMessageCircle,
  IconMailFilled,
} from "@tabler/icons-react";
import MailRegister from "./components/emailRegister";
import PhoneRegister from "./components/phoneRegister";
import LoginModel from "../LoginModal";
import style from "./style.module.scss";

export default function Register() {
  const iconStyle = { width: rem(16), height: rem(16) };
  function openFormLogin() {
    modals.closeAll();
    modals.openConfirmModal({
      size: "1100px",
      radius: "20px",
      centered: true,
      children: <LoginModel />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  return (
    <div className={style.flexBox}>
      <div className={style.box1}>
        <Title ta="center" className={style.title}>
          Đăng ký tài khoản
        </Title>
        <Tabs defaultValue="mail" classNames={style}>
          <Tabs.List justify={"center"} grow>
            <Tabs.Tab
              value="mail"
              leftSection={<IconMailFilled style={iconStyle} />}
            >
              <Text fw={700}>Đăng kí bằng email</Text>
            </Tabs.Tab>
            <Tabs.Tab
              // disabled
              value="phone"
              leftSection={<IconPhoneFilled style={iconStyle} />}
            >
              <Text fw={700}>Đăng kí bằng số điện thoại</Text>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="mail">
            <MailRegister />
          </Tabs.Panel>

          <Tabs.Panel value="phone">
            <PhoneRegister />
          </Tabs.Panel>
        </Tabs>

        <div className={style.footer}>
          <Text c="#637788">
            Bạn đã có tài khoản đến:{" "}
            <Anchor target="_blank" underline="hover" onClick={openFormLogin}>
              Đăng nhập ngay!
            </Anchor>
          </Text>
        </div>
      </div>
      <div className={style.box2}>
        <Image className={style.img} src={register} alt="" />
      </div>
    </div>
  );
}
