"use client";
import icon7 from "@/assets/sublike.png";
import LoginModal from "@/common/HeaderHome/components/User/LoginModal";
import CommonIcon from "@/common/Propsicon";
import { Box, Button, LoadingOverlay } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import style from "./Loginsuccess.module.scss";

const HomeFooterIconCard1 = () => {
  const iconCards = [{ icon: icon7, title: "", hightlight: "" }];
  function openFormLogin() {
    modals.closeAll();
    modals.openConfirmModal({
      children: <LoginModal />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }
  const [visible, { toggle, close, open }] = useDisclosure(false);

  return (
    <Box component="form">
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      <div>
        <CommonIcon iconCards={iconCards} widthCard={"100%"} heightCard={80} />
        <h2
          style={{
            textAlign: "center",
            marginBottom: "0px",
            marginTop: "12px",
          }}
        >
          Đổi mật khẩu thành công
        </h2>
        <span style={{ fontSize: "14px", marginLeft: "61px" }}>
          <text className={style.text} style={{ marginLeft: "140px" }}>
            Quay trở lại đăng nhập với mật khẩu mới của bạn
          </text>
        </span>
        <>
          <Button
            fullWidth
            mt="xl"
            className={style.titlebutton}
            onClick={openFormLogin}
            style={{
              width: "206px",
              height: "42px",
              borderRadius: "8px",
              marginLeft: "246px",
            }}
          >
            Đăng Nhập
          </Button>
        </>
      </div>
    </Box>
  );
};

export default HomeFooterIconCard1;
