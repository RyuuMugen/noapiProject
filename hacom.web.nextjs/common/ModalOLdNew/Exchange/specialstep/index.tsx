import SelectedIcon from "@/assets/exchangebox.png";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TradeInItem, tblTradeInHeaderModels } from "@/model/TblTradeIn";
import { Group, TextInput, Select } from "@mantine/core";
import { useForm, isNotEmpty } from "@mantine/form";
import { tblStore } from "@/model/TblStore";
import { getDataStore } from "@/api/apistore";
import IconArrowNarrowLeft from "@/assets/LeftArrow.png";
import style from "./specialstep.module.scss";

interface SpecialStepProp {
  data: TradeInItem;
  totalPrice: number;
  prevStep: () => void;
  closeModal: () => void;
  finalStep2: () => void;
  setOrgId: React.Dispatch<React.SetStateAction<string>>;
  setMobileNumber: React.Dispatch<React.SetStateAction<string>>;
  setCusEmail: React.Dispatch<React.SetStateAction<string>>;
  setCusName: React.Dispatch<React.SetStateAction<string>>;
}
const SpecialStep: React.FC<SpecialStepProp> = ({
  data,
  totalPrice,
  prevStep,
  closeModal,
  finalStep2,
  setOrgId,
  setMobileNumber,
  setCusEmail,
  setCusName,
}) => {
  const [dataAllStore, setDataAllStore] = useState<tblStore[]>([]);
  const [dataOptionStore, setDataOptionStore] = useState<any[]>([]);
  const [selectedStore, setSelectedStore] = useState<tblStore>();
  const form = useForm({
    initialValues: {
      name: "",
      phone: "",
      provinceId: "",
      email: "",
    },

    validate: {
      name: isNotEmpty("Chưa nhập tên người muốn bán lại"),
      phone: (value) =>
        /^\d{10}$/.test(value.trim()) ? null : "Số điện thoại không hợp lệ",
      provinceId: isNotEmpty("Chưa chọn chi nhánh"),
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Địa chỉ mail không hợp lệ",
    },
  });
  const onFinish = (values: any) => {
    setOrgId(values.provinceId.toString());
    setMobileNumber(values.phone);
    setCusEmail(values.email);
    setCusName(values.name);
    finalStep2();
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
            Giá dự kiến thu lại
            <span className={style.color2}> {totalPrice}</span>
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

export default SpecialStep;
