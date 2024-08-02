"use client";
import AuthService from "@/api/login/auth.service";
import HomeFooterIconCard1 from "@/app/Auth/Sendlink/index";
import email from "@/assets/icon_8.png";
import AppContainer from "@/common/AppContainer";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { isNullOrUndefined } from "@/extension/StringExtension";
import {
  Box,
  Group,
  LoadingOverlay,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import Image from "next/image";
import { useState } from "react";
import style from "./loginhc.module.scss";

const EmailSendRsPassword = ({ userName }: { userName: string }) => {
  const [recoverCode, setRecoverCode] = useState("");
  const [newPass, setNewPass] = useState("");
  const [visible, { toggle, close, open }] = useDisclosure(false);
  const [focused, setFocused] = useState(false);
  const floating = newPass
    ? focused || newPass.length > 0
    : recoverCode.length > 0 || undefined;
  function openSendlink() {
    modals.closeAll();
    modals.openConfirmModal({
      size: "750px",
      radius: "16px",
      centered: true,
      children: <HomeFooterIconCard1 />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  }

  const handleKeyDown = async (e: any) => {
    if (e.key === "Enter") {
      if (recoverCode.trim() !== "") {
        open();
        const response = await AuthService.recoveryPass({
          userName: userName,
          code: recoverCode.trim(),
        });
        if (isNullOrUndefined(response) && isNullOrUndefined(response.data)) {
          NotificationExtension.Warn("Có lỗi xảy ra vui lòng thử lại");
        } else setNewPass(response.data);
        close();
      } else NotificationExtension.Warn("Bạn chưa nhập mã khôi phục");
    }
  };

  const handleButtonClick = () => {
    const enterEvent = new KeyboardEvent("keydown", { key: "Enter" });
    handleKeyDown(enterEvent);
  };

  return (
    <AppContainer>
      <Box className={style.Boxone}>
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <div className={style.flexBox}>
          <Image className={style.email} src={email} alt="" />
          <Title
            ta="center"
            className={style.title}
            style={{
              fontSize: "22px",
              marginBottom: "25px",
            }}
          >
            {newPass ? (
              <>
                Dưới đây là mật khẩu mới của bạn
                <br />
                Bạn hãy dùng mật khẩu này để đăng nhập lại
              </>
            ) : (
              <>
                {" "}
                Chúng tôi đã gửi mã đặt lại mật khẩu của bạn
                <br />
                Bạn hãy kiểm tra lại tin nhắn hoặc email
              </>
            )}
          </Title>
          <div className={style.inputRow}>
            <TextInput
              label={
                newPass ? "Mật khẩu mới của bạn:" : "Nhập mã khôi phục tại đây:"
              }
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
              value={newPass ? newPass : recoverCode}
              onChange={(e) => setRecoverCode(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
            />
            <div>
              {newPass ? null : (
                <button onClick={handleButtonClick} className={style.button}>
                  Gửi Mã
                </button>
              )}
            </div>
          </div>

          <Text
            c="dimmed"
            size="sm"
            ta="center"
            mt={5}
            className={style.textspam}
          >
            Kiểm tra thư mục thư rác và quảng cáo nếu nó không xuất hiện
            <br />
            trong hộp thư chính của bạn{" "}
          </Text>
          {/* <Text
            c="dimmed"
            size="sm"
            ta="center"
            mt={5}
            style={{
              fontFamily: "Roboto",
              fontSize: "14px", // Kiểu chữ mới
              fontWeight: 400,
              lineHeight: "22px", // Kiểu chữ mới
            }}
          >
            <Anchor
              size="sm"
              component="button"
              className={style.anchor}
              onClick={openSendlink}
              style={{
                marginBottom: "35px",
              }}
            >
              Bạn không nhận được email?
            </Anchor>
          </Text> */}
        </div>
      </Box>
    </AppContainer>
  );
};
export default EmailSendRsPassword;
