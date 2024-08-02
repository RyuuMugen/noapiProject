import { API_ROUTE } from "@/const/apiRoute";
import { apiAuth } from "@/library/axios";
import { AxiosResponse } from "axios";

export const postLoggingAction = async (data: any): Promise<any> => {
  try {
    const response: AxiosResponse = await apiAuth.post(
      API_ROUTE.LOG_ACTION,
      data
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
