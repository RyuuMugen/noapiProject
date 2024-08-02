import React from "react";
import {
  Box,
  Checkbox,
  Divider,
  Flex,
  Group,
  Highlight,
  Image,
  List,
  ListItem,
  NumberFormatter,
  Text,
  Textarea,
} from "@mantine/core";
import { NotificationExtension } from "@/extension/NotificationExtension";
import styles from "./Warranty.module.scss";
interface WarrantyProductsProps {
  listDataWarrantyProducts: any[];
  dataIdNameToWarranty: (data: any) => void;
  onSelectProduct: (productId: number, selected: boolean) => void;
  selectedProductIds: number[];
  productNotes: { [key: number]: string };
  onDescriptionChange: (productId: number, value: string) => void;
  allWarrantyProducts: any[];
}

const WarrantyProducts: React.FC<WarrantyProductsProps> = ({
  listDataWarrantyProducts,
  dataIdNameToWarranty,
  onSelectProduct,
  selectedProductIds,
  productNotes,
  onDescriptionChange,
  allWarrantyProducts,
}) => {
  const handleNotes = (productId: number) => {
    const isSelected = selectedProductIds.includes(productId);
    if (!isSelected) {
      NotificationExtension.Success("Chọn thành công");
    } else {
      NotificationExtension.Warn("Đã hủy chọn");
    }
    onSelectProduct(productId, !isSelected);
  };

  const handleDescriptionChange = (
    productId: number,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value } = event.target;
    onDescriptionChange(productId, value);

    const selectedProductsInfo = allWarrantyProducts
      .filter((product) => selectedProductIds.includes(product.id))
      .map((selectedProduct) => ({
        productName: selectedProduct.item_Name,
        productCode: selectedProduct.header_Id,
        description: productNotes[selectedProduct.id] || value,
      }));
    dataIdNameToWarranty(selectedProductsInfo);
  };

  return (
    <Box>
      <List type="ordered">
        {listDataWarrantyProducts.map((element) => (
          <Box key={element.id} mt={20}>
            <Group justify="space-between">
              <Flex p={10} w="100%" gap={15} justify="space-between">
                <Flex direction="column">
                  <Box>
                    <Flex wrap="nowrap" gap={20}>
                      <Highlight
                        style={{ whiteSpace: "nowrap" }}
                        fw={700}
                        highlight="Đơn hàng:"
                      >
                        Đơn hàng:
                      </Highlight>
                      <Text fw={500} lineClamp={1}>
                        {element.item_Name}
                      </Text>
                    </Flex>
                  </Box>

                  <Box>
                    <Flex gap={20}>
                      <Highlight
                        style={{ whiteSpace: "nowrap" }}
                        fw={700}
                        highlight="Số lượng:"
                      >
                        Số lượng:
                      </Highlight>
                      <Text fw={500} lineClamp={1}>
                        {element.quantity}
                      </Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex gap={20}>
                      <Highlight
                        style={{ whiteSpace: "nowrap" }}
                        fw={700}
                        highlight="Tổng tiền:"
                      >
                        Tổng tiền:
                      </Highlight>
                      <Text fw={500}>
                        <NumberFormatter
                          thousandSeparator="."
                          decimalSeparator=","
                          suffix=" VNĐ"
                          value={element.item_Price}
                        />
                      </Text>
                    </Flex>
                  </Box>
                  <Box>
                    <Flex gap={20}>
                      <Highlight
                        style={{ whiteSpace: "nowrap" }}
                        fw={700}
                        highlight="Bảo hành:"
                      >
                        Bảo hành:
                      </Highlight>
                      <Text fw={500}>
                        {element.warranty_Description === null ? (
                          "Chưa có bảo hành"
                        ) : (
                          <>{element.warranty_Description}</>
                        )}
                      </Text>
                    </Flex>
                  </Box>
                </Flex>
                <Image
                  radius="md"
                  h={90}
                  w={90}
                  fit="contain"
                  src={element.item_Image}
                />
              </Flex>
              <Group
                mt={10}
                gap={10}
                w="100%"
                pr={20}
                pl={10}
                justify="flex-start"
              >
                <Checkbox
                  onClick={() => handleNotes(element.id)}
                  checked={selectedProductIds.includes(element.id)}
                  label={
                    selectedProductIds.includes(element.id) ? "Đã chọn" : "Chọn"
                  }
                  radius="xs"
                  size="md"
                />
              </Group>
            </Group>
            <Group grow wrap="nowrap" mt="20" gap={"lg"}>
              {selectedProductIds.includes(element.id) && (
                <Textarea
                  label={"Ghi chú / Mô tả sản phẩm lỗi"}
                  placeholder={"Nhập ghi chú"}
                  description="Bắt buộc nhập"
                  value={productNotes[element.id] || ""}
                  onChange={(event) =>
                    handleDescriptionChange(element.id, event)
                  }
                />
              )}
            </Group>
          </Box>
        ))}
      </List>
      <Group>
        {/* <Button mt={20} onClick={handleSave} variant="outline">
          Lưu
        </Button> */}
      </Group>
    </Box>
  );
};

export default WarrantyProducts;
