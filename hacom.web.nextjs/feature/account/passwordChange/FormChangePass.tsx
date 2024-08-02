import AuthService from "@/api/login/auth.service";
import { UpdatePassword } from "@/model/AuthService";
import { Box, Button, LoadingOverlay, PasswordInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { IconEye, IconEyeOff } from "@tabler/icons-react";
import style from "./FormChangePass.module.scss";

const FormChangePass = () => {
  const [visible, { toggle, close, open }] = useDisclosure(false);
  const entity = {
    passOld: "",
    passNew: "",
    rePassNew: "",
  };

  const form = useForm<UpdatePassword>({
    initialValues: {
      ...entity,
    },

    validate: {
      passOld: isNotEmpty("Vui lòng nhập mật khẩu cũ"),
      passNew: isNotEmpty("Vui lòng nhập mật khẩu mới"),
      rePassNew: (value: string) => {
        if (!value) return "Vui lòng nhập nhập lại mật khẩu";
        else if (value !== form.values.passNew)
          return "Nhập lại mật khẩu không chính xác";
      },
      //   !value
      //     ? "Vui lòng nhập lại mất khẩu"
      //     : value !== form.values.passNew
      //     ? "Nhập lại mật khẩu không chính xác"
      //     : null,
    },
  });

  const handleSubmit = async (dataSubmit: UpdatePassword) => {
    open();
    await AuthService.callApiUpdatePassword(dataSubmit, clearForm);
    close();
  };
  const clearForm = () => {
    form.reset();
  };

  return (
    <Box
      component="form"
      className={style.formChange}
      onSubmit={form.onSubmit(handleSubmit)}
    >
      <LoadingOverlay
        visible={visible}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      <PasswordInput
        label="Mật khẩu hiện tại"
        placeholder="Nhập mật khẩu hiện tại"
        className={style.spaceBottom}
        {...form.getInputProps("passOld")}
        visibilityToggleIcon={({ reveal }) =>
          reveal ? (
            <IconEyeOff style={{ width: "30px", height: "20px" }} />
          ) : (
            <IconEye style={{ width: "30px", height: "20px" }} />
          )
        }
      />
      <PasswordInput
        label="Mật khẩu mới"
        placeholder="Nhập mật khẩu mới"
        className={style.spaceBottom}
        {...form.getInputProps("passNew")}
        visibilityToggleIcon={({ reveal }) =>
          reveal ? (
            <IconEyeOff style={{ width: "30px", height: "20px" }} />
          ) : (
            <IconEye style={{ width: "30px", height: "20px" }} />
          )
        }
      />
      <PasswordInput
        label="Nhập lại mật khẩu mới"
        placeholder="Nhập lại mật khẩu mới"
        {...form.getInputProps("rePassNew")}
        visibilityToggleIcon={({ reveal }) =>
          reveal ? (
            <IconEyeOff style={{ width: "30px", height: "20px" }} />
          ) : (
            <IconEye style={{ width: "30px", height: "20px" }} />
          )
        }
      />
      <Button
        variant="filled"
        type="submit"
        radius="8px"
        className={style.btnChangePass}
        style={{ marginTop: "20px" }}
      >
        Thay đổi
      </Button>
    </Box>
  );
};

export default FormChangePass;
