import {
  Box,
  Button,
  Flex,
  Group,
  NumberFormatter,
  Text,
  TextInput,
} from "@mantine/core";
import style from "./VisaForm.module.scss";
import creditCard from "@/assets/credit card.png";
import logo from "@/assets/logo-thanh-toán.png";
import Image from "next/image";
import { isNotEmpty, useForm } from "@mantine/form";

const VisaForm = () => {
  const entity = {
    cardNumber: null,
    date: null,
    csc: null,
    name: null,
  };

  const form = useForm<any>({
    initialValues: {
      ...entity,
    },
    validate: {
      name: isNotEmpty("Tên chưa chưa nhập"),
    },
  });

  const handleSubmitForm = (dataSubmit: any) => {
    console.log(dataSubmit);
  };

  return (
    <div className={style.main}>
      <div className={style.infoOrder}>
        <div className={style.codeOrder}>
          <Text>Mã đơn hàng</Text>
          <Text size="lg">TGDDCART_77796336</Text>
        </div>
        <Flex mt={20} justify={"space-between"}>
          <Text>Số tiền thanh toán</Text>
          <Text c={"#009451"} fw={700} size="lg">
            <NumberFormatter
              value={28290000}
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </Text>
        </Flex>
      </div>
      <Flex mt={25} align={"center"} gap={"sm"}>
        <Text fw={700} size="lg" c={"#1F67D2"}>
          Thẻ Tín Dụng/Ghi Nợ
        </Text>
        <Image src={logo} alt="logo" style={{ marginBottom: "-2px" }} />
      </Flex>
      <Box
        component="form"
        onSubmit={form.onSubmit((e: any) => {
          handleSubmitForm(e);
        })}
      >
        <Flex gap={"lg"} mt={8}>
          <Box>
            <TextInput
              label="Số thẻ"
              placeholder="Nhập số thẻ"
              withAsterisk
              mt={"xs"}
              {...form.getInputProps("cardNumber")}
            />
            <Group>
              <TextInput
                label="Tháng/Năm hết hạn"
                placeholder="Nhập tháng năm hết hạn"
                withAsterisk
                mt={"xs"}
                {...form.getInputProps("date")}
              />
              <TextInput
                label="CSC"
                placeholder="Nhập CSC"
                withAsterisk
                mt={"xs"}
                {...form.getInputProps("csc")}
              />
            </Group>
            <TextInput
              label="Tên in trên thẻ"
              placeholder="NGUYEN VAN A"
              withAsterisk
              mt={"xs"}
              {...form.getInputProps("name")}
            />
          </Box>
          <Image src={creditCard} alt="creditCard" />
        </Flex>

        <Button mt={30} w={"100%"}>
          THANH TOÁN
        </Button>
      </Box>

      <Text ta="right" c={"#1F67D2"} mt={15}>
        Huỷ giao dịch
      </Text>
    </div>
  );
};

export default VisaForm;
