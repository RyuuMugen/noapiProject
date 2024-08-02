"use client";
import { Button, Checkbox, Group, TextInput, Select } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import { tblProvince } from "@/model/TblAddress";
import { getDataProvice } from "@/api/ApiAddress";
import style from "./Form.module.scss";

const Form = () => {
  const [dataAllProvince, setDataAllProvince] = useState<tblProvince[]>([]);
  const [dataOptionProvince, setDataOptionProvince] = useState<any[]>([]);
  const [selectedProvince, setSelectedProvince] = useState<tblProvince>();
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      provinceId: "",
      type: "",
      status: "",
      product: "",
      Register: false,
    },

    validate: {},
  });
  const handleChangeSelectedProvince = (id: string | null) => {
    if (id) {
      form.getInputProps("provinceId").onChange(Number(id));
      setSelectedProvince(
        dataAllProvince?.find((item: any) => item.provinceId == id)
      );
    }
  };
  const fetchDataProvince = async () => {
    const data = await getDataProvice("Active=true&Skip=0&Take=1000");
    setDataAllProvince(data?.data);
  };
  useEffect(() => {
    fetchDataProvince();
  }, []);
  useEffect(() => {
    setDataOptionProvince(
      dataAllProvince?.map((item: tblProvince) => {
        return {
          value: item.provinceId.toString(),
          label: item.provinceName,
        };
      })
    );
  }, [dataAllProvince]);
  return (
    <div className={style.main}>
      <div className={style.title}>
        <span>
          Bạn không tìm thấy sản phẩm cần định giá? Để lại thông tin để HACOM tư
          vấn thêm bạn nhé
        </span>
      </div>

      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <Group justify="space-between" mt="md">
          <TextInput
            className={style.input}
            label="Họ và tên"
            placeholder="Nhập họ và tên"
            {...form.getInputProps("name")}
          />
          <TextInput
            className={style.input}
            label="Số điện thoại liên hệ"
            placeholder="Nhập số điện thoại"
            {...form.getInputProps("phone")}
          />
        </Group>
        <Group justify="space-between" mt="md">
          <Select
            id="bbbb"
            className={style.input}
            label="Chọn Tỉnh/Thành phố"
            placeholder="Tỉnh/Thành phố"
            nothingFoundMessage="Không có dữ liệu"
            data={dataOptionProvince}
            searchable
            withAsterisk
            
            onChange={(e) => handleChangeSelectedProvince(e)}
          />
          <TextInput
            className={style.input}
            label="Mẫu máy"
            placeholder="Nhập mẫu máy bạn cần thu"
            {...form.getInputProps("type")}
          />
        </Group>
        <Group justify="space-between" mt="md">
          <TextInput
            className={style.input}
            label="Ngoại hình/ Tình trạng"
            placeholder="Mô tả ngắn về ngoại hình và tình trạng"
            {...form.getInputProps("status")}
          />
          <TextInput
            className={style.input}
            label="Sản phẩm"
            placeholder="Sản phẩm cần tư vấn lên đời (nếu có)"
            {...form.getInputProps("product")}
          />
        </Group>

        <Group justify="center" mt="md">
          <Checkbox
            mt="md"
            label={
              <span className={style.label}>
                Đăng ký nhận bản tin khuyến mại qua email
              </span>
            }
            {...form.getInputProps("Register", { type: "checkbox" })}
          />
        </Group>
        <Group justify="center" mt="md">
          <Button className={style.button} type="submit">
            Gửi thông tin
          </Button>
        </Group>
      </form>
    </div>
  );
};

export default Form;
