import {
  AttributeOptionType,
  TblAttributeFilterOption,
} from "@/model/TblCategory";
import { Flex, ScrollArea } from "@mantine/core";
import ChosenItem from "./ChosenItem";
import SelectAttributeFilter from "./SelectAttributeFiter";
import style from "./selection.module.scss";

type SelectionProps = {
  selectedAttributeFilter: (AttributeOptionType | null)[];
  setSelectedAttributeFilter: React.Dispatch<
    React.SetStateAction<(AttributeOptionType | null)[]>
  >;
  idCategory: number | null;
  dataAttributeFilterOption: TblAttributeFilterOption[];
};

export default function BuildPCFillter({
  selectedAttributeFilter,
  setSelectedAttributeFilter,
  idCategory,
  dataAttributeFilterOption,
}: SelectionProps) {
  const handleSelectAttributeFilter = (
    option: AttributeOptionType | undefined,
    indexGroup: number
  ) => {
    const newSelectedAttribute = [...selectedAttributeFilter];
    newSelectedAttribute[indexGroup] = option || null;
    setSelectedAttributeFilter(newSelectedAttribute);
  };

  const handleRemoveItem = (indexToRemove: number) => {
    const newSelectedAttribute = [...selectedAttributeFilter];
    newSelectedAttribute[indexToRemove] = null;
    setSelectedAttributeFilter(newSelectedAttribute);
  };

  return (
    dataAttributeFilterOption &&
    dataAttributeFilterOption.length > 0 && (
      <div className={style.box}>
        <div className={style.flexbox}>
          {dataAttributeFilterOption?.map((item, index) => (
            <SelectAttributeFilter
              options={item.options}
              placeholder={item.attributeName}
              selectedAttributeFilter={selectedAttributeFilter[index]}
              handleSelectAttributeFilter={handleSelectAttributeFilter}
              indexGroup={index}
              key={index}
            />
          ))}
        </div>
        <Flex>
          <ChosenItem
            items={selectedAttributeFilter}
            onRemove={handleRemoveItem}
          />
        </Flex>
      </div>
    )
  );
}
