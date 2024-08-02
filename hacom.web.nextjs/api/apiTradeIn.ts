import { api1 } from "@/library/axios";
import { AxiosResponse } from "axios";
import { API_ROUTE } from "../const/apiRoute";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { HandleResponseError } from "./handleError";

export const getListParent = async (query: string): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      `${API_ROUTE.GET_LIST_PARENT}?${query}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const getListTradeInProduct = async (query: string): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.post(
      `${API_ROUTE.GET_LIST_TRADEIN_PRODUCT}?${query}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const createTradeInOrder = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.post(
      API_ROUTE.CREATE_TRADEIN_ORDER,
      data
    );
    return NotificationExtension.Success(response.data?.message);
  } catch (error) {
    HandleResponseError(error);
  }
};
