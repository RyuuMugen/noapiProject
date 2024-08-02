import { API_ROUTE } from "@/const/apiRoute";
import { api1 } from "@/library/axios";
import { AxiosResponse } from "axios";
import { HandleResponseError } from "./handleError";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { NotificationExtension } from "@/extension/NotificationExtension";

export const getListBannerSlideData = async (query: string): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      `${API_ROUTE.GET_LIST_BANNER}?${query}`
    );
    if (!isNullOrUndefined(response) && response?.data?.success) {
      return response.data;
    } else if (response != null)
      NotificationExtension.Fails("Có lỗi xảy ra khi tải dữ liệu!");
  } catch (error) {
    HandleResponseError(error);
  }
};
