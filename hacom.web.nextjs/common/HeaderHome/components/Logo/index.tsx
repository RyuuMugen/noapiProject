import Image from "next/image";
import logo from "@/assets/logo-hacom-compressed4.svg";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <Image style={{ cursor: "pointer" }} src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
