import { createUserReview } from "@/api/apiUserReview";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { TblItem } from "@/model/ProductList";
import { TblUserReview } from "@/model/TblUserReview";
import {
  Box,
  Button,
  Flex,
  Rating,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { tblCustomer } from "@/model/TblCustomer";
import React, { useState, useEffect } from "react";
import style from "./Reviews.module.scss";

const FormInput = ({ dataUser, dataItem, fetchDataReview }: FormInputProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isReview, setIsReview] = useState(false);
  const entity = {
    id: 0,
    itemType: "product",
    replyCount: null,
    itemId: dataItem?.id || null,
    itemTitle: dataItem?.itemName,
    isUserAdmin: 0,
    userId: null,
    userEmail: null,
    userName: null,
    relatedOrder: null,
    userAvatar: null,
    userNote: null,
    rate: null,
    title: null,
    content: null,
    files: null,
    searchFulltext: null,
    approved: 0,
    postTime: null,
    ipAddress: null,
    userAgent: null,
    orderNumber: null,
    isFeatured: 0,
    peopleIdVote: null,
    peopleLikeCount: null,
    peopleDislikeCount: null,
    creationDate: null,
    createdBy: null,
    lastUpdateDate: null,
    lastUpdateTime: null,
    lastUpdateBy: null,
    userPhone: null,
  };

  const form = useForm<TblUserReview>({
    initialValues: {
      ...entity,
    },
    validate: {
      userName: isNotEmpty("Họ tên chưa nhập"),
      content: isNotEmpty("Nội dung đánh giá chưa nhập"),
      userPhone: (value) =>
        value
          ? value.length != 10
            ? "Số điện thoại phải có 10 chữ số"
            : null
          : "Vui lòng nhập số điện thoại",
    },
  });

  const handleClickSubmit = async (data: TblUserReview) => {
    if (data.rate) {
      setIsReview(false);
      const { userPhone, ...restData } = data;

      const dataSubmit = {
        ...restData,
        userName: data?.userPhone
          ? data.userName + ` Số đt : ` + data?.userPhone
          : data.userName,
      };

      await createUserReview(dataSubmit);
      modals.close("formInput");

      // fetchDataReview();
    } else setIsReview(true);
  };
  useEffect(() => {
    if (dataUser) {
      form.setFieldValue("userName", dataUser?.customerName || "");
      form.setFieldValue("userEmail", dataUser?.email || "");
      setPhoneNumber(dataUser?.telephoneNumber || "");
    }
  }, []);
  return (
    <Box
      component="form"
      onSubmit={form.onSubmit((e: TblUserReview) => {
        handleClickSubmit(e);
      })}
    >
      <Text fw={700}>Đánh giá sản phẩm</Text>
      <Flex align={"center"} gap={"md"}>
        <Rating size="md" mt={3} {...form.getInputProps("rate")} />
        {isReview && <Text className={style.error}>*Chưa chọn đánh giá</Text>}
      </Flex>

      <Text fw={700} mt={15}>
        Viết nhận xét
      </Text>

      <TextInput
        label="Họ tên"
        placeholder="Nhập họ tên của bạn"
        {...form.getInputProps("userName")}
        withAsterisk
        mt={"sm"}
      />
      <TextInput
        label="Số điện thoại"
        placeholder="Nhập số điện thoại"
        value={phoneNumber}
        withAsterisk
        type="number"
        {...form.getInputProps("userPhone")}
        mt={"sm"}
      />
      <TextInput
        label="Email"
        placeholder="Nhập địa chỉ email"
        type="email"
        {...form.getInputProps("userEmail")}
        mt={"sm"}
      />
      <Textarea
        label="Nội dung đánh giá"
        placeholder="Nhập đánh giá về sản phẩm"
        {...form.getInputProps("content")}
        withAsterisk
        mt={"sm"}
      />
      <Button mt={15} type="submit">
        Gửi đánh giá
      </Button>
    </Box>
  );
};

export default FormInput;

type FormInputProps = {
  dataItem: TblItem | null;
  dataUser?: tblCustomer;
  fetchDataReview?: () => Promise<void>;
};
