import { AxiosResponse } from "axios";
import { API_ROUTE } from "@/const/apiRoute";
import { HandleResponseError } from "./handleError";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { apiGHTK } from "@/library/axios";

export const takeDeliveryfeeGHTK = async (query: string): Promise<any> => {
  const token = "28968247a8f3462d882ca5bca7d81971fa842cbc";
  try {
    const response: AxiosResponse = await apiGHTK.get(
      `${API_ROUTE.GET_DATA_DELIVERY_FEE}` + query,
      {
        headers: {
          Token: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    // HandleResponseError(error);
    return [];
  }
};
