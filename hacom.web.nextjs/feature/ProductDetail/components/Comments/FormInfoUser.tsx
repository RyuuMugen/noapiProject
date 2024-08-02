import { TblUserComment, tblUserCommentReply } from "@/model/TblUserComment";
import { Box, Button, TextInput } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { tblCustomer } from "@/model/TblCustomer";
import React, { useState, useEffect } from "react";

type FormInfoUserType = {
  userName: string;
  userEmail: string;
  userPhone: string;
};

const FormInfoUser = ({
  handleSubmitComment,
  handleSubmitCommentReply,
  data,
}: FormInfoUserProps) => {
  const entity = {
    userName: "",
    userEmail: "",
    userPhone: "",
  };
  // const [phoneNumber, setPhoneNumber] = useState("");

  const form = useForm<FormInfoUserType>({
    initialValues: {
      ...entity,
    },
    validate: {
      userName: isNotEmpty("Họ tên chưa nhập"),
      userPhone: (value) =>
        value
          ? value.length != 10
            ? "Số điện thoại phải có 10 chữ số"
            : null
          : "Vui lòng nhập số điện thoại",
    },
  });

  const handleClickSubmit = (data: FormInfoUserType) => {
    const dataSubmit = {
      userName: data?.userPhone
        ? data.userName + ` Số đt : ` + data?.userPhone
        : data.userName,
      userEmail: data.userEmail,
    };
    if (handleSubmitComment) handleSubmitComment(dataSubmit);
    else if (handleSubmitCommentReply) handleSubmitCommentReply(dataSubmit);
  };

  useEffect(() => {
    if (data) {
      form.setFieldValue("userName", data?.customerName || "");
      form.setFieldValue("userEmail", data?.email || "");
      form.setFieldValue("userPhone", data?.telephoneNumber || "");
      // setPhoneNumber(data?.telephoneNumber || "");
    }
  }, []);
  return (
    <Box
      component="form"
      onSubmit={form.onSubmit((e: FormInfoUserType) => {
        handleClickSubmit(e);
      })}
    >
      <TextInput
        label="Họ và tên"
        placeholder="Họ và tên"
        mt={"md"}
        withAsterisk
        // value={data?.customerName || ""}
        {...form.getInputProps("userName")}
      />
      <TextInput
        label="Email"
        placeholder="Email (Để nhận phản hồi qua mail)"
        mt={"md"}
        type="email"
        // value={data?.email || ""}
        {...form.getInputProps("userEmail")}
      />
      <TextInput
        label="Số điện thoại"
        placeholder="Số điện thoại (Để nhận phản hồi)"
        withAsterisk
        mt={"md"}
        type="number"
        // value={phoneNumber}
        // onChange={(e) => setPhoneNumber(e.target.value)}
        {...form.getInputProps("userPhone")}
      />

      <Button mt={"lg"} w={"100%"} type="submit">
        Cập nhật
      </Button>
    </Box>
  );
};

export default FormInfoUser;

type FormInfoUserProps = {
  data?: tblCustomer;
  handleSubmitComment?: (data: { userName: string; userEmail: string }) => void;
  handleSubmitCommentReply?: (data: {
    userName: string;
    userEmail: string;
  }) => void;
};
