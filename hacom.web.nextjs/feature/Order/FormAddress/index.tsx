import {
  getDataCommune,
  getDataDistrict,
  getDataProvice,
} from "@/api/ApiAddress";
import { tblCommune, tblDistrict, tblProvince } from "@/model/TblAddress";
import { FormOrderBuyerInfo } from "@/model/TblSaleOrder";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Group,
  LoadingOverlay,
  Select,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, isEmail, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconCheck, IconX } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import { useAuthContext } from "@/useContext/useAuthContext";
import {
  createCustomerSite,
  createCustomerWithOutToken,
  editCustomerSite,
} from "@/api/apiCustomer";
import { isNullOrUndefined } from "@/extension/StringExtension";

const FormAddRess = ({
  customerId,
  data,
  handleAddAddress,
  handleEditAddress,
  edit,
  length,
  userInfo,
  setIsCreateUser,
}: FormAddRessProps) => {
  const { setUserInfo, handleGetUserInfo } = useAuthContext();
  const [isCompany, setIsCompany] = useState(false);
  const [visible, { toggle, close, open }] = useDisclosure(false);
  const entity = {
    customerId: customerId ? customerId : null,
    customerSiteId: 0,
    customerSiteType: null,
    address: userInfo?.data?.address || userInfo?.data?.shipToAddress || null,
    customerSiteNumber: null,
    customerSiteName: userInfo?.data?.userName || null,
    telephoneNumber: userInfo?.data?.telephoneNumber || null,
    attribute1: null,
    attribute2: null,
    attribute3: null,
    createdBy: null,
    lastUpdateDate: null,
    lastUpdatedBy: null,
    lastUpdateLogin: null,
    creationDate: null,
    wardId: Number(userInfo?.data?.shipToWard) || null,
    districtId: Number(userInfo?.data?.shipToDistrict) || null,
    provinceId: Number(userInfo?.data?.shipToProvince) || null,
    telephone: userInfo?.data?.telephoneNumber || null,
    isMain: "N",
    email: userInfo?.data?.email || userInfo?.data?.userName || null,
  };

  const form = useForm<FormOrderBuyerInfo>({
    initialValues: {
      ...entity,
    },
    validate: {
      customerSiteName: isNotEmpty("Tên chưa nhập"),
      telephone: (value: string | null) => {
        return !value || /^\s*$/.test(value)
          ? "SĐT chưa nhập"
          : value.length < 10
          ? "SĐT đã nhập không được Ít Hơn 10 số "
          : value.length > 11
          ? "SĐT đã nhập không được Nhiều Hơn 11 số "
          : undefined;
      },
      email: isEmail("Vui lòng nhập Email"),
      provinceId: (value: number | null) => {
        return value ? undefined : "Chưa chọn Tỉnh/Thành phố";
      },
      districtId: isNotEmpty("Chưa Chọn quận/huyện"),
      // communeId: (value: number | null) => {
      //   return value ? undefined : "Chưa chọn phường xã";
      // },
      address: isNotEmpty("Địa chỉ chưa nhập"),
      // taxCompany: (value: string | null) => {
      //   if (isCompany && !value) {
      //     return "Tên Công Ty Chưa Nhập";
      //   } else {
      //     return undefined;
      //   }
      // },
      // taxCode: (value: string | null) => {
      //   if (isCompany && !value) {
      //     return "Mã số thuế chưa nhập";
      //   } else {
      //     return undefined;
      //   }
      // },
      // taxAddress: (value: string | null) => {
      //   if (isCompany && !value) {
      //     return "Địa chỉ Công Ty chưa nhập";
      //   } else {
      //     return undefined;
      //   }
      // },
    },
  });

  const [dataAllProvince, setDataAllProvince] = useState<tblProvince[]>([]);
  const [dataAllDistrict, setDataAllDistrict] = useState<tblDistrict[]>([]);
  const [dataAllCommune, setDataAllCommune] = useState<tblCommune[]>([]);
  const [dataOptionProvince, setDataOptionProvince] = useState<any[]>([]);
  const [dataOptionDistrict, setDataOptionDistrict] = useState<any[]>([]);
  const [dataOptionCommune, setDataOptionCommune] = useState<any[]>([]);
  // const [selectedProvince, setSelectedProvince] = useState<tblProvince>();
  // const [selectedDistrict, setSelectedDistrict] = useState<tblDistrict>();

  const handleSubmitCreateForm = async (dataSubmit: FormOrderBuyerInfo) => {
    if (customerId === 0) {
      const handleCreateCustomer = async () => {
        if (!userInfo) {
          const data = {
            email: dataSubmit?.email,
            customerName: dataSubmit?.customerSiteName,
            customerNumber: null,
            customerType: null,
            validatedFlag: null,
            address: null,
            contactName: null,
            telephoneNumber: null,
            taxCode: null,
            sex: null,
            dateOfBirth: null,
            shipToProvince: null,
            shipToDistrict: null,
            shipToWard: null,
            identifiedNumber: null,
            groupId: null,
            userName: dataSubmit?.email,
            avatar: null,
            taxCompany: null,
            taxAddress: null,
            orderCount: null,
            totalValue: null,
            orderCountSuccess: null,
            totalValueSuccess: null,
            banned: null,
            loginToken: null,
            productReviewCount: null,
            questionAsk: null,
            questionAnswer: null,
            loyaltyPoint: null,
            loyaltyLevel: null,
            articleComment: null,
            contactId: null,
            mobileNumber: null,
            hobby: null,
            brand: null,
            job: null,
            shipToAddress: null,
            tblCustomerSiteCommands: [dataSubmit],
          };
          const dataApi = await createCustomerWithOutToken(data);
          if (!isNullOrUndefined(dataApi) && !isNullOrUndefined(dataApi.data)) {
            setUserInfo(dataApi);
            localStorage.setItem("userInfo", JSON.stringify(dataApi));
            localStorage.setItem("userName", dataApi?.data?.userName);
            setIsCreateUser(true);
          }
        }
      };
      handleCreateCustomer();
    } else {
      handleAddAddress({
        ...dataSubmit,
        customerId: customerId ? customerId : null,
      });
      await createCustomerSite({
        ...dataSubmit,
        customerId: customerId ? customerId : null,
      });
    }
    handleGetUserInfo();
    modals.closeAll();
  };

  const handleSubmitEditForm = (dataSubmit: FormOrderBuyerInfo) => {
    if (customerId === 0) {
      handleEditAddress(dataSubmit);
    } else {
      handleEditAddress(dataSubmit);
      editCustomerSite(dataSubmit);
    }
    // handleGetUserInfo();
    modals.closeAll();
  };

  const handleChangeSelectedProvince = (id: string | null) => {
    if (id) {
      form.getInputProps("provinceId").onChange(Number(id));
      form.getInputProps("districtId").onChange(null);
      // setSelectedProvince(
      //   dataAllProvince?.find((item: any) => item.provinceId == id)
      // );
    }
  };

  const handleChangeSelectedDistrict = (id: string | null) => {
    if (id) {
      form.getInputProps("districtId").onChange(Number(id));
      form.getInputProps("wardId").onChange(null);
      // setSelectedDistrict(
      //   dataAllDistrict?.find((item: any) => item.districtId == id)
      // );
    }
  };

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
    const data = await getDataCommune("Active=true&Skip=0&Take=11000");
    setDataAllCommune(data?.data);
  };

  useEffect(() => {
    fetchDataProvince();
    fetchDataDistrict();
    fetchDataCommune();
  }, []);

  useEffect(() => {
    if (data) {
      form.setValues({ ...data });
      // setSelectedProvince(
      //   dataAllProvince?.find(
      //     (item: tblProvince) => item.provinceId === data.provinceId
      //   )
      // );
      // setSelectedDistrict(
      //   dataAllDistrict?.find(
      //     (item: tblDistrict) => item.districtId === data.districtId
      //   )
      // );
    }
  }, [data, dataAllProvince, dataAllDistrict]);

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
          return item?.provinceId === form.values.provinceId;
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
    // selectedProvince,
    dataAllProvince,
  ]);

  useEffect(() => {
    setDataOptionCommune(
      dataAllCommune
        ?.filter((item: tblCommune) => {
          return item?.districtId === form.values.districtId;
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
    // selectedDistrict,
    dataAllCommune,
    dataAllDistrict,
  ]);
  return (
    <>
      <Box
        className="flex-none"
        component="form"
        mx="auto"
        onSubmit={form.onSubmit((e: FormOrderBuyerInfo) => {
          if (edit === true) {
            if (length > 0) handleSubmitEditForm(e);
            else handleSubmitEditForm({ ...e, isMain: "Y" });
          } else {
            if (length > 0) handleSubmitCreateForm(e);
            else handleSubmitCreateForm({ ...e, isMain: "Y" });
          }
        })}
        style={{
          marginTop: "-31px",
        }}
      >
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />

        <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <TextInput
            label={"Họ và tên"}
            placeholder={"Nhập họ và tên"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("customerSiteName")}
          />
          <TextInput
            label={"Số điện thoại liên hệ"}
            placeholder={"Nhập số điện thoại liên hệ"}
            withAsterisk
            mt="md"
            type="number"
            {...form.getInputProps("telephone")}
          />
        </Group>

        <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <TextInput
            label={"Địa chỉ email"}
            placeholder={"Nhập địa chỉ email"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("email")}
          />
          <Select
            id="bbbb"
            mt={"lg"}
            label="Chọn Tỉnh/Thành phố"
            placeholder="Tỉnh/Thành phố"
            nothingFoundMessage="Không có dữ liệu"
            data={dataOptionProvince}
            searchable
            {...form.getInputProps("provinceId")}
            withAsterisk
            value={
              form.values.provinceId ? form.values.provinceId?.toString() : null
            }
            onChange={(e) => handleChangeSelectedProvince(e)}
          />
        </Group>

        <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <Select
            disabled={
              form.values.provinceId && form.values.provinceId > 0
                ? false
                : true
            }
            id="aaaaaa"
            mt={"lg"}
            label="Chọn Quận/Huyện"
            placeholder="Quận/Huyện"
            data={dataOptionDistrict}
            nothingFoundMessage="Không có dữ liệu"
            {...form.getInputProps("districtId")}
            value={
              form.values.districtId ? form.values.districtId?.toString() : null
            }
            onChange={(e) => handleChangeSelectedDistrict(e)}
            searchable
            withAsterisk
          />
          <Select
            disabled={
              form.values.districtId && form.values.districtId > 0
                ? false
                : true
            }
            id="ccccc"
            mt={"lg"}
            label="Chọn Phường/Xã"
            placeholder="Phường/Xã"
            data={dataOptionCommune}
            nothingFoundMessage="Không có dữ liệu"
            {...form.getInputProps("wardId")}
            value={form.values.wardId ? form.values.wardId?.toString() : null}
            onChange={(e) => handleChangeSelectedCommune(e)}
            searchable
            // withAsterisk
          />
        </Group>

        <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <TextInput
            label={"Địa chỉ"}
            placeholder={"Nhập địa chỉ"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("address")}
          />
        </Group>

        <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
          <Select
            mt={"lg"}
            label="Đây là địa chỉ"
            placeholder="chọn vị trí"
            nothingFoundMessage="Không có dữ liệu"
            data={[
              { value: "HOME", label: "Nhà riêng" },
              { value: "COMPANY", label: "Công ty" },
            ]}
            {...form.getInputProps("customerSiteType")}
          />
        </Group>

        {/* <Flex justify={"center"} mt="lg" gap={"lg"}>
          <Checkbox
            label="Yêu cầu xuất hoá đơn công ty"
            checked={isCompany}
            onChange={() => setIsCompany(!isCompany)}
          />
        </Flex> */}

        {isCompany ? (
          <>
            <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
              <TextInput
                label={"Tên công ty"}
                placeholder={"Nhập tên công ty"}
                withAsterisk
                mt="md"
                type="text"
                {...form.getInputProps("taxCompany")}
              />
              <TextInput
                label={"Mã số thuế"}
                placeholder={"Nhập số điện thoại"}
                withAsterisk
                mt="md"
                type="text"
                {...form.getInputProps("taxCode")}
              />
            </Group>

            <Group grow wrap="nowrap" mt="lg" gap={"lg"}>
              <TextInput
                label={"Địa chỉ"}
                placeholder={"Nhập địa chỉ"}
                withAsterisk
                mt="md"
                type="text"
                {...form.getInputProps("taxAddress")}
              />
            </Group>
          </>
        ) : (
          <></>
        )}

        <Group justify="center" mt="lg">
          <Button
            type="submit"
            color="#3598dc"
            leftSection={<IconCheck size={18} />}
          >
            Lưu
          </Button>
          <Button
            variant="outline"
            color="black"
            type="button"
            onClick={() => modals.closeAll()}
            leftSection={<IconX size={18} />}
          >
            Đóng
          </Button>
        </Group>
      </Box>
    </>
  );
};

export default FormAddRess;

type FormAddRessProps = {
  data?: FormOrderBuyerInfo;
  customerId?: number;
  edit?: boolean;
  handleAddAddress: (data: FormOrderBuyerInfo) => void;
  handleEditAddress: (data: FormOrderBuyerInfo) => void;
  length: number;
  userInfo: any;
  setIsCreateUser: React.Dispatch<React.SetStateAction<boolean>>;
};
