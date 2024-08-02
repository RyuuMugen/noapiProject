import { API_ROUTE } from "@/const/apiRoute";
import { api1, apiAuth } from "@/library/axios";
import { AxiosResponse } from "axios";
import { HandleResponseError } from "./handleError";
import { TblItem } from "@/model/ProductList";

export const getDataMegaMenu = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(API_ROUTE.GET_MEGA_MENU);
    return response.data;
  } catch (error) {
    //không thể gọi hàm HandleResponseError để show thông báo lỗi trên server
    console.log("error", error);
    // HandleResponseError(error);
  }
};

export const getDataCategoryForSearch = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(API_ROUTE.GET_CATEGORY_TREE);
    return response.data;
  } catch (error) {
    //không thể gọi hàm HandleResponseError để show thông báo lỗi trên server
    console.log("error", error);
    // HandleResponseError(error);
  }
};

export const getDataSuggest = async (query: string): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      `${API_ROUTE.GET_SUGGEST}?q=${query}`
    );
    return response.data;
  } catch (error) {
    //không thể gọi hàm HandleResponseError để show thông báo lỗi trên server
    console.log("error", error);
    // HandleResponseError(error);
  }
};
