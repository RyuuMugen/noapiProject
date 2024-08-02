import AuthService from "@/api/login/auth.service";
import EmailSendRsPassword from "@/app/Auth/EmailSendRsPassword/index";
import { PasswordRecovery } from "@/model/AuthService";
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  LoadingOverlay,
  TextInput,
  Title,
} from "@mantine/core";
import { isEmail, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import style from "./Passwordrecovery.module.scss";
import RegisterModal from "@/common/HeaderHome/components/User/Register";
import ReActiveModalWithoutPassword from "@/common/HeaderHome/components/User/Reactive/ReActiveModalWithoutPassWord";

const PasswordRecoveryModal = () => {
  const entity = {
    username: "",
  };

  const [visible, { toggle, close, open }] = useDisclosure(false);

  const form = useForm<PasswordRecovery>({
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
    },
  });
  const [focused, setFocused] = useState(false);
  const floating = focused || form.values.username.length > 0 || undefined;

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

  function openFormReActiveWithoutPassword() {
    modals.closeAll();
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
  const handleSubmit = async (dataSubmit: PasswordRecovery) => {
    if (form.isValid()) {
      // Nếu dữ liệu hợp lệ, gọi hàm handlePasswordRecovery
      open();
      const status = await AuthService.passwordRecovery(dataSubmit);
      close();

      if (
        status === "Tài khoản không tồn tại !" ||
        status === "Người dùng không tồn tại !"
      ) {
        openFormRegisterone();
      } else if (status === "Tài khoản chưa được kích hoạt !") {
        openFormReActiveWithoutPassword();
      } else {
        modals.closeAll();
        modals.openConfirmModal({
          size: "750px",
          radius: "16px",
          centered: true,
          children: <EmailSendRsPassword userName={dataSubmit.username} />,
          confirmProps: { display: "none" },
          cancelProps: { display: "none" },
        });
      }
    }
  };

  return (
    <Box
      className={style.Boxone}
      component="form"
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      <Container className={style.containerall}>
        <Title className={style.divtitle}>
          <h2 className={style.heading}>Khôi phục mật khẩu</h2>
          <span className={style.infoText}>
            <text>
              Nhập email bạn đã sử dụng khi đăng ký tài khoản để lấy lại mật
              khẩu. Bạn sẽ nhận được mail để khôi phục mật khẩu
              <br />
              liên kết đặt lại mật khẩu.
            </text>
          </span>
        </Title>
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
        <div>
          <button
            className={
              form.values.username.length < 1
                ? style.buttonDisabled
                : style.button
            }
            type="submit"
            disabled={form.values.username.length < 1}
          >
            Gửi Link kích hoạt/ mã kích hoạt
          </button>
        </div>
      </Container>
    </Box>
  );
};

export default PasswordRecoveryModal;
