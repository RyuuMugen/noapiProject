import { api1 } from "@/library/axios";
import { AxiosResponse } from "axios";
import { API_ROUTE } from "../const/apiRoute";
import { HandleResponseError } from "./handleError";

export const getDataCollection = async (query: string): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      `${API_ROUTE.GET_LIST_ITEM_COLLECTION}?${query}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const detailCollection = async (query: string): Promise<any> => {
    try {
      const response: AxiosResponse = await api1.get(
        `${API_ROUTE.DETAIL_COLLECTION}?${query}`
      );
      return response.data;
    } catch (error) {
      HandleResponseError(error);
    }
  };

