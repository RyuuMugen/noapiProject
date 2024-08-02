"use client";
import { Flex, Text } from "@mantine/core";
import { Roboto } from "next/font/google";
import { useState } from "react";
import AirConditioner from "./air-conditioner/index";
import Camera from "./camera/index";
import Projector from "./projector/index";
import style from "./style.module.scss";
import TimeKeeper from "./timekeeper/index";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Page() {
  const [idActive, setIdActive] = useState(0);
  const [tabActive, setTabActive] = useState(<TimeKeeper />);
  const dataTopic = [
    { top: "Bảng giá lắp đặt", bottom: "Máy chấm công", page: <TimeKeeper /> },
    { top: "Bảng giá lắp đặt", bottom: "Máy chiếu", page: <Projector /> },
    {
      top: "Bảng giá lắp đặt",
      bottom: "Camera, Thiết bị an ninh",
      page: <Camera />,
    },
    {
      top: "Bảng giá vật tư ",
      bottom: "và lắp đặt điều hoà",
      page: <AirConditioner />,
    },
  ];
  const handleChangeTopic = (id: number, page: any) => {
    setIdActive(id);
    setTabActive(page);
  };
  return (
    <div className={roboto.className}>
      <div className={style.body}>
        <Flex className={style.topicWrap}>
          {dataTopic.map((topic, index) => (
            <Flex
              key={index}
              align={"center"}
              justify={"center"}
              className={`${style.topic} ${
                idActive == index && style.topicActive
              }`}
              onClick={() => handleChangeTopic(index, topic.page)}
            >
              <Text className={style.topicTitle}>{topic.top}</Text>
              <Text className={style.topicTitle}>{topic.bottom}</Text>
            </Flex>
          ))}
        </Flex>
        {tabActive}
      </div>
    </div>
  );
}
