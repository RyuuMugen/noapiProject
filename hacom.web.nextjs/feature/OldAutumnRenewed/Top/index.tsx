import Banner from "@/assets/Banner1oldnew.png";
import Image from "next/image";

export default function TopPage() {
  return (
    <div style={{ paddingTop: 18 }}>
      <Image
        src={Banner}
        alt=""
        style={{
          position: "relative",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
        }}
      />
    </div>
  );
}
