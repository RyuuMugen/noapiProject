import { AxiosResponse } from "axios";
import { API_ROUTE } from "@/const/apiRoute";
import { HandleResponseError } from "./handleError";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { apiTool } from "@/library/axios";

export const getMembershipCard = async (query: any): Promise<any> => {
  try {
    const response: AxiosResponse = await apiTool.get(
      `${API_ROUTE.GET_MEMBERSHIPCARD}?${query}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
    return [];
  }
};

export const getRankList = async (query: any): Promise<any> => {
  try {
    const response: AxiosResponse = await apiTool.get(
      `${API_ROUTE.GET_RANK}?${query}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
    return [];
  }
};

export const remainingMoney = async (query: any): Promise<any> => {
  try {
    const response: AxiosResponse = await apiTool.get(
      `${API_ROUTE.GET_REMAINING_MONEY}?${query}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
    return [];
  }
};