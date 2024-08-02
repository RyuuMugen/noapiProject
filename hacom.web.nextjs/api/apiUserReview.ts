import { API_ROUTE } from "@/const/apiRoute";
import { api1 } from "@/library/axios";
import { AxiosResponse } from "axios";
import { HandleResponseError } from "./handleError";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { isNullOrUndefined } from "@/extension/StringExtension";

export const createUserReview = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.post(
      API_ROUTE.CREATE_USER_REVIEW,
      data
    );
    if (!isNullOrUndefined(response) && response?.data?.success) {
      NotificationExtension.Success(
        "Gửi đánh giá thành công, Chờ duyệt để hiển thị"
      );
    } else if (response != null)
      NotificationExtension.Fails("Gửi đánh giá thất bại !");
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const getDataUserReview = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      `${API_ROUTE.GET_LIST_USER_REVIEW}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const getDataUserReviewDetail = async (id: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      `${API_ROUTE.GET_USER_REVIEW_DETAIL}${id}`
    );
    return response.data;
  } catch (error) {
    // HandleResponseError(error);
    console.error("Lỗi khi gọi API:", error);
  }
};
