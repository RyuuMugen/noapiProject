import {
  Button,
  Flex,
  NumberFormatter,
  RangeSlider,
  Text,
  TextInput,
} from "@mantine/core";
import styles from "./slider.module.scss";
import { useState } from "react";

export default function Sliders({ rangerPrice, onSearch }: SliderProps) {
  const [value, setValue] = useState<[number, number]>([
    rangerPrice[0],
    rangerPrice[1] || 100000000,
  ]);

  return (
    <div className={styles.gridbox}>
      <div className={styles.p}>
        <p>Khoảng giá:</p>
      </div>
      <div className={styles.slider}>
        <Flex justify={"space-between"}>
          <Text size="15px">
            <NumberFormatter
              value={value[0]}
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </Text>
          <Text size="15px">
            <NumberFormatter
              value={value[1]}
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </Text>
        </Flex>
        <RangeSlider
          classNames={styles}
          label={null}
          min={0}
          max={100000000}
          minRange={100000}
          step={100000}
          thumbSize={24}
          size={4}
          color="#1F67D2"
          defaultValue={[rangerPrice[0], rangerPrice[1] || 100000000]}
          // value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
      <Button className={styles.button} onClick={() => onSearch(value)}>
        Lọc
      </Button>
    </div>
  );
}

type SliderProps = {
  rangerPrice: [number, number | undefined];
  onSearch: (value: [number, number]) => void;
};
