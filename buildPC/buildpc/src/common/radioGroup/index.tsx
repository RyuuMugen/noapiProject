import Image from "next/image";
import React, { useEffect, useState } from "react";
import Icondown from "../../assets/Vectordown.png";
import Iconup from "../../assets/Vectorup.png";
import styles from "./radiocustom.module.scss";

type types = {
  type: string;
  handleChangePriceFilter: (filter: string | null) => void;
};
const CheckboxGroup: React.FC<types> = ({ type, handleChangePriceFilter }) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    setSelectedValue((prevValue) => (prevValue === value ? null : value));
  };

  const isButtonSelected = (value: string) => selectedValue === value;

  useEffect(() => {
    handleChangePriceFilter(selectedValue);
  }, [selectedValue]);

  return (
    <div className={styles.checkboxGroup}>
      <div>
        <p className={styles.title}>{type}</p>
      </div>
      <div className={styles.buttonGroup}>
        <button
          className={`${styles.checkboxButton} ${
            isButtonSelected("increase") ? styles.selected : ""
          }`}
          onClick={() => handleButtonClick("increase")}
        >
          <Image
            style={{ maxWidth: "100%", height: "auto" }}
            src={Iconup}
            alt="icon"
            className={isButtonSelected("increase") ? styles.imageSelected : ""}
          />
        </button>
        <button
          className={`${styles.checkboxButton} ${
            isButtonSelected("decrease") ? styles.selected : ""
          }`}
          onClick={() => handleButtonClick("decrease")}
        >
          <Image
            style={{ maxWidth: "100%", height: "auto" }}
            src={Icondown}
            alt="icon"
            className={isButtonSelected("decrease") ? styles.imageSelected : ""}
          />
        </button>
      </div>
    </div>
  );
};

export default CheckboxGroup;
