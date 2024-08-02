"use client";
import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import style from "./Search.module.scss";
import { useState } from "react";
import { useRouter } from "next/navigation";


interface SearchProp {
  setValueSearch: React.Dispatch<React.SetStateAction<string>>;
}
const Search: React.FC<SearchProp> = ({  setValueSearch }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    setValueSearch(search);
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className={style.main}>
      <Input
        radius="lg"
        className={style.searchInput}
        placeholder="Nhập tên sản phẩm cần tìm"
        style={{ width: "100mw", height: 38 }}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className={style.searchButton} onClick={handleSearch}>
        <IconSearch color="#FFFFFF" />
      </button>
    </div>
  );
};

export default Search;
