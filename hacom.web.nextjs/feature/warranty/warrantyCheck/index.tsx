"use client";
import AppContainer from "@/common/AppContainer";
import { Button, Input } from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { IconSearch } from "@tabler/icons-react";
import { Roboto } from "next/font/google";
import style from "./style.module.scss";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function warrantyCheck() {
  const form = useForm({
    initialValues: {
      duration: "",
    },
    validate: {
      duration: isNotEmpty("Bạn chưa nhập số serial của sản phẩm để tra cứu"),
    },
  });

  const form2 = useForm({
    initialValues: {
      information: "",
    },
    validate: {
      information: isNotEmpty(
        "Bạn chưa nhập serial, số điện thoại, hoặc số phiếu bảo hành để tra cứu"
      ),
    },
  });
  const submitForm1 = async (dataSubmit: any) => {
    console.log(dataSubmit);
  };
  const submitForm2 = async (dataSubmit: any) => {
    console.log(dataSubmit);
  };
  return (
    <main className={roboto.className}>
      <AppContainer>
        <div className={style.main}>
          <div>
            <h1 className={style.title}>
              TRA CỨU THÔNG TIN BẢO HÀNH CỦA SẢN PHẨM
            </h1>
          </div>
          <div className={style.formBox}>
            <div className={style.titleForm}>
              Tra cứu thời hạn bảo hành của sản phẩm
            </div>
            <div className="clear"></div>
            <form
              className={style.form}
              onSubmit={form.onSubmit((e) => {
                submitForm1(e);
              })}
            >
              <Input
                className={style.input}
                size="xs"
                radius="md"
                type="text"
                placeholder="Nhập số serial của sản phẩm để tra cứu"
                {...form.getInputProps("duration")}
              />
              <Button
                className={style.button}
                type="submit"
                variant="filled"
                color="#ed1b24"
              >
                <IconSearch />
                TRA CỨU
              </Button>
            </form>
            <div className={style.submit}>
              {form.errors.duration && (
                <div className={style.errorMessage}>{form.errors.duration}</div>
              )}
            </div>
            <div className="clear"></div>
            <div className={style.titleForm}>
              Tra cứu thông tin sản phẩm đang gửi bảo hành
            </div>
            <div className="clear"></div>

            <form
              className={style.form}
              onSubmit={form2.onSubmit((e) => {
                submitForm2(e);
              })}
            >
              <Input
                className={style.input}
                size="xs"
                radius="md"
                type="text"
                placeholder="Nhập serial, số điện thoại, hoặc số phiếu bảo hành để tra cứu"
                {...form2.getInputProps("information")}
              />
              <Button
                className={style.button}
                type="submit"
                variant="filled"
                color="#ed1b24"
              >
                <IconSearch />
                TRA CỨU
              </Button>
            </form>
            <div className={style.submit}>
              {form2.errors.information && (
                <div className={style.errorMessage}>
                  {form2.errors.information}
                </div>
              )}
            </div>
          </div>
        </div>
      </AppContainer>
    </main>
  );
}
