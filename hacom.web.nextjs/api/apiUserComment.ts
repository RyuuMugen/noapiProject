import { AxiosResponse } from "axios";
import { API_ROUTE } from "../const/apiRoute";
import { HandleResponseError } from "./handleError";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { api1 } from "@/library/axios";

export const createUserComment = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.post(
      API_ROUTE.CREATE_USER_COMMENT,
      data
    );
    NotificationExtension.Success(
      "Gửi bình luận thành công, Chờ duyệt để hiển thị"
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const getDataUserComment = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      `${API_ROUTE.GET_LIST_USER_COMMENT}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const getDataUserCommentDetail = async (id: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      `${API_ROUTE.GET_USER_COMMENT_DETAIL}${id}`
    );
    return response.data;
  } catch (error) {
    // HandleResponseError(error);
    console.error("Lỗi khi gọi API:", error);
  }
};

export const createUserCommentReply = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.post(
      API_ROUTE.CREATE_USER_COMMENT_REPLY,
      data
    );
    NotificationExtension.Success(
      "Gửi trả lời bình luận thành công, Chờ duyệt để hiển thị"
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};
