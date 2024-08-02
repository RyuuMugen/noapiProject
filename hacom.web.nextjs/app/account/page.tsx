"use client";
import cartEmpty from "@/assets/account-cart-empty.png";
import infoEmail from "@/assets/info-email.svg";
import infoHotline from "@/assets/info-hotline.svg";
import infoOffice from "@/assets/info-office.svg";
import AppContainer from "@/common/AppContainer";
import AccountHome from "@/feature/account/accountHome";
import AccountRank from "@/feature/account/accountRank";
import Inputform from "@/feature/account/updateForm";
import { useAuthContext } from "@/useContext/useAuthContext";
import "@mantine/carousel/styles.css";
import {
  Button,
  Flex,
  PasswordInput,
  Table,
  Tabs,
  Text,
  rem,
} from "@mantine/core";
import {
  IconCheck,
  IconEye,
  IconEyeOff,
  IconHeadset,
  IconHome,
  IconLock,
  IconLogout2,
  IconReceipt,
  IconUserCircle,
  IconUserHeart,
} from "@tabler/icons-react";
import { Roboto } from "next/font/google";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MembershipCard } from "@/model/TblMembershipCard";
import { getMembershipCard } from "@/api/apiMembershipCard";
import style from "./account.module.scss";
import FormChangePass from "../../feature/account/passwordChange/FormChangePass";
import { getDataListSaleOder } from "@/api/apiSaleOrder";
import CartItem from "@/common/CartItem/item";
import { modals } from "@mantine/modals";
import InfoSaleOder from "./infoSaleOder";
import { signOut, useSession } from "next-auth/react";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const Account = () => {
  const { userInfo, handleGetUserInfo, setUserInfo } = useAuthContext();
  const iconStyle = { width: rem(24), height: rem(24) };
  const iconColor = "#D4E6FF";
  const [isOpenFormLogOut, setIsOpenFormLogOut] = useState(false);
  const [dataSaleOder, setDataSaleOder] = useState<any[]>([]);
  const [dataMemberCard, setDataMemberCard] = useState<MembershipCard>();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string | null>("account-home");
  const { data: session } = useSession();

  const handleLogOut = () => {
    setIsOpenFormLogOut(true);
  };

  const handleRemoveToken = async () => {
    localStorage.setItem("id", "");
    localStorage.setItem("jwt", "");
    localStorage.setItem("refreshToken", "");
    localStorage.setItem("userName", "");
    setUserInfo("");
    localStorage.setItem("userInfo", "");
    localStorage.setItem("loginType", "");

    if (session) {
      await signOut({ callbackUrl: "/home" });
    } else router.replace(`/home`);
  };
  const openModal = () =>
    modals.openConfirmModal({
      title: "Bạn có muốn thoát tài khoản",
      labels: { confirm: "Xác nhận", cancel: "Hủy" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => handleRemoveToken(),
    });

  const handleFetchDataSaleOder = async () => {
    const userData = localStorage.getItem("userInfo");
    const id = userData ? JSON.parse(userData).data.customerId : 0;
    const buyerEmail = localStorage.getItem("userName");
    const callApi = await getDataListSaleOder(
      `?Skip=0&Take=1000&BuyerId=${id}`
    );
    setDataSaleOder(callApi?.data);
  };

  const handleFetchDataMembershipCard = async () => {
    const userData = localStorage.getItem("userInfo");
    const id = userData ? JSON.parse(userData).data.customerId : 0;
    const callApi = await getMembershipCard(`customerId=${id}`);
    setDataMemberCard(callApi);
  };

  useEffect(() => {
    if (!userInfo) {
      router.replace(`/home`);
      localStorage.setItem("id", "");
      localStorage.setItem("jwt", "");
      localStorage.setItem("refreshToken", "");
      localStorage.setItem("userName", "");
    }
    handleGetUserInfo();
    handleFetchDataSaleOder();
  }, []);

  useEffect(() => {
    handleFetchDataMembershipCard();
  }, []);

  return (
    <main className={roboto.className}>
      <AppContainer>
        <Tabs
          color="rgba(255, 255, 255, 1)"
          variant="pills"
          orientation="vertical"
          value={activeTab}
          onChange={setActiveTab}
          mt={20}
          mih={750}
        >
          <Tabs.List className={style.tabList}>
            <Tabs.Tab
              value="account-home"
              leftSection={<IconHome style={iconStyle} color={iconColor} />}
              className={style.tabTitle}
            >
              Trang chủ
            </Tabs.Tab>
            <Tabs.Tab
              value="account-history"
              leftSection={<IconReceipt style={iconStyle} color={iconColor} />}
              className={style.tabTitle}
            >
              Lịch sử mua hàng
            </Tabs.Tab>
            <Tabs.Tab
              value="account-rank"
              leftSection={
                <IconUserHeart style={iconStyle} color={iconColor} />
              }
              className={style.tabTitle}
            >
              Hạng thành viên
            </Tabs.Tab>
            <Tabs.Tab
              value="account-info"
              leftSection={
                <IconUserCircle style={iconStyle} color={iconColor} />
              }
              className={style.tabTitle}
            >
              Thông tin tài khoản
            </Tabs.Tab>
            <Tabs.Tab
              value="account-pass"
              leftSection={<IconLock style={iconStyle} color={iconColor} />}
              className={style.tabTitle}
            >
              <div className={style.titleChangePass}>Đổi mật khẩu</div>
            </Tabs.Tab>
            <Tabs.Tab
              value="account-support"
              leftSection={<IconHeadset style={iconStyle} color={iconColor} />}
              className={style.tabTitle}
            >
              Hỗ trợ
            </Tabs.Tab>
            <button onClick={openModal} className={style.logoutButton}>
              <IconLogout2 style={iconStyle} />
              Thoát tài khoản
            </button>
          </Tabs.List>
          <Tabs.Panel value="account-home" className={style.tabContent}>
            <AccountHome
              data={userInfo || []}
              dataCount={dataSaleOder.length}
              dataMemberCard={dataMemberCard}
              setActiveTab={setActiveTab}
            />
          </Tabs.Panel>

          <Tabs.Panel value="account-history" className={style.tabContent}>
            <Tabs defaultValue="all" className={style.historyTab}>
              <Tabs.List className={style.historyTabTitle}>
                <Tabs.Tab value="all" className={style.historyTabTitleItem}>
                  Tất cả
                </Tabs.Tab>
                <Tabs.Tab
                  disabled
                  value="state-1"
                  className={style.historyTabTitleItem}
                >
                  Chờ xác nhận
                </Tabs.Tab>
                <Tabs.Tab
                  disabled
                  value="state-2"
                  className={style.historyTabTitleItem}
                >
                  Chờ lấy hàng
                </Tabs.Tab>
                <Tabs.Tab
                  disabled
                  value="state-3"
                  className={style.historyTabTitleItem}
                >
                  Đang giao
                </Tabs.Tab>
                <Tabs.Tab
                  disabled
                  value="state-4"
                  className={style.historyTabTitleItem}
                >
                  Đã giao
                </Tabs.Tab>
                <Tabs.Tab
                  disabled
                  value="state-5"
                  className={style.historyTabTitleItem}
                >
                  Đã hủy
                </Tabs.Tab>
              </Tabs.List>

              {/* Tab content */}
              <Tabs.Panel value="all" className={style.historyTabContent}>
                <InfoSaleOder
                  dataSaleOder={dataSaleOder}
                  handleFetchDataSaleOder={handleFetchDataSaleOder}
                />
              </Tabs.Panel>

              <Tabs.Panel value="state-1" className={style.historyTabContent}>
                <div>
                  <Image
                    src={cartEmpty}
                    alt="cart-empty"
                    style={{ marginBottom: "30px" }}
                  />
                  <Text
                    c="#257080"
                    size="16px"
                    style={{ marginBottom: "17px" }}
                  >
                    Bạn chưa có đơn hàng nào
                  </Text>
                  <Button radius="8px">Tiếp tục mua sắm</Button>
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="state-2" className={style.historyTabContent}>
                <div>
                  <Image
                    src={cartEmpty}
                    alt="cart-empty"
                    style={{ marginBottom: "30px" }}
                  />
                  <Text
                    c="#257080"
                    size="16px"
                    style={{ marginBottom: "17px" }}
                  >
                    Bạn chưa có đơn hàng nào
                  </Text>
                  <Button radius="8px">Tiếp tục mua sắm</Button>
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="state-3" className={style.historyTabContent}>
                <div>
                  <Image
                    src={cartEmpty}
                    alt="cart-empty"
                    style={{ marginBottom: "30px" }}
                  />
                  <Text
                    c="#257080"
                    size="16px"
                    style={{ marginBottom: "17px" }}
                  >
                    Bạn chưa có đơn hàng nào
                  </Text>
                  <Button radius="8px">Tiếp tục mua sắm</Button>
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="state-4" className={style.historyTabContent}>
                <div>
                  <Image
                    src={cartEmpty}
                    alt="cart-empty"
                    style={{ marginBottom: "30px" }}
                  />
                  <Text
                    c="#257080"
                    size="16px"
                    style={{ marginBottom: "17px" }}
                  >
                    Bạn chưa có đơn hàng nào
                  </Text>
                  <Button radius="8px">Tiếp tục mua sắm</Button>
                </div>
              </Tabs.Panel>

              <Tabs.Panel value="state-5" className={style.historyTabContent}>
                <div>
                  <Image
                    src={cartEmpty}
                    alt="cart-empty"
                    style={{ marginBottom: "30px" }}
                  />
                  <Text
                    c="#257080"
                    size="16px"
                    style={{ marginBottom: "17px" }}
                  >
                    Bạn chưa có đơn hàng nào
                  </Text>
                  <Button radius="8px">Tiếp tục mua sắm</Button>
                </div>
              </Tabs.Panel>
              {/* End: Tab Content */}
            </Tabs>
          </Tabs.Panel>

          <Tabs.Panel value="account-rank" className={style.tabContent}>
            <AccountRank
              data={userInfo || []}
              dataMemberCard={dataMemberCard}
            />
          </Tabs.Panel>

          <Tabs.Panel value="account-info" className={style.tabContent}>
            <Inputform />
          </Tabs.Panel>

          <Tabs.Panel value="account-pass" className={style.tabContent}>
            <FormChangePass />
          </Tabs.Panel>

          <Tabs.Panel value="account-support" className={style.tabContent}>
            <Flex
              className={style.infoMiddle}
              justify="center"
              gap="30px"
              style={{ marginBottom: "50px" }}
            >
              <div
                className={style.infoMiddleItem}
                style={{ backgroundColor: "#E8FBFF" }}
              >
                <Image
                  src={infoHotline}
                  alt="info"
                  style={{ marginBottom: "40px" }}
                />
                <Text
                  fw={700}
                  c="#3CA9C0"
                  size="16px"
                  style={{ marginBottom: "8px" }}
                >
                  HOTLINE TƯ VẤN MUA HÀNG
                </Text>
                <Text
                  fw={700}
                  c="#156374"
                  size="16px"
                  style={{ marginBottom: "36px" }}
                >
                  1900 1903
                </Text>
              </div>
              <div
                className={style.infoMiddleItem}
                style={{ backgroundColor: "#E5F1FF" }}
              >
                <Image
                  src={infoOffice}
                  alt="info"
                  style={{ marginBottom: "40px" }}
                />
                <Text
                  fw={700}
                  c="#3975BC"
                  size="16px"
                  style={{ marginBottom: "8px" }}
                >
                  VĂN PHÒNG GIAO DỊCH
                </Text>
                <Text c="#153B67" size="16px" style={{ marginBottom: "36px" }}>
                  Tầng 3, tòa nhà Lilama, số 124 Minh Khai, Hai Bà Trưng, Hà Nội
                </Text>
              </div>
              <div
                className={style.infoMiddleItem}
                style={{ backgroundColor: "#FFF1F1" }}
              >
                <Image
                  src={infoEmail}
                  alt="info"
                  style={{ marginBottom: "40px" }}
                />
                <Text
                  fw={700}
                  c="#CE3434"
                  size="16px"
                  style={{ marginBottom: "8px" }}
                >
                  EMAIL
                </Text>
                <Text c="#6D1515" size="16px" style={{ marginBottom: "36px" }}>
                  dichvukhachhang@hacom.vn
                </Text>
              </div>
            </Flex>
          </Tabs.Panel>

          {/* <Tabs.Panel value="account-exit" className={style.tabContent}>
            <Flex
              className={style.infoMiddle}
              justify="center"
              gap="30px"
              style={{ marginBottom: "50px" }}
            >
              <ModalLogOut />
            </Flex>
          </Tabs.Panel> */}
        </Tabs>
      </AppContainer>
    </main>
  );
};
export default Account;
