import { API_ROUTE } from "@/const/apiRoute";
import { api1 } from "@/library/axios";
import { AxiosResponse } from "axios";

export const getSearchProduct = async (searchValue: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.post(
      API_ROUTE.GET_SEARCH_PRODUCT + searchValue
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getListCategoryIdForSearch = async (
  searchValue: any
): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      API_ROUTE.GET_SEARCH_LIST_CATEGORY + searchValue
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getCategoryById = async (searchValue: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      API_ROUTE.GET_SEARCH_CATEGORY + searchValue
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};

export const getSearchNormalProduct = async (
  searchValue: any
): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      API_ROUTE.GET_SEARCH_PRODUCT_NORMAL + searchValue
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
