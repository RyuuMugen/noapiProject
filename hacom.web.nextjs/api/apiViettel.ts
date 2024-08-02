import { AxiosResponse } from "axios";
import { API_ROUTE } from "@/const/apiRoute";
import { HandleResponseError } from "./handleError";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { api2 } from "@/library/axios";

export const takeDeliveryfeeViettel = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api2.post(
      `${API_ROUTE.GET_DATA_DELIVERY_FEE_VIETTEL}`,
      data
    );
    return response.data;
  } catch (error) {
    // HandleResponseError(error);
    return [];
  }
};
