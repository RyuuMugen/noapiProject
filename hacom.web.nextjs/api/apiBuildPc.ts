import { API_ROUTE } from "@/const/apiRoute";
import { api1 } from "@/library/axios";
import { AxiosResponse } from "axios";

export const getListItemBuildPc = async (searchValue: any): Promise<any> => {
  try {
    const response: AxiosResponse = await api1.get(
      API_ROUTE.GET_LIST_ITEM_BUILD + searchValue
    );
    return response.data;
  } catch (error) {
    console.log("error", error);
  }
};
