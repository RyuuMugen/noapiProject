import logo from "@/assets/phone.svg";
import { IconChevronDown } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useOverlayContext } from "@/useContext/OverLayContext";
import style from "./button.module.scss";

interface LogoProp {
  id: number;
  title: string;
  data: any;
}

interface ItemProp {
  data: LogoProp;
}

const Logo: React.FC<ItemProp> = ({ data }) => {
  const { setActive } = useOverlayContext();
  const [showContentBox, setShowContentBox] = useState(false);
  const contentBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentBoxRef.current &&
        !contentBoxRef.current.contains(event.target as Node)
      ) {
        setShowContentBox(false);
        setActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    setActive(!showContentBox);
    setShowContentBox(!showContentBox); // Toggle show/hide content box
  };

  return (
    <div className={style.buttonGroup} ref={contentBoxRef}>
      <div className={style.block}>
        <button className={style.button} onClick={handleClick}>
          <Image src={logo} alt="logo" />
          <span>{data?.title}</span>
          <IconChevronDown color="white" style={{ width: 16, height: 16 }} />
        </button>
        <div
          className={`${style.contentBox} ${showContentBox ? style.show : ""}`}
        >
          <div className={style.content}>{data?.data}</div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
