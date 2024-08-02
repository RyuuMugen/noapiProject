import {
  createCustomerWithOutToken,
  getCustomerInfo,
  getCustomerInfoByUserName,
} from "@/api/apiCustomer";
import AuthService from "@/api/login/auth.service";
import PasswordRecoveryModal from "@/app/Auth/PasswordRecovery/PasswordRecovery";
import icon3 from "@/assets/Group 35.png";
import Register from "@/assets/Register_1.png";
import icon2 from "@/assets/gglogin2.png";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { Login } from "@/model/AuthService";
import { useCardItems } from "@/useContext/CardContext";
import { useAuthContext } from "@/useContext/useAuthContext";
import {
  Anchor,
  Box,
  Flex,
  Group,
  LoadingOverlay,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "@stack-pulse/next-google-login";
import Image from "next/image";
import { useState } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";
import style from "./Login.module.scss";
import RegisterModal from "./Register";
// import { GoogleLogin } from "react-google-login";
import { signIn, useSession } from "next-auth/react";
import ReActiveModalWithoutPassword from "./Reactive/ReActiveModalWithoutPassWord";

const LoginModal = ({ handleCheckInfoUser }: LoginModalProps) => {
  const session = useSession();
  const { setUserInfo, handleGetUserInfo } = useAuthContext();
  const { fetchDataHeader } = useCardItems();
  const iconCards = [
    { icon: icon2, title: "Google", hightlight: "", href: "" },
    { icon: icon3, title: "Facebook", hightlight: "", href: "" },
  ];
  const entity = {
    username: "",
    password: "",
    // remember: false,
  };
  const handleLogin = async (dataSubmit: Login) => {
    const user = await AuthService.login(dataSubmit);
    if (
      user &&
      user !== "Tài khoản chưa được kích hoạt !" &&
      user !== "Tài khoản hoặc mật khẩu chưa chính xác !"
    ) {
      // await createCustomer({ ...customer, userName: dataSubmit.username,customerName: dataSubmit.fullName, });
      localStorage.setItem("loginType", "gmail");
      handleCheckInfoUser && handleCheckInfoUser(dataSubmit.username);
      const customerInfo = await getCustomerInfo();
      if (
        !isNullOrUndefined(customerInfo) &&
        !isNullOrUndefined(customerInfo?.data)
      ) {
        localStorage.setItem("userInfo", JSON.stringify(customerInfo));
        fetchDataHeader();
      } else localStorage.setItem("userInfo", "");
      modals.closeAll();
    } else {
      if (user == "Tài khoản chưa được kích hoạt !") {
        openFormReActiveWithoutPassword();
      } else {
      }
    }
  };

  const form = useForm<Login>({
    initialValues: {
      ...entity,
    },

    validate: {
      username: (value) => {
        if (/^\S+@\S+$/.test(value)) {
          return null;
        } else if (/^\d{10}$/.test(value)) {
          return null;
        }
        return "Giá trị không phải là email hoặc số điện thoại";
      },
      password: hasLength(
        { min: 5, max: 20 },
        "Mật khẩu phải chưa từ 5-20 kí tự !"
      ),
    },
  });

  const [focused, setFocused] = useState(false);
  const floating = focused || form.values.username.length > 0 || undefined;
  const [focused2, setFocused2] = useState(false);
  const floating2 = focused2 || form.values.password.length > 0 || undefined;

  function openFormReActiveWithoutPassword() {
    // modals.closeAll();
    modals.openConfirmModal({
      size: "700px",
      radius: "20px",
      centered: true,
      children: (
        <ReActiveModalWithoutPassword
          phone={form.values.username}
          isOpen={true}
          onClose={() => modals.closeAll()}
        ></ReActiveModalWithoutPassword>
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }
  function openFormRegisterone() {
    modals.closeAll();
    modals.openConfirmModal({
      size: "1100px",
      radius: "20px",
      centered: true,
      children: <RegisterModal />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }
  function openFormPasswordRecoveryModal() {
    // modals.closeAll();
    modals.openConfirmModal({
      size: "650px",
      radius: "20px",
      centered: true,
      children: <PasswordRecoveryModal />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  const responseMessageGG = async (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    // console.log(77, response);
    if ("profileObj" in response) {
      const dataCustomer = {
        email: response.profileObj?.email,
        customerName: response.profileObj?.name,
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
        userName: response.profileObj?.email,
        avatar: response.profileObj?.imageUrl,
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
      };
      const dataApi = await createCustomerWithOutToken(dataCustomer);
      localStorage.setItem("loginType", "google");
      localStorage.setItem("userName", response.profileObj?.email);
      if (
        !isNullOrUndefined(dataApi) &&
        !isNullOrUndefined(dataApi.data) &&
        dataApi.message != "Tài khoản tồn tại!"
      ) {
        setUserInfo(dataApi);
        localStorage.setItem("userInfo", JSON.stringify(dataApi));
        handleCheckInfoUser && handleCheckInfoUser(dataApi.data?.userName);
        modals.closeAll();
      } else if (dataApi.message === "Tài khoản tồn tại!") {
        const dataApi2 = await getCustomerInfoByUserName(
          `?userName=${response.profileObj?.email}`
        );
        if (!isNullOrUndefined(dataApi2) && !isNullOrUndefined(dataApi2.data)) {
          setUserInfo(dataApi2);
          localStorage.setItem("userInfo", JSON.stringify(dataApi2));
          handleCheckInfoUser && handleCheckInfoUser(dataApi2.data?.userName);
          modals.closeAll();
        }
      }
    }
  };

  return (
    <>
      <Box
        className="flex-none"
        component="form"
        size={"xl"}
        onSubmit={form.onSubmit((e: Login) => {
          handleLogin(e);
        })}
      >
        <LoadingOverlay
          // visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "xl", blur: 2 }}
        />

        <Title ta="center" className={style.title}>
          Đăng nhập
        </Title>
        <div className={style.flexBox}>
          <div className={style.box1}>
            <div className={style.inputBox}>
              <TextInput
                label="Tên đăng nhập hoặc số điện thoại"
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
                {...form.getInputProps("username")}
              />
            </div>
            <PasswordInput
              label="Mật khẩu"
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
              {...form.getInputProps("password")}
            />

            <Group justify="center" mt="lg" className={style.group}>
              <button className={style.button} type="submit">
                Đăng nhập
              </button>
            </Group>

            <div className={style.footer}>
              <Anchor
                target="_blank"
                underline="hover"
                onClick={openFormPasswordRecoveryModal}
              >
                Quên mật khẩu?
              </Anchor>

              <Anchor
                target="_blank"
                underline="hover"
                onClick={openFormReActiveWithoutPassword}
              >
                Kích hoạt tài khoản
              </Anchor>
            </div>

            <div className={style.icon}>
              <Text c="#637788" mb={5}>
                Hoặc đăng nhập bằng
              </Text>
              <Flex>
                {/* <GoogleLogin
                  clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}
                  render={(renderProps) => (
                    <GoogleLoginButton
                      className={style.btnGoogle}
                      onClick={renderProps.onClick}
                    >
                      <span>Google</span>
                    </GoogleLoginButton>
                  )}
                  buttonText="Login"
                  onSuccess={responseMessageGG}
                  onFailure={(error) => {
                    console.log("Login Failed!", error);
                    NotificationExtension.Fails(
                      "Đăng nhập thất bại! Vui lòng thử lại."
                    );
                  }}
                  cookiePolicy={"single_host_origin"}
                  scope="email profile  openid"
                /> */}
                {/* <FacebookLogin
                  appId={process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID || ""}
                  onSuccess={(response) => {
                    console.log("Login Success!", response);
                  }}
                  onFail={(error) => {
                    console.log("Login Failed!", error);
                  }}
                  onProfileSuccess={(response) => {
                    console.log("Get Profile Success!", response);
                  }}
                  render={(renderProps) => (
                    <FacebookLoginButton
                      className={style.btnGoogle}
                      onClick={renderProps.onClick}
                    >
                      <span>Facebook</span>
                    </FacebookLoginButton>
                  )}
                /> */}
              </Flex>
              <GoogleLoginButton
                className={style.btnGoogle}
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "/home",
                  })
                }
              >
                <span>Google</span>
              </GoogleLoginButton>
            </div>

            <div className={style.footer}>
              <Text c="#637788">
                Bạn chưa có tài khoản?{" "}
                <Anchor
                  target="_blank"
                  underline="hover"
                  onClick={openFormRegisterone}
                >
                  Đăng ký ngay!
                </Anchor>
              </Text>
            </div>
          </div>
          <div className={style.box2}>
            <Image className={style.img} src={Register} alt="" />
          </div>
        </div>
      </Box>
    </>
  );
};

type LoginModalProps = {
  handleCheckInfoUser?: (userName: string) => void;
};

export default LoginModal;
