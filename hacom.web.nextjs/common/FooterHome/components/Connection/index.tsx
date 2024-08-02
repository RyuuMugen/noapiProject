import { Text } from "@mantine/core";
import Image from "next/image";
import Gov from "@/assets/Gov.png";
import dmca from "@/assets/dmca_logo 1.png";
import iconEmail from "@/assets/iconEmail.svg";
import iconFb from "@/assets/FaceBookIcon.png";
import iconHotline from "@/assets/iconHotline.svg";
import iconLinkedin from "@/assets/iconLinkedin.png";
import iconTiktok from "@/assets/iconTiktok.png";
import iconYoutube from "@/assets/iconYoutube.png";
import footerStyle from "../../FooterHome.module.scss";
import Link from "next/link";
import style from "./Connection.module.scss";

const Connection = () => {
  return (
    <div>
      <div className={style.main}>
        <Text className={footerStyle.contentTitle}>Kết nối</Text>
        <div className={style.hotline}>
          <Image src={iconHotline} alt="iconHotline" />
          <Text>
            Hotline: <span>1900 1903</span>
          </Text>
        </div>
        <div className={style.email}>
          <Image src={iconEmail} alt="iconEmail" />
          <Text>
            Email: <span>info@hacom.vn</span>
          </Text>
        </div>

        <div className={style.contact}>
          <Link href="https://www.facebook.com/www.hacom.vn">
            <Image src={iconFb} alt="iconFb" />
          </Link>
          <Link href="https://youtube.com/channel/UCIoWNINN5sJcx1zboLXZmeA">
            <Image src={iconYoutube} alt="iconYoutube" />
          </Link>
          <Link href="https://instagram.com/hacom.vn/">
            <Image src={iconLinkedin} alt="iconLinkedin" />
          </Link>
          <Link href="https://www.tiktok.com/@hacom.vn?is_from_webapp=1&sender_device=pc">
            <Image src={iconTiktok} alt="iconTiktok" />
          </Link>
        </div>
      </div>
      <div className={style.certificate}>
        <Link
          href={
            "http://online.gov.vn/Home/WebDetails/95539?AspxAutoDetectCookieSupport=1"
          }
        >
          <Image src={Gov} alt="Gov" />
        </Link>
      </div>
    </div>
  );
};

export default Connection;
