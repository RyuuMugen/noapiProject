import { AxiosResponse } from "axios";
import { api } from "../library/axios";
import { API_ROUTE } from "../const/apiRoute";
import { NotificationExtension } from "../_base/extension/NotificationExtension";
import { HanderResponse } from "../_base/helper/FunctionHelper";
import { tblFixedContent, tblFixedContentType } from "../model/FixedContent";
import { isNullOrUndefined } from "../_base/extension/StringExtension";
import { UserManagementInterFace } from "../model/TblUserManagement";
import { apiMaster } from "../library/axiosMaster";
import { Modal, Button } from '@mantine/core';


export const deleteUserManagement = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await apiMaster.post(
      API_ROUTE.DELETE_MANAGEMENT,
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

export const ActivatedUserManagement = async (data: any): Promise<any> => {
    try {
      const response: AxiosResponse = await apiMaster.post(
        API_ROUTE.ACTIVATED_MANAGEMENT,
        data
      );
      if (!isNullOrUndefined(response) && response?.data?.success) {
        NotificationExtension.Success("kích hoạt thành công !");
      } else if (response != null) NotificationExtension.Fails("Kích hoạt thất bại !");
      return response.data;
    } catch (error) {
      HanderResponse(error);
    }
  };
  

export const ActivatedEdit = async (
  data: any
): Promise<any> => {
  try {
    const response: AxiosResponse = await apiMaster.post(
      API_ROUTE.EDIT_MANAGEMENT,
      data,
    );
    if (!isNullOrUndefined(response) && response?.data?.success) {
      NotificationExtension.Success("Chỉnh sửa thành công !");
    } else if (response != null)
      NotificationExtension.Fails("Chỉnh sửa thất bại !");
    return response.data;
  } catch (error) {
    HanderResponse(error);
  }
};

