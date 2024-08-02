import { AxiosResponse } from "axios";
import { API_ROUTE } from "../const/apiRoute";
import { HandleResponseError } from "./handleError";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { api1 } from "@/library/axios";

export const getDataStore = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.post(
      `${API_ROUTE.GET_STORE_LIST}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
  }
};

