import SelectedIcon from "@/assets/exchangebox.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TradeInItem, tblTradeInHeaderModels } from "@/model/TblTradeIn";
import { Group, TextInput, Select, Text, NumberFormatter } from "@mantine/core";
import { useForm, isNotEmpty } from "@mantine/form";
import { tblStore } from "@/model/TblStore";
import { getDataStore } from "@/api/apistore";
import IconArrowNarrowLeft from "@/assets/LeftArrow.png";
import style from "./step4.module.scss";

interface formUser {
  email: string;
  name: string;
  phone: string;
  provinceId: string;
}
interface Step4Prop {
  data: TradeInItem;
  totalPrice: number;
  prevStep: () => void;
  newPrice: number;
  setOrgId: React.Dispatch<React.SetStateAction<string>>;
  setMobileNumber: React.Dispatch<React.SetStateAction<string>>;
  setCusEmail: React.Dispatch<React.SetStateAction<string>>;
  setCusName: React.Dispatch<React.SetStateAction<string>>;
  nextStep: () => void;
}
const Step4: React.FC<Step4Prop> = ({
  data,
  totalPrice,
  newPrice,
  prevStep,

  setOrgId,
  setMobileNumber,
  setCusEmail,
  setCusName,
  nextStep,
}) => {
  const [dataAllStore, setDataAllStore] = useState<tblStore[]>([]);
  const [dataOptionStore, setDataOptionStore] = useState<any[]>([]);
  const [selectedStore, setSelectedStore] = useState<tblStore>();
  const priceSubsidy = (newPrice / 100) * 10;
  const salePrice = newPrice - totalPrice - priceSubsidy;
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      provinceId: "",
    },

    validate: {
      name: isNotEmpty("Chưa nhập tên người muốn bán lại"),
      phone: (value) =>
        /^\d{10}$/.test(value.trim()) ? null : "Số điện thoại không hợp lệ",
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Địa chỉ mail không hợp lệ",
      provinceId: isNotEmpty("Chưa chọn chi nhánh"),
    },
  });
  const onFinish = (values: formUser) => {
    setOrgId(values.provinceId.toString());
    setMobileNumber(values.phone);
    setCusEmail(values.email);
    setCusName(values.name);
    nextStep();
  };

  const handleChangeSelectedStore = (id: string | null) => {
    if (id) {
      form.getInputProps("provinceId").onChange(Number(id));
      setSelectedStore(dataAllStore?.find((item: any) => item.id == id));
    }
  };
  const fetchDataProvince = async () => {
    const data = await getDataStore();
    setDataAllStore(data?.data.store);
  };
  useEffect(() => {
    fetchDataProvince();
  }, []);

  useEffect(() => {
    fetchDataProvince();
  }, []);

  useEffect(() => {
    setDataOptionStore(
      dataAllStore?.map((item: tblStore) => {
        return {
          value: item.id.toString(),
          label: item.storeName,
        };
      })
    );
  }, [dataAllStore]);

  return (
    <div className={style.main}>
      <h1 className={style.title}>Thông tin thu cũ</h1>
      <div className={style.contentbox}>
        <div>
          <img className={style.image} src={data?.primaryImage || ""} alt="" />
        </div>
        <div className={style.contentbox2}>
          <span>Tên sản phẩm:</span>
          <span className={style.color}> {data?.itemName}</span>
          <p>
            <div className={style.prices}>
              <Text className={style.newPrice}>
                Giá mới:
                <NumberFormatter
                  value={newPrice}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
              <Text className={style.newPrice}>
                Máy cũ của bạn:
                <NumberFormatter
                  value={totalPrice}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
              <Text className={style.newPrice}>
                Hacom trợ giá:
                <NumberFormatter
                  value={(totalPrice / 100) * 10}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
              <Text className={style.newPrice}>
                {salePrice < 0 ? "Còn dư:" : "Giá mới:"}
                <NumberFormatter
                  value={salePrice < 0 ? Math.abs(salePrice) : salePrice}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
            </div>
          </p>
          <div>
            <form onSubmit={form.onSubmit((values) => onFinish(values))}>
              <Group justify="space-between" mt="md">
                <TextInput
                  className={style.input}
                  label="Họ và tên"
                  placeholder="Nhập họ và tên"
                  {...form.getInputProps("name")}
                />
              </Group>
              <Group justify="space-between" mt="md">
                <TextInput
                  className={style.input}
                  label="Số điện thoại"
                  placeholder="Nhập số điện thoại"
                  {...form.getInputProps("phone")}
                />
              </Group>
              <Group justify="space-between" mt="md">
                <TextInput
                  className={style.input}
                  label="Enail"
                  placeholder="Nhập địa chỉ email"
                  {...form.getInputProps("email")}
                />
              </Group>
              <Group justify="space-between" mt="md">
                <Select
                  id="bbbb"
                  className={style.input}
                  label="Địa điểm thu máy"
                  placeholder="Chọn cửa hàng"
                  nothingFoundMessage="Không có dữ liệu"
                  data={dataOptionStore}
                  searchable
                  withAsterisk
                  onChange={(e) => handleChangeSelectedStore(e)}
                />
              </Group>
              <div className={style.ligroup}>
                <li>
                  Bảng giá mang tính chất tham khảo, có thể thay đổi theo màu
                  sắc.
                </li>
                <li>
                  Mức trợ giá không áp dụng với toàn bộ sản phẩm thu vào, Quý
                  Khách vui lòng đem máy tới cửa hàng để được định giá và bán
                  lại - lên đời với giá tốt nhất.
                </li>
              </div>
              <div>
                <button className={style.modalbutton2} onClick={prevStep}>
                  <Image src={IconArrowNarrowLeft} alt="" /> Chọn lại{" "}
                </button>
                <button className={style.modalbutton} type="submit">
                  Xác nhận
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step4;
