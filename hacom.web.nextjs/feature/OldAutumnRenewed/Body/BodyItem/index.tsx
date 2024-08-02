"use client";
import style from "./BodyItem.module.scss";
import { useState, useEffect } from "react";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { useHeaderContext } from "@/useContext/useContextSearch";
import { getListTradeInProduct } from "@/api/apiTradeIn";
import CardProductTradeIn from "@/common/CardProductTradeIn";
import { Pagination, Flex } from "@mantine/core";
interface ItemProps {
  value: number;
  search: string;
}
const BodyItem: React.FC<ItemProps> = ({ value, search }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  let itemsPerPage = 24;
  const skip = (currentPage - 1) * itemsPerPage;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const callApiGetData = async () => {
    try {
      let callapi = await getListTradeInProduct(
        `CatId=${value}&Skip=${skip}&Take=${itemsPerPage}&KeySearch=${search}`
      );
      if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
        const dataApi = callapi?.data;
        const totalData = callapi?.totalCount;
        const totalPages = Math.ceil(totalData / itemsPerPage);
        if (dataApi != null && !isNullOrUndefined(dataApi)) {
          setData(dataApi);
          setTotalPages(totalPages);
        }
      } else {
        console.log("Dữ liệu không tồn tại");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    callApiGetData();
  }, [value, search]);

  useEffect(() => {
    callApiGetData();
  }, [currentPage]);

  return (
    <div className={style.main}>
      <Flex
        justify={"space-around"}
        style={{
          paddingBottom: 50,
          flexWrap: "wrap",
          rowGap: "50px",
          gap: "20px",
        }}
        className={style.main}
      >
        {data?.map((item: any, index: number) => {
          return (
            <CardProductTradeIn
              key={index}
              data={item.item}
              tblTradeInHeaderModels={item.tblTradeInHeaderModels}
            />
          );
        })}
      </Flex>
      <div className={style.paginationContainer}>
        <Pagination
          total={totalPages}
          value={currentPage}
          classNames={style}
          color="#1F67D2"
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default BodyItem;
