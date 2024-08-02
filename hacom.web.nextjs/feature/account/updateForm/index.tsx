import { Roboto } from "next/font/google";
import {
  Select,
  TextInput,
  Group,
  Button,
  Text,
  Flex,
  Tabs,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { getDataDistrict, getDataProvice } from "@/api/ApiAddress";
import { tblDistrict, tblProvince } from "@/model/TblAddress";
import { modifyCustomer } from "@/api/apiCustomer";
import { useForm } from "@mantine/form";
import Image from "next/image";
import avatarPerson from "@/assets/avartar-person.png";
import style from "./updateForm.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
import React, { useEffect, useState } from "react";
import { useAuthContext } from "@/useContext/useAuthContext";
import { tblCustomerEdit } from "@/model/TblCustomer";
export default function updateForm() {
  const { userInfo, handleGetUserInfo } = useAuthContext();

  const entity = {
    email: "",
    telephoneNumber: "",
    customerName: "",
    sex: "",
    address: "",
    shipToProvince: "",
    shipToDistrict: "",
    customerId: 0,
    userName: "",
  };
  const form = useForm({
    initialValues: entity,

    validate: {
      telephoneNumber: (value) =>
        /^\d{10}$/.test(value.trim())
          ? null
          : "Số điện thoại không hợp lệ (10 chữ số)",
      customerName: (value) =>
        value && value.trim() ? null : "Họ và tên không được để trống",
    },
  });

  const [dataAllProvince, setDataAllProvince] = useState<tblProvince[]>([]);
  const [dataAllDistrict, setDataAllDistrict] = useState<tblDistrict[]>([]);
  const [dataOptionProvince, setDataOptionProvince] = useState<any[]>([]);
  const [dataOptionDistrict, setDataOptionDistrict] = useState<any[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<tblProvince>();
  const [selectedDistrict, setSelectedDistrict] = useState<tblDistrict>();

  const handleCreateCustomer = async (dataSubmit: tblCustomerEdit) => {
    if (
      dataSubmit &&
      dataSubmit.address &&
      dataSubmit.customerName &&
      dataSubmit.telephoneNumber &&
      dataSubmit.email &&
      dataSubmit.shipToProvince &&
      dataSubmit.shipToDistrict
    ) {
      const dataCustomerSite = {
        ...dataSubmit,
        tblCustomerSiteCommands: [
          ...userInfo?.data?.tblCustomerSiteModels,
          {
            customerId: userInfo?.data?.customerId || 0,
            customerSiteId: 0,
            customerSiteType: null,
            address: dataSubmit.address || null,
            customerSiteNumber: null,
            customerSiteName: dataSubmit.customerName || null,
            telephoneNumber: dataSubmit.telephoneNumber || null,
            attribute1: null,
            attribute2: null,
            attribute3: null,
            createdBy: null,
            lastUpdateDate: null,
            lastUpdatedBy: null,
            lastUpdateLogin: null,
            creationDate: null,
            wardId: userInfo?.data?.shipToWard || null,
            districtId: dataSubmit.shipToDistrict || null,
            provinceId: dataSubmit.shipToProvince || null,
            telephone: dataSubmit.telephoneNumber || null,
            isMain:
              userInfo?.data?.tblCustomerSiteModels &&
              userInfo?.data?.tblCustomerSiteModels.length > 0
                ? "N"
                : "Y",
            email: dataSubmit.email || null,
          },
        ],
      };

      await modifyCustomer(dataCustomerSite);
    } else await modifyCustomer(dataSubmit);

    handleGetUserInfo();
  };

  const handleChangeSelectedProvince = (id: string | null) => {
    if (id) {
      form.getInputProps("shipToProvince").onChange(Number(id));
      form.getInputProps("shipToDistrict").onChange(null);
      setSelectedProvince(
        dataAllProvince?.find((item: any) => item.provinceId === Number(id))
      );
    }
  };

  const handleChangeSelectedDistrict = (id: string | null) => {
    if (id) {
      form.getInputProps("shipToDistrict").onChange(Number(id));
      setSelectedDistrict(
        dataAllDistrict?.find((item: any) => item.districtId === Number(id))
      );
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

  useEffect(() => {
    fetchDataProvince();
    fetchDataDistrict();
    handleGetUserInfo();
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
    form.values.shipToProvince,
    dataAllDistrict,
    selectedProvince,
    dataAllProvince,
  ]);

  useEffect(() => {
    if (userInfo) {
      form.setValues({
        email: userInfo
          ? userInfo?.data?.email || userInfo?.data?.userName
          : "",
        telephoneNumber: userInfo ? userInfo?.data?.telephoneNumber : "",
        customerName: userInfo ? userInfo?.data?.customerName : "",
        sex: userInfo ? userInfo?.data?.sex : "",
        address: userInfo ? userInfo?.data?.address : "",
        shipToProvince: userInfo ? userInfo?.data?.shipToProvince : "",
        shipToDistrict: userInfo ? userInfo?.data?.shipToDistrict : "",
        customerId: userInfo ? userInfo?.data?.customerId : 0,
        userName: userInfo ? userInfo?.data?.userName : "",
      });
    } else handleGetUserInfo();
  }, [userInfo]);

  useEffect(() => {
    if (userInfo) {
      setSelectedProvince(
        dataAllProvince?.find(
          (item: tblProvince) =>
            item.provinceId === Number(userInfo?.data?.shipToProvince)
        )
      );
      setSelectedDistrict(
        dataAllDistrict?.find(
          (item: tblDistrict) =>
            item.districtId === Number(userInfo?.data?.shipToDistrict)
        )
      );
    }
  }, [userInfo, dataAllProvince, dataAllDistrict]);

  return (
    <main className={roboto.className}>
      <div className={style.form}>
        <form
          onSubmit={form.onSubmit((e: tblCustomerEdit) => {
            handleCreateCustomer(e);
          })}
        >
          <Flex
            justify="center"
            className={style.infoMember}
            direction="column"
          >
            <div className={style.infoMemberTop}>
              <Image
                src={avatarPerson}
                alt="person"
                style={{ marginBottom: "13px" }}
              />
              <Text
                c="#1F2123"
                size="26px"
                fw={700}
                style={{ marginBottom: "30px" }}
              >
                {userInfo
                  ? userInfo?.data?.customerName || userInfo?.data?.userName
                  : ""}
              </Text>
            </div>

            <Group className={style.group} grow wrap="wrap" gap={"lg"}>
              <TextInput
                label="Họ và tên"
                placeholder="Họ và tên"
                className={style.spaceBottom}
                {...form.getInputProps("customerName")}
              />
              <TextInput
                label="Số điện thoại liên hệ"
                placeholder="Số điện thoại liên hệ"
                className={style.spaceBottom}
                {...form.getInputProps("telephoneNumber")}
              />
            </Group>
            <Group className={style.group} grow wrap="wrap" gap={"lg"}>
              <TextInput
                label="Email/ Sđt đăng kí"
                placeholder="Email"
                className={style.spaceBottom}
                {...form.getInputProps("email")}
                disabled
              />
              <Select
                label="Giới tính"
                placeholder="Giới tính"
                data={["Nam", "Nữ"]}
                className={style.spaceBottom}
                {...form.getInputProps("sex")}
              />
            </Group>
            <Group className={style.group} grow wrap="wrap" gap={"lg"}>
              <Select
                label="Tỉnh/Thành phố"
                placeholder="Tỉnh/Thành phố"
                data={dataOptionProvince}
                searchable
                nothingFoundMessage="Không có dữ liệu"
                className={style.spaceBottom}
                {...form.getInputProps("shipToProvince")}
                value={
                  form.values.shipToProvince
                    ? form.values.shipToProvince?.toString()
                    : null
                }
                onChange={(e) => handleChangeSelectedProvince(e)}
              />
              <Select
                label="Quận/Huyện"
                placeholder="Quận/Huyện"
                data={dataOptionDistrict}
                nothingFoundMessage="Không có dữ liệu"
                {...form.getInputProps("shipToDistrict")}
                value={
                  form.values.shipToDistrict
                    ? form.values.shipToDistrict?.toString()
                    : null
                }
                onChange={(e) => handleChangeSelectedDistrict(e)}
                searchable
              />
            </Group>

            <div className={style.fullWidth}>
              <TextInput
                label="Địa chỉ"
                placeholder="Địa chỉ"
                className={style.spaceBottom}
                {...form.getInputProps("address")}
              />
            </div>
            <div className={style.submit}>
              <Button
                variant="filled"
                type="submit"
                radius="8px"
                className={style.spaceBottom}
              >
                Lưu thông tin
              </Button>
              {/* <Text c="#1F67D2" size="13px" ta="center">
              <IconCheck
                style={{ width: rem(25), height: rem(13) }}
                stroke={1.5}
                color="#1F67D2"
              />
              Cập nhập thông tin thành công
            </Text> */}
            </div>
          </Flex>
        </form>
      </div>
    </main>
  );
}
