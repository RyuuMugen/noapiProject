import imageNull from "@/assets/noValue.png";
import AppContainer from "@/common/AppContainer";
import CardProductSearch from "@/common/CardProductSearch";
import Sorts from "@/common/CategoryFillter/Sort";
import { Flex, Pagination, Text } from "@mantine/core";
import { getDataCollection, detailCollection } from "@/api/apiCollection";
import Image from "next/image";
import Link from "@/common/Link";
import { useHeaderContext } from "@/useContext/useContextSearch";
import { useEffect, useRef, useState } from "react";
import { useParams, usePathname } from "next/navigation";
import { TblCollection } from "@/model/TblComboSetCollection";
import Styles from "./HomeSectionProduct.module.scss";
import { isNullOrUndefined } from "@/extension/StringExtension";

const productCollection = () => {
  const [data, setData] = useState([]);
  const [dataCollection, setDataCollection] = useState<TblCollection>();
  const { categorySearch } = useHeaderContext();
  const [config, setDataConfig] = useState("");
  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  let link = { title: `${dataCollection?.title}`, url: "#" };
  let itemsPerPage = 30;
  const skip = (currentPage - 1) * itemsPerPage;
  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];
  const handleScroll = () => {
    const container = containerRef.current;
    let offsetWidth = 1330;
    if (container) {
      const offset = window.scrollY;
      if (offset > offsetWidth && !isSticky) {
        setIsSticky(true);
      } else if (offset <= offsetWidth && isSticky) {
        setIsSticky(false);
      }
    }
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClickRangerPriceSearch = (value: [number, number]) => {};

  function replaceHtml(htmlString: any) {
    // Thay thế đường dẫn hình ảnh
    const replacedSrc = htmlString.replace(
      /src="\/media/g,
      'src="https://hanoicomputercdn.com/media'
    );
    return replacedSrc;
  }
  const handleChangePriceFilter = (filter: string | null) => {
    setPriceFilter(filter);
  };

  const callApiGetDetail = async (id?: string) => {
    const fetchData = async () => {
      let search = "";
      if (id) {
        search = id;
      } else {
        search = categorySearch?.categoryId.toString() || "";
      }
      const data = await detailCollection(`id=${search}`);
      setDataCollection(data?.data);
      setDataConfig(data?.data?.config);
    };
    fetchData();
  };

  const callApiGetData = async () => {
    const fetchData = async () => {
      let urlApi = `KeySearch=${config}&Skip=${skip}&Take=${itemsPerPage}`;

      if (priceFilter === "increase") {
        urlApi += `&SortOrder=0`;
      } else if (priceFilter === "decrease") {
        urlApi += `&SortOrder=1`;
      }
      const callapi = await getDataCollection(urlApi);
      if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
        const totalPages = Math.ceil(callapi.totalCount / itemsPerPage);
        setData(callapi.data);
        setTotalPages(totalPages);
      } else {
        setData([]);
        setTotalPages(0);
      }
    };
    fetchData();
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isSticky]);

  useEffect(() => {
    const queryString = window.location.href;

    const idCollection = queryString.split("?id=")[1];
    if (idCollection) {
      callApiGetDetail(idCollection);
    } else {
      callApiGetDetail();
    }
  }, [categorySearch, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
    callApiGetData();
  }, [dataCollection, priceFilter]);

  useEffect(() => {
    callApiGetData();
  }, [currentPage]);
  return (
    <AppContainer>
      <Link link={link} />
      {data.length === 0 ? (
        <>
          <div className={Styles.message}>
            <div
              ref={containerRef}
              className={`${Styles.sticky} ${
                isSticky ? Styles["category"] : ""
              }`}
            >
              <Sorts
                priceFilter={priceFilter}
                onSearch={handleClickRangerPriceSearch}
                handleChangePriceFilter={handleChangePriceFilter}
              />
            </div>
            <div className={Styles.noValue}>
              <Image src={imageNull} alt="" />
              <div>
                <p>Bộ sưu tập trống hoặc không tồn tại:</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>
          <Sorts
            priceFilter={priceFilter}
            onSearch={handleClickRangerPriceSearch}
            handleChangePriceFilter={handleChangePriceFilter}
          />

          <Flex
            justify={"center"}
            style={{ paddingBottom: 50 }}
            gap={20}
            rowGap={20}
            columnGap={20}
            wrap={"wrap"}
          >
            {data?.map((item: any, index: number) => {
              return <CardProductSearch key={index} data={item} />;
            })}
          </Flex>
          <div className={Styles.paginationContainer}>
            <Pagination
              total={totalPages}
              value={currentPage}
              classNames={Styles}
              color="#1F67D2"
              onChange={handlePageChange}
            />
          </div>
        </div>
      )}
      <Text size="15px" c="#1F2123" fw={400} className={Styles.content}>
        {dataCollection?.description && (
          <div
            className={Styles.contentText}
            dangerouslySetInnerHTML={{
              __html: replaceHtml(dataCollection.description),
            }}
          />
        )}
      </Text>
    </AppContainer>
  );
};

export default productCollection;
