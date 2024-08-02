"use client";
import { tblSaleOrderDetailCommands } from "@/model/TblSaleOrder";
import { detailVoucher } from "@/model/TblVoucher";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface SaleOrderProviderProps {
  children: ReactNode;
}

interface SaleOrderContextProps {
  SaleOrderDetail: tblSaleOrderDetailCommands[];
  setSaleDetailOrder: Dispatch<SetStateAction<tblSaleOrderDetailCommands[]>>;
  totalAmount: number;
  setTotalAmount: Dispatch<SetStateAction<number>>;
  setDataSaleOderSuccess: Dispatch<SetStateAction<any>>;
  dataSaleOderSuccess: any;
  shipfeeSaleOrder: number;
  setShipfeeSaleOrder: Dispatch<SetStateAction<number>>;
  voucherApply: detailVoucher|null;
  setVoucherApply: Dispatch<SetStateAction<detailVoucher|null>>;
}

const SaleOrderContext = createContext<SaleOrderContextProps | undefined>(
  undefined
);

export const useSaleOrder = () => {
  const context = useContext(SaleOrderContext);
  if (!context) {
    throw new Error("useSaleOrder must be used within a SaleOrderProvider");
  }
  return context;
};

export const SaleOrderProvider: React.FC<SaleOrderProviderProps> = ({
  children,
}) => {
  const [SaleOrderDetail, setSaleDetailOrder] = useState<
    tblSaleOrderDetailCommands[]
  >([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [dataSaleOderSuccess, setDataSaleOderSuccess] = useState(0);
  const [shipfeeSaleOrder, setShipfeeSaleOrder] = useState(0);
  const [voucherApply, setVoucherApply] = useState<detailVoucher|null>(null);


  return (
    <SaleOrderContext.Provider
      value={{
        SaleOrderDetail,
        setSaleDetailOrder,
        totalAmount,
        setTotalAmount,
        setDataSaleOderSuccess,
        dataSaleOderSuccess,
        shipfeeSaleOrder,
        setShipfeeSaleOrder,
        voucherApply,
        setVoucherApply,
      }}
    >
      {children}
    </SaleOrderContext.Provider>
  );
};
