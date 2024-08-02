"use client";
import { useOverlayContext } from "@/useContext/OverLayContext";
import style from "./Overlay.module.scss";

const Overlay = () => {
  const { active } = useOverlayContext();
  return (
    <div
      className={style.main}
      style={{
        display: active ? "block" : "none",
      }}
    ></div>
  );
};

export default Overlay;
