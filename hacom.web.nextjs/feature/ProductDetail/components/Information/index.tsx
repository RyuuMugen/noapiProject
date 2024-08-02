import { createCartProduct } from "@/api/apiCart";
import { createCollectionForm } from "@/api/apiCollectionForm";
import bgCheckDelivery from "@/assets/bgCheckDelivery.png";
import iconCart from "@/assets/iconCart.svg";
import iconExtra from "@/assets/iconExtra.svg";
import iconArrow from "@/assets/iconarrow.svg";
import {
  IconCaretUpFilled,
  IconCaretDownFilled,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import iconGift from "@/assets/iconGift.svg";
import More from "@/common/AddUserLike";
import Countdown from "@/common/Countdown";
import StarRating from "@/common/StarRating";
import {
  TblItem,
  TblProductDeal,
  TblstoreAvailables,
} from "@/model/ProductList";
import { TblCollectionForm } from "@/model/TblCollectionForm";
import { TblUserComment } from "@/model/TblUserComment";
import { TblUserReview } from "@/model/TblUserReview";
import { useCardItems } from "@/useContext/CardContext";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import {
  Box,
  Button,
  Flex,
  List,
  NumberFormatter,
  NumberInput,
  Text,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import {
  IconBuildingStore,
  IconCheck,
  IconMinus,
  IconPlus,
} from "@tabler/icons-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./RightDetail.module.scss";
import { modals } from "@mantine/modals";
import AddCartPopup from "@/common/AddCartPopup";
import { postLoggingAction } from "@/api/apiLogging";

const InfomationBox = ({
  data,
  dataComment,
  dataReview,
  dataDeal,
  dataProductRelation,
}: RightDetailProps) => {
  const nowTime = new Date();
  const { fetchDataHeader } = useCardItems();
  const { setSaleDetailOrder, setTotalAmount } = useSaleOrder();
  const router = useRouter();
  const [quantity, setQuantity] = useState<string | number>(1);
  const [averageStar, setAverageStar] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState<number>();
  const [giftsIncentivesCount, setGiftsIncentivesCount] = useState(4);
  const [storeStockCount, setStoreStockCount] = useState(2);
  const [dataTechnical, setDataTechnical] = useState<dataTechnicalType[]>([]);
  const [secondsCount, setSecondsCount] = useState(0);
  const [isFlashSaleTime, setIsFlashSaleTime] = useState(false);
  const [dataPromotions, setDataPromotions] = useState<any[]>([]);
  const [showMore, setShowMore] = useState(false);
  const [dataStoreStock, setDataStoreStock] = useState<TblstoreAvailables[]>(
    []
  );

  const toDate = dataDeal?.toDate;
  const fromDate = dataDeal?.fromDate;
  const dataGiftsIncentives = [
    {
      title: "khi mua Balo, Cặp, Túi chống sốc cao cấp...",
      price: 50000,
      link: "_",
    },
    {
      title: "khi mua Ram Laptop thương hiệu KINGSTON",
      price: 100000,
      link: "_",
    },
    {
      title: "khi mua Ram Laptop thương hiệu LEXAR",
      price: 100000,
      link: "_",
    },
    {
      title: "khi mua Ghế công thái học thương hiệu LEGION",
      price: 200000,
      link: "_",
    },
    {
      title: "khi mua kèm phần mềm diệt virus",
      price: 40000,
      link: "_",
    },
    {
      title: "khi mua kèm Ổ HDD",
      price: 500000,
      link: "_",
    },
    {
      title: "khi mua Ram Laptop thương hiệu LEXAR",
      price: 100000,
      link: "_",
    },
  ];

  const entity = {
    id: 0,
    fullname: "",
    mobile: "",
    email: "",
    productName: null,
    productId: null,
    keyword: null,
  };

  const form = useForm<TblCollectionForm>({
    initialValues: {
      ...entity,
    },

    validate: {
      fullname: isNotEmpty("Vui lòng nhập họ và tên"),
      mobile: (value) =>
        value
          ? value.length != 10
            ? "Số điện thoại phải có 10 chữ số"
            : null
          : "Vui lòng nhập số điện thoại",

      email: (value) =>
        value ? (/^\S+@\S+$/.test(value) ? null : "Email không hợp lệ") : null,
    },
  });

  const handleClickOtherConfigGroup = (itemIds: number[], index: number) => {
    let filteredIds: any[];
    if (dataTechnical && dataTechnical.length > 1) {
      // Lọc ra các group có index khác index đầu vào và chỉ giữ lại configItems có chứa data.id
      const filteredGroups = dataTechnical
        .filter((group, groupIndex) => groupIndex !== index)
        .map((group) => {
          // Lọc configItems của group chỉ giữ lại những configItem có chứa data.id
          const filteredConfigItems = group.configItems.filter((configItem) =>
            configItem.itemIds.includes(data?.id || 0)
          );

          // Trả về group mới với configItems đã được lọc
          return {
            ...group,
            configItems: filteredConfigItems,
          };
        });

      // Lọc ra các ID chính xác từ itemIds trong các configItems đã được lọc
      filteredIds = filteredGroups.flatMap((group) =>
        group.configItems.flatMap((configItem) =>
          configItem.itemIds.filter((id) => itemIds.includes(id))
        )
      );
    } else {
      filteredIds = itemIds;
    }
    if (data?.configGroups) {
      const selectedConfig = data?.configGroups[index]?.configItems.find(
        (item) => item.itemId === filteredIds[0]
      );

      if (selectedConfig && selectedConfig.url)
        router.push(`/product-detail/${selectedConfig.url}`);
      else
        router.push(
          `/product-detail?id=${selectedConfig?.itemId || filteredIds[0]}`
        );
    }
  };

  function filterItemIds(targetGroupName: string, targetValue: string) {
    const filteredItemIds: number[] = [];

    if (data) {
      // Step 1: Find the selected item based on the selectedId
      const selectedItemGroups = dataTechnical.map((group) => {
        const item = group.configItems.find((item) =>
          item.itemIds.includes(data?.id)
        );
        return { groupName: group.groupName, value: item ? item.value : null };
      });

      // Step 2: Identify values of the selectedId in each group other than the targetGroupName
      const selectedValues: { [key: string]: string | null } =
        selectedItemGroups.reduce((acc, group) => {
          if (group.groupName !== targetGroupName && group.value !== null) {
            acc[group.groupName as string] = group.value;
          }
          return acc;
        }, {} as { [key: string]: string | null });

      // Step 3: Find itemIds in the targetGroupName that have the targetValue
      const targetGroup = dataTechnical.find(
        (group) => group.groupName === targetGroupName
      );
      if (targetGroup) {
        const targetItems = targetGroup.configItems.find(
          (item) => item.value === targetValue
        );
        if (targetItems) {
          // Step 4: Filter those itemIds to include only those that match the values in selectedValues
          targetItems.itemIds.forEach((itemId) => {
            const matches = Object.keys(selectedValues).every((groupName) => {
              const group = dataTechnical.find(
                (group) => group.groupName === groupName
              );
              return group?.configItems.some(
                (item) =>
                  item.itemIds.includes(itemId) &&
                  item.value === selectedValues[groupName]
              );
            });
            if (matches) {
              filteredItemIds.push(itemId);
            }
          });
        }
      }
    }
    // console.log(77, filteredItemIds);

    if (data?.configGroups) {
      const selectedConfig = data?.configGroups
        .find((group) => group.groupName === targetGroupName)
        ?.configItems.find((item) => item.itemId === filteredItemIds[0]);
      if (selectedConfig && selectedConfig.url)
        router.push(`/product-detail/${selectedConfig.url}`);
    }
  }

  function replaceNewlineWithBreak(htmlString: any) {
    // Chia chuỗi thành các dòng
    const lines = htmlString.split(/\r\n|\r|\n/);

    // Thêm "- " vào trước dòng đầu tiên
    if (lines.length > 0) {
      lines[0] = "- " + lines[0];
    }

    // Tái tạo chuỗi từ các dòng đã được chỉnh sửa
    return lines.join("<br> - ");
  }

  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  function formatNumber(number: number) {
    const numberString = number.toString();
    const length = numberString.length;

    if (length <= 6) {
      return (
        "?" + numberString.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,").slice(1)
      );
    }

    const modifiedNumber = numberString.replace(
      /(\d)(?=(\d{3})+(?!\d))/g,
      "$1,"
    );
    const formattedNumber = modifiedNumber.split("");
    formattedNumber[length - 5] = "?";

    return formattedNumber.join("");
  }

  const handlePlusQuantity = () => {
    setQuantity(Number(quantity) + 1);
  };

  const handleMinusQuantity = () => {
    if (Number(quantity) > 1) {
      setQuantity(Number(quantity) - 1);
    }
  };

  const handleAddCart = async () => {
    const userData = localStorage.getItem("userInfo");
    const id = userData ? JSON.parse(userData).data.customerId : 0;
    const newData = {
      customerId: id,
      tblShoppingCartDetailCommand: [
        {
          itemCode: data?.itemCode,
          itemName: data?.itemName,
          itemId: data?.id,
          quantity: quantity,
          itemPrice: data?.marketPrice,
          itemSalePrice:
            dataDeal && isFlashSaleTime
              ? dataDeal.dealUnitSellingPrice
              : data?.unitSellingPrice,
          itemImage: data?.primaryImage,
          totalAmount:
            Number(quantity) *
            (dataDeal && isFlashSaleTime
              ? dataDeal.dealUnitSellingPrice || 0
              : data?.unitSellingPrice || 0),
          itemUrl: data?.url,
        },
      ],
    };
    await createCartProduct(newData);

    modals.openConfirmModal({
      title: (
        <Flex
          justify={"center"}
          align={"center"}
          gap={8}
          style={{
            fontSize: 16,
            color: "blue",
            fontWeight: "bold",
          }}
        >
          <IconCircleCheckFilled /> Đã thêm sản phẩm vào giỏ hàng!
        </Flex>
      ),
      size: 1000,
      centered: true,
      children: <AddCartPopup dataProductRelation={dataProductRelation} />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
    fetchDataHeader();
  };

  const handleBuyNow = async () => {
    const newData = [
      {
        itemCode: data?.itemCode,
        itemName: data?.itemName,
        itemId: data?.id,
        quantity: Number(quantity),
        itemPrice: data?.marketPrice,
        itemSalePrice:
          dataDeal && isFlashSaleTime
            ? dataDeal.dealUnitSellingPrice
            : data?.unitSellingPrice,
        itemImage: data?.primaryImage,
        totalAmount:
          Number(quantity) *
          (dataDeal && isFlashSaleTime
            ? dataDeal.dealUnitSellingPrice || 0
            : data?.unitSellingPrice || 0),
        itemUrl: data?.url,
      },
    ];

    setSaleDetailOrder(newData);
    setTotalAmount(
      Number(quantity) *
        (dataDeal && isFlashSaleTime
          ? dataDeal.dealUnitSellingPrice || 0
          : data?.unitSellingPrice || 0)
    );

    router.push("/order");
  };

  const handleClickProductSameGroup = (id: number) => {
    setSelectedProduct(id);
  };

  const handleGotoInstallment = () => {
    handleAddCart();
    router.push("/installment");
  };

  const handleExpandGiftsIncentives = () => {
    postLoggingAction({
      userName: localStorage.getItem("userName"),
      actionType: "MoreInfoGiftPromoLink",
      actionDetail: `[${data?.id}] ${data?.itemName}`,
    });
    if (dataPromotions.length > 0) {
      // Kiểm tra nếu dataPromotions có ít nhất một phần tử
      if (dataPromotions.length > 4 && giftsIncentivesCount <= 4) {
        setGiftsIncentivesCount(dataPromotions.length);
      } else {
        setGiftsIncentivesCount(4);
      }
    } else {
      if (dataGiftsIncentives.length > 4 && giftsIncentivesCount <= 4) {
        setGiftsIncentivesCount(dataGiftsIncentives.length);
      } else {
        setGiftsIncentivesCount(4);
      }
    }
  };

  const handleExpandStoreStock = () => {
    if (dataStoreStock.length > 2 && storeStockCount <= 2)
      setStoreStockCount(dataStoreStock.length);
    else setStoreStockCount(2);
  };

  const handleSubmitOrderForm = async (dataSubmit: TblCollectionForm) => {
    const dataCollection = {
      ...dataSubmit,
      productId: data?.id,
      productName: data?.itemName,
    };
    await createCollectionForm(dataCollection);
  };

  useEffect(() => {
    if (dataReview) {
      const totalStars = dataReview.reduce((accumulator, item) => {
        if (item.rate !== null && item.rate !== undefined) {
          return accumulator + item.rate;
        } else {
          return accumulator;
        }
      }, 0);

      const average = totalStars / dataReview.length;

      setAverageStar(average);
    }
  }, [dataReview]);

  useEffect(() => {
    // Kiểm tra xem có dữ liệu và configGroups không
    if (!data || !data.configGroups || data.configGroups.length === 0) {
      return;
    }

    // Tạo mảng chứa thông tin nhóm cấu hình đã được cập nhật
    const updatedDataTechnical: dataTechnicalType[] = data.configGroups.map(
      (group) => {
        // Tạo mảng chứa thông tin các mục cấu hình đã được cập nhật
        const itemsData: dataTechnicalConfigItem[] = group.configItems.reduce(
          (acc, configItem) => {
            // Tìm kiếm xem configItem đã tồn tại trong acc không
            const existingItem = acc.find(
              (item) => item.value === configItem.value
            );

            // Nếu configItem đã tồn tại trong acc, thêm itemId vào itemIds của nó
            if (existingItem) {
              existingItem.itemIds.push(configItem.itemId);
            } else {
              // Nếu chưa tồn tại, tạo một item mới với itemIds là mảng chứa itemId
              acc.push({
                itemIds: [configItem.itemId],
                value: configItem.value,
              });
            }

            // Trả về acc để được sử dụng trong lần lặp tiếp theo
            return acc;
          },
          [] as dataTechnicalConfigItem[]
        );

        // Thêm thông tin nhóm cấu hình đã được cập nhật vào mảng tổng
        return {
          groupName: group.groupName,
          configItems: itemsData,
        };
      }
    );
    setDataTechnical(updatedDataTechnical);
  }, [data]);

  useEffect(() => {
    if (dataDeal) {
      if (fromDate && toDate) {
        if (new Date(fromDate) > nowTime) {
          const timeDifference =
            new Date(fromDate).getTime() - nowTime.getTime();
          setSecondsCount(Math.floor(timeDifference / 1000));
          setIsFlashSaleTime(false);
        } else if (new Date(fromDate) < nowTime && nowTime < new Date(toDate)) {
          const timeDifference = new Date(toDate).getTime() - nowTime.getTime();
          setSecondsCount(Math.floor(timeDifference / 1000));
          setIsFlashSaleTime(true);
        }
      }
    }
  }, [data]);

  useEffect(() => {
    if (data && data.storeAvailables) {
      setDataStoreStock(data.storeAvailables);
    }
  }, [data]);

  useEffect(() => {
    if (data?.promotions) {
      const resultArray = data?.promotions
        .split("---")
        .map((str) => str.trim());
      setDataPromotions(resultArray);
    } else {
      setDataPromotions([]);
    }
  }, [data]);

  return (
    <div className={style.main}>
      <Box className={style.meta}>
        <Text className={style.metaTitle} my={"sm"} lineClamp={2}>
          {data?.itemName}
        </Text>

        <Flex gap={"lg"} align={"center"}>
          <Box>
            <Text className={style.metaText}>
              Mã sản phẩm: <Text span>{data?.itemCode}</Text>
            </Text>
          </Box>

          <Flex align={"center"} gap={8}>
            <Text className={style.metaText}>Đánh giá: </Text>
            <StarRating
              starNumber={dataReview?.length}
              averageStar={averageStar}
              readonly={true}
            />
          </Flex>
          <Text className={style.metaText}>
            Bình luận: <Text span>{dataComment?.length || 0}</Text>
          </Text>

          <Text className={style.metaText}>
            Lượt xem: <Text span>{data?.view || 0}</Text>
          </Text>
        </Flex>
      </Box>

      {/* {data?.tblItemTechnicalCommonModels &&
        data?.tblItemTechnicalCommonModels.length > 0 && (
          <Box className={style.item}>
            <List>
              {data?.tblItemTechnicalCommonModels?.map((item, index) => (
                <List.Item key={index}>
                  {item.itemTecName}: {item.description}
                </List.Item>
              ))}
            </List>
          </Box>
        )} */}

      {data?.itemSummary && (
        <Box className={style.item}>
          <Text fw={700} className={style.headerTitle}>
            Thông số sản phẩm
          </Text>
          <Box
            className={`${style.contentContainer} ${
              showMore && style.showMoreContainer
            }`}
            dangerouslySetInnerHTML={{
              __html: replaceNewlineWithBreak(data?.itemSummary) || "",
            }}
          ></Box>
          {!showMore ? (
            <Button
              onClick={handleShowMoreClick}
              rightSection={<IconCaretDownFilled size={14} />}
              variant="light"
              color="rgba(0, 0, 0, 1)"
              mt={5}
            >
              Xem thêm
            </Button>
          ) : (
            <Button
              onClick={handleShowMoreClick}
              rightSection={<IconCaretUpFilled size={14} />}
              variant="light"
              color="rgba(0, 0, 0, 1)"
              mt={5}
            >
              Ẩn bớt
            </Button>
          )}
        </Box>
      )}

      {data?.configGroups && data?.configGroups.length > 0 && (
        <Box className={style.color}>
          <Text className={style.colorTitle}>Lựa chọn cho bạn</Text>
          {dataTechnical?.map((technical, index) => (
            <div key={index}>
              <Text className={style.groupTitle}>{technical?.groupName}: </Text>
              <Box className={style.wrapperImageColor}>
                {technical.configItems.map((item, indexTechnical) => (
                  <Box
                    key={indexTechnical}
                    className={`${style.imageColor}
                  ${
                    data && item.itemIds.includes(data?.id) && style.colorActive
                  }`}
                    onClick={() =>
                      // handleClickOtherConfigGroup(item.itemIds, index)
                      filterItemIds(technical.groupName || "", item.value || "")
                    }
                  >
                    <Flex justify={"center"} align={"center"} mx={12}>
                      <Text>{item.value}</Text>
                    </Flex>

                    <Image
                      className={style.bgCheck}
                      src={bgCheckDelivery}
                      alt="bgCheckDelivery"
                    />
                    <IconCheck
                      className={style.checkMark}
                      color="#FFFFFF"
                      size={14}
                    />
                  </Box>
                ))}
              </Box>
            </div>
          ))}
        </Box>
      )}

      {dataDeal ? (
        <Box
          className={isFlashSaleTime ? style.salePrice : style.salePriceArrived}
        >
          <Flex mt={15} gap={10} justify={"space-between"}>
            <Text className={style.remainingPrice}>
              <NumberFormatter
                value={
                  dataDeal && isFlashSaleTime
                    ? dataDeal.dealUnitSellingPrice || 0
                    : data?.unitSellingPrice || 0
                }
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
              <Text className={style.count}>
                (Tiết kiệm{" "}
                <NumberFormatter
                  value={
                    data?.marketPrice! -
                    (dataDeal && isFlashSaleTime
                      ? dataDeal.dealUnitSellingPrice!
                      : data?.unitSellingPrice!)
                  }
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />{" "}
                )
              </Text>
            </Text>
            <Text className={style.flashSale} fw={700} style={{ fontSize: 26 }}>
              FLASH SALE
            </Text>
          </Flex>
          <Text c={"white"}>
            <Text>
              Giá gốc:{" "}
              <NumberFormatter
                value={data?.marketPrice || 0}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </Text>
          </Text>
          {!isFlashSaleTime && (
            <Text c={"white"}>
              <Text>
                <span className={style.flashSalePrice}>
                  {" "}
                  Giá FlashSale:{" "}
                  {formatNumber(dataDeal?.dealUnitSellingPrice || 0)}
                </span>
              </Text>
            </Text>
          )}
          <Text>
            <Flex>
              {isFlashSaleTime ? "Kết thúc sau: " : "Bắt đầu sau: "}{" "}
              <Countdown totalTime={secondsCount.toString()} type="product" />
            </Flex>
          </Text>

          <Text>
            Chỉ áp dụng đặt hàng Online - Tối đa 1 Sản phẩm / 1 Đơn hàng !
          </Text>
        </Box>
      ) : (
        <Box className={style.price}>
          <Text fw={700} style={{ fontSize: 16 }}>
            Giá khuyến mãi:
          </Text>
          <Flex mt={15} gap={10}>
            <Text className={style.remainingPrice}>
              <NumberFormatter
                value={data?.unitSellingPrice || 0}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </Text>

            <Text td="line-through" c={"#787878"}>
              <NumberFormatter
                value={data?.marketPrice || 0}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </Text>
            <Text c={"#787878"}>
              (Tiết kiệm{" "}
              <NumberFormatter
                value={data?.marketPrice! - data?.unitSellingPrice!}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />{" "}
              )
            </Text>
          </Flex>
        </Box>
      )}
      <Box className={style.storeStock}>
        <div className={style.storeBackgroud}>
          <Box className={style.giftsIncentivesHeader}>
            <IconBuildingStore size={22} />
            {dataStoreStock.length === 0 ? (
              <Text>Số lượng sản phẩm tại cửa hàng hiện đang cập nhật</Text>
            ) : (
              <Text>{dataStoreStock.length} cửa hàng có sẵn sản phẩm</Text>
            )}
          </Box>
          <Box className={style.addressStoreStockWrapper}>
            {dataStoreStock.length === 0 ? (
              <Text fz={18}>
                Để biết thêm thông tin chi tiết vui lòng liên hệ:
                <span
                  style={{
                    color: "rgb(244, 52, 83)",
                    fontWeight: 700,
                    paddingLeft: 2,
                  }}
                >
                  1900 1903
                </span>
              </Text>
            ) : (
              <>
                {dataStoreStock.slice(0, storeStockCount).map((item, index) => (
                  <Box className={style.addressStoreStock} key={index}>
                    <Text fz={18}>
                      {item.tentrungtam}
                      {" - "}
                      <span>
                        Số lượng sản phẩm còn lại:{" "}
                        <span
                          style={{ color: "rgb(244, 52, 83)", fontWeight: 700 }}
                        >
                          {item.sumOnhandQuantity}
                        </span>
                      </span>
                    </Text>
                  </Box>
                ))}
                {storeStockCount < dataStoreStock.length ? (
                  <Text
                    className={style.extra}
                    onClick={handleExpandStoreStock}
                  >
                    Xem thêm {dataStoreStock.length - storeStockCount} cửa hàng{" "}
                    <Image src={iconExtra} alt="iconExtra" />
                  </Text>
                ) : (
                  <Text
                    className={style.extra}
                    onClick={handleExpandStoreStock}
                  >
                    Ẩn bớt
                  </Text>
                )}
              </>
            )}
          </Box>
        </div>
      </Box>

      <Box className={style.giftsIncentives}>
        <Box className={style.giftsIncentivesHeader}>
          <Image src={iconGift} alt="iconGift" />
          <Text>Quà tặng và Ưu đãi dành cho bạn</Text>
        </Box>
        <Box className={style.giftsIncentivesWrapper}>
          {dataPromotions.length > 0
            ? dataPromotions
                .slice(0, giftsIncentivesCount)
                .map((item, index) => (
                  <Flex
                    className={style.giftsIncentivesItem}
                    justify={"space-between"}
                    align={"center"}
                    key={index}
                  >
                    <Flex align={"center"} gap={10}>
                      <Box className={style.giftsIncentivesCount}>
                        {index + 1}
                      </Box>
                      <Text>{item}</Text>
                    </Flex>
                  </Flex>
                ))
            : dataGiftsIncentives
                .slice(0, giftsIncentivesCount)
                .map((item, index) => (
                  <Flex
                    className={style.giftsIncentivesItem}
                    justify={"space-between"}
                    align={"center"}
                    key={index}
                  >
                    <Flex align={"center"} gap={10}>
                      <Box className={style.giftsIncentivesCount}>
                        {index + 1}
                      </Box>
                      <Text>
                        Giảm ngay{" "}
                        <Text c={"#F43453"} fw={700} span>
                          <NumberFormatter
                            value={item.price}
                            thousandSeparator="."
                            decimalSeparator=","
                            suffix="₫"
                          />
                        </Text>{" "}
                        {item.title}
                      </Text>
                    </Flex>
                    {/* <Text c={"#0052CC"} className={style.giftsIncentivesDetail}>
            Xem chi tiết {">"}
          </Text> */}
                  </Flex>
                ))}

          {giftsIncentivesCount < dataGiftsIncentives.length ? (
            <Text className={style.extra} onClick={handleExpandGiftsIncentives}>
              Xem thêm ưu đãi <Image src={iconExtra} alt="iconExtra" />
            </Text>
          ) : (
            <Text className={style.extra} onClick={handleExpandGiftsIncentives}>
              Ẩn bớt
            </Text>
          )}
        </Box>
      </Box>

      {dataStoreStock.length === 0 ? (
        <Box
          mt={22}
          className={style.orderWrap}
          component="form"
          onSubmit={form.onSubmit((e: TblCollectionForm) => {
            handleSubmitOrderForm(e);
          })}
        >
          <Text fw={700} mb={10} style={{ fontSize: 16 }}>
            ĐĂNG KÝ NHẬN THÔNG TIN KHI CÓ HÀNG
          </Text>
          <TextInput
            mb={10}
            placeholder="Họ tên (bắt buộc)"
            {...form.getInputProps("fullname")}
          />
          <TextInput
            mb={10}
            placeholder="Số điện thoại (bắt buộc)"
            {...form.getInputProps("mobile")}
          />
          <TextInput
            mb={10}
            placeholder="Email"
            {...form.getInputProps("email")}
          />
          <Button type="submit">Đăng ký nhận thông tin</Button>
        </Box>
      ) : (
        <Box>
          <Flex align={"center"} gap={12} mt={22}>
            <Text fw={700} style={{ fontSize: 18 }}>
              Số lượng:
            </Text>
            <NumberInput
              rightSection={
                <IconMinus
                  size={18}
                  className={style.iconMinus}
                  onClick={handleMinusQuantity}
                />
              }
              leftSection={
                <IconPlus
                  size={18}
                  className={style.iconPlus}
                  onClick={handlePlusQuantity}
                />
              }
              value={quantity}
              radius={6}
              min={1}
              allowDecimal={false}
              w={80}
            />
            <Button
              className={style.buttonAddToCart}
              onClick={() => handleAddCart()}
            >
              <Text span fw={700} tt="uppercase">
                Thêm vào giỏ
              </Text>
            </Button>
            {/* <More idItem={data?.id || 0} /> */}
          </Flex>

          <Box className={style.buy}>
            <div className={style.buttonWrap}>
              <Button
                fullWidth
                className={style.buyButton}
                onClick={() => handleBuyNow()}
              >
                <Image
                  src={iconCart}
                  alt="iconCart"
                  style={{ marginRight: 10 }}
                />
                <Text className={style.buyText}>Mua ngay</Text>
              </Button>
              {data?.unitSellingPrice && data?.unitSellingPrice >= 3000000 && (
                <Flex gap={"sm"}>
                  <Button
                    fullWidth
                    className={style.installmentButton}
                    onClick={handleGotoInstallment}
                  >
                    <div>
                      <Text className={style.installmentButtonTitle}>
                        Trả góp qua thẻ
                      </Text>
                      <Text className={style.installmentButtonDescription}>
                        VISA, Master Card, AMEX
                      </Text>
                    </div>
                  </Button>
                  <Button
                    fullWidth
                    className={style.installmentButton}
                    onClick={handleGotoInstallment}
                  >
                    <div>
                      <Text className={style.installmentButtonTitle}>
                        Trả góp hồ sơ
                      </Text>
                      <Text className={style.installmentButtonDescription}>
                        Duyệt nhanh trong 15 phút
                      </Text>
                    </div>
                  </Button>
                </Flex>
              )}
            </div>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default InfomationBox;

type RightDetailProps = {
  data: TblItem | null;
  dataComment: TblUserComment[] | null;
  dataReview: TblUserReview[] | null;
  dataDeal?: TblProductDeal | null;
  dataProductRelation: TblItem[];
};

type dataTechnicalType = {
  groupName: string | null;
  configItems: dataTechnicalConfigItem[];
};

type dataTechnicalConfigItem = {
  itemIds: number[];
  value: string | null;
};
