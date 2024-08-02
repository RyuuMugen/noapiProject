"use client";
import { getListArticleCategory } from "@/api/apiArticle";
import NewsCategoryLink from "@/common/NewsCategoryLink";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { Flex } from "@mantine/core";
import Loader from "@/common/Loader";
import { useEffect, useState } from "react";
import Link from "@/common/Link";
import { useHeaderContext } from "@/useContext/useContextSearch";
import { usePathname } from "next/navigation";
import style from "./CategoryList.module.scss";

const CategoryList = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const [displayCount, setDisplayCount] = useState(12);
  const isDataReady = !isNullOrUndefined(data) && data.length > 0;
  const { categorySearch } = useHeaderContext();
  const link = { title: `${categorySearch?.categoryName}`, url: "#" };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const callapi = await getListArticleCategory("&Take=50");
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
  }, []);
  return (
    <div className={style.saleBackground}>
      {isDataReady && (
        <div>
          {pathname === "/news" ? null : <Link link={link} />}
          <Flex className={style.boxCategories} gap="10px">
            {data?.map((item: any, index: any) => (
              <NewsCategoryLink
                title={item.name}
                code={item.code}
                id={item.id}
              />
            ))}
          </Flex>
        </div>
      )}
    </div>
  );
};

export default CategoryList;

type RectangleCardProps = {
  item: {
    title: string;
    idCategory: number;
    categoryCode: string;
  };
};
