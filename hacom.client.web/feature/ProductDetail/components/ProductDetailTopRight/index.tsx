import { createCartProduct, totalCartPrice } from "@/api/apiCart";
import { createCollectionForm } from "@/api/apiCollectionForm";
import FixAndGuarantee from "@/common/FixAndGuarantee";
import PageBookingRepair from "@/feature/BookingRepair/page";
import { TblItem } from "@/model/ProductList";
import { TblCollectionForm } from "@/model/TblCollectionForm";
import { updateCart } from "@/redux/slices/cartSlice";
import {
  Box,
  Button,
  Flex,
  Loader,
  NumberFormatter,
  Text,
  TextInput,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { modals } from "@mantine/modals";
import { IconCheck, IconShoppingCartPlus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from "./ProductDetailTopRightProps.module.scss";

type ProductDetailTopRightProps = {
  data: TblItem | null;
};

type dataTechnicalType = {
  groupName: string | null;
  configItems: dataTechnicalConfigItem[];
};

type dataTechnicalConfigItem = {
  itemIds: number[];
  value: string | null;
};

const ProductDetailTopRight = ({ data }: ProductDetailTopRightProps) => {
  const router = useRouter();
  const [dataTechnical, setDataTechnical] = useState<dataTechnicalType[]>([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

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
        value ? (/^\S+@\S+$/.test(value) ? null : "email không hợp lệ") : null,
    },
  });

  const handleBuyNow = async () => {
    handleAddCart();
    router.push("/cart");
  };

  const handleSubmitOrderForm = async (dataSubmit: TblCollectionForm) => {
    const dataCollection = {
      ...dataSubmit,
      productId: data?.id,
      productName: data?.itemName,
    };
    const success = await createCollectionForm(dataCollection);
    if (success === true) {
      form.reset();
    }
  };

  const handleAddCart = async () => {
    setIsLoading(true); // Set loading state to true

    const userData = localStorage.getItem("userInfo");
    const id = userData ? JSON.parse(userData).data.customerId : 0;
    const newData = {
      customerId: id,
      tblShoppingCartDetailCommand: [
        {
          itemCode: data?.itemCode,
          itemName: data?.itemName,
          itemId: data?.id,
          quantity: 1,
          itemPrice: data?.marketPrice,
          itemSalePrice: data?.unitSellingPrice,
          itemImage: data?.primaryImage,
          totalAmount: data?.unitSellingPrice || 0,
          itemUrl: data?.url,
        },
      ],
    };
    await createCartProduct(newData);

    // fetchDataHeader();
    const totalData = await totalCartPrice(id);
    const newCartHeader = {
      totalItem: totalData?.data?.quantity,
      totalPrice: totalData?.data?.totalAmount,
    };
    dispatch(updateCart(newCartHeader));

    // Add a delay of 10 seconds after the cart operations
    await new Promise((resolve) => setTimeout(resolve, 5000));

    setIsLoading(false); // Set loading state to false after processing
  };

  function handleClickOtherConfigGroup(
    targetGroupName: string,
    targetValue: string
  ) {
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

    if (data?.configGroups) {
      const selectedConfig = data?.configGroups
        .find((group) => group.groupName === targetGroupName)
        ?.configItems.find((item) => item.itemId === filteredItemIds[0]);
      if (selectedConfig && selectedConfig.url)
        router.push(`/product-detail/${selectedConfig.url}`);
    }
  }

  const openModalBooking = () => {
    modals.openConfirmModal({
      size: "700px",
      radius: "20px",
      centered: true,
      zIndex: 300,
      title: "Đặt lịch sửa chữa",
      children: <PageBookingRepair dataProduct={data} />,
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
      classNames: {
        header: style.header,
        content: style.content,
      },
    });
  };

  const renderContent = () => {
    if (!data?.attribute4 || data?.attribute4 === "buy") {
      return (
        <div>
          {data?.storeAvailables?.length === 0 ? (
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
              <Button className={style.registerButton} type="submit">
                Đăng ký nhận thông tin
              </Button>
            </Box>
          ) : (
            <Box>
              <Box className={style.buy}>
                <div className={style.buttonWrap}>
                  <div className={style.buyButtons}>
                    <button
                      className={style.buyButton}
                      onClick={() => handleBuyNow()}
                    >
                      <span className={style.buyText1}>Mua ngay</span>
                      <span className={style.buyText2}>
                        (Nhận tại nhà hoặc tại cửa hàng)
                      </span>
                    </button>

                    <button
                      className={style.buttonAddToCart}
                      onClick={() => handleAddCart()}
                      disabled={isLoading}
                    >
                      {isLoading ? ( // Show loader when loading
                        <Loader
                          color={"var(--clr-primary)"}
                          size="sm"
                          className={style.iconCart}
                        />
                      ) : (
                        <IconShoppingCartPlus
                          className={style.iconCart}
                          size={18}
                        />
                      )}
                      <span className={style.buyText2}>
                        {" "}
                        {isLoading ? "Đang xử lý..." : "Thêm vào giỏ hàng"}
                      </span>
                    </button>
                  </div>
                  {data?.unitSellingPrice &&
                    data?.unitSellingPrice >= 3000000 && (
                      <div className={style.installmentButtons}>
                        <Button
                          fullWidth
                          className={style.installmentButton}
                          // onClick={handleGotoInstallment}
                        >
                          <div>
                            <Text className={style.installmentButtonTitle}>
                              Trả góp qua thẻ
                            </Text>
                            <Text
                              className={style.installmentButtonDescription}
                            >
                              VISA, Master Card, AMEX
                            </Text>
                          </div>
                        </Button>
                        <Button
                          fullWidth
                          className={style.installmentButton}
                          // onClick={handleGotoInstallment}
                        >
                          <div>
                            <Text className={style.installmentButtonTitle}>
                              Trả góp hồ sơ
                            </Text>
                            <Text
                              className={style.installmentButtonDescription}
                            >
                              Duyệt nhanh trong 15 phút
                            </Text>
                          </div>
                        </Button>
                      </div>
                    )}
                </div>
              </Box>
            </Box>
          )}
        </div>
      );
    } else if (data?.attribute4 === "repair") {
      return (
        <Box>
          <Box className={style.buy}>
            <div className={style.buttonWrap}>
              <div className={style.buyButtons}>
                <Button
                  fullWidth
                  color={"var(--clr-primary)"}
                  h={"10%"}
                  radius={"md"}
                  // component={Link}
                  // href={{
                  //   pathname: "/booking-repair",
                  //   query: { id: data?.id },
                  // }}
                  onClick={openModalBooking}
                >
                  <Flex direction={"column"} m={"8px 0px"}>
                    <Text fw={500}>ĐẶT LỊCH SỬA CHỮA</Text>
                    <Text size="14px">(Sửa chữa tại cửa hàng)</Text>
                  </Flex>
                </Button>
              </div>
            </div>
          </Box>
        </Box>
      );
    } else if (data?.attribute4 === "buyandrepair") {
      return (
        <div className={style.buyandrepairBox}>
          <div>
            {data?.storeAvailables?.length === 0 ? (
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
                <Button className={style.registerButton} type="submit">
                  Đăng ký nhận thông tin
                </Button>
              </Box>
            ) : (
              <Box>
                <Box className={style.buy}>
                  <div className={style.buttonWrap}>
                    <div className={style.buyButtons}>
                      <button
                        className={style.buyButton2}
                        onClick={() => handleBuyNow()}
                      >
                        <span className={style.buyText1}>
                          Đặt mua linh kiện
                        </span>
                        <span className={style.buyText2}>
                          (Nhận tại nhà hoặc tại cửa hàng)
                        </span>
                      </button>

                      <button
                        className={style.buttonAddToCart}
                        onClick={() => handleAddCart()}
                        disabled={isLoading}
                      >
                        {isLoading ? ( // Show loader when loading
                          <Loader
                            color={"var(--clr-primary)"}
                            size="sm"
                            className={style.iconCart}
                          />
                        ) : (
                          <IconShoppingCartPlus
                            className={style.iconCart}
                            size={18}
                          />
                        )}
                        <span className={style.buyText2}>
                          {" "}
                          {isLoading ? "Đang xử lý..." : "Thêm vào giỏ hàng"}
                        </span>
                      </button>
                    </div>
                    {data?.unitSellingPrice &&
                      data?.unitSellingPrice >= 3000000 && (
                        <div className={style.installmentButtons}>
                          <Button
                            fullWidth
                            className={style.installmentButton}
                            // onClick={handleGotoInstallment}
                          >
                            <div>
                              <Text className={style.installmentButtonTitle}>
                                Trả góp qua thẻ
                              </Text>
                              <Text
                                className={style.installmentButtonDescription}
                              >
                                VISA, Master Card, AMEX
                              </Text>
                            </div>
                          </Button>
                          <Button
                            fullWidth
                            className={style.installmentButton}
                            // onClick={handleGotoInstallment}
                          >
                            <div>
                              <Text className={style.installmentButtonTitle}>
                                Trả góp hồ sơ
                              </Text>
                              <Text
                                className={style.installmentButtonDescription}
                              >
                                Duyệt nhanh trong 15 phút
                              </Text>
                            </div>
                          </Button>
                        </div>
                      )}
                  </div>
                </Box>
              </Box>
            )}
          </div>
          <Box>
            <Box className={style.buy}>
              <div className={style.buttonWrap}>
                <div className={style.buyButtons}>
                  <Button
                    fullWidth
                    color={"var(--clr-primary)"}
                    h={"10%"}
                    radius={"md"}
                    // component={Link}
                    // href={{
                    //   pathname: "/booking-repair",
                    //   query: { id: data?.id },
                    // }}
                    onClick={openModalBooking}
                  >
                    <Flex direction={"column"} m={"8px 0px"}>
                      <Text fw={500}>ĐẶT LỊCH SỬA CHỮA</Text>
                      <Text size="14px">(Sửa chữa tại cửa hàng)</Text>
                    </Flex>
                  </Button>
                </div>
              </div>
            </Box>
          </Box>
        </div>
      );
    }
  };

  const renderPrice = () => {
    if (!data?.attribute4 || data?.attribute4 === "buy") {
      return (
        <Box className={style.price}>
          <Text fw={700} style={{ fontSize: 16 }}>
            Giá khuyến mãi:
          </Text>
          <Flex align={"center"} gap={10}>
            <Text className={style.remainingPrice}>
              <NumberFormatter
                value={data?.unitSellingPrice || 0}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </Text>

            <Text className={style.textPrice} td="line-through" c={"#787878"}>
              <NumberFormatter
                value={data?.marketPrice || 0}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </Text>
            <Text className={style.textPrice} c={"#787878"}>
              (Tiết kiệm{" "}
              <NumberFormatter
                value={data?.marketPrice! - data?.unitSellingPrice!}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
              )
            </Text>
          </Flex>
        </Box>
      );
    } else if (data?.attribute4 === "repair") {
      return (
        <Box className={style.price}>
          <Flex gap={10} align={"center"}>
            <Text className={style.remainingPrice}>
              <NumberFormatter
                value={data?.unitSellingPrice || 0}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </Text>
            <p className={style.vat}>(Đã bao gồm VAT)</p>
          </Flex>
        </Box>
      );
    } else if (data?.attribute4 === "buyandrepair") {
      return (
        <div>
          <h3 className={style.priceTitle}>Giá bán & Sửa chữa</h3>
          <Box className={style.price}>
            <Flex align={"center"} gap={10}>
              <Text className={style.remainingPrice}>
                <NumberFormatter
                  value={data?.unitSellingPrice || 0}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>

              <Text className={style.textPrice} td="line-through" c={"#787878"}>
                <NumberFormatter
                  value={data?.marketPrice || 0}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
              </Text>
              <Text className={style.textPrice} c={"#787878"}>
                (Tiết kiệm{" "}
                <NumberFormatter
                  value={data?.marketPrice! - data?.unitSellingPrice!}
                  thousandSeparator="."
                  decimalSeparator=","
                  suffix="₫"
                />
                )
              </Text>
            </Flex>
          </Box>
        </div>
      );
    }
  };
  useEffect(() => {
    // Kiểm tra Xem có dữ liệu và configGroups không
    if (!data || !data.configGroups || data.configGroups.length === 0) {
      return;
    }

    // Tạo mảng chứa thông tin nhóm cấu hình đã được cập nhật
    const updatedDataTechnical: dataTechnicalType[] = data?.configGroups?.map(
      (group) => {
        // Tạo mảng chứa thông tin các mục cấu hình đã được cập nhật
        const itemsData: dataTechnicalConfigItem[] = group.configItems.reduce(
          (acc, configItem) => {
            // Tìm kiếm Xem configItem đã tồn tại trong acc không
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

  return (
    <div className={style.boxRightTop}>
      {data?.warrantyDescrition && (
        <FixAndGuarantee guarantee={data?.warrantyDescrition} />
      )}
      {data?.configGroups && data?.configGroups.length > 0 && (
        <Box className={style.color}>
          <Text className={style.colorTitle}>Lựa chọn cho bạn</Text>
          {dataTechnical?.map((technical, index) => (
            <div key={index}>
              <Text className={style.groupTitle}>{technical?.groupName}: </Text>
              <Box className={style.wrapperImageColor}>
                {technical?.configItems?.map((item, indexTechnical) => (
                  <Box
                    key={indexTechnical}
                    className={`${style.imageColor}
                  ${
                    data &&
                    item.itemIds.includes(data?.id) &&
                    style.borderActive
                  }`}
                    onClick={() =>
                      // handleClickOtherConfigGroup(item.itemIds, index)
                      handleClickOtherConfigGroup(
                        technical.groupName || "",
                        item.value || ""
                      )
                    }
                  >
                    <p>{item.value}</p>

                    <IconCheck
                      className={`${style.checkMark} ${
                        data &&
                        item.itemIds.includes(data?.id) &&
                        style.colorActive
                      }`}
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
      {renderPrice()}
      {renderContent()}
    </div>
  );
};

export default ProductDetailTopRight;
