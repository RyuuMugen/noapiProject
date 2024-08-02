"use client";
import { getDataCategoryForSearch, getDataSuggest } from "@/api/apiMegaMenu";
import { CategoryTree } from "@/model/MegaMenu";
import { useHeaderContext } from "@/useContext/useContextSearch";
import { Box, Input } from "@mantine/core";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import style from "./Search.module.scss";

interface Category {
  id: number;
  categoryName: string;
  categoryCode: string;
  description: string;
}

const Search = () => {
  const [search, setSearch] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [dataSuggest, setDataSuggest] = useState([]);
  const { searchValue, setSearchValue } = useHeaderContext();
  const router = useRouter();
  const { setCategorySearch } = useHeaderContext();

  const handleSearch = () => {
    if (search.trim() !== "") {
      // Kiểm tra nếu input không rỗng
      setSearchValue(search);
      router.push(`/search?q=${search}`);
    }
  };
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && search.trim() !== "") {
      // Kiểm tra nếu nhấn Enter và input không rỗng
      handleSearch();
      setIsFocused(false);
    }
  };

  const handleSearchSuggest = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    const data = await getDataSuggest(e.target.value);
    setDataSuggest(data?.data);
  };

  const handleSelectedSuggest = (suggest: string) => {
    router.push(`/search?q=${suggest}`);
    setSearch("");
    setIsFocused(false);
  };

  return (
    <div className={style.main}>
      <Input
        radius="lg"
        variant="unstyled"
        className={style.searchInput}
        placeholder="Nhập tên sản phẩm cần tìm"
        style={{ width: "100mw", height: 38 }}
        value={search}
        onChange={(e) => handleSearchSuggest(e)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
      />
      <button className={style.searchButton} onClick={handleSearch}>
        <IconSearch color="#FFFFFF" />
      </button>

      <Box
        className={style.suggestWrap}
        style={{ display: search ? (isFocused ? "block" : "none") : "none" }}
      >
        {dataSuggest?.map((suggest, index) => (
          <Box
            className={style.suggestItem}
            key={index}
            onClick={() => handleSelectedSuggest(suggest)}
          >
            {suggest}
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Search;
