import {
  createCustomerWithOutToken,
  getCustomerInfo,
  getCustomerInfoByUserName,
} from "@/api/apiCustomer";
import iconUser from "@/assets/userIcon.svg";
import { useAuthContext } from "@/useContext/useAuthContext";
import { Box } from "@mantine/core";
import { modals } from "@mantine/modals";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoginModal from "./LoginModal";
import RegisterModal from "./Register";
import style from "./User.module.scss";
import { postLoggingAction } from "@/api/apiLogging";
import { BASE_WEB_URL } from "@/config";
import { useSession } from "next-auth/react";
import { isNullOrUndefined } from "@/extension/StringExtension";

const User = () => {
  const router = useRouter();
  const { userInfo, handleGetUserInfo, setUserInfo } = useAuthContext();
  const [userName, setUserName] = useState("");
  const [boxClass, setBoxClass] = useState("main");
  const { data: session } = useSession();

  function openFormLogin() {
    modals.openConfirmModal({
      size: "1110px",
      radius: "20px",
      centered: true,
      children: <LoginModal handleCheckInfoUser={handleCheckInfoUser} />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  function openFormRegister() {
    modals.openConfirmModal({
      size: "1110px",
      radius: "20px",
      centered: true,
      children: <RegisterModal />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth < 1701) {
        setBoxClass("responsiveMain");
      } else {
        setBoxClass("main");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCheckInfoUser = async (userLogin?: string) => {
    if (!userLogin) {
      const customerInfo = await getCustomerInfo();
      const userName = customerInfo?.data?.userName;
      setUserName(userName);
    } else {
      setUserName(userLogin);
    }
  };

  const handleRedirectAccount = () => {
    handleGetUserInfo();
    postLoggingAction({
      userName: localStorage.getItem("userName"),
      actionType: "HomePageClickedLink",
      actionDetail: `${BASE_WEB_URL}/account`,
    });
    router.push(`/account`);
  };

  useEffect(() => {
    if (userInfo) {
      setUserName(userInfo?.data?.userName);
    } else handleCheckInfoUser();
  }, [userInfo]);

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  useEffect(() => {
    const loginWithGG = async () => {
      if (session) {
        const dataCustomer = {
          email: session.user?.email,
          customerName: session.user?.name,
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
          userName: session.user?.email,
          avatar: session.user?.image,
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
        localStorage.setItem("userName", session.user?.email || "");
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
            `?userName=${session.user?.email}`
          );
          if (
            !isNullOrUndefined(dataApi2) &&
            !isNullOrUndefined(dataApi2.data)
          ) {
            setUserInfo(dataApi2);
            localStorage.setItem("userInfo", JSON.stringify(dataApi2));
            handleCheckInfoUser && handleCheckInfoUser(dataApi2.data?.userName);
            modals.closeAll();
          }
        }
      }
    };

    if (session) {
      loginWithGG();
    }
  }, [session]);

  return (
    <>
      {userName ? (
        <Box className={style[boxClass]} onClick={handleRedirectAccount}>
          <Box className={style.avatar}>
            <Image src={iconUser} alt="avatar" width={28} height={28} />
            <div className={style.loginBox}>
              <Box className={style.action}>
                <span>{userName}</span>
              </Box>
            </div>
          </Box>
          <Box className={style.detail}>
            <Box className={style.action}>
              <span>{userName}</span>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box className={style[boxClass]}>
          <Box className={style.avatar}>
            <Image
              src={iconUser}
              onClick={openFormLogin}
              alt="avatar"
              width={28}
              height={28}
            />
            <div className={style.loginBox}>
              <Box className={style.action}>
                <span onClick={openFormLogin}>Đăng nhập</span>/
                <span onClick={openFormRegister}>Đăng ký</span>
              </Box>
            </div>
          </Box>
          <Box className={style.detail}>
            <Box className={style.action}>
              <span onClick={openFormLogin}>Đăng nhập</span>/
              <span onClick={openFormRegister}>Đăng ký</span>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default User;
