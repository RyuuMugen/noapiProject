import React from "react";
import SelectedIcon from "@/assets/exchangebox.png";
import Image from "next/image";
import style from "./step2.module.scss";
interface Step2Props {
  onFormSubmit: () => void;
  closeModal: () => void;
}
const Step2: React.FC<Step2Props> = ({ onFormSubmit, closeModal }) => {
  const onClickComplete = () => {
    onFormSubmit();
    closeModal();
  };

  const onClickCancel = () => {
    closeModal();
  };
  return (
    <div className={style.main}>
      <Image src={SelectedIcon} alt="" />
      <p className={style.title}>Xác nhận tạo đơn</p>

      <div className={style.buttonlist}>
        <button onClick={onClickComplete}>
          <p>CÓ</p>Hoàn tất tạo đơn
        </button>
        <button onClick={onClickCancel}>
          <p>KHÔNG</p>Huỷ đơn tạo mới
        </button>
      </div>
    </div>
  );
};

export default Step2;
