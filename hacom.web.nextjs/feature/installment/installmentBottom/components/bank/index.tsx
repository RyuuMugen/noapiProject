import style from "./style.module.scss";
import iconJCB from "@/assets/iconJCB.png";
import iconMastercard from "@/assets/iconMastercard.svg";
import iconVisa from "@/assets/iconVisa.png";
import { installmentInfoType } from "@/model/installmentInfo";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import {
  Box,
  Button,
  Flex,
  Group,
  Image,
  Input,
  NumberFormatter,
  Radio,
  Select,
  Table,
  Text,
  TextInput,
} from "@mantine/core";
import Loader from "@/common/Loader";
import { NotificationExtension } from "@/extension/NotificationExtension";
import NextImage from "next/image";
import sacombank from "@/assets/sacombank.jpg";
import Mbbank from "@/assets/mbbank.jpg";
import Babank from "@/assets/bacabank.jpg";
import Hdbank from "@/assets/hdbank.jpg";
import Hsbc from "@/assets/hsbc.jpg";
import { useForm } from "@mantine/form";
import { useEffect, useState } from "react";
import crypto from "crypto";
import { apiGetInstallmentInfo, apiRequestPayment } from "@/api/apiAlePay";
import { useDisclosure } from "@mantine/hooks";
import { CartDetail } from "@/model/Cart";
import { tblCommune, tblDistrict, tblProvince } from "@/model/TblAddress";
import {
  getDataCommune,
  getDataDistrict,
  getDataProvice,
} from "@/api/ApiAddress";
import { createGuarantee } from "@/api/apiInstallment";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";

const fakeImage = [sacombank, Mbbank, Babank, Hdbank, Hsbc];

const Bank = ({ installmentItem }: { installmentItem: CartDetail[] }) => {
  const { totalAmount } = useSaleOrder();
  const router = useRouter();
  const [selectedBank, setSelectedBank] = useState<installmentInfoType>();
  const [installmentInfo, setInstallmentInfo] = useState<any[]>([]);
  const [selectedCard, setSelectedCard] = useState("");
  const [visible, { toggle, open, close }] = useDisclosure(true);
  const [prepaymentAmount, setPrepaymentAmount] = useState<number | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<any>();

  const [dataAllProvince, setDataAllProvince] = useState<tblProvince[]>([]);
  const [dataAllDistrict, setDataAllDistrict] = useState<tblDistrict[]>([]);
  const [dataAllCommune, setDataAllCommune] = useState<tblCommune[]>([]);
  const [dataOptionProvince, setDataOptionProvince] = useState<any[]>([]);
  const [dataOptionDistrict, setDataOptionDistrict] = useState<any[]>([]);
  const [dataOptionCommune, setDataOptionCommune] = useState<any[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<tblProvince>();
  const [selectedDistrict, setSelectedDistrict] = useState<tblDistrict>();

  const form = useForm({
    initialValues: {
      email: "",
      sex: "Anh",
      address: "",
      name: "",
      phoneNumber: "",
      provinceId: 0,
      districtId: 0,
      wardId: 0,
      store: "store1",
      description: "",
    },
  });

  const handleSelectBank = (bank: installmentInfoType) => {
    setSelectedBank(bank);
  };

  const handleConfirmInstallment = (payment: any) => {
    // NotificationExtension.Success(
    //   "Bạn đã tạo đơn trả góp thành công , nhân viên Hacom sẽ liên hệ lại với quý khách hàng sau"
    // );
    setSelectedPayment(payment);
  };

  const handleChangeSelectedProvince = (id: string | null) => {
    if (id) {
      form.getInputProps("provinceId").onChange(Number(id));
      form.getInputProps("districtId").onChange(null);
      setSelectedProvince(
        dataAllProvince?.find((item: any) => item.provinceId == id)
      );
    }
  };

  const onSubmitForm = async (values: any) => {
    const orderNb = uuidv4();
    const formattedCart: any[] = installmentItem.map((cartItem: any) => ({
      id: cartItem.id,
      headerid: cartItem.headerId || 0,
      itemId: cartItem.itemId,
      itemCode: cartItem.itemCode || "",
      itemUrl: cartItem.itemUrl || "",
      itemName: cartItem.itemName || "",
      itemPrice: cartItem.itemSalePrice || 0,
      sku: cartItem.itemCode || "",
      quantity: cartItem.quantity,
      createdBy: cartItem.createdBy || "",
      createdDate: cartItem.creationDate || "",
      lastUpdateBy: cartItem.lastUpdateBy || "",
      lastUpdateDate: cartItem.lastUpdateDate || "",
    }));
    const data = {
      id: 0,
      orderId: 0,
      // orderNumber: generateRandomCode(12),
      orderNumber: orderNb,
      installmentName: "alepay",
      installmentPrice: prepaymentAmount ? prepaymentAmount : totalAmount,
      prepaymentAmount: prepaymentAmount ? totalAmount - prepaymentAmount : 0,
      duration: selectedPayment?.month,
      customerName: values?.name,
      customerAddress: values?.address,
      customerProvince: values?.provinceId,
      customerDistrict: values?.districtId,
      customerEmail: values?.email,
      telephoneNumber: values?.phoneNumber,
      sex: values?.sex,
      // brandApprovalName: values?.store,
      description: "string",
      tblInstallmentOrderDetailCommands: formattedCart,
    };

    await createGuarantee(data);

    const signature = {
      allowDomestic: false,
      amount: prepaymentAmount || totalAmount || 0,
      bankCode: selectedBank?.bankCode,
      buyerAddress: values.address,
      buyerCity: dataAllProvince?.find(
        (province) => province?.provinceId === values.provinceId
      )?.provinceName,
      buyerCountry: "Viet Nam",
      buyerEmail: values.email,
      buyerName: values.name,
      buyerPhone: values.phoneNumber,
      cancelUrl: "http://web-dev.hacom.vn/",
      checkoutType: 1,
      currency: "vnd",
      customMerchantId: "270081",
      installment: true,
      language: null,
      month: selectedPayment?.month,
      orderCode: orderNb,
      orderDescription: "Trả góp",
      paymentHours: null,
      paymentMethod: selectedCard,
      promotionCode: null,
      returnUrl: "http://web-dev.hacom.vn:8086/home",
      tokenKey: "IqbEf0b53pk3D6kWgUIhFjpnxMWAu1",
      totalItem: installmentItem.length,
    };

    // Checksum key
    const checksumKey = "YJxg5zFlRuz93L0qFh6KpZmCMgY6IU";
    // Tạo signature
    const dataSignature = generateSignature(signature, checksumKey);

    const request = {
      allowDomestic: false,
      amount: prepaymentAmount || totalAmount || 0,
      bankCode: selectedBank?.bankCode,
      buyerAddress: values.address,
      buyerCity: dataAllProvince?.find(
        (province) => province?.provinceId === values.provinceId
      )?.provinceName,
      buyerCountry: "Viet Nam",
      buyerEmail: values.email,
      buyerName: values.name,
      buyerPhone: values.phoneNumber,
      cancelUrl: "http://web-dev.hacom.vn/",
      checkoutType: 1,
      currency: "vnd",
      customMerchantId: "270081",
      installment: true,
      language: null,
      month: selectedPayment?.month,
      orderCode: orderNb,
      orderDescription: "Trả góp",
      paymentHours: null,
      paymentMethod: selectedCard,
      promotionCode: null,
      returnUrl: "http://web-dev.hacom.vn:8086/home",
      tokenKey: "IqbEf0b53pk3D6kWgUIhFjpnxMWAu1",
      totalItem: installmentItem.length,
      signature: dataSignature,
    };

    const dataRequestPayment = await apiRequestPayment(request);

    // router.push(dataRequestPayment?.checkoutUrl);
  };

  function generateRandomCode(length: number) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleChangeSelectedDistrict = (id: string | null) => {
    if (id) {
      form.getInputProps("districtId").onChange(Number(id));
      form.getInputProps("wardId").onChange(null);
      setSelectedDistrict(
        dataAllDistrict?.find((item: any) => item.districtId == id)
      );
    }
  };

  const handleChangeSelectedCommune = (id: string | null) => {
    if (id) {
      form.getInputProps("wardId").onChange(Number(id));
    }
  };

  const convertToQueryString = (input: any) => {
    const queryString = Object.keys(input)
      .map((key) => {
        return `${encodeURIComponent(key)}=${decodeURIComponent(
          encodeURIComponent(input[key])
        )}`;
      })
      .join("&");
    return queryString;
  };

  const generateSignature = (data: any, checksumKey: any) => {
    // Sắp xếp dữ liệu theo key theo thứ tự alphabet
    const sortedData: { [key: string]: any } = {};
    Object.keys(data)
      .sort()
      .forEach((key) => {
        sortedData[key] = data[key];
      });

    // Tạo chuỗi dữ liệu từ mảng key-value
    const dataString = convertToQueryString(sortedData);
    // Tạo signature sử dụng HMAC_SHA256
    const signature = crypto
      .createHmac("sha256", checksumKey)
      .update(dataString)
      .digest("hex");

    return signature;
  };

  useEffect(() => {
    setSelectedBank(undefined);
    setSelectedCard("");
    setSelectedPayment(null);
    const data = {
      tokenKey: "IqbEf0b53pk3D6kWgUIhFjpnxMWAu1",
      amount: prepaymentAmount ? prepaymentAmount : totalAmount,
      currencyCode: "VND",
    };
    // Checksum key
    const checksumKey = "YJxg5zFlRuz93L0qFh6KpZmCMgY6IU";
    // Tạo signature
    const dataSignature = generateSignature(data, checksumKey);

    const callApiGetListInstallmentInfo = async () => {
      open();
      setInstallmentInfo([]);
      const request = {
        tokenKey: "IqbEf0b53pk3D6kWgUIhFjpnxMWAu1",
        amount: prepaymentAmount ? prepaymentAmount : totalAmount,
        currencyCode: "VND",
        signature: dataSignature,
      };
      const dataApi = await apiGetInstallmentInfo(request);
      setInstallmentInfo(dataApi?.data);
      close();
    };

    callApiGetListInstallmentInfo();
  }, [totalAmount, prepaymentAmount]);

  useEffect(() => {
    const fetchDataProvince = async () => {
      const data = await getDataProvice("Active=true&Skip=0&Take=1000");
      setDataAllProvince(data?.data);
    };

    const fetchDataDistrict = async () => {
      const data = await getDataDistrict("Active=true&Skip=0&Take=1000");
      setDataAllDistrict(data?.data);
    };

    const fetchDataCommune = async () => {
      const data = await getDataCommune("Active=true&Skip=0&Take=1000");
      setDataAllCommune(data?.data);
    };

    fetchDataProvince();
    fetchDataDistrict();
    fetchDataCommune();
  }, []);

  useEffect(() => {
    setDataOptionProvince(
      dataAllProvince?.map((item: tblProvince) => {
        return {
          value: item.provinceId.toString(),
          label: item.provinceName,
        };
      })
    );
  }, [dataAllProvince]);

  useEffect(() => {
    setDataOptionDistrict(
      dataAllDistrict
        ?.filter((item: tblDistrict) => {
          return item?.provinceCode === selectedProvince?.provinceCode;
        })
        .map((item: any) => {
          return {
            value: item.districtId.toString(),
            label: item.districtName,
          };
        })
    );
  }, [
    form.values.provinceId,
    dataAllDistrict,
    selectedProvince,
    dataAllProvince,
  ]);

  useEffect(() => {
    setDataOptionCommune(
      dataAllCommune
        ?.filter((item: tblCommune) => {
          return item?.districtCode === selectedDistrict?.districtCode;
        })
        .map((item: any) => {
          return {
            value: item.communeId.toString(),
            label: item.communeName,
          };
        })
    );
  }, [
    form.values.districtId,
    selectedDistrict,
    dataAllCommune,
    dataAllDistrict,
  ]);

  const rows =
    installmentInfo &&
    installmentInfo.length > 0 &&
    selectedBank?.paymentMethods
      .find((paymentMethod) =>
        paymentMethod.paymentMethod.includes(selectedCard)
      )
      ?.periods?.map((payment: any) => (
        <Table.Tr key={payment?.month}>
          <Table.Td>
            <Text fw={700} style={{ fontSize: 13 }}>
              {payment?.month} Tháng
            </Text>
          </Table.Td>
          <Table.Td style={{ fontSize: 13 }}>
            {/* <Text ></Text> */}
            <NumberFormatter
              style={{ color: "red" }}
              value={totalAmount}
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </Table.Td>
          <Table.Td style={{ fontSize: 13 }}>
            <NumberFormatter
              style={{ color: "red" }}
              value={payment?.amountByMonth}
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </Table.Td>

          <Table.Td style={{ fontSize: 13 }}>
            <NumberFormatter
              style={{ color: "red" }}
              value={
                payment?.amountFinal +
                (prepaymentAmount ? totalAmount - prepaymentAmount : 0)
              }
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </Table.Td>
          <Table.Td style={{ fontSize: 13 }}>
            <NumberFormatter
              value={payment?.amountFinal - (prepaymentAmount || 0)}
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </Table.Td>

          <Table.Td style={{ fontSize: 13 }}>
            <NumberFormatter
              style={{ color: "red" }}
              value={prepaymentAmount ? totalAmount - prepaymentAmount : 0}
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </Table.Td>

          <Table.Td>
            <Button
              onClick={() => handleConfirmInstallment(payment)}
              className={style.button}
            >
              Chọn
            </Button>
          </Table.Td>
        </Table.Tr>
      ))
      .reverse();

  return (
    <Box>
      <Text fw={700} mb={15} style={{ marginTop: 20 }}>
        Bước 1: Chọn ngân hàng trả góp
      </Text>
      {installmentInfo === null ||
      installmentInfo === undefined ||
      installmentInfo.length < 1 ? (
        <Loader />
      ) : (
        <Flex wrap={"wrap"} gap={10} mb={30}>
          {installmentInfo?.map((bank, index) => (
            <Flex
              key={index}
              align={"center"}
              className={`${style.logoImage} ${
                selectedBank === bank && style.imageActive
              }`}
              onClick={() => handleSelectBank(bank)}
            >
              <NextImage
                src={fakeImage[index] || sacombank}
                alt={bank.bankName}
              />
            </Flex>
          ))}
        </Flex>
      )}

      <Text fw={700} mb={15} style={{ marginTop: 20 }}>
        Bước 2: Chọn loại thẻ
      </Text>
      {installmentInfo && installmentInfo.length > 0 && selectedBank && (
        <Flex wrap={"wrap"} gap={10} mb={30}>
          {selectedBank?.paymentMethods.some((paymentMethod) =>
            paymentMethod.paymentMethod.includes("VISA")
          ) && (
            <Flex
              align={"center"}
              className={`${style.logoImage} ${
                selectedCard === "VISA" && style.imageActive
              }`}
              onClick={() => setSelectedCard("VISA")}
            >
              <Image component={NextImage} src={iconVisa} alt="iconVisa" />
            </Flex>
          )}

          {selectedBank?.paymentMethods.some((paymentMethod) =>
            paymentMethod.paymentMethod.includes("MASTERCARD")
          ) && (
            <Flex
              align={"center"}
              className={`${style.logoImage} ${
                selectedCard === "MASTERCARD" && style.imageActive
              }`}
              onClick={() => setSelectedCard("MASTERCARD")}
            >
              <Image
                className={style.cardType}
                component={NextImage}
                src={iconMastercard}
                alt="iconMastercard"
              />
            </Flex>
          )}

          {selectedBank?.paymentMethods.some((paymentMethod) =>
            paymentMethod.paymentMethod.includes("JCB")
          ) && (
            <Flex
              align={"center"}
              className={`${style.logoImage} ${
                selectedCard === "JCB" && style.imageActive
              }`}
              onClick={() => setSelectedCard("JCB")}
            >
              <Image
                className={style.cardType}
                component={NextImage}
                src={iconJCB}
                alt="iconJCB"
              />
            </Flex>
          )}
        </Flex>
      )}
      <Text fw={700} mb={15} mt={20}>
        Bước 3: Chọn số tiền muốn trả góp qua thẻ tín dụng
      </Text>

      <TextInput
        mb={15}
        w={"50%"}
        placeholder="Nhập số tiền trả góp"
        type="number"
        onChange={(e) => {
          setPrepaymentAmount(Number(e.target.value));
        }}
      />
      <Text c={"red"} style={{ fontSize: 13 }} mt={5} mb={10}>
        {prepaymentAmount ? (
          prepaymentAmount < 3000000 ? (
            "Số tiền phải lớn hơn hoặc bằng 3.000.000đ"
          ) : prepaymentAmount > totalAmount ? (
            <>
              Số tiền trả trước phải nhỏ hơn hoặc bằng tổng tiền sản phẩm:{" "}
              <NumberFormatter
                value={totalAmount}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </>
          ) : undefined
        ) : undefined}
      </Text>
      {installmentInfo &&
        installmentInfo.length > 0 &&
        selectedBank &&
        selectedCard && (
          <Table
            horizontalSpacing="sm"
            highlightOnHover
            withTableBorder
            withColumnBorders
            striped
            stripedColor={"#fff9e8"}
            mb={30}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th
                  colSpan={7}
                  style={{ fontSize: 16, backgroundColor: "#ffee5d" }}
                >
                  Trả góp qua thẻ {selectedCard} {selectedBank?.bankName}
                </Table.Th>
              </Table.Tr>
              <Table.Tr>
                <Table.Th style={{ fontSize: 13 }}>Số tháng trả góp</Table.Th>
                <Table.Th style={{ fontSize: 13 }}>Tổng tiền sản phẩm</Table.Th>
                <Table.Th style={{ fontSize: 13 }}>Góp mỗi tháng</Table.Th>
                <Table.Th style={{ fontSize: 13 }}>Tổng tiền trả góp</Table.Th>
                <Table.Th style={{ fontSize: 13 }}>
                  Chênh lệch với mua trả thẳng
                </Table.Th>
                <Table.Th style={{ fontSize: 13 }} colSpan={2}>
                  Số tiền thanh toán khi nhận máy
                </Table.Th>
                {/* <Table.Th>Chọn</Table.Th> */}
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        )}

      {installmentInfo &&
        installmentInfo.length > 0 &&
        selectedBank &&
        selectedCard &&
        selectedPayment && (
          <>
            <Table
              horizontalSpacing="sm"
              highlightOnHover
              withTableBorder
              withColumnBorders
              striped
              stripedColor={"#fff9e8"}
              mb={30}
            >
              <Table.Thead>
                <Table.Tr>
                  <Table.Th
                    colSpan={7}
                    style={{ fontSize: 16, backgroundColor: "#ffee5d" }}
                  >
                    Trả góp qua thẻ {selectedCard} {selectedBank?.bankName}
                  </Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                <Table.Tr>
                  <Table.Td colSpan={1}>Số tháng trả góp</Table.Td>
                  <Table.Td colSpan={2}>
                    <Text fw={700} style={{ fontSize: 13 }}>
                      {selectedPayment?.month} Tháng
                    </Text>
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td colSpan={1}>Số tiền trả góp</Table.Td>
                  <Table.Td colSpan={2}>
                    <NumberFormatter
                      style={{ color: "red" }}
                      value={prepaymentAmount || totalAmount}
                      thousandSeparator="."
                      decimalSeparator=","
                      suffix="₫"
                    />
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td colSpan={1}>Góp mỗi tháng</Table.Td>
                  <Table.Td colSpan={2}>
                    <NumberFormatter
                      style={{ color: "red" }}
                      value={selectedPayment?.amountByMonth}
                      thousandSeparator="."
                      decimalSeparator=","
                      suffix="₫"
                    />
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td colSpan={1}>Tổng tiền</Table.Td>
                  <Table.Td colSpan={2}>
                    <NumberFormatter
                      style={{ color: "red" }}
                      value={
                        selectedPayment?.amountFinal +
                        (prepaymentAmount ? totalAmount - prepaymentAmount : 0)
                      }
                      thousandSeparator="."
                      decimalSeparator=","
                      suffix="₫"
                    />
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td colSpan={1}>Chênh lệch với mua trả thẳng</Table.Td>
                  <Table.Td colSpan={2}>
                    <NumberFormatter
                      value={
                        selectedPayment?.amountFinal - (prepaymentAmount || 0)
                      }
                      thousandSeparator="."
                      decimalSeparator=","
                      suffix="₫"
                    />
                  </Table.Td>
                </Table.Tr>
                <Table.Tr>
                  <Table.Td colSpan={1}>
                    Số tiền thanh toán khi nhận máy
                  </Table.Td>
                  <Table.Td colSpan={2}>
                    <NumberFormatter
                      value={
                        prepaymentAmount ? totalAmount - prepaymentAmount : 0
                      }
                      thousandSeparator="."
                      decimalSeparator=","
                      suffix="₫"
                    />
                  </Table.Td>
                </Table.Tr>
              </Table.Tbody>
            </Table>

            <Box
              component="form"
              onSubmit={form.onSubmit((values) => onSubmitForm(values))}
            >
              <Text fw={700} mb={15} mt={20}>
                Thông tin người mua
              </Text>
              <Radio.Group {...form.getInputProps("sex")}>
                <Group mt="xs">
                  <Radio color="orange" value="Anh" label="Anh" />
                  <Radio color="orange" value="Chị" label="Chị" />
                </Group>
              </Radio.Group>

              <Group justify="space-between" mt="md">
                <TextInput
                  w={"31%"}
                  placeholder="Họ và tên (*)"
                  {...form.getInputProps("name")}
                />

                <TextInput
                  w={"30%"}
                  placeholder="Email (*)"
                  {...form.getInputProps("email")}
                />

                <TextInput
                  w={"31%"}
                  placeholder="Số điện thoại (*)"
                  type="number"
                  {...form.getInputProps("phoneNumber")}
                />
              </Group>

              <Text fw={700} mb={15} style={{ margin: "20px 0px" }}>
                Địa chỉ hộ khẩu
              </Text>
              <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
                <Select
                  id="bbbb"
                  placeholder="Tỉnh/Thành phố"
                  nothingFoundMessage="Không có dữ liệu"
                  data={dataOptionProvince}
                  searchable
                  {...form.getInputProps("provinceId")}
                  withAsterisk
                  onChange={(e) => handleChangeSelectedProvince(e)}
                />

                <Select
                  disabled={
                    form.values.provinceId && form.values.provinceId > 0
                      ? false
                      : true
                  }
                  id="aaaaaa"
                  placeholder="Quận/Huyện"
                  data={dataOptionDistrict}
                  nothingFoundMessage="Không có dữ liệu"
                  {...form.getInputProps("districtId")}
                  onChange={(e) => handleChangeSelectedDistrict(e)}
                  searchable
                  withAsterisk
                />
              </Group>

              <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
                <Select
                  disabled={
                    form.values.districtId && form.values.districtId > 0
                      ? false
                      : true
                  }
                  placeholder="Phường/Xã"
                  data={dataOptionCommune}
                  nothingFoundMessage="Không có dữ liệu"
                  {...form.getInputProps("wardId")}
                  onChange={(e) => handleChangeSelectedCommune(e)}
                  searchable
                />

                <TextInput
                  w={"49%"}
                  placeholder="Số nhà, tên đường (*)"
                  {...form.getInputProps("address")}
                />
              </Group>

              <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
                <TextInput
                  w={"49%"}
                  placeholder="Yêu cầu khác (không bắt buộc)"
                  {...form.getInputProps("description")}
                />
              </Group>

              <Flex mt="lg" justify={"center"}>
                <Button type="submit" className={style.btnPayment} w={450}>
                  Thanh toán ngay
                </Button>
              </Flex>
            </Box>
          </>
        )}
    </Box>
  );
};

export default Bank;
