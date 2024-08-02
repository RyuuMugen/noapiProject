"use client";
import Sorts from "@/common/CategoryFillter/Sort";
import BuildPCFillter from "@/common/buildPCFillter/selection";
import {
  Button,
  Flex,
  Image,
  Modal,
  NumberFormatter,
  Pagination,
  Rating,
  Text,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import style from "./buildpc.module.scss";

import { getListItemBuildPc } from "@/api/apiBuildPc";
import { getListAttributeFilter, getListBrandSearch } from "@/api/apiProduct";
import { isNullOrEmpty, isNullOrUndefined } from "@/extension/StringExtension";
import { TblBuildPcListItemBuild } from "@/model/TblBuildPc";
import {
  AttributeOptionType,
  TblAttributeFilter,
  TblAttributeFilterOption,
} from "@/model/TblCategory";
import { TblBrand } from "@/model/TblBrand";
import imageNull from "@/assets/noValue.png";
import NextImage from "next/image";

interface ChooseItemModalProps {
  modalChooseProducts: boolean;
  setModalChooseProducts: any;
  idCategory: number;
  handleChooseItemBuildPc: (item: TblBuildPcListItemBuild) => void;
  selectedItemIdRel: number | null;
}

const ChooseItemModal = ({
  modalChooseProducts,
  setModalChooseProducts,
  idCategory,
  handleChooseItemBuildPc,
  selectedItemIdRel,
}: ChooseItemModalProps) => {
  const [listItem, setListItem] = useState<TblBuildPcListItemBuild[]>([]);
  const [dataBrand, setDataBrand] = useState<TblBrand[]>([]);
  const [selectedBrandIds, setSelectedBrandIds] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedAttributeFilter, setSelectedAttributeFilter] = useState<
    (AttributeOptionType | null)[]
  >([]);
  const [dataAttributeFilter, setDataAttributeFilter] = useState<
    TblAttributeFilter[]
  >([]);

  const [dataAttributeFilterOption, setDataAttributeFilterOption] = useState<
    TblAttributeFilterOption[]
  >([]);
  const [rangerPrice, setRangerPrice] = useState<[number, number | undefined]>([
    0, 80000000,
  ]);
  const [priceFilter, setPriceFilter] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [totalProduct, setTotalProduct] = useState(0);
  let itemsPerPage = 15;
  const skip = (currentPage - 1) * itemsPerPage;

  const handleClickRangerPriceSearch = (value: [number, number]) => {
    setRangerPrice(value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      // Kiểm tra nếu nhấn Enter và input không rỗng
      callApiGetData();
    }
  };

  const handleChooseBrand = (brandId: number) => {
    const newBrandIds = [...selectedBrandIds];
    if (newBrandIds.includes(brandId)) {
      const index = newBrandIds.indexOf(brandId);
      newBrandIds.splice(index, 1);
    } else {
      newBrandIds.push(brandId);
    }
    setSelectedBrandIds(newBrandIds);
  };

  const handleChangePriceFilter = (filter: string | null) => {
    setPriceFilter(filter);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleClickSelect = (item: TblBuildPcListItemBuild) => {
    handleChooseItemBuildPc(item);
    setModalChooseProducts(false);
  };

  const callApiGetData = async () => {
    setLoading(true);

    try {
      let urlSearch = `?Skip=${skip}&Take=${itemsPerPage}&Active=true&CategoryId=${idCategory}`;
      if (selectedItemIdRel) urlSearch += `&ItemId=${selectedItemIdRel}`;
      if (!isNullOrEmpty(search))
        urlSearch = urlSearch + `&KeySearch=` + search;
      if (selectedAttributeFilter && selectedAttributeFilter.length > 0) {
        const filteredAttributes = selectedAttributeFilter.filter(
          (attribute) => attribute !== null && attribute !== undefined
        );

        urlSearch += filteredAttributes
          .map((attribute) => {
            return `&AttributeValues=${attribute?.value}`;
          })
          .filter(Boolean) // Lọc bỏ các giá trị rỗng
          .join("");
      }
      if (rangerPrice && rangerPrice.length > 0) {
        rangerPrice[0] && (urlSearch += `&MinPrice=${rangerPrice[0]}`);
        rangerPrice[1] && (urlSearch += `&MaxPrice=${rangerPrice[1]}`);
      }
      if (selectedBrandIds && selectedBrandIds.length > 0) {
        urlSearch += selectedBrandIds
          .map((brandId) => {
            return `&BrandId=${brandId}`;
          })
          .filter(Boolean) // Lọc bỏ các giá trị rỗng
          .join("");
      }
      if (priceFilter === "increase") {
        urlSearch += `&SortOrder=0`;
      } else if (priceFilter === "decrease") {
        urlSearch += `&SortOrder=1`;
      }

      let callapi = await getListItemBuildPc(urlSearch);
      if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
        const dataApi = callapi?.data;
        const totalData = callapi?.totalCount;
        const totalPages = Math.ceil(totalData / itemsPerPage);
        setListItem(dataApi);
        setTotalProduct(totalData);
        setTotalPages(totalPages);
      } else {
        setListItem([]);
        setTotalProduct(0);
        setTotalPages(0);
        console.log("Dữ liệu không tồn tại");
      }
    } catch (error: any) {
      console.error("Error fetching data:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    callApiGetData();
  }, [
    idCategory,
    rangerPrice,
    priceFilter,
    selectedBrandIds,
    selectedAttributeFilter,
  ]);

  useEffect(() => {
    callApiGetData();
  }, [currentPage]);

  useEffect(() => {
    setListItem([]);
    setSelectedBrandIds([]);
    setRangerPrice([0, undefined]);
    setPriceFilter(null);
    setCurrentPage(1);
    setTotalPages(1);
    setSearch("");
  }, [modalChooseProducts]);

  useEffect(() => {
    const callApiBrand = async () => {
      if (idCategory) {
        try {
          let url = `?CategoryId=${idCategory}&Skip=0&Take=1000`;
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
    const callApiGetSelectOption = async () => {
      if (idCategory) {
        const callapi = await getListAttributeFilter(
          `?categoryId=${idCategory.toString()}`
        );
        if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
          const dataApi = callapi?.data;
          if (dataApi != null && !isNullOrUndefined(dataApi)) {
            setDataAttributeFilter(dataApi);
          }
        } else {
          console.log("Dữ liệu không tồn tại");
        }
      }
    };

    if (idCategory) {
      setDataBrand([]);
      setSelectedAttributeFilter([]);
      callApiGetSelectOption();
      callApiBrand();
    }
  }, [idCategory]);

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
      {/* <Modal
        opened={modalChooseProducts}
        onClose={() => setModalChooseProducts(false)}
        size="100%"
        className={style.modalProductsList}
      >
        <Flex direction="column" align="center">
          Chọn sản phẩm
        </Flex>
      </Modal> */}

      <Modal.Root
        opened={modalChooseProducts}
        onClose={() => setModalChooseProducts(false)}
        size="100%"
        className={style.modalProductsList}
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header className={style.modalHeader}>
            <Modal.Title className={style.titleModal}>
              CHỌN LINH KIỆN
            </Modal.Title>

            <Flex className={style.boxSearchProductList}>
              <TextInput
                className={style.inputSearch}
                placeholder="Nhập tên linh kiện cần tìm"
                rightSection={
                  <IconSearch
                    onClick={() => callApiGetData()}
                    color="#fff"
                    className={style.iconSearch}
                  />
                }
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </Flex>

            <Pagination
              total={totalPages || 1}
              value={currentPage || 1}
              className={style.pagination}
              color="#1F67D2"
              onChange={handlePageChange}
            />

            <Modal.CloseButton className={style.btnCloseModal} />
          </Modal.Header>

          <Modal.Body className={style.modalBody}>
            {dataBrand && dataBrand.length > 0 && (
              <Flex className={style.boxBrand} direction="column">
                <Text fw={700} c="#1F2123" size="18px">
                  Chọn theo thương hiệu
                </Text>
                <Flex className={style.brands} gap="15px">
                  {dataBrand.map((brand, index) => (
                    <div
                      className={`${style.brandItem} ${
                        selectedBrandIds.includes(brand.id) && style.brandActive
                      }`}
                      key={index}
                      onClick={() => handleChooseBrand(brand.id)}
                    >
                      <Image src={brand.image} alt="logo" />
                    </div>
                  ))}
                </Flex>
              </Flex>
            )}
            <div className={style.text}>
              <span>Bộ lọc theo tiêu chí:</span>
            </div>
            <div className={style.flexBox}>
              {dataAttributeFilterOption?.length > 0 ? (
                <div className={style.selectGroup}>
                  <BuildPCFillter
                    selectedAttributeFilter={selectedAttributeFilter}
                    setSelectedAttributeFilter={setSelectedAttributeFilter}
                    idCategory={idCategory}
                    dataAttributeFilterOption={dataAttributeFilterOption}
                  />
                </div>
              ) : null}

              <div className={style.sort}>
                <Sorts
                  priceFilter={priceFilter}
                  rangerPrice={rangerPrice}
                  onSearch={handleClickRangerPriceSearch}
                  handleChangePriceFilter={handleChangePriceFilter}
                />
              </div>
            </div>

            <Flex className={style.boxListProductPopup} gap="15px">
              {listItem && listItem.length > 0 ? (
                listItem?.map((item, index) => (
                  <Flex
                    className={style.itemProductPopup}
                    direction="column"
                    key={index}
                  >
                    <div className={style.imgProductPopup}>
                      <Image
                        src={item?.image || ""}
                        alt="product"
                        maw={"100%"}
                        h={225}
                      />
                    </div>
                    <Flex className={style.infoProductPopup} direction="column">
                      <Text fw={700} c="#303841" size="14px" mb={5}>
                        {item.itemName}
                      </Text>
                      <Text mb={0}>Mã SP: {item?.skuCode}</Text>
                      <Text mb={5}>Số lượng: {item?.quantity || 0}</Text>
                      {/* <Text
                      fw={400}
                      c="#6782AA"
                      size="14px"
                      td="line-through"
                      style={{ marginBottom: "10px" }}
                    >
                      <NumberFormatter
                        value={item.unitPrice}
                        thousandSeparator
                        suffix="₫"
                      />
                    </Text> */}
                      <Text fw={700} c="#1F67D2" size="21px" mb={24}>
                        <NumberFormatter
                          value={item?.unitPrice || 0}
                          thousandSeparator="."
                          decimalSeparator=","
                          suffix="₫"
                        />
                      </Text>
                      {item?.quantity ? (
                        <Button
                          leftSection={<IconPlus size={14} />}
                          variant="filled"
                          className={style.btnChoosePopup}
                          onClick={() => handleClickSelect(item)}
                        >
                          Chọn
                        </Button>
                      ) : (
                        <Tooltip
                          label={
                            <p>
                              1. Sản phẩm chỉ tạm hết hàng <br />
                              2. Quý khách có thể lựa chọn sang sản phẩm khác
                              <br />
                              3. Hoặc liên hệ với NV. Kinh Doanh để đặt hàng
                            </p>
                          }
                        >
                          <Button
                            leftSection={<IconPlus size={14} />}
                            variant="filled"
                            data-disabled
                            onClick={(event) => event.preventDefault()}
                          >
                            Chọn
                          </Button>
                        </Tooltip>
                      )}
                    </Flex>
                  </Flex>
                ))
              ) : (
                <div className={style.noValue}>
                  <Image component={NextImage} src={imageNull} alt="" />
                  <div>
                    <p>Để tìm được kết quả chính xác hơn, bạn vui lòng:</p>
                    <div className={style.customList}>
                      Kiểm tra lỗi chính tả của từ khóa đã nhập
                    </div>
                    <div className={style.customList}>
                      Thử lại bằng từ khóa khác
                    </div>
                    <div className={style.customList}>
                      Thử lại bằng những từ khóa tổng quát hơn
                    </div>
                    <div className={style.customList}>
                      Thử lại bằng những từ khóa ngắn gọn hơn
                    </div>
                  </div>
                </div>
              )}
            </Flex>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default ChooseItemModal;
