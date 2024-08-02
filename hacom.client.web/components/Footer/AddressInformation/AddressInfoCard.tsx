import { Box, Flex, Text } from "@mantine/core";
import style from "./AddressInformation.module.scss";
import { IconClockHour5, IconMapPin, IconPhoneCall } from "@tabler/icons-react";

const AddressInfoCard = ({
  index,
  title,
  addr,
  phone,
  time,
}: AddressInfoCardProps) => {
  return (
    <Box className={style.addrInfoCard}>
      <Flex direction={"column"} gap={"4"}>
        <Flex
          bg={"#E51A1B"}
          c={"#FFF"}
          direction={"row"}
          gap={"4"}
          mb={"sm"}
          w={"70%"}
        >
          <Box bg={"#FA5C5E"} px={"xs"}>
            {index}
          </Box>
          <Text fw={"bold"} size="md">
            dichvutot
          </Text>
          -
          <Text fw={"bold"} tt={"uppercase"} size="md">
            {title}
          </Text>
        </Flex>
        <Flex direction={"row"} align={"center"} gap={3} wrap={"nowrap"}>
          <IconMapPin size={"16px"}></IconMapPin>
          <Text fw={"bold"} size={"xs"} lineClamp={1}>
            Địa chỉ:
          </Text>
          <Text size={"xs"} truncate="end">
            {addr}
          </Text>
        </Flex>
        <Flex direction={"row"} align={"center"} gap={3} wrap={"nowrap"}>
          <IconPhoneCall size={"16px"}></IconPhoneCall>
          <Text fw={"bold"} size={"xs"}>
            Bảo Hành:
          </Text>
          <Text size={"xs"}>{phone}</Text>
        </Flex>
        <Flex direction={"row"} align={"center"} gap={3} wrap={"nowrap"}>
          <IconPhoneCall size={"16px"}></IconPhoneCall>
          <Text fw={"bold"} size={"xs"}>
            Khiếu Nại Dịch Vụ:
          </Text>
          <Text size={"xs"}>{phone}</Text>
        </Flex>
        <Flex direction={"row"} align={"center"} gap={3} wrap={"nowrap"}>
          <IconClockHour5 size={"16px"}></IconClockHour5>
          <Text fw={"bold"} size={"xs"}>
            Mở cửa từ:
          </Text>
          <Text size={"xs"}>{time}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

type AddressInfoCardProps = {
  index: number;
  title: string;
  addr: string;
  phone: string;
  time: string;
};

export default AddressInfoCard;
