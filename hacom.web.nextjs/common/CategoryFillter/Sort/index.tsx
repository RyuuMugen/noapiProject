import styles from "./Sort.module.scss";
import Radiogroup from "./radioGroup";
import Slider from "./slider";

type SortsProps = {
  rangerPrice?: [number, number | undefined];
  onSearch: (value: [number, number]) => void;
  priceFilter: string | null;
  handleChangePriceFilter: (filter: string | null) => void;
};

export default function Sorts({
  rangerPrice,
  onSearch,
  priceFilter,
  handleChangePriceFilter,
}: SortsProps) {
  return (
    <div className={styles.box}>
      <div className={styles.slider}>
        {rangerPrice && (
          <Slider rangerPrice={rangerPrice} onSearch={onSearch} />
        )}
      </div>

      <div className={styles.sort}>
        <Radiogroup
          type={"Giá:"}
          priceFilter={priceFilter}
          handleChangePriceFilter={handleChangePriceFilter}
        />
      </div>
    </div>
  );
}
