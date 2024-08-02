// DataContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { getDataListProductFull } from "@/api/apiProduct";
import { TblItem } from "@/model/ProductList";
import { isNullOrUndefined } from "@/extension/StringExtension";

interface DataContextType {
  data: TblItem[];
  loading: boolean;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

interface DataProviderProps {
  children: ReactNode;
  fetchUrl: string;
}

export const DataProvider: React.FC<DataProviderProps> = ({
  children,
  fetchUrl,
}) => {
  const [data, setData] = useState<TblItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const callapi = await getDataListProductFull(fetchUrl);
        if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
          const dataApi = callapi?.data;
          if (dataApi != null && !isNullOrUndefined(dataApi)) {
            setData(dataApi);
          }
        } else {
          console.log("Dữ liệu không tồn tại");
        }
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};
