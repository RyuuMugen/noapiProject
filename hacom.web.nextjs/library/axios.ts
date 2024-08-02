import axios, { AxiosResponse, AxiosError } from "axios";
import {
  BASE_API_URL,
  BASE_API_URL2,
  BASE_API_GHTK,
  BASE_API_NTL,
  BASE_WEB_GUARANTEE,
  BASE_API_URL_TOOL,
  BASE_API_AUTH_URL,
  BASE_API_SCA,
} from "@/config";
import AuthService from "@/api/login/auth.service";

const createApiInstance = (baseURL: string) => {
  const api = axios.create({
    baseURL,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
    },
  });

  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      // Xử lý lỗi mạng hoặc lỗi từ server ở đây
      console.error("API request failed:", error);

      if (error?.response?.status == 401) {
        //loi 401 thi call lại api refresh tại đây
        const originalRequest = error?.config;
        if (error?.response?.status == 401 && localStorage.getItem("jwt")) {
          const userName = localStorage.getItem("userName") || "{}";
          const refreshToken = localStorage.getItem("refreshToken") || "{}";
          const id = localStorage.getItem("id") || "{}";
          const dataRefresh = await AuthService.refreshToken({
            userName: userName,
            refreshToken: refreshToken,
            id: id,
          });
          //console.log("dataRefresh", dataRefresh);
          originalRequest.headers.Authorization = `Bearer ${dataRefresh?.data?.jwt}`;
          return axios(originalRequest);
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
};

const api1 = createApiInstance(BASE_API_URL || "");
const api2 = createApiInstance(BASE_API_URL2 || "");
const apiGHTK = createApiInstance(BASE_API_GHTK || "");
const apiNTL = createApiInstance(BASE_API_NTL || "");
const apiGuarantee = createApiInstance(BASE_WEB_GUARANTEE || "");
const apiTool = createApiInstance(BASE_API_URL_TOOL || "");
const apiAuth = createApiInstance(BASE_API_AUTH_URL || "");
const apiSCA = createApiInstance(BASE_API_SCA || "");

export { api1, api2, apiGHTK, apiNTL, apiGuarantee, apiTool, apiAuth, apiSCA };
