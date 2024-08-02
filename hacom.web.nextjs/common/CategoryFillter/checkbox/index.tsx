import { Checkbox, Grid } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import React, { useState } from "react";
import style from "./checkbox.module.scss";
const categoryImages = Array.from({ length: 5 }, (_, index) =>
  require(`@/assets/category (${index + 1}).png`)
);
import Image from "next/image";

interface CheckboxIconProps {
  indeterminate: boolean | undefined;
}

const CheckboxIcon: React.FC<CheckboxIconProps> = ({
  indeterminate,
  ...others
}) => (indeterminate ? <IconCheck {...others} /> : <IconCheck {...others} />);

interface CustomCheckboxProps {
  onCheckboxChange: (value: string) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  onCheckboxChange,
}) => {
  const brand = [
    {
      name: "Đồ hoạ",
      value: "Đồ hoạ",
      image: categoryImages[0],
      color1: "#FFB1B1",
      color2: "#FF6F6F",
    },
    {
      name: "Văn phòng",
      value: "Văn phòng",
      image: categoryImages[1],
      color1: "#B9DBFB",
      color2: "#66B6FF",
    },
    {
      name: "Mỏng nhẹ",
      value: "Mỏng nhẹ",
      image: categoryImages[2],
      color1: "#FFD2A9",
      color2: "#FFB46F",
    },
    {
      name: "Sinh viên",
      value: "Sinh viên",
      image: categoryImages[3],
      color1: "#88EE98",
      color2: "#6EDA7F",
    },
    {
      name: "Gaming",
      value: "Gaming",
      image: categoryImages[4],
      color1: "#E2BCFF",
      color2: "#CA86FF",
    },
  ];

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleCheckboxChange = (value: string) => {
    const updatedSelectedBrands = [...selectedBrands];

    if (updatedSelectedBrands.includes(value)) {
      updatedSelectedBrands.splice(updatedSelectedBrands.indexOf(value), 1);
    } else {
      updatedSelectedBrands.push(value);
    }

    setSelectedBrands(updatedSelectedBrands);
    onCheckboxChange(updatedSelectedBrands.join(","));
  };

  return (
    <div className={style.checkboxGroup}>
      <div className={style.text}>Chọn theo nhu cầu:</div>
      <div className={style.checkbox}>
        {brand.map((item) => (
          <div
            key={item.value}
            className={`${style.categoryBox} ${
              selectedBrands.includes(item.value) ? style.selected : ""
            }`}
            onClick={() => handleCheckboxChange(item.value)}
            style={{
              background: `radial-gradient(50% 50% at 50% 50%, ${item.color1} 0%, ${item.color2} 100%)`,
            }}
          >
            <span>{item.name}</span>
            <Image src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCheckbox;
