import { ComboboxItem, ScrollArea, Select } from "@mantine/core";
import React, { useState } from "react";
import style from "./SelectAttributeFiter.module.scss";
import { IconChevronDown } from "@tabler/icons-react";
import { AttributeOptionType } from "@/model/TblCategory";

const SelectAttributeFilter = ({
  options,
  placeholder,
  selectedAttributeFilter,
  handleSelectAttributeFilter,
  indexGroup,
}: SelectAttributeFilterProps) => {
  const [value, setValue] = useState<ComboboxItem | null>(null);

  const onChangeSelect = (value: string | null) => {
    const selectOption = options.find((item) => item.value === value);
    handleSelectAttributeFilter(selectOption, indexGroup);
  };

  return (
    <div className={style.selectBox}>
      <Select
        classNames={style}
        data={[{ group: placeholder || "", items: options }]}
        placeholder={placeholder || ""}
        clearable
        searchable
        value={selectedAttributeFilter?.value || null}
        onChange={(value) => onChangeSelect(value)}
      />
    </div>
  );
};

export default SelectAttributeFilter;

type SelectAttributeFilterProps = {
  placeholder: string | null;
  options: {
    value: string;
    label: string;
  }[];
  selectedAttributeFilter: AttributeOptionType | null;
  indexGroup: number;
  handleSelectAttributeFilter: (
    option: AttributeOptionType | undefined,
    indexGroup: number
  ) => void;
};
