"use client";

import { getCustomerInfo, getCustomerInfoByUserName } from "@/api/apiCustomer";
import { isNullOrUndefined } from "@/extension/StringExtension";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface AuthContextProps {
  userInfo: any;
  handleGetUserInfo: (token?: string) => void;
  setUserInfo: (userInfo: any) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userInfo, setUserInfo] = useState();
  const handleGetUserInfo = async () => {
    if (
      localStorage.getItem("loginType") === "google" ||
      !localStorage.getItem("jwt")
    ) {
      if (localStorage.getItem("userName")) {
        const dataApi = await getCustomerInfoByUserName(
          `?userName=${localStorage.getItem("userName")}`
        );
        if (!isNullOrUndefined(dataApi) && !isNullOrUndefined(dataApi.data)) {
          setUserInfo(dataApi);
          localStorage.setItem("userInfo", JSON.stringify(dataApi));
        }
      }
    } else {
      const userInfo = await getCustomerInfo();
      if (!isNullOrUndefined(userInfo) && !isNullOrUndefined(userInfo?.data)) {
        setUserInfo(userInfo);
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        localStorage.setItem("userName", userInfo.data.userName);
      } else {
        const userData = localStorage.getItem("userInfo");
        setUserInfo(userData ? JSON.parse(userData) : undefined);
      }
    }
  };

  useEffect(() => {
    handleGetUserInfo();
  }, []);

  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo, handleGetUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
};
