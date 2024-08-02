import style from "./style.module.scss";
import Logo from "@/assets/favicon-hacom.png";
import Image from "next/image";


export default function Loader() {

  return (
    <div className={style.loaderBox}>
      <div className={style.loader}></div>
    </div>
  );
}
