import { AxiosResponse } from "axios";
import { API_ROUTE } from "../const/apiRoute";
import { HanderResponse } from "../_base/helper/FunctionHelper";
import { api } from "../library/axios";
import { NotificationExtension } from "../_base/extension/NotificationExtension";
import { isNullOrUndefined } from "../_base/extension/StringExtension";

export const getDataAppointment = async (
  query: string
): Promise<any> => {
  try {
    const response: AxiosResponse = await api.get(
      `${API_ROUTE.GET_LIST_APPOINTMENT}?${query}`
    );
    return response.data;
  } catch (error) {
    HanderResponse(error);
  }
};

export const createAppointment = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api.post(
      API_ROUTE.CREATE_APPOINTMENT,
      data
    );
    if (!isNullOrUndefined(response) && response?.data?.success) {
      NotificationExtension.Success("Tạo lịch hẹn bảo hành thành công");
    } else if (response != null)
      NotificationExtension.Fails("Tạo lịch hẹn bảo hành thất bại !");
    return response.data;
  } catch (error) {
    HanderResponse(error);
  }
};

export const editAppointment = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api.post(
      API_ROUTE.EDIT_APPOINTMENT,
      data
    );
    if (!isNullOrUndefined(response) && response?.data?.success) {
      NotificationExtension.Success(
        "Chỉnh sửa lịch hẹn bảo hành thành công"
      );
    } else if (response != null)
      NotificationExtension.Fails("Chỉnh sửa lịch hẹn bảo hành thất bại !");
    return response.data;
  } catch (error) {
    HanderResponse(error);
  }
};

export const deleteAppointment = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api.post(
      API_ROUTE.DELETE_APPOINTMENT,
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
