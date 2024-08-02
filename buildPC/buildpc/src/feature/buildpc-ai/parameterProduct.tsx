import {
  Button,
  Flex,
  Grid,
  Group,
  Modal,
  NumberFormatter,
  Table,
  Text,
} from "@mantine/core";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/useContext/DeviceContext";
import Link from "next/link";
import {
  IconCopy,
  IconPlayCard,
  IconPlus,
  IconShoppingCartFilled,
} from "@tabler/icons-react";
import style from "./buildpcAi.module.scss";
import Image from "next/image";

interface DataModalProps {
  data: any;
  priceTarget: any;
  setPage: any;
  type: any;
}

const Parameterproduct: React.FC<DataModalProps> = ({
  data,
  priceTarget,
  setPage,
  type,
}) => {
  const { isMobile, isDesktop, isTablet } = useContext(AppContext);
  const [price, setPrice] = useState();
  const [confirmCopy, setConfirmCopy] = useState(false);
  let parameterItems = null;
  useEffect(() => {
    if (Array.isArray(data)) {
      const totalPrice = data
        .map((product) => product.price)
        .reduce((accumulator, price) => accumulator + Number(price), 0);

      setPrice(totalPrice);
    }
  }, [data]);

  const handleGetLinkAffiliate = (linkAffiliate: string) => {
    return linkAffiliate;
  };

  const setNameCategory = (name: string) => {
    if (name === "SSD" || name === "HDD") {
      return "Storage";
    } else if (
      name === "Tản nhiệt nước" ||
      name === "Quạt làm mát" ||
      name === "Tản nhiệt khí"
    ) {
      return "Cooler";
    } else if (name === "Bộ vi xử lý") {
      return "CPU";
    } else if (name === "RAM") {
      return "RAM";
    } else if (name === "VGA") {
      return "GPU";
    } else if (name === "Bo mạch chủ") {
      return "MotherBoard";
    } else if (name === "Nguồn") {
      return "Power Supply";
    } else {
      return "Case";
    }
  };
  if (Array.isArray(data) && data.length > 0) {
    parameterItems = data.map((item: any, index: any) => (
      <Flex key={index} align="center" gap="10px" className={style.itemConfig}>
        <div className={style.typeBox}>
          <Text fz={isMobile ? "12" : "16"}>{item.categoryName}</Text>
        </div>
        <Flex className={style.nameBox}>
          <Image
            src={item?.image}
            alt={`Icon của ${item?.name}`}
            className={style.image}
            width={45}
            height={45}
          />
          <div>
            <Text fz={isMobile ? "12" : "16"} className={style.nameItem}>
              {item.name}
            </Text>
            <Text
              fw={700}
              c={"red"}
              fz={isMobile ? "12" : "16"}
              className={style.nameItem}
            >
              Giá:
              <NumberFormatter
                style={{ marginLeft: 10 }}
                thousandSeparator
                suffix="VND"
                value={item.price}
              />
            </Text>
          </div>
        </Flex>

        <Flex direction={"column"} className={style.actionBox} gap={8}>
          {isMobile ? (
            <>
              <Button
                w="auto"
                h={32}
                p="0 7px"
                size="12px"
                style={{ backgroundColor: "#EE4D2D" }}
                onClick={() => {
                  window.open(
                    handleGetLinkAffiliate(item.linkAffiliate),
                    "_blank"
                  );
                }}
              >
                <IconShoppingCartFilled size={15} />
              </Button>

              <Button
                w="auto"
                h={32}
                p={0}
                onClick={() => {
                  setConfirmCopy(true);
                  navigator.clipboard.writeText(
                    handleGetLinkAffiliate(item.linkAffiliate) || ""
                  );
                }}
              >
                <IconCopy size={15} />
              </Button>
            </>
          ) : (
            <>
              <Button
                leftSection={<IconPlayCard size={15} />}
                className={style.btnBuy}
                variant="filled"
                color="#EE4D2D"
                size="xs"
                onClick={() => {
                  window.open(
                    handleGetLinkAffiliate(item.linkAffiliate),
                    "_blank"
                  );
                }}
              >
                MUA NGAY
              </Button>
              <Button
                leftSection={<IconCopy size={15} />}
                className={style.btnChoose}
                variant="filled"
                color="#176ae5"
                size="xs"
                onClick={() => {
                  setConfirmCopy(true);
                  navigator.clipboard.writeText(
                    handleGetLinkAffiliate(item.linkAffiliate) || ""
                  );
                }}
              >
                COPY LINK
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    ));
  } else {
    parameterItems = <Text fz={isMobile ? "12" : "16"}>Không có dữ liệu</Text>;
  }

  return (
    <div>
      <Flex
        mx="auto"
        justify="center"
        align="center"
        direction="column"
        style={!isMobile ? { width: "864px" } : { width: "auto" }}
        gap={16}
        p={10}
      >
        <Button
          h={40}
          variant="filled"
          color="rgb(238, 77, 45)"
          w="50%"
          onClick={setPage}
        >
          Bắt đầu lại
        </Button>
        <Text style={{ color: "rgb(244 63 94)" }} fw={700}>
          PC Loại {type}
        </Text>
        <Flex gap={16} justify="center" align="center" direction="column">
          <Text
            fz={isMobile ? "12" : "16"}
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              padding: "16px",
              boxShadow: " 0 4px 6px -1px rgba(0,0,0,.1)",
            }}
          >
            Thiết lập này cung cấp một cấu hình với độ tương thích cao trong
            ngân sách
            <span style={{ color: "red", fontWeight: 700 }}>
              <NumberFormatter
                style={{ marginLeft: 10 }}
                thousandSeparator
                value={priceTarget}
              />
            </span>{" "}
            VND, để tối đa hiệu xuất và hiệu năng phù hợp để làm 1 PC đáp ứng
            với nhu cầu xây dựng PC {type} của bạn.
          </Text>
          <div className={style.listItem}>{parameterItems}</div>
          <Grid p={16} w="100%">
            <Grid.Col span={6}>
              <Text style={{ textAlign: "left" }} fz={isMobile ? "12" : "16"}>
                Tổng giá
              </Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Text
                c={"red"}
                fw={700}
                style={{ textAlign: "right" }}
                fz={isMobile ? "12" : "16"}
              >
                <NumberFormatter
                  style={{ marginLeft: 10 }}
                  thousandSeparator
                  suffix="VND"
                  value={String(price)}
                />
              </Text>
            </Grid.Col>
          </Grid>
        </Flex>
        <Button
          h={40}
          variant="filled"
          color="rgb(238, 77, 45)"
          w="50%"
          onClick={setPage}
        >
          Bắt đầu lại
        </Button>
      </Flex>
      <Modal
        opened={confirmCopy}
        onClose={() => setConfirmCopy(false)}
        withCloseButton={false}
        size={250}
      >
        <Flex direction="column" align="center">
          <IconCopy size={26} color="orange" style={{ marginBottom: 16 }} />
          <Text
            fw={700}
            c="#1F2123"
            size="18px"
            style={{ marginBottom: "10px", textAlign: "center" }}
          >
            Đã sao chép địa chỉ mua hàng
          </Text>
        </Flex>
      </Modal>
    </div>
  );
};

export default Parameterproduct;
