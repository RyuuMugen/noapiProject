import { Roboto } from "next/font/google";
import { CartDetail } from "@/model/Cart";
import { createGuarantee } from "@/api/apiInstallment";
import { InstallmentDataProps } from "@/model/TblInstallment";
import {
  getDataCommune,
  getDataDistrict,
  getDataProvice,
} from "@/api/ApiAddress";
import { tblCommune, tblDistrict, tblProvince } from "@/model/TblAddress";
import { useForm, isNotEmpty } from "@mantine/form";
import { useState, useEffect } from "react";
import { DateTimePicker, DateInput } from "@mantine/dates";
import {
  Box,
  Button,
  TextInput,
  Group,
  Radio,
  Divider,
  Table,
  Text,
  Select,
} from "@mantine/core";
import style from "./style.module.scss";

export default function FormInstallment({
  setCompleteHidden,
  dataInstallment,
  installmentItem,
}: {
  setCompleteHidden: React.Dispatch<React.SetStateAction<boolean>>;
  dataInstallment: InstallmentDataProps;
  installmentItem: CartDetail[];
}) {
  const form = useForm({
    initialValues: {
      email: "",
      sex: "Anh",
      job: "Sinh viên",
      address: "",
      cccd: "",
      name: "",
      dob: "",
      phoneNumber: "",
      provinceId: 0,
      districtId: 0,
      wardId: 0,
      store: "store1",
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Bạn chưa nhập email",
      name: isNotEmpty("Bạn chưa nhập họ tên"),
      phoneNumber: (value) => {
        if (!value) {
          return "Số điện thoại chưa nhập"; // Trả về null nếu value là null hoặc không xác định
        }
        return /^\d{10}$/.test(value.trim())
          ? null
          : "Số điện thoại không hợp lệ";
      },
      cccd: (value) => {
        if (!value) {
          return "Số căn cước chưa nhập"; // Trả về null nếu value là null hoặc không xác định
        }
        return /^\d{12}$/.test(value.trim())
          ? null
          : "Số căn cước không hợp lệ";
      },
      provinceId: isNotEmpty("Bạn chưa nhập tỉnh thành"),
      dob: isNotEmpty("Bạn chưa nhập ngày sinh"),
      address: isNotEmpty("Bạn chưa nhập địa chỉ"),
    },
  });

  const onSubmitForm = async (values: any) => {
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
      orderNumber: generateRandomCode(12),
      supplierName: dataInstallment.company,
      installmentPrice: dataInstallment.total,
      prepaymentAmount: dataInstallment.prePay,
      prepaymentPercent: dataInstallment.prePayPercent,
      interestRate: dataInstallment.interestRate,
      duration: dataInstallment.month,
      customerName: values?.name,
      customerJob: values?.job,
      customerAddress: values?.address,
      customerProvince: values?.provinceId,
      customerDistrict: values?.districtId,
      customerEmail: values?.email,
      telephoneNumber: values?.phoneNumber,
      identifyCard: values?.cccd,
      dateOfBird: new Date(values?.dob).toISOString(),
      sex: values?.sex,
      brandApprovalName: values?.store,
      description: "string",
      tblInstallmentOrderDetailCommands: formattedCart,
    };

    await createGuarantee(data, setCompleteHidden);
  };

  const [dataAllProvince, setDataAllProvince] = useState<tblProvince[]>([]);
  const [dataAllDistrict, setDataAllDistrict] = useState<tblDistrict[]>([]);
  const [dataAllCommune, setDataAllCommune] = useState<tblCommune[]>([]);
  const [dataOptionProvince, setDataOptionProvince] = useState<any[]>([]);
  const [dataOptionDistrict, setDataOptionDistrict] = useState<any[]>([]);
  const [dataOptionCommune, setDataOptionCommune] = useState<any[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<tblProvince>();
  const [selectedDistrict, setSelectedDistrict] = useState<tblDistrict>();
  const currentDate = new Date().toISOString().split("T")[0];

  const handleChangeSelectedProvince = (id: string | null) => {
    if (id) {
      form.getInputProps("provinceId").onChange(Number(id));
      form.getInputProps("districtId").onChange(null);
      setSelectedProvince(
        dataAllProvince?.find((item: any) => item.provinceId == id)
      );
    }
  };

  const handleChange = (event: any) => {
    const selectedDate = event.target.value;
    if (selectedDate > currentDate) {
      // Nếu người dùng chọn một ngày sau ngày hiện tại, đặt giá trị ngày là ngày hiện tại
      event.target.value = currentDate;
    }
    form.getInputProps("dob").onChange(event);
  };

  const handleChangeSelectedDistrict = (id: string | null) => {
    if (id) {
      form.getInputProps("districtId").onChange(Number(id));
      form.getInputProps("wardId").onChange(null);
      setSelectedDistrict(
        dataAllDistrict?.find((item: any) => item.districtId == id)
      );
    }
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

  const handleChangeSelectedCommune = (id: string | null) => {
    if (id) {
      form.getInputProps("wardId").onChange(Number(id));
    }
  };

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

  useEffect(() => {
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

  return (
    <Box>
      <form onSubmit={form.onSubmit((values) => onSubmitForm(values))}>
        <Radio.Group {...form.getInputProps("sex")}>
          <Group mt="xs">
            <Radio color="orange" value="Anh" label="Anh" />
            <Radio color="orange" value="Chị" label="Chị" />
          </Group>
        </Radio.Group>

        <Radio.Group {...form.getInputProps("job")}>
          <Group mt="xs">
            <Radio color="lime" value="Sinh viên" label="Sinh viên" />
            <Radio color="lime" value="Người đi làm" label="Người đi làm" />
            <Radio color="lime" value="Doanh nghiệp" label="Doanh nghiệp" />
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
        <Group justify="space-between" mt="md">
          <TextInput
            w={"48%"}
            placeholder="Số CMNN (*)"
            {...form.getInputProps("cccd")}
          />
          <TextInput
            w={"48%"}
            type="date"
            onChange={handleChange}
            placeholder="Ngày, tháng, năm sinh (*)"
            // {...form.getInputProps("dob")}
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
        <Divider my="md" />
        <Text fw={700} mb={15} style={{ margin: "20px 0px" }}>
          Chọn siêu thị để duyệt hồ sơ
        </Text>

        <Radio.Group {...form.getInputProps("store")}>
          <div className={style.radioGroup}>
            <Radio
              color="grape"
              value="Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội"
              label="Số 131 Lê Thanh Nghị - Hai Bà Trưng - Hà Nội"
            />
            <Radio
              color="grape"
              value="Số 43 Thái Hà - Đống Đa - Hà Nội"
              label="Số 43 Thái Hà - Đống Đa - Hà Nội"
            />
            <Radio
              color="grape"
              value="Số 511 Quang Trung - Hà Đông - Hà Nội"
              label="Số 511 Quang Trung - Hà Đông - Hà Nội"
            />
            <Radio
              color="grape"
              value="Số 478 Cách Mạng Tháng Tám - Quận 3 - TP. Hồ Chí Minh"
              label="Số 478 Cách Mạng Tháng Tám - Quận 3 - TP. Hồ Chí Minh"
            />
            <Radio
              color="grape"
              value="Số 398 Nguyễn Văn Cừ - Long Biên - Hà Nội"
              label="Số 398 Nguyễn Văn Cừ - Long Biên - Hà Nội"
            />
            <Radio
              color="grape"
              value="Số 79 Nguyễn Văn Huyên - Cầu Giấy - Hà Nội"
              label="Số 79 Nguyễn Văn Huyên - Cầu Giấy - Hà Nội"
            />
            <Radio
              color="grape"
              value="406 Tô Hiệu - Lê Chân - Hải Phòng"
              label="406 Tô Hiệu - Lê Chân - Hải Phòng"
            />
          </div>
        </Radio.Group>
        <button className={style.button} type="submit">
          <span>Đặt mua trả góp</span>
          Duyệt hồ sơ qua điện thoại
        </button>
      </form>
    </Box>
  );
}
