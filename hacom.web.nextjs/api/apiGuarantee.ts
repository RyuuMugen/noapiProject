import { AxiosResponse } from "axios";
import { API_ROUTE } from "../const/apiRoute";
import { HandleResponseError } from "./handleError";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { api1, api2, apiGuarantee } from "@/library/axios";
import { isNullOrUndefined } from "@/extension/StringExtension";

export const createGuarantee = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await apiGuarantee.post(
      API_ROUTE.CREATE_GUARANTEE,
      data
    );
    if (!isNullOrUndefined(response) && response?.data?.success) {
      NotificationExtension.Success("Gửi yêu cầu thành công");
    } else if (response != null)
      NotificationExtension.Fails("Gửi yêu cầu thất bại !");
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const getListGuarantee = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await apiGuarantee.get(
      API_ROUTE.GET_LIST_GUARANTEE
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const getGuaranteeDetailOrder = async (data: string): Promise<any> => {
  try {
    const response: AxiosResponse = await apiGuarantee.post(
      `${API_ROUTE.DETAIL_GUARANTEE_ORDER + "?DIENTHOAI=" + data}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const getGuaranteeDetailProduct = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await apiGuarantee.post(
      `${API_ROUTE.DETAIL_GUARANTEE_PRODUCT + "?IdDonHang=" + data}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const getListProductGuarantee = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await apiGuarantee.get(
      API_ROUTE.GET_LIST_PRODUCT_GUARANTEE
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};
