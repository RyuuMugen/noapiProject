"use client";

import { totalCartPrice } from "@/api/apiCart";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface CardItemsContextProps {
  cardItems: any[];
  addCardItem: (newItem: any[]) => void;
  fetchDataHeader: () => void;
  values: any;
  totalPrice: any;
}

const CardItemsContext = createContext<CardItemsContextProps | undefined>(
  undefined
);

export const useCardItems = () => {
  const context = useContext(CardItemsContext);
  if (!context) {
    throw new Error("useCardItems must be used within a CardItemsProvider");
  }
  return context;
};

interface CardItemsProviderProps {
  children: ReactNode;
}

export const CardItemsProvider: React.FC<CardItemsProviderProps> = ({
  children,
}) => {
  const [cardItems, setCardItems] = useState<any[]>([]);
  const [values, setValues] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const addCardItem = (newItem: any[]) => {
    setCardItems(newItem);
    localStorage.setItem("cardItems", JSON.stringify(newItem));
  };

  const fetchDataHeader = async () => {
    const userData = localStorage.getItem("userInfo");
    const id = userData ? JSON.parse(userData).data.customerId : 0;
    try {
      const totaldata = await totalCartPrice(id);
      setValues(totaldata?.data?.quantity);
      setTotalPrice(totaldata?.data?.totalAmount);
    } catch (error) {
      console.log("Lỗi khi lấy dữ liệu giỏ hàng", error);
    }
  };

  useEffect(() => {
    fetchDataHeader();
  }, []);

  return (
    <CardItemsContext.Provider
      value={{ cardItems, addCardItem, values, totalPrice, fetchDataHeader }}
    >
      {children}
    </CardItemsContext.Provider>
  );
};
