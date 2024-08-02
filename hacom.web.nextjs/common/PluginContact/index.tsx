"use client";

import { Box, Flex, Text } from "@mantine/core";
import style from "./PluginContact.module.scss";
import Icon_of_Zalo from "@/assets/Logo Zalo.svg";
import iconPhone from "@/assets/iconPhone.png";
import Facebook_Messenger_logo_2020 from "@/assets/Facebook_Messenger_logo_2020.png";
import Image from "next/image";
import { postLoggingAction } from "@/api/apiLogging";
import Link from "next/link";

const PluginContact = () => {
  const handleClickContact = (type: string) => {
    postLoggingAction({
      userName: localStorage.getItem("userName"),
      actionType: "ContactChatLink",
      actionDetail: type,
    });
  };

  return (
    <div className={style.main}>
      <a
        href="https://m.me/www.hacom.vn"
        target="_blank"
        rel="nofollow"
        onClick={() => handleClickContact("FaceBook")}
      >
        <Flex className={style.iconBox} gap={10} align={"center"}>
          <Image
            src={Facebook_Messenger_logo_2020}
            alt="faceBookIcon"
            width={35}
            height={35}
          />
          <Box>
            <Text fw={700} style={{ fontSize: 15 }}>
              Chat FaceBook
            </Text>
            <Text style={{ fontSize: 13, color: "#878787" }}>(8h-24h)</Text>
          </Box>
        </Flex>
      </a>

      <a
        href="https://zalo.me/3310311642242498284"
        target="_blank"
        rel="nofollow"
        onClick={() => handleClickContact("Zalo")}
      >
        <Flex className={style.iconBox} gap={10} align={"center"}>
          <Image src={Icon_of_Zalo} alt="zaloIcon" width={35} height={35} />
          <Box>
            <Text fw={700} style={{ fontSize: 15 }}>
              Chat Zalo
            </Text>
            <Text style={{ fontSize: 13, color: "#878787" }}>(8h-24h)</Text>
          </Box>
        </Flex>
      </a>

      <Link href="tel:19001903" target="_blank" rel="nofollow">
        <Flex className={style.iconBox} gap={10} align={"center"}>
          <Image src={iconPhone} alt="iconPhone" width={35} height={35} />
          <Box>
            <Text fw={700} style={{ fontSize: 15 }}>
              1900.1903
            </Text>
            <Text style={{ fontSize: 13, color: "#878787" }}>(8h-24h)</Text>
          </Box>
        </Flex>
      </Link>
    </div>
  );
};

export default PluginContact;
