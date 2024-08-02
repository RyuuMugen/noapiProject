"use client";

import {
  createContext,
  useContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import React from "react";

interface HeaderContextProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  categorySearch:
    | {
        categoryName: string | null;
        categoryCode: string | null;
        categoryId: number;
      }
    | undefined;
  setCategorySearch: Dispatch<
    SetStateAction<
      | {
          categoryName: string | null;
          categoryCode: string | null;
          categoryId: number;
        }
      | undefined
    >
  >;
}

const HeaderContext = createContext<HeaderContextProps | undefined>(undefined);

export const HeaderProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [categorySearch, setCategorySearch] = React.useState<{
    categoryName: string | null;
    categoryCode: string | null;
    categoryId: number;
  }>();

  return (
    <HeaderContext.Provider
      value={{
        searchValue,
        setSearchValue,
        categorySearch,
        setCategorySearch,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeaderContext = () => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error("useHeaderContext must be used within a HeaderProvider");
  }
  return context;
};
