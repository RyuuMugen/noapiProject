import { AxiosResponse } from "axios";
import { API_ROUTE } from "../const/apiRoute";
import { HandleResponseError } from "./handleError";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { api1 } from "@/library/axios";

export const setUserLike = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.post(
      API_ROUTE.CREATE_USER_LIKE,
      data
    );
    NotificationExtension.Success("Thêm vào yêu thích thành công");
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const getDataUserLike = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      `${API_ROUTE.GET_USER_LIKE}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const getDataUserLikeDetail = async (id: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      `${API_ROUTE.GET_USER_LIKE_DETAIL}${id}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const deleteDataUserLike = async (data: any): Promise<any> => {

  try {
    const response: AxiosResponse = await api1.post(
      API_ROUTE.DELETE_USER_LIKE,
      data
    );
    NotificationExtension.Success("Xoá khỏi danh sách yêu thích thành công");
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};
