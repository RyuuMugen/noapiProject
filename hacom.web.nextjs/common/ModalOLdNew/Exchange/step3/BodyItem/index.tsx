"use client";
import style from "./BodyItem.module.scss";
import { useState, useEffect } from "react";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { getListTradeInProduct } from "@/api/apiTradeIn";
import CardProduct from "../Card";
import { Pagination, Flex } from "@mantine/core";
interface ItemProps {
  tabvalue: number;
  search: string;
  nextStep: () => void;
  totalPrice: number;
  newPrice: number;
  setNewPrice: React.Dispatch<React.SetStateAction<number>>;
  setItemUpgradeId: React.Dispatch<React.SetStateAction<number>>;
  setItemUpgradeCode: React.Dispatch<React.SetStateAction<string>>;
}
const BodyItem: React.FC<ItemProps> = ({
  tabvalue,
  nextStep,
  search,
  totalPrice,
  newPrice,
  setNewPrice,
  setItemUpgradeId,
  setItemUpgradeCode,
}) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  let itemsPerPage = 46;
  const skip = (currentPage - 1) * itemsPerPage;
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const callApiGetData = async () => {
    try {
      let callapi = await getListTradeInProduct(
        `CatId=${tabvalue}&Skip=${skip}&Take=${itemsPerPage}&KeySearch=${search}`
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
  }, [tabvalue, search]);

  useEffect(() => {
    callApiGetData();
  }, [currentPage]);

  return (
    <div>
      <div className={style.scroll}>
        <Flex
          justify={"flex-start"}
          style={{ paddingBottom: 50, flexWrap: "wrap", rowGap: "50px" }}
          className={style.main}
        >
          {data?.map((item: any, index: number) => {
            return (
              <CardProduct
                key={index}
                data={item.item}
                nextStep={nextStep}
                totalPrice={totalPrice}
                setNewPrice={setNewPrice}
                newPrice={newPrice}
                setItemUpgradeCode={setItemUpgradeCode}
                setItemUpgradeId={setItemUpgradeId}
              />
            );
          })}
        </Flex>
      </div>
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
