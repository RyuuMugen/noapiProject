import { AxiosResponse } from "axios";
import { API_ROUTE } from "@/const/apiRoute";
import { HandleResponseError } from "./handleError";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { apiNTL } from "@/library/axios";

export const takeDeliveryfeeNTL = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await apiNTL.post(
      `${API_ROUTE.GET_DATA_DELIVERY_FEE_NTL}`,
      data
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
    return [];
  }
};
