import React, { useEffect, useCallback } from "react";
import { Flex, ScrollArea } from "@mantine/core";
import style from "./selection.module.scss";
import SelectAttributeFilter from "./SelectAttributeFiter";
import {
  AttributeOptionType,
  TblAttributeFilterOption,
} from "@/model/TblCategory";

type SetCriteriaFunction = (
  data: { labels: string[]; options: AttributeOptionType[] },
  handleValue: string | null
) => void;

type SelectionProps = {
  selectedAttributeFilter: (AttributeOptionType[] | null)[];
  setSelectedAttributeFilter: React.Dispatch<
    React.SetStateAction<(AttributeOptionType[] | null)[]>
  >;
  idCategory: number | null;
  dataAttributeFilterOption: TblAttributeFilterOption[];
  setCriteria: SetCriteriaFunction;
};

const Selection: React.FC<SelectionProps> = ({
  selectedAttributeFilter,
  setSelectedAttributeFilter,
  idCategory,
  dataAttributeFilterOption,
  setCriteria,
}) => {
  const handleSelectAttributeFilter = useCallback(
    (
      data: { labels: string[]; options: AttributeOptionType[] },
      indexGroup: number,
      handleValue: string | null
    ) => {
      const newSelectedAttribute: (AttributeOptionType[] | null)[] = [
        ...selectedAttributeFilter,
      ];

      newSelectedAttribute[indexGroup] =
        data.options.length > 0 ? data.options : null;

      setSelectedAttributeFilter(newSelectedAttribute);
      setCriteria(data, handleValue);
    },
    [selectedAttributeFilter, setSelectedAttributeFilter, setCriteria]
  );

  return (
    dataAttributeFilterOption &&
    dataAttributeFilterOption.length > 0 && (
      <div className={style.box}>
        <ScrollArea h={80}>
          <Flex gap={10} className={style.flexbox}>
            {dataAttributeFilterOption?.map((item, index) => (
              <SelectAttributeFilter
                options={item.options}
                placeholder={item.attributeName}
                handleSelectAttributeFilter={handleSelectAttributeFilter}
                selectedAttributeFilter={selectedAttributeFilter}
                indexGroup={index}
                key={index}
                idKey={item.id}
              />
            ))}
          </Flex>
        </ScrollArea>
      </div>
    )
  );
};

export default Selection;
