import { AxiosResponse } from "axios";
import { API_ROUTE } from "@/const/apiRoute";
import { HandleResponseError } from "./handleError";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { apiSCA } from "@/library/axios";

export const takeDeliveryfeeSCA = async (data: any): Promise<any> => {
  const token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhZGRyZXNzIjoiMjcgUC4gSMOgbmcgxJDDoG8sIEjDoG5nIMSQw6BvLCBIb8OgbiBLaeG6v20sIEjDoCBO4buZaSwgVmnhu4d0IE5hbSIsIndhcmRzX2lkIjozMSwidXNlcl9pZCI6MjcwODIsInBob25lIjoiODQ3NjkyMzQ0MzEiLCJwcm92aW5jZV9pZCI6MSwibmFtZSI6Ikhvw6BuZyBI4bqjaSBMb25nIiwiZGlzdHJpY3RfaWQiOjIsImV4cCI6MTc0OTYyNDk0MiwiaWF0IjoxNzE4MDg4OTQyMDc3LCJ0b2tlbiI6bnVsbCwidXNlcm5hbWUiOiI4NDc2OTIzNDQzMSJ9.J-fcareJCcCaXpdSdTpJk4ecJI8OKhdgElzRwtN1mG1VvKw-d2BpoaRinMObpopTZ0KQkO4_OQKeDmUQAjsWLJHxR1eGbccn20DjmjRekkK7wW6eryHGuELMg2sMcwviiqPIs1ulTaI-Mu2DcekWJRuIErmoKk7NeJkZl0Xsa_A";
  try {
    const response: AxiosResponse = await apiSCA.post(
      `${API_ROUTE.GET_PRICE_ALL}`,
      data,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
    return [];
  }
};

export const takeProviceId = async (): Promise<any> => {
  try {
    const response: AxiosResponse = await apiSCA.get(
      `${API_ROUTE.GET_LIST_PROVINCE_SCA}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
    return [];
  }
};

export const takeDistrictId = async (idProvince: any): Promise<any> => {
  try {
    const response: AxiosResponse = await apiSCA.get(
      `${API_ROUTE.GET_LIST_DISTRICT_SCA}?province_id=${idProvince}`
    );
    return response.data;
  } catch (error) {
    HandleResponseError(error);
    return [];
  }
};
