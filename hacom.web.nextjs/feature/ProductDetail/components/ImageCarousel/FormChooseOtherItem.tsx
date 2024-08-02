import { comboSetItem } from "@/model/ProductList";
import { Box, Button, Flex, Image, NumberFormatter, Text } from "@mantine/core";
import style from "./leftDetail.module.scss";
import { modals } from "@mantine/modals";

const FormChooseOtherItem = ({
  data,
  indexGroup,
  handleChangeItemComboSetActive,
}: FormChooseOtherItemProps) => {
  const handleChooseOtherItem = (index: number) => {
    handleChangeItemComboSetActive(indexGroup, index);
    modals.close("FormChooseOtherItem");
  };

  return (
    <Flex gap={30} mih={700} wrap={"wrap"}>
      {data.map((item, index) => (
        <Box className={style.bundledProductsItem} key={index}>
          <Flex justify={"center"} align={"center"}>
            <Image
              src={item.image || ""}
              alt="image"
              width={160}
              height={160}
            />
          </Flex>

          <Text lineClamp={2} className={style.bundledProductsItemName}>
            {item.itemName || ""}
          </Text>

          {item?.marketPrice ? (
            <Text className={style.oldPrice} td="line-through">
              <NumberFormatter
                value={item?.marketPrice}
                thousandSeparator="."
                decimalSeparator=","
                suffix="₫"
              />
            </Text>
          ) : (
            <Box h={34}></Box>
          )}

          <Text className={style.newPrice}>
            <NumberFormatter
              value={item?.unitSellingPrice ?? ""}
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </Text>

          <Button
            className={style.bundledProductsItemOther}
            onClick={() => handleChooseOtherItem(index)}
          >
            Chọn mua
          </Button>
        </Box>
      ))}
    </Flex>
  );
};

export default FormChooseOtherItem;

type FormChooseOtherItemProps = {
  data: comboSetItem[] | [];
  indexGroup: number;
  handleChangeItemComboSetActive: (indexGroup: number, index: number) => void;
};
