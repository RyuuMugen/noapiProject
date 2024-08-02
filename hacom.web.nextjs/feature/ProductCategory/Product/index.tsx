"use client";
import { getListBannerSlideData } from "@/api/apiBanner";
import {
  getDataListProductFull,
  getDetailCategory,
  getListAttributeFilter,
  getListAttributeFilterArr,
  getListBrandSearch,
} from "@/api/apiProduct";
import { getSearchProduct } from "@/api/apiSearch";
import imageNull from "@/assets/noValue.png";
import AppContainer from "@/common/AppContainer";
import CardProductNormal from "@/common/CardProductNormal";
import CardProductSearch from "@/common/CardProductSearch";
import CarouselCommon from "@/common/CarouselCategory";
import ListBrand from "@/common/CategoryFillter/ListBrand";
import Sorts from "@/common/CategoryFillter/Sort";
import SelectGroup from "@/common/CategoryFillter/selection";

import { isNullOrUndefined } from "@/extension/StringExtension";
import { tblBanner } from "@/model/Banner";
import { TblListWeb } from "@/model/ProductList";
import { TblBrand } from "@/model/TblBrand";
import {
  AttributeOptionType,
  TblAttributeFilter,
  TblAttributeFilterOption,
} from "@/model/TblCategory";
import { useHeaderContext } from "@/useContext/useContextSearch";
import {
  Box,
  Breadcrumbs,
  Button,
  Flex,
  Pagination,
  Text,
} from "@mantine/core";
import Loader from "@/common/Loader";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useCallback, useEffect, useRef, useState } from "react";
import CategoryContent from "./CategoryContent";
import Styles from "./HomeSectionProduct.module.scss";
import { postLoggingAction } from "@/api/apiLogging";
import { IconCircleXFilled, IconX, IconXboxX } from "@tabler/icons-react";

interface ProductPerPage {
  page?: number;
  type: string;
}

const product: React.FC<ProductPerPage> = ({ page, type }) => {
  const params = useParams();

  const { searchValue, setSearchValue, categorySearch } = useHeaderContext();
  const [data, setData] = useState<TblListWeb[]>([]);
  const [dataBrand, setDataBrand] = useState<TblBrand[]>([]);
  const [dataCategory, setDataCategory] = useState<any>();
  const [dataBanner, setDataBanner] = useState<tblBanner[]>([]);
  const [dataCategoryList, setDataCategoryList] = useState<any>();
  const [criteria, setCriteria] = useState<{
    labels: string[];
    options: AttributeOptionType[];
    handleValue: string | null;
  }>({ labels: [], options: [], handleValue: null });

  const [selectedAttributeFilter, setSelectedAttributeFilter] = useState<
    (AttributeOptionType[] | null)[]
  >([]);
  const [dataAttributeFilter, setDataAttributeFilter] = useState<
    TblAttributeFilter[]
  >([]);

  const [dataAttributeFilterOption, setDataAttributeFilterOption] = useState<
    TblAttributeFilterOption[]
  >([]);
  const [rangerPrice, setRangerPrice] = useState<[number, number | undefined]>([
    0,
    undefined,
  ]);
  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProduct, setTotalProduct] = useState(0);
  const [selectedBrands, setSelectedBrands] = useState<string>("");
  const [selectedBrandIds, setSelectedBrandIds] = useState<string[]>([]);
  const [firstRender, setFirstRender] = useState<boolean>(true);
  const [handleRemoveItem, setHandleRemoveItem] = useState<number | undefined>(
    undefined
  );
  let itemsPerPage = 108;
  if (page) {
    itemsPerPage = page;
  }
  const skip = (currentPage - 1) * itemsPerPage;

  const handleScroll = () => {
    const container = containerRef.current;
    let offsetWidth = 0;
    if (type === "search") {
      offsetWidth = 180;
    } else if (type === "category") {
      offsetWidth = 640;
    }
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
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  const handleClickRangerPriceSearch = (value: [number, number]) => {
    setRangerPrice(value);
  };

  const handleChangePriceFilter = (filter: string | null) => {
    setPriceFilter(filter);
  };

  const callApiGetData = async () => {
    try {
      let callapi;
      setIsLoadingProduct(true);
      if (type !== "search" && dataCategory && currentPage) {
        let subUrl = `q_Search=categoryId%3D${dataCategory.id} `;

        let urlApi = `?Skip=${skip}&Take=${itemsPerPage}&Active=true&${subUrl}`;
        if (rangerPrice && rangerPrice.length > 0) {
          rangerPrice[0] &&
            (urlApi += ` AND unitSellingPrice%3E%3D${rangerPrice[0]} `);
          rangerPrice[1] &&
            (urlApi += ` AND unitSellingPrice%3C%3D${rangerPrice[1]} `);
        }

        if (selectedAttributeFilter && selectedAttributeFilter.length > 0) {
          const filteredAttributes = selectedAttributeFilter.filter(
            (attribute) => attribute !== null && attribute !== undefined
          );
          const urlParams = filteredAttributes
            .map((attributes) => {
              return (
                attributes &&
                attributes.length > 0 && // Kiểm tra xem attributes có phần tử hay không
                `(${attributes
                  .map((attribute) => {
                    return attribute && attribute.value
                      ? `itemAttrVIds%3D${attribute.value}`
                      : "";
                  })
                  .filter(Boolean) // Loại bỏ các chuỗi rỗng
                  .join(" OR ")})`
              );
            })
            .filter(Boolean) // Loại bỏ các chuỗi rỗng
            .join(" AND ");

          urlApi += "AND " + urlParams;
        }

        if (selectedBrandIds && selectedBrandIds.length > 0) {
          urlApi +=
            "AND " +
            `(${selectedBrandIds
              .map((brandId) => {
                return `brand%3D${brandId}`;
              })
              .filter(Boolean) // Lọc bỏ các giá trị rỗng
              .join(" OR ")})`;
        }
        if (priceFilter === "increase") {
          urlApi += `&q_Sort=unitSellingPrice%3Aasc`;
        } else if (priceFilter === "decrease") {
          urlApi += `&q_Sort=unitSellingPrice%3Adesc`;
        }

        callapi = await getSearchProduct(urlApi);
      } else if (searchValue && currentPage) {
        let subUrl = `q_Search=`;
        let urlApi = `?KeySearch=${searchValue}&Skip=${skip}&Take=${itemsPerPage}&SearchType=9&Active=true&${subUrl}`;

        if (selectedAttributeFilter && selectedAttributeFilter.length > 0) {
          const filteredAttributes = selectedAttributeFilter.filter(
            (attribute) => attribute !== null && attribute !== undefined
          );
          const urlParams = filteredAttributes
            .map((attributes) => {
              return (
                attributes &&
                attributes.length > 0 && // Kiểm tra xem attributes có phần tử hay không
                `(${attributes
                  .map((attribute) => {
                    return attribute && attribute.value
                      ? `itemAttrVIds%3D${attribute.value}`
                      : "";
                  })
                  .filter(Boolean) // Loại bỏ các chuỗi rỗng
                  .join(" OR ")})`
              );
            })
            .filter(Boolean) // Loại bỏ các chuỗi rỗng
            .join(" AND ");

          urlApi += urlParams;
        }
        if (rangerPrice && rangerPrice.length > 0) {
          rangerPrice[1] &&
            (selectedAttributeFilter.length < 1
              ? (urlApi += ` unitSellingPrice%3C%3D${rangerPrice[1]} `)
              : (urlApi += `AND unitSellingPrice%3C%3D${rangerPrice[1]} `));

          rangerPrice[0] &&
            (selectedAttributeFilter.length < 1
              ? (urlApi += `AND unitSellingPrice%3E%3D${rangerPrice[0]} `)
              : (urlApi += ` AND unitSellingPrice%3E%3D${rangerPrice[0]} `));
        }

        if (selectedBrandIds && selectedBrandIds.length > 0) {
          urlApi +=
            "AND " +
            `(${selectedBrandIds
              .map((brandId) => {
                return `brand%3D${brandId}`;
              })
              .filter(Boolean) // Lọc bỏ các giá trị rỗng
              .join(" OR ")})`;
        }
        if (priceFilter === "increase") {
          urlApi += `&q_Sort=unitSellingPrice%3Aasc`;
        } else if (priceFilter === "decrease") {
          urlApi += `&q_Sort=unitSellingPrice%3Adesc`;
        }

        callapi = await getSearchProduct(urlApi);
        postLoggingAction({
          userName: localStorage.getItem("userName"),
          actionType: "SearchKeyword",
          actionDetail: searchValue,
        });
      }

      if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
        const dataApi = callapi?.data;
        const totalData = callapi?.totalCount;
        const totalPages = Math.ceil(totalData / itemsPerPage);

        if (dataApi.length > 0) {
          setIsLoadingProduct(false);
          setData(dataApi);
          setTotalProduct(dataApi.length);
          setTotalPages(totalPages);
        } else {
          setIsLoadingProduct(false);
          setData([]);
          setTotalProduct(0);
          setTotalPages(0);
        }
      } else {
        console.log("Dữ liệu không tồn tại");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoadingProduct(false);
    }
  };

  const handleSetCriteria = (
    data: { labels: string[]; options: AttributeOptionType[] },
    handleValue: string | null
  ) => {
    setCriteria({ ...data, handleValue });
    // Perform any additional actions needed with handleValue
  };
  //Hàm tạo lọc theo tiêu chí
  const setDataAddCriteria = (): JSX.Element[] => {
    return selectedAttributeFilter
      .flatMap((element, index) => {
        if (element !== undefined) {
          return (
            <>
              <Button
                key={index}
                leftSection={<IconCircleXFilled size={20} />}
                color="#d70018"
                variant="outline"
                bg="#fef2f2"
                radius="md"
                style={{ maxWidth: "100%" }}
                onClick={() => handleDeleteSelectedItem(index)}
              >
                <Flex align="center">
                  <Text fw="700" size="xs" mr={5}>
                    {element && element[0]?.placeholder + ": "}
                  </Text>
                  {element?.map((value, valueIndex) => (
                    <Text lineClamp={1} fw={500} size="xs" key={valueIndex}>
                      <Flex align="center">
                        {value.label}
                        {valueIndex < element.length - 1 && (
                          <Box ml={5} mr={5}>
                            |
                          </Box>
                        )}
                      </Flex>
                    </Text>
                  ))}
                </Flex>
              </Button>
            </>
          );
        }
        return null;
      })
      .filter((element): element is JSX.Element => element !== null);
  };

  //Xóa và xóa tất cả trong Fillter
  const handleDeleteSelectedItem = (value: number | undefined) => {
    if (value !== undefined) {
      setSelectedAttributeFilter((prevSelectedAttributeFilter) => {
        const newSelectedAttribute = [...prevSelectedAttributeFilter];
        newSelectedAttribute.splice(value, 1);
        return newSelectedAttribute;
      });
    } else {
      setSelectedAttributeFilter([]);
    }
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
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    if (dataCategory || searchValue) {
      callApiGetData();
    } else {
      setData([]);
      setTotalProduct(0);
    }
  }, [currentPage]);

  useEffect(() => {
    if (dataCategory || searchValue) {
      setCurrentPage(1);
      callApiGetData();
    } else {
      setData([]);
      setTotalProduct(0);
    }
  }, [
    // currentPage,
    dataCategory,
    searchValue,
    rangerPrice,
    priceFilter,
    selectedBrandIds,
    selectedAttributeFilter,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [isLoadingProduct]);

  useEffect(() => {
    const callApiBrand = async () => {
      if (dataCategory) {
        try {
          let url = `?CategoryId=${dataCategory.id}&Skip=0&Take=1000`;
          const callApi = await getListBrandSearch(url);
          if (
            !isNullOrUndefined(callApi) &&
            !isNullOrUndefined(callApi?.data)
          ) {
            const dataApi = callApi?.data?.lists;
            if (dataApi != null && !isNullOrUndefined(dataApi)) {
              setDataBrand(dataApi);
            }
          } else {
            console.log("Dữ liệu không tồn tại");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    const fetchDataBanner = async () => {
      const banner = await getListBannerSlideData(
        `CategoryId=${dataCategory.id}&Skip=0&Take=8&Status=A`
      );
      setDataBanner(banner?.data);
    };

    if (dataCategory !== undefined && dataCategory !== null) {
      fetchDataBanner();
      callApiBrand();
    }
  }, [dataCategory]);

  useEffect(() => {
    if (type === "search") {
      const allCategoryIDs = data
        .slice(0, 5)
        .flatMap((item) => item?.categoryId);
      const set = new Set();
      const duplicates = [];
      for (let i = 0; i < allCategoryIDs.length; i++) {
        if (set.has(allCategoryIDs[i])) {
          duplicates.push(allCategoryIDs[i]);
        } else {
          set.add(allCategoryIDs[i]);
        }
      }
      const array = Array.from(set);
      setDataCategoryList(array);
    }
  }, [data]);

  useEffect(() => {
    const queryString = window.location.href;
    postLoggingAction({
      userName: localStorage.getItem("userName") || "",
      actionType: "HomePageClickedLink",
      actionDetail: queryString,
    });
    if (type !== "search") {
      const { slug } = params;
      const fetchCategoryBySlug = async () => {
        const category = await getDetailCategory(`?categoryPath=${slug}`);
        setDataCategory(category?.data);
      };
      fetchCategoryBySlug();
      const numbersArray = queryString
        .split("?p=")[1]
        ?.match(/\d+(?:[.,]\d+)?/g);
      if (numbersArray) {
        const numberWithPadding = numbersArray.map(
          (num) => Number(num.replace(",", ".")) * 1000000
        );
        if (queryString.split("?p=")[1]?.includes("duoi")) {
          setRangerPrice([0, numberWithPadding[0] || 0]);
        } else {
          setRangerPrice(
            numbersArray
              ? [numberWithPadding[0] || 0, numberWithPadding[1] || undefined]
              : [0, undefined]
          );
        }
      }
    } else {
      const search = decodeURIComponent(queryString.split("?q=")[1]).replace(
        /\+/g,
        " "
      );
      if (search) {
        setSearchValue(search);
      }
    }
  }, []);

  useEffect(() => {
    const queryString = window.location.href;

    const brand = queryString.split("?brand=")[1];

    const brandId = dataBrand?.find((bra) => bra.brandIndex === brand);
    if (brandId) {
      setSelectedBrandIds([(brandId?.name && brandId?.name) || ""]);
      // console.log(brandId);
    }
  }, [dataBrand]);

  useEffect(() => {
    const queryString = window.location.href;
    const attributeId = queryString.split("?attributeValue=")[1]?.split(",");

    if (attributeId) {
      const selectedOptions = attributeId.map((id) => {
        const index = dataAttributeFilterOption?.findIndex((option) =>
          option.options.some((value) => value.value === id)
        );
        const option =
          index !== -1
            ? dataAttributeFilterOption[index]?.options.find(
                (value) => value.value === id
              )
            : null;

        return { index, option };
      });

      setSelectedAttributeFilter((prevSelectedAttributes) => {
        const newSelectedAttribute = [...prevSelectedAttributes];
        selectedOptions.forEach((option) => {
          if (option.index !== -1) {
            newSelectedAttribute[option.index] = option.option
              ? [option.option]
              : null;
          }
        });
        return newSelectedAttribute;
      });
    }
  }, [dataAttributeFilterOption]);

  useEffect(() => {
    if (type === "category") {
      const callApiGetSelectOption = async () => {
        if (dataCategory) {
          const callapi = await getListAttributeFilter(
            `?categoryId=${dataCategory?.id.toString()}`
          );
          if (
            !isNullOrUndefined(callapi) &&
            !isNullOrUndefined(callapi?.data)
          ) {
            const dataApi = callapi?.data;
            if (dataApi != null && !isNullOrUndefined(dataApi)) {
              setDataAttributeFilter(dataApi);
            }
          } else {
            console.log("Dữ liệu không tồn tại");
          }
        }
      };
      if (dataCategory) callApiGetSelectOption();
    } else if (type === "search") {
      const callApiGetSelectOption = async () => {
        if (dataCategoryList && dataCategoryList.length > 0) {
          const queryString = dataCategoryList
            ?.map((id: any) => `categoryId=${id}`)
            .join("&");
          const callapi = await getListAttributeFilter(`?${queryString}`);
          if (
            !isNullOrUndefined(callapi) &&
            !isNullOrUndefined(callapi?.data)
          ) {
            const dataApi = callapi?.data;
            if (dataApi != null && !isNullOrUndefined(dataApi)) {
              setDataAttributeFilter(dataApi);
            }
          } else {
            console.log("Dữ liệu không tồn tại");
          }
        }
      };
      if (dataCategoryList) callApiGetSelectOption();
    }
  }, [dataCategory, dataCategoryList]);

  useEffect(() => {
    const dataOption = dataAttributeFilter.map((item) => ({
      id: item.id,
      attributeName: item.attributeName,
      options: item.attributeValues.map((attribute) => ({
        value: attribute.id.toString(),
        label: attribute.value,
      })),
    }));
    setDataAttributeFilterOption(dataOption);
  }, [dataAttributeFilter]);

  return (
    <>
      {isLoadingProduct ? (
        <Loader />
      ) : (
        <div className={Styles.message}>
          <AppContainer>
            {dataBanner.length > 0 && type === "category" ? (
              <div className={Styles.box}>
                <CarouselCommon data={dataBanner} />
              </div>
            ) : null}
            <ListBrand
              searchvalue={selectedBrands}
              total={totalProduct}
              listData={dataBrand}
              selectedBrandIds={selectedBrandIds}
              setSelectedBrandIds={setSelectedBrandIds}
              categoryName={dataCategory?.categoryName || null}
            />
            <div
              ref={containerRef}
              className={`${Styles.sticky} ${
                isSticky ? Styles["category"] : ""
              }`}
            >
              <div className={Styles.text}>
                <span>Bộ lọc theo tiêu chí:</span>
              </div>
              <div className={Styles.flexBox}>
                {dataAttributeFilterOption?.length > 0 ? (
                  <div className={Styles.selectGroup}>
                    <SelectGroup
                      selectedAttributeFilter={selectedAttributeFilter}
                      setSelectedAttributeFilter={setSelectedAttributeFilter}
                      idCategory={dataCategory?.id || null}
                      dataAttributeFilterOption={dataAttributeFilterOption}
                      setCriteria={handleSetCriteria}
                    />
                  </div>
                ) : null}

                <div className={Styles.sort}>
                  <Sorts
                    rangerPrice={rangerPrice}
                    onSearch={handleClickRangerPriceSearch}
                    priceFilter={priceFilter}
                    handleChangePriceFilter={handleChangePriceFilter}
                  />
                </div>
              </div>
            </div>
            {selectedAttributeFilter.length > 0 && (
              <div className={Styles.fillterResult}>
                <div className={Styles.text}>
                  <Text size="lg" fw={"bold"}>
                    Đang lọc theo tiêu chí:
                  </Text>
                </div>
                <div className={Styles.flexBox}>
                  <Flex w="100%" wrap="wrap" gap={10}>
                    {setDataAddCriteria()}
                    {selectedAttributeFilter?.every(
                      (item) => item === undefined
                    ) ? null : (
                      <Button
                        leftSection={<IconX size={18} />}
                        color="#d70018"
                        variant="outline"
                        bg="#fef2f2"
                        radius="md"
                        onClick={() => handleDeleteSelectedItem(undefined)}
                      >
                        <Text size="xs" fw="bold">
                          Bỏ chọn tất cả
                        </Text>
                      </Button>
                    )}
                  </Flex>
                </div>
              </div>
            )}
            {data.length === 0 ? (
              <div className={Styles.noValue}>
                <Image src={imageNull} alt="" />
                <div>
                  <p>Để tìm được kết quả chính xác hơn, bạn vui lòng:</p>
                  <div className={Styles.customList}>
                    Kiểm tra lỗi chính tả của từ khóa đã nhập
                  </div>
                  <div className={Styles.customList}>
                    Thử lại bằng từ khóa khác
                  </div>
                  <div className={Styles.customList}>
                    Thử lại bằng những từ khóa tổng quát hơn
                  </div>
                  <div className={Styles.customList}>
                    Thử lại bằng những từ khóa ngắn gọn hơn
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Flex
                  justify={"center"}
                  style={{ paddingBottom: 50 }}
                  gap={20}
                  rowGap={20}
                  columnGap={20}
                  wrap={"wrap"}
                >
                  {data?.map((item: any, index: number) => {
                    if (type === "category") {
                      return <CardProductNormal key={index} data={item} />;
                    } else {
                      return <CardProductSearch key={index} data={item} />;
                    }
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
                {dataCategory?.fixedContent && (
                  <CategoryContent data={dataCategory?.fixedContent} />
                )}
              </>
            )}
          </AppContainer>
        </div>
      )}
    </>
  );
};

export default product;
