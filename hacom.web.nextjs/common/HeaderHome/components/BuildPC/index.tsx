import iconBuild from "@/assets/BuildIcon.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import style from "./Bell.module.scss";
import { postLoggingAction } from "@/api/apiLogging";
import { BASE_WEB_URL } from "@/config";
const Bell = () => {
  const [boxClass, setBoxClass] = useState("main");
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      if (newWidth < 1701) {
        setBoxClass("responsiveMain");
      } else {
        setBoxClass("main");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Link
      href={"/buildpc"}
      style={{ display: "flex", alignItems: "center" }}
      onClick={() =>
        postLoggingAction({
          userName: localStorage.getItem("userName"),
          actionType: "HomePageClickedLink",
          actionDetail: `${BASE_WEB_URL}/buildpc`,
        })
      }
    >
      <div className={style[boxClass]}>
        <Image src={iconBuild} alt="" width={28} height={28} />
        <div className={style.product}>Xây dựng cấu hình</div>
      </div>
    </Link>
  );
};

export default Bell;
