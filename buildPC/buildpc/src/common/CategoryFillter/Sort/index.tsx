import styles from "./Sort.module.scss";
import Radiogroup from "./radioGroup";
import Slider from "./slider";

type SortsProps = {
  rangerPrice: [number, number];
  onSearch: (value: [number, number]) => void;
  handleChangePriceFilter: (filter: string | null) => void;
};

export default function Sorts({
  rangerPrice,
  onSearch,
  handleChangePriceFilter,
}: SortsProps) {
  return (
    <div className={styles.box}>
      <Slider rangerPrice={rangerPrice} onSearch={onSearch} />

      <div>
        <Radiogroup
          type={"Giá:"}
          handleChangePriceFilter={handleChangePriceFilter}
        />
      </div>

      {/* <div>
        <Radiogroup type={"Mới:"} />
      </div>

      <div>
        <Radiogroup type={"Mua nhiều:"} />
      </div>

      <div>
        <Radiogroup type={"Chiết khấu:"} />
      </div>

      <div className={styles.smallbox3}>
        <Image
          style={{ maxWidth: "100%", height: "auto" }}
          src={Iconflash}
          alt="icon"
        />
        <p>Flash sale</p>
      </div>
      <div className={styles.smallbox3}>
        <Image
          style={{ maxWidth: "100%", height: "auto" }}
          src={Icongift}
          alt="icon"
        />
        <p>Quà tặng</p>
      </div> */}
    </div>
  );
}
