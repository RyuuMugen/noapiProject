import React from "react";
import SelectedIcon from "@/assets/exchangebox.png";
import Image from "next/image";
import style from "./step2.module.scss";
interface Step2Props {
  nextStep: () => void;
  nextStep2: () => void;
  setType: React.Dispatch<React.SetStateAction<string>>;
}
const Step2: React.FC<Step2Props> = ({ nextStep, nextStep2, setType }) => {
  const onClickNextStep = () => {
    nextStep();
    setType("N");
  };

  const onClickNextStep2 = () => {
    nextStep2();
    setType("O");
  };
  return (
    <div className={style.main}>
      <Image src={SelectedIcon} alt="" />
      <p className={style.title}>Bạn có muốn đổi lên sản phẩm mới không?</p>

      <div className={style.buttonlist}>
        <button onClick={onClickNextStep}>
          <p>CÓ</p>Muốn đổi mới
        </button>
        <button onClick={onClickNextStep2}>
          <p>KHÔNG</p>Chỉ muốn bán lại
        </button>
      </div>
    </div>
  );
};

export default Step2;
