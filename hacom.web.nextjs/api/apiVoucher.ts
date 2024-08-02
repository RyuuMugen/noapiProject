import { API_ROUTE } from "@/const/apiRoute";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { apiTool } from "@/library/axios";
import { AxiosResponse } from "axios";

export const getDataDetailVoucher = async (query?: string): Promise<any> => {
  try {
    const response: AxiosResponse = await apiTool.get(
      API_ROUTE.DETAIL_MA_VOUCHER + query
    );

    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const sendMailToCreateVoucher = async (data?: any): Promise<any> => {
  try {
    const response: AxiosResponse = await apiTool.post(
      API_ROUTE.CREATE_TEST_VOUCHER,
      data
    );

    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
