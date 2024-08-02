"use client";
import { Box, Flex, Grid, GridCol, Group, Image, Text } from "@mantine/core";
import style from "./AddressInformation.module.scss";
import AddressInfoCard from "./AddressInfoCard";
const AddressInformation = () => {
  const addrData = [
    {
      title: "65 Thái Hà",
      addr: "Số 65 Phố Thái Hà - Đống Đa - Hà Nội",
      phone: "1800 8091",
      time: "8h30 - 19h hàng ngày",
    },
    {
      title: "137 Xuân Thủy",
      addr: "Số 137 Xuân Thủy - Cầu Giấy - Hà Nội",
      phone: "1800 8091",
      time: "8h30 - 19h hàng ngày",
    },
  ];

  return (
    <Box pl={{ base: "10px", lg: "0px" }}>
      <Grid gutter={0}>
        {addrData.map((item, index) => (
          <Grid.Col
            key={index}
            span={{ xs: 12, sm: 6, md: 4, lg: 4, xl: 12 / addrData.length }}
            mb={"5px"}
          >
            <AddressInfoCard
              addr={item.addr}
              phone={item.phone}
              title={item.title}
              time={item.time}
              index={index + 1}
            ></AddressInfoCard>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default AddressInformation;
