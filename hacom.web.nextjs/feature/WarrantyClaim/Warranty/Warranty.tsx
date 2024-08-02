"use client";
import {
  Box,
  Button,
  Code,
  Divider,
  Flex,
  Grid,
  Group,
  Highlight,
  List,
  Modal,
  NumberInput,
  ScrollArea,
  Select,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";
import styles from "./Warranty.module.scss";
import { modals } from "@mantine/modals";
import PurchasedOrder from "./PurchasedOrder";
import WarrantyProducts from "./WarrantyProducts";
import {
  createGuarantee,
  getGuaranteeDetailOrder,
  getGuaranteeDetailProduct,
  getListProductGuarantee,
} from "@/api/apiGuarantee";
import { TblGuarantee } from "@/model/TblGuarantee";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { GuaranteeDetailOrder } from "@/model/TblGuaranteeDetailOrder";
import { IconArrowDown, IconArrowUp } from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
interface dataName {
  productName: string;
  productCode: number;
}
const Warranty = () => {
  const [changeProperties, setChangeProperties] = useState(true);
  const [number, setNumber] = useState("");
  const [opened, { open, close }] = useDisclosure(false);
  const [dataProductGuarantee, setDataProductGuarantee] = useState();
  const [dataIdNameToWarranty, setDataIdNameToWarranty] = useState<dataName>();
  const [idDetaiOrder, setIdDetailOrder] = useState<any>();
  const [handleHiddenWarranty, setHandleHiddenWarranty] = useState<boolean>();
  const [handleToggle, setHandleToggle] = useState(false);
  const [handleChangeProduct, setHandleChangeProduct] = useState(true);
  const [guaranteeDetails, setGuaranteeDetails] = useState<
    GuaranteeDetailOrder[]
  >([]);
  const [selectedDetailId, setSelectedDetailId] = useState<number>();
  const [productNotes, setProductNotes] = useState<{ [key: number]: string }>(
    {}
  );
  const [arrowState, setArrowState] = useState<{ [key: number]: boolean }>({});
  const [dataDetailOrder, setDataDetailOrder] = useState<
    GuaranteeDetailOrder[]
  >([]);
  const [dataChange, setDataChange] = useState<any>([]);
  const [handleClient, setHandleClient] = useState(false);

  const [inputValue, setInputValue] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [list, setList] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [nextId, setNextId] = useState<number>(1);
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  );
  const [isCenteredModalOpen, setIsCenteredModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [
    isCenteredModalOpenCreateProduct,
    setIsCenteredModalOpenCreateProduct,
  ] = useState(false);
  const entity: TblGuarantee = {
    nameKh: "",
    phone: "",
    addres: "",
    email: "",
    orderNumber: 0,
    oderDate: "",
    tblGuaranteeProductModels: [],
  };

  const form = useForm<TblGuarantee>({
    initialValues: {
      ...entity,
    },
    validate: {
      nameKh: isNotEmpty("Chưa nhập tên khách hàng"),
      phone: isNotEmpty("Chưa nhập số điện thoại"),
      addres: isNotEmpty("Chưa nhập địa chỉ"),
      email: (value) =>
        value
          ? /^\S+@\S+$/.test(value)
            ? null
            : "Vui lòng nhập đúng định dạng"
          : "Chưa nhập Email",
    },
  });

  const handleCustomersNew = () => {
    setChangeProperties(true);
    setInputValue("");
    setProductName("");
    setDescription("");
    setHandleToggle(false);
    setList([]);
    setHandleHiddenWarranty(false);
    form.setValues(entity);
    setNumber("");
    setHandleChangeProduct(true);
    setGuaranteeDetails([]);
    setHandleClient(true);
    setDataDetailOrder([]);
  };

  const handleCustomersOld = () => {
    setChangeProperties(false);
    setInputValue("");
    setProductName("");
    setDescription("");
    setHandleToggle(true);
    setList([]);
    setHandleHiddenWarranty(false);
    form.setValues(entity);
    setNumber("");
    setHandleChangeProduct(false);
    setGuaranteeDetails([]);
    setHandleClient(false);
  };

  const AddProductWarranty = () => {
    setHandleToggle(true);
    setIsCenteredModalOpenCreateProduct(true);
  };

  const isCenteredModalClose = () => {
    setIsCenteredModalOpenCreateProduct(false);
  };
  const visibleProductWarranty = () => {
    setHandleToggle(false);
    setList([]);
  };

  const openModalPurchasOrder = () => {
    modals.openConfirmModal({
      title: (
        <Text size="xl" fw={700}>
          Đơn hàng đã mua tại Hacom
        </Text>
      ),
      children: (
        <>
          <PurchasedOrder
            dataDetailOrder={dataDetailOrder}
            PurchasedOrder={getIdDetail}
            handleOrderSelection={handleOrderSelection}
          />
          <Group justify="flex-end">
            <Button mt={20} onClick={handleOpenCenteredModal}>
              Xem chi tiết đơn
            </Button>
          </Group>
        </>
      ),
      size: "xl",
      labels: { confirm: "Confirm", cancel: "Thoát" },
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
    });
  };

  const handleOpenCenteredModal = () => {
    modals.closeAll(); // Đóng tất cả các modal hiện tại
    setIsConfirmModalOpen(false); // Đảm bảo modal xác nhận đóng
    setIsCenteredModalOpen(true); // Mở modal trung tâm
  };

  const handleBackToConfirmModal = () => {
    setIsCenteredModalOpen(false); // Đóng modal trung tâm
    openModalPurchasOrder(); // Mở lại modal xác nhận
  };

  const handleCloseCenteredModal = () => {
    setIsCenteredModalOpen(false);
  };

  const handleOrderSelection = (selectedOrder: any) => {
    setDataDetailOrder((prevOrders) =>
      prevOrders.filter((order) => order !== selectedOrder)
    );
    NotificationExtension.Success("Chọn thành công!");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuaranteeDetails([]);
    setProductNotes([]);
    setDataChange([]);
    setList([]);
    setOrderData([]);

    const value = event.target.value;

    if (!isNaN(Number(value))) {
      setNumber(String(value));
      form.setFieldValue("phone", value); // Cập nhật giá trị của trường 'phone'
    }

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const newTimer = setTimeout(() => {
      fetchData(value);
    }, 500); // 500ms debounce time

    setDebounceTimer(newTimer);
  };

  const fetchData = async (number: any) => {
    try {
      const response = await getGuaranteeDetailOrder(number || "");
      setDataDetailOrder(response.data.lists);
    } catch (error) {
      setDataDetailOrder([]);
    }
  };

  const getIdDetail = (e: any) => {
    setGuaranteeDetails((prevDetails) => [...prevDetails, e]);
    setIdDetailOrder(e.id);
    // modals.closeAll();
  };

  const handleDataFromChild = (data: any) => {
    if (data) {
      setHandleToggle(true);
    }
    setDataChange(data);
    const updatedEntitys = {
      tblGuaranteeProductModels: dataChange.map((element: any) => ({
        productName: element.productName,
        productCode: element.productCode,
        description: element.description,
      })),
    };
    form.setValues(updatedEntitys);
    setDataIdNameToWarranty(data);

    // Chuyển đổi dữ liệu từ updatedEntitys sang mảng các đối tượng Product
    const productList: Product[] = updatedEntitys.tblGuaranteeProductModels.map(
      (item: any) => ({
        id: item.productCode, // Có thể cần phải cập nhật lại cách tạo ID ở đây
        code: item.productCode,
        name: item.productName,
        description: item.description,
      })
    );
    setList(productList);
  };

  //sử lý tạo ra các list từ input productName

  const handleDeleteItem = (id: number) => {
    const newList = list.filter((product) => product.id !== id);
    setList(newList);

    // Update the guarantee object and form values after deleting
    const guarante = {
      tblGuaranteeProductModels: newList.map((product) => ({
        externalProductCode: product.code,
        productName: product.name,
        description: product.description,
      })),
    };
    form.setValues(guarante);
  };

  const handleSave = () => {
    if (productName.trim() !== "" && description.trim() !== "") {
      const newProduct: Product = {
        id: selectedProduct ? selectedProduct.id : nextId,
        code: inputValue,
        name: productName,
        description: description,
      };

      let updatedList: Product[];
      if (selectedProduct) {
        updatedList = list.map((product) =>
          product.id === selectedProduct.id ? newProduct : product
        );
        setSelectedProduct(null);
      } else {
        updatedList = [...list, newProduct];
        setNextId(nextId + 1);
      }

      const guarante = {
        tblGuaranteeProductModels: updatedList.map((product) => ({
          externalProductCode: product.code,
          productName: product.name,
          description: product.description,
        })),
      };
      form.setValues(guarante);

      setList(updatedList); // Cập nhật list với các sản phẩm mới
      setInputValue("");
      setProductName("");
      setDescription("");
    }
  };

  //

  const handleEditItem = (product: Product) => {
    setInputValue(product.code);
    setProductName(product.name);
    setDescription(product.description);
    setSelectedProduct(product);
  };

  const [orderData, setOrderData] = useState<{ [key: number]: any }>({});
  const getIdOrder = async (orderId: number) => {
    try {
      const response = await getGuaranteeDetailProduct(orderId);
      setOrderData((prevData) => ({
        ...prevData,
        [orderId]: response?.data?.lists || [],
      }));
    } catch (error) {
      console.error("Failed to fetch guarantee details:", error);
    }
  };

  const handleButtonClick = (orderId: number) => {
    if (!Number.isInteger(orderId)) {
      return;
    }
    const orderIdString = orderId.toString();
    setArrowState((prevState: any) => {
      if (typeof prevState !== "object" || prevState === null) {
        return {};
      }
      const newState = { ...prevState };

      newState[orderIdString] = !newState[orderIdString];

      Object.keys(newState).forEach((key) => {
        if (key !== orderIdString) {
          newState[key] = false;
        }
      });

      return newState;
    });

    getIdOrder(orderId);
    setSelectedDetailId(orderId);
  };

  const allWarrantyProducts = Object.values(orderData).flat();
  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([]);
  const handleSelectProduct = (productId: number, selected: boolean) => {
    setSelectedProductIds((prevSelectedProductIds) =>
      selected
        ? [...prevSelectedProductIds, productId]
        : prevSelectedProductIds.filter((id) => id !== productId)
    );
  };

  const handleDescriptionChange = (productId: number, value: string) => {
    setProductNotes((prevNotes) => ({
      ...prevNotes,
      [productId]: value,
    }));
  };

  useEffect(() => {
    const fetchDataProductGuarantee = async () => {
      const response = await getListProductGuarantee();
      setDataProductGuarantee(response?.data?.lists);
    };
    fetchDataProductGuarantee();
  }, []);

  const handleCreateScenario = async (data: TblGuarantee) => {
    if (list.length > 0) {
      await createGuarantee(data);
      modals.closeAll();
    } else {
      NotificationExtension.Fails(
        !handleClient
          ? "Chưa thêm sản phẩm bảo hành !"
          : "Vui lòng nhập đủ sản phẩm lỗi"
      );
    }
  };
  return (
    <Box mt={30} mb={30} pl={10} pr={10}>
      <Text ta="center" mt={15} mb={15} size="lg" tt="uppercase" fw={700}>
        YÊU CẦU DỊCH VỤ KỸ THUẬT, BẢO HÀNH
      </Text>
      <Text ta="center" maw={840} mx="auto" size="sm">
        Nếu quý khách có yêu cầu bảo hành tại nơi sử dụng hoặc bất cứ dịch vụ kỹ
        thuật nào, quý khách vui lòng gửi yêu cầu tới chúng tôi. Sau khi nhận
        được yêu cầu, nhân viên sẽ liên hệ ngay với khách hàng để phục vụ.
      </Text>
      <Group maw={500} mx="auto" mt={20} grow wrap="nowrap">
        <Button
          variant={!changeProperties ? "default" : "filled"}
          onClick={handleCustomersNew}
        >
          Khách hàng mới
        </Button>
        <Button
          onClick={handleCustomersOld}
          variant={changeProperties ? "default" : "filled"}
        >
          Khách hàng cũ
        </Button>
      </Group>
      <Box mt={20} className={styles.content} maw={500} mx="auto">
        <form
          onSubmit={form.onSubmit((e: TblGuarantee) => handleCreateScenario(e))}
        >
          {!changeProperties ? (
            <>
              <Group mt={20} grow wrap="nowrap">
                <TextInput
                  label="Họ tên khách hàng"
                  placeholder="Nhập tên khách hàng"
                  {...form.getInputProps("nameKh")}
                />
                <TextInput
                  type="number"
                  label="Số điện thoại"
                  placeholder="Nhập số điện thoại"
                  {...form.getInputProps("phone")}
                  onChange={handleChange}
                />
              </Group>
              <Group mt={20} grow wrap="nowrap">
                <TextInput
                  label="Địa chỉ"
                  placeholder="Nhập địa chỉ"
                  {...form.getInputProps("addres")}
                />
                <TextInput
                  label="Email"
                  placeholder="Nhập email"
                  {...form.getInputProps("email")}
                />
              </Group>
              <Group mt={20} grow wrap="nowrap">
                <Flex direction="column">
                  <Button onClick={openModalPurchasOrder}>
                    Đơn đã mua hàng Hacom
                  </Button>
                  <Highlight
                    fw={500}
                    mt={10}
                    highlight="Vui lòng nhập số điện thoại để hiển thị đơn hàng đã mua"
                  >
                    "Vui lòng nhập số điện thoại để hiển thị đơn hàng đã mua"
                  </Highlight>
                </Flex>
                {/* {handleHiddenWarranty && (
                  <Button onClick={openModalWarrantyProducts} mt={20}>
                    Chọn sản phẩm bảo hành
                  </Button>
                )} */}
              </Group>
            </>
          ) : (
            <>
              <Group mt={20} grow wrap="nowrap">
                <TextInput
                  label="Họ tên khách hàng"
                  placeholder="Nhập tên khách hàng"
                  {...form.getInputProps("nameKh")}
                />
                <TextInput
                  type="number"
                  label="Số điện thoại"
                  placeholder="Nhập số điện thoại"
                  {...form.getInputProps("phone")}
                  onChange={handleChange}
                />
              </Group>
              <Group mt={20} grow wrap="nowrap">
                <TextInput
                  label="Địa chỉ"
                  placeholder="Nhập địa chỉ"
                  {...form.getInputProps("addres")}
                />
                <TextInput
                  label="Email"
                  placeholder="Nhập email"
                  {...form.getInputProps("email")}
                />
              </Group>
            </>
          )}
          {handleChangeProduct && (
            <>
              <Group mt={20} grow wrap="nowrap">
                <Button onClick={AddProductWarranty}>
                  Thêm sản phẩm bảo hành
                </Button>
              </Group>
              <Modal
                opened={isCenteredModalOpenCreateProduct}
                onClose={isCenteredModalClose}
                title={
                  <Text fw={700} size="xl">
                    Thêm sản phẩm bảo hành
                  </Text>
                }
                centered
                size="xl"
                h="100vh"
              >
                <Box>
                  <Group mt={20} grow wrap="nowrap">
                    <Flex direction="column">
                      <TextInput
                        value={inputValue}
                        label="Mã sản phẩm"
                        placeholder="Nhập mã sản phẩm"
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                      {!changeProperties && (
                        <Text size="sm" style={{ color: "red" }}>
                          ( Không có sản phẩm trong danh sách bảo hành, nhập tại
                          đây )
                        </Text>
                      )}
                    </Flex>
                    <Flex direction="column">
                      <TextInput
                        label={"Tên sản phẩm"}
                        placeholder={"Nhập tên sản phẩm"}
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        // {...form.getInputProps("tblGuaranteeProductModels.productName")}
                      />
                      {!changeProperties && (
                        <Text size="sm" style={{ color: "red" }}>
                          ( Không có sản phẩm trong danh sách bảo hành, nhập tại
                          đây )
                        </Text>
                      )}
                    </Flex>
                  </Group>
                  <Group grow wrap="nowrap" mt="20" gap={"lg"}>
                    <Flex direction="column">
                      <Textarea
                        label={"Ghi chú sản phẩm bị lỗi"}
                        placeholder={"Nhập ghi chú"}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      {!changeProperties && (
                        <Text size="sm" style={{ color: "red" }}>
                          ( Không có sản phẩm trong danh sách bảo hành, nhập tại
                          đây )
                        </Text>
                      )}
                    </Flex>
                  </Group>
                  <Group mt={20}>
                    <Button onClick={handleSave}>Lưu</Button>
                    <Button onClick={visibleProductWarranty}>Hủy</Button>
                  </Group>
                  <Flex direction="column-reverse">
                    <ScrollArea
                      bg={"#f2f1f0"}
                      h={list.length !== 0 ? 370 : 0}
                      mt={10}
                      style={{ overflowX: "hidden" }}
                    >
                      <Flex direction="column-reverse">
                        {list.map((element, index) => {
                          return (
                            <>
                              <Group
                                pl={10}
                                mt={10}
                                mb={10}
                                pr={10}
                                gap={10}
                                justify="space-between"
                              >
                                <Box>
                                  <Text fw={600}>{index + 1}</Text>
                                  <Flex gap={10}>
                                    <Box w={300}>
                                      <Flex w={300} wrap="nowrap" gap={20}>
                                        <Highlight
                                          style={{ whiteSpace: "nowrap" }}
                                          fw={700}
                                          highlight="Mã sản phẩm:"
                                        >
                                          Mã sản phẩm:
                                        </Highlight>
                                        <Text fw={400} truncate="end">
                                          {element.code}
                                        </Text>
                                      </Flex>
                                      <Flex w={300} wrap="nowrap" gap={20}>
                                        <Highlight
                                          style={{ whiteSpace: "nowrap" }}
                                          fw={700}
                                          highlight="Tên sản phẩm:"
                                        >
                                          Tên sản phẩm:
                                        </Highlight>
                                        <Text fw={400} truncate="end">
                                          {element.name}
                                        </Text>
                                      </Flex>
                                      <Flex w={300} wrap="nowrap" gap={20}>
                                        <Highlight
                                          style={{ whiteSpace: "nowrap" }}
                                          fw={700}
                                          highlight="Ghi chú:"
                                        >
                                          Ghi chú:
                                        </Highlight>
                                        <Text truncate="end" fw={400}>
                                          {element.description}
                                        </Text>
                                      </Flex>
                                    </Box>
                                  </Flex>
                                </Box>
                                <Flex gap={10}>
                                  <Button
                                    onClick={() => handleEditItem(element)}
                                    variant="filled"
                                    size="xs"
                                    radius="xl"
                                  >
                                    Sửa
                                  </Button>
                                  <Button
                                    variant="outline"
                                    color="red"
                                    size="xs"
                                    radius="xl"
                                    onClick={() => handleDeleteItem(element.id)}
                                  >
                                    Xóa
                                  </Button>
                                </Flex>
                              </Group>
                              <Divider size="sm" />
                            </>
                          );
                        })}
                      </Flex>
                    </ScrollArea>
                  </Flex>
                </Box>
                <Group justify="end">
                  <Button mt={20} bg={"green"} onClick={isCenteredModalClose}>
                    Tiến tới gửi yêu cầu
                  </Button>
                </Group>
              </Modal>
            </>
          )}
          <Modal
            opened={isCenteredModalOpen}
            onClose={handleCloseCenteredModal}
            title={
              <Text fw={700} size="xl">
                Chi tiết đơn
              </Text>
            }
            centered
            size="xl"
            h="100vh"
          >
            <Box className={styles.container}>
              {guaranteeDetails.length > 0 && dataDetailOrder.length >= 0 ? (
                <>
                  <List w="100%" type="ordered">
                    {guaranteeDetails.map((detail) => (
                      <>
                        <Group mt={20} grow wrap="nowrap" key={detail.id}>
                          <Flex direction="column">
                            <List.Item mt={10}>
                              <Group
                                w="100%"
                                wrap="nowrap"
                                justify="space-between"
                                pr={15}
                              >
                                <Text fw={700}>
                                  Đặt hàng ngày "{detail.order_Date}"
                                </Text>
                                <Button
                                  justify="space-between"
                                  variant="filled"
                                  color={"rgba(41, 127, 207, 1)"}
                                  size="xs"
                                  key={detail.id}
                                  onClick={() => handleButtonClick(detail.id)}
                                  rightSection={
                                    arrowState[detail.id] ? (
                                      <IconArrowUp size={14} />
                                    ) : (
                                      <IconArrowDown size={14} />
                                    )
                                  }
                                >
                                  Xem chi tiết
                                </Button>
                              </Group>
                            </List.Item>
                            <>
                              {selectedDetailId === detail.id &&
                                arrowState[detail.id] && (
                                  <WarrantyProducts
                                    dataIdNameToWarranty={handleDataFromChild}
                                    listDataWarrantyProducts={
                                      orderData[detail.id] || []
                                    }
                                    productNotes={productNotes}
                                    onSelectProduct={handleSelectProduct}
                                    selectedProductIds={selectedProductIds}
                                    onDescriptionChange={
                                      handleDescriptionChange
                                    }
                                    allWarrantyProducts={allWarrantyProducts}
                                  />
                                )}
                            </>
                          </Flex>
                        </Group>
                        <Divider mt={10} size="md" />
                      </>
                    ))}
                  </List>
                </>
              ) : (
                "Chưa có đơn cần bảo hành"
              )}
            </Box>
            <Group mt="30" justify="flex-end">
              <Button onClick={handleBackToConfirmModal}>Trở lại</Button>
              <Button bg={"green"} onClick={handleCloseCenteredModal}>
                Tiến tới gửi yêu cầu
              </Button>
            </Group>
          </Modal>
          <Button bg={"green"} type="submit" mt="md">
            Gửi yêu cầu
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Warranty;

interface Product {
  id: number;
  code: string;
  name: string;
  description: string;
}
