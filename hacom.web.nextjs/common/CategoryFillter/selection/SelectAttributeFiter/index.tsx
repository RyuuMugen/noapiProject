import { Popover, Button, Text, Flex, ScrollArea } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { AttributeOptionType } from "@/model/TblCategory";
import { IconChevronDown } from "@tabler/icons-react";
import style from "./SelectAttributeFiter.module.scss";
const SelectAttributeFilter = ({
  options,
  placeholder,
  handleSelectAttributeFilter,
  indexGroup,
  idKey,
  selectedAttributeFilter,
}: SelectAttributeFilterProps) => {
  const [opened, setOpened] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<AttributeOptionType[]>(
    []
  );
  const [handleValue, setHandleValue] = useState<string>(""); // Corrected variable name
  const handleOptionToggle = (option: { value: string; label: string }) => {
    setSelectedOptions((prevSelectedOptions) => {
      const isSelected = prevSelectedOptions.some(
        (item) => item.value === option.value
      );
      if (isSelected) {
        return prevSelectedOptions.filter(
          (item) => item.value !== option.value
        );
      } else {
        return [
          ...prevSelectedOptions,
          {
            value: option.value,
            label: option.label,
            placeholder: placeholder,
            idKey: indexGroup,
          },
        ];
      }
    });
    setHandleValue(option.label);
  };
  const selectedLabels = selectedOptions.map((item) => item.label);

  useEffect(() => {
    setSelectedOptions(
      selectedAttributeFilter[indexGroup]?.map((attr) => ({
        value: attr.value,
        label: attr.label,
        placeholder: placeholder,
      })) || []
    );
  }, [selectedAttributeFilter]);

  const selectedGroup = selectedAttributeFilter[indexGroup];
  const isSelecteds = Array.isArray(selectedGroup) && selectedGroup.length > 0;

  return (
    <Popover
      withArrow
      classNames={{ dropdown: style.dropdown }}
      shadow="xl"
      opened={opened}
      onChange={setOpened}
      position="bottom-start"
    >
      <Popover.Target>
        <Button
          variant="outline"
          color={`${isSelecteds ? "#d70018" : "#444"}`}
          bg={`${isSelecteds ? "rgb(254, 242, 242)" : "#f3f4f6"}`}
          onClick={() => setOpened((o) => !o)}
          size="xs"
          radius="lg"
          rightSection={<IconChevronDown size={14} />}
        >
          {placeholder}
        </Button>
      </Popover.Target>
      <Popover.Dropdown
        p={0}
        style={{
          boxShadow: `0 2px 20px rgba(0, 0, 0, .5)`,
        }}
      >
        <ScrollArea style={{ height: "fit-content" }}>
          <Flex
            style={{ maxHeight: "250px" }}
            justify="flex-start"
            wrap="wrap"
            pt={10}
            pl={10}
            pr={10}
            m={0}
          >
            {options?.map((element) => {
              const isSelected = selectedOptions.some(
                (item) => item.value === element.value
              );
              return (
                <Button
                  key={element.value}
                  variant={"outline"}
                  radius="lg"
                  size="xs"
                  mr={10}
                  mb={10}
                  bg={`${isSelected ? "rgb(254, 242, 242)" : "#f3f4f6"}`}
                  color={`${!isSelected ? "#444" : "#d70018"}`}
                  onClick={() => handleOptionToggle(element)}
                >
                  <Text
                    lineClamp={1}
                    c={!isSelected ? "#444" : "#d70018"}
                    size="xs"
                    fw={600}
                  >
                    {element.label}
                  </Text>
                </Button>
              );
            })}
          </Flex>
        </ScrollArea>
        {selectedOptions.length > 0 && (
          <Flex
            pl={10}
            pr={10}
            mb={10}
            mt={10}
            gap={10}
            justify="space-between"
            align="center"
            w="100%"
          >
            <Button
              fw={700}
              fullWidth
              c={"#d70018"}
              color={"#d70018"}
              variant="subtle"
              onClick={() => setOpened(false)}
            >
              Đóng
            </Button>
            <Button
              fullWidth
              variant="filled"
              color="#d70018"
              onClick={() =>
                handleSelectAttributeFilter(
                  {
                    labels: selectedLabels,
                    options: selectedOptions,
                  },
                  indexGroup,
                  placeholder // Pass handleValue here
                )
              }
            >
              Xem kết quả
            </Button>
          </Flex>
        )}
      </Popover.Dropdown>
    </Popover>
  );
};

export default SelectAttributeFilter;

type SelectAttributeFilterProps = {
  placeholder: string | null;
  options: {
    value: string;
    label: string;
  }[];
  idKey: number | null;
  indexGroup: number;
  handleSelectAttributeFilter: (
    data: { labels: string[]; options: AttributeOptionType[] },
    indexGroup: number,
    handeValue: string | null
  ) => void;
  selectedAttributeFilter: (AttributeOptionType[] | null)[];
};
