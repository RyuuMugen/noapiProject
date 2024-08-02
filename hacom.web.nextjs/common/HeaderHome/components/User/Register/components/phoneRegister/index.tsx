import AuthService from "@/api/login/auth.service";
import icon3 from "@/assets/Group 35.png";
import register from "@/assets/Register_1.png";
import icon2 from "@/assets/gglogin2.png";
import { Register } from "@/model/AuthService";
import { tblCustomer } from "@/model/TblCustomer";
import { modals } from "@mantine/modals";
import Active from "../../../Active";
import {
  Box,
  Container,
  Grid,
  Group,
  LoadingOverlay,
  PasswordInput,
  TextInput,
  Title,
  Text,
} from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import Image from "next/image";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  createCustomer,
  createCustomerWithOutTokenPhone,
} from "@/api/apiCustomer";
import style from "./mailRegister.module.scss";

const RegisterModal = () => {
  const [customer, setCustomer] = useState<tblCustomer>({
    customerNumber: "",
    customerName: "",
    customerType: "",
    validatedFlag: "",
    address: "",
    contactName: "",
    telephoneNumber: "",
    email: "",
    taxCode: "",
    sex: "",
    dateOfBirth: "",
    createdBy: "",
    lastUpdateDate: "",
    lastUpdatedBy: "",
    lastUpdateLogin: "",
    shipToProvince: "",
    shipToDistrict: "",
    shipToWard: "",
    identifiedNumber: "",
    groupId: 0,
    userName: "",
    avatar: "",
    taxCompany: "",
    taxAddress: "",
    orderCount: 0,
    totalValue: 0,
    orderCountSuccess: 0,
    totalValueSuccess: 0,
    banned: 0,
    loginToken: "",
    productReviewCount: 0,
    questionAsk: 0,
    questionAnswer: 0,
    loyaltyPoint: 0,
    loyaltyLevel: 0,
    articleComment: 0,
    contactId: 0,
    mobileNumber: "",
    hobby: "",
    brand: "",
    job: "",
    shipToAddress: "",
    tblCustomerSiteCommands: [],
  });

  const iconCards = [
    { icon: icon2, title: "Google", hightlight: "", href: "" },
    { icon: icon3, title: "Facebook", hightlight: "", href: "" },
  ];

  const entity = {
    fullName: "",
    phone: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  function openFormActive() {
    modals.openConfirmModal({
      id: "modelCancel",
      size: "900px",
      radius: "20px",
      centered: true,
      children: <Active phone={form.values.username} isOpen={true}></Active>,
      cancelProps: { display: "none" },
      confirmProps: { display: "none" },
    });
  }

  const handleCreateAccount = async (dataSubmit: Register) => {
    await AuthService.registerPhone(dataSubmit, openFormActive);
    await createCustomerWithOutTokenPhone({
      ...customer,
      userName: dataSubmit.phone,
      customerName: dataSubmit.fullName,
      email: dataSubmit.phone,
      telephoneNumber: dataSubmit.phone,
    });
  };

  const [visible, { toggle, close, open }] = useDisclosure(false);

  const form = useForm<Register>({
    initialValues: {
      ...entity,
    },

    validate: {
      fullName: (value) =>
        value && value.trim() ? null : "Họ và tên không được để trống",
      phone: (value) =>
        /^\d{10}$/.test(value.trim()) ? null : "Số điện thoại không hợp lệ",
      password: (value) =>
        value && value.length >= 5 && value.length <= 100
          ? null
          : "Mật khẩu phải chứa từ 5 đến 100 kí tự",
      confirmPassword: (value, entity) =>
        value && value === entity?.password
          ? null
          : "Xác nhận mật khẩu không khớp",
    },
  });
  const [captcha, setCaptcha] = useState(false);
  const [focused, setFocused] = useState(false);
  const floating = focused || form.values.fullName.length > 0 || undefined;
  const [focused2, setFocused2] = useState(false);
  const floating2 = focused2 || form.values.phone.length > 0 || undefined;
  const [focused4, setFocused4] = useState(false);
  const floating4 = focused4 || form.values.password.length > 0 || undefined;
  const [focused5, setFocused5] = useState(false);
  const floating5 =
    focused5 || form.values.confirmPassword.length > 0 || undefined;

  const onChangeCaptcha = (value: any) => {
    setCaptcha(true);
  };

  useEffect(() => {
    form.setFieldValue("username", form.values.phone);
  }, [form.values.phone]);

  return (
    <Box
      className="flex-none"
      component="form"
      mx="auto"
      onSubmit={form.onSubmit((e: Register) => {
        handleCreateAccount(e);
      })}
    >
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "xl", blur: 2 }}
      />
      <Container>
        <div className={style.inputBox}>
          <TextInput
            label="Họ và tên"
            labelProps={{ "data-floating": floating }}
            withAsterisk
            mt="md"
            classNames={{
              root: style.root,
              input: style.input,
              label: style.label,
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...form.getInputProps("fullName")}
          />
        </div>
        <div className={style.inputBox}>
          <TextInput
            label="Số điện thoại"
            labelProps={{ "data-floating": floating2 }}
            withAsterisk
            mt="md"
            classNames={{
              root: style.root,
              input: style.input,
              label: style.label,
            }}
            onFocus={() => setFocused2(true)}
            onBlur={() => setFocused2(false)}
            {...form.getInputProps("phone")}
          />
        </div>
        {/* <div className={style.inputBox}>
          <TextInput
            label="Email"
            labelProps={{ "data-floating": floating3 }}
            withAsterisk
            mt="md"
            classNames={{
              root: style.root,
              input: style.input,
              label: style.label,
            }}
            value={form.values.phone}
            onFocus={() => setFocused3(true)}
            onBlur={() => setFocused3(false)}
            {...form.getInputProps("username")}
          />
        </div> */}
        <div className={style.inputBox}>
          <PasswordInput
            label="Mật khẩu"
            labelProps={{ "data-floating": floating4 }}
            withAsterisk
            mt="md"
            classNames={{
              root: style.root,
              input: style.input,
              label: style.label,
            }}
            onFocus={() => setFocused4(true)}
            onBlur={() => setFocused4(false)}
            {...form.getInputProps("password")}
          />
        </div>
        <div className={style.inputBox}>
          <PasswordInput
            label="Nhập lại mật khẩu"
            labelProps={{ "data-floating": floating5 }}
            withAsterisk
            mt="md"
            classNames={{
              root: style.root,
              input: style.input,
              label: style.label,
            }}
            onFocus={() => setFocused5(true)}
            onBlur={() => setFocused5(false)}
            {...form.getInputProps("confirmPassword")}
          />
        </div>

        <ReCAPTCHA
          sitekey="6LfM6M4pAAAAAMU-poYkJbP6a1EJ81MZn6-uY__s"
          onChange={onChangeCaptcha}
        />

        <button
          type="submit"
          className={captcha ? style.button : style.disableButton}
          disabled={!captcha}
        >
          Tạo tài khoản
        </button>
      </Container>
    </Box>
  );
};

type DataProvince = {
  provinceCode: string;
  provinceName: string;
};

export default RegisterModal;
