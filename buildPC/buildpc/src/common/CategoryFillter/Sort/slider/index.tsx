import {
  Button,
  Flex,
  NumberFormatter,
  RangeSlider,
  Text,
} from "@mantine/core";
import { useState } from "react";
import styles from "./slider.module.scss";

export default function Sliders({ rangerPrice, onSearch }: SliderProps) {
  const [value, setValue] = useState<[number, number]>(rangerPrice);

  return (
    <div className={styles.gridbox}>
      <div className={styles.p}>
        <p>Khoảng giá:</p>
      </div>
      <div className={styles.slider}>
        <Flex justify={"space-between"}>
          <Text>
            <NumberFormatter value={value[0]} thousandSeparator suffix="Đ" />
          </Text>
          <Text>
            <NumberFormatter value={value[1]} thousandSeparator suffix="Đ" />
          </Text>
        </Flex>
        <RangeSlider
          classNames={styles}
          label={null}
          min={10000}
          max={100000000}
          minRange={1000000}
          step={10000}
          thumbSize={24}
          size={4}
          color="#EE4D2D"
          defaultValue={rangerPrice}
          // value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
      <Button mt={30} onClick={() => onSearch(value)}>
        Tìm kiếm
      </Button>
    </div>
  );
}

type SliderProps = {
  rangerPrice: [number, number];
  onSearch: (value: [number, number]) => void;
};
