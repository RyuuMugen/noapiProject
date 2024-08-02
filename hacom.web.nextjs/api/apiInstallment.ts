import { AxiosResponse } from "axios";
import { API_ROUTE } from "@/const/apiRoute";
import { HandleResponseError } from "./handleError";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { api2 } from "@/library/axios";

export const getListInstallment = async (query: string): Promise<any> => {
  try {
    const response: AxiosResponse = await api2.get(
      `${API_ROUTE.GET_LIST_INSTALLMENT}?${query}`
    );
    if (!isNullOrUndefined(response) && response?.data?.success) {
      // NotificationExtension.Success("Lấy thông tin trả góp thành công");
    } else if (response != null)
      NotificationExtension.Fails("Lấy thông tin thất bại !");
    return response.data;
  } catch (error) {
    HandleResponseError(error);
    console.log(error);
  }
};

export const createGuarantee = async (
  data: any,
  setCompleteHidden?: React.Dispatch<React.SetStateAction<boolean>>
): Promise<any> => {
  try {
    const response: AxiosResponse = await api2.post(
      API_ROUTE.CREATE_INSTALLMENT_ORDER,
      data
    );
    if (!isNullOrUndefined(response) && response?.data?.success) {
      NotificationExtension.Success("Tạo đơn trả góp thành công");
      setCompleteHidden && setCompleteHidden(false);
    } else if (response != null)
      NotificationExtension.Fails("Tạo đơn trả góp thất bại !");
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};
