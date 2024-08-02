import { API_ROUTE } from "@/const/apiRoute";
import { api2 } from "@/library/axios";
import { AxiosResponse } from "axios";
import { HandleResponseError } from "./handleError";

export const apiRequestPayment = async (query: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api2.post(
      API_ROUTE.CREATE_REQUEST_PAYMENT,
      query
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const apiGetTransactionInfo = async (query: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api2.post(
      API_ROUTE.GET_TRANSACTION_INFO,
      query
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const apiGetInstallmentInfo = async (query: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api2.post(
      API_ROUTE.GET_INSTALLMENT_INFO,
      query
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const apiGetListBank = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api2.post(
      API_ROUTE.GET_LIST_BANKS,
      data
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

export const apiCreatePayment = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api2.get(API_ROUTE.CREATE_PAYMENT);
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};
