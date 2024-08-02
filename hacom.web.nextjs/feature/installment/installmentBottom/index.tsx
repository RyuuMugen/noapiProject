"use client";

import { apiGetInstallmentInfo } from "@/api/apiAlePay";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import { Tabs, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import crypto from "crypto";
import NextImage from "next/image";
import { useEffect, useState } from "react";
import style from "./installmentBottom.module.scss";
import IconTG1 from "@/assets/icon-tg-1.png";
import IconTG2 from "@/assets/icon-tg-2.png";
import { installmentInfoType } from "@/model/installmentInfo";
import { TblInstallment } from "@/model/TblInstallment";
import { getListInstallment } from "@/api/apiInstallment";
import Bank from "./components/bank";
import { CartDetail } from "@/model/Cart";
import { InstallmentDataProps } from "@/model/TblInstallment";
import Company from "./components/company";
import Form from "./components/formInstallment";

const InstallmentBottom = ({
  formHidden,
  installmentItem,
  dataInstallment,
  setFormHidden,
  setCompleteHidden,
  setDataInstallment,
}: {
  formHidden: boolean;
  installmentItem: CartDetail[];
  dataInstallment: InstallmentDataProps;
  setCompleteHidden: React.Dispatch<React.SetStateAction<boolean>>;
  setFormHidden: React.Dispatch<React.SetStateAction<boolean>>;
  setDataInstallment: React.Dispatch<
    React.SetStateAction<InstallmentDataProps>
  >;
}) => {
  const { totalAmount } = useSaleOrder();
  const [visible, { toggle, open, close }] = useDisclosure(true);
  const [installmentWeb, setInstallmentWeb] = useState<TblInstallment[]>([]);

  const convertToQueryString = (input: any) => {
    const queryString = Object.keys(input)
      .map((key) => {
        return `${encodeURIComponent(key)}=${decodeURIComponent(
          encodeURIComponent(input[key])
        )}`;
      })
      .join("&");
    return queryString;
  };

  const generateSignature = (data: any, checksumKey: any) => {
    // Sắp xếp dữ liệu theo key theo thứ tự alphabet
    const sortedData: { [key: string]: any } = {};
    Object.keys(data)
      .sort()
      .forEach((key) => {
        sortedData[key] = data[key];
      });

    // Tạo chuỗi dữ liệu từ mảng key-value
    const dataString = convertToQueryString(sortedData);
    // Tạo signature sử dụng HMAC_SHA256
    const signature = crypto
      .createHmac("sha256", checksumKey)
      .update(dataString)
      .digest("hex");

    return signature;
  };

  useEffect(() => {
    const callApiGetListInstallment = async () => {
      open();
      const dataApi = await getListInstallment("Skip=0&take=20&Active=true");
      setInstallmentWeb(dataApi?.data.lists);
      close();
    };

    callApiGetListInstallment();
  }, [totalAmount]);

  return (
    <div>
      {formHidden ? (
        <Tabs classNames={style} defaultValue="tab1">
          <Tabs.List grow>
            <Tabs.Tab value="tab1" color={"blue"}>
              <div className={style.type}>
                <NextImage src={IconTG1} alt={""} />
                <div className={style.typeContent}>
                  <p>Công ty tài chính</p>
                  <span>Duyệt hồ sơ qua điện thoại</span>
                </div>
              </div>
            </Tabs.Tab>
            <Tabs.Tab value="tab2">
              <div className={style.type}>
                <NextImage src={IconTG2} alt={""} />
                <div className={style.typeContent}>
                  <p>qua thẻ tín dụng</p>
                  <span>Không cần xét duyệt</span>
                </div>
              </div>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="tab1">
            <Company
              installmentWeb={installmentWeb}
              setFormHidden={setFormHidden}
              setDataInstallment={setDataInstallment}
            />
          </Tabs.Panel>

          <Tabs.Panel value="tab2">
            <Bank installmentItem={installmentItem} />
          </Tabs.Panel>
        </Tabs>
      ) : (
        <Box>
          <Form
            setCompleteHidden={setCompleteHidden}
            installmentItem={installmentItem}
            dataInstallment={dataInstallment}
          />
        </Box>
      )}
    </div>
  );
};

export default InstallmentBottom;
