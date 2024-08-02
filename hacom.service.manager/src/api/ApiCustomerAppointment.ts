import { AxiosResponse } from "axios";
import { API_ROUTE } from "../const/apiRoute";
import { HanderResponse } from "../_base/helper/FunctionHelper";
import { api } from "../library/axios";
import { NotificationExtension } from "../_base/extension/NotificationExtension";
import { isNullOrUndefined } from "../_base/extension/StringExtension";
import { TblCustomerAppointment } from "../model/TblCustomerAppointment";

export const getDataCustomerAppointment = async (
  query: string
): Promise<any> => {
  try {
    const response: AxiosResponse = await api.get(
      `${API_ROUTE.GET_LIST_CUSTOMER_APPOINTMENT}?${query}`
    );
    return response.data;
  } catch (error) {
    HanderResponse(error);
  }
};

export const createCustomerAppointment = async (
  data: TblCustomerAppointment
): Promise<any> => {
  try {
    const response: AxiosResponse = await api.post(
      API_ROUTE.CREATE_CUSTOMER_APPOINTMENT,
      data
    );
    if (!isNullOrUndefined(response) && response?.data?.success) {
      NotificationExtension.Success("Thêm mới lịch hẹn thành công !");
    } else if (response != null)
      NotificationExtension.Fails("Thêm mới lịch hẹn thất bại !");
    return response.data;
  } catch (error) {
    HanderResponse(error);
  }
};

export const editCustomerAppointment = async (
  data: TblCustomerAppointment
): Promise<any> => {
  try {
    const response: AxiosResponse = await api.post(
      API_ROUTE.EDIT_CUSTOMER_APPOINTMENT,
      data
    );
    if (!isNullOrUndefined(response) && response?.data?.success) {
      NotificationExtension.Success("Sửa lịch hẹn thành công !");
    } else if (response != null)
      NotificationExtension.Fails("Sửa lịch hẹn thất bại !");
    return response.data;
  } catch (error) {
    HanderResponse(error);
  }
};

export const deleteCustomerAppointment = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api.post(
      API_ROUTE.DELETE_CUSTOMER_APPOINTMENT,
      data
    );
    if (!isNullOrUndefined(response) && response?.data?.success) {
      NotificationExtension.Success("Xóa thành công !");
    } else if (response != null) NotificationExtension.Fails("Xóa thất bại !");
    return response.data;
  } catch (error) {
    HanderResponse(error);
  }
};
