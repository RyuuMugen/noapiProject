import { Badge, Button, Flex } from "@mantine/core";
import Image from "next/image";
import React from "react";
import IconX from "@/assets/IconX.svg";
import Style from "./ChosenItem.module.scss";
import { AttributeOptionType } from "@/model/TblCategory";
interface ItemListProps {
  items: (AttributeOptionType | null)[];
  onRemove: (index: number) => void;
}

const ChosenItem: React.FC<ItemListProps> = ({ items, onRemove }) => {
  return (
    <div>
      <Flex>
        {items?.map(
          (item, index) =>
            item && (
              <Flex key={index}>
                <Button
                  className={Style.button}
                  rightSection={
                    <Image
                      onClick={() => onRemove(index)}
                      src={IconX}
                      alt="icon"
                    />
                  }
                >
                  {item?.label}
                </Button>
              </Flex>
            )
        )}
      </Flex>
    </div>
  );
};

export default ChosenItem;
