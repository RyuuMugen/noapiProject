import Image, { StaticImageData } from "next/image";
import { Menu } from "@mantine/core";
import Link from "next/link";
import style from "./link.module.scss";

interface urlGroup {
  href: string;
  name: string;
}
interface linkProp {
  icon: StaticImageData;
  title: string;
  src: string;
  srcGroup?: urlGroup[];
}

const ItemLink: React.FC<linkProp> = ({ icon, title, src, srcGroup }) => {
  return (
    <div className={style.linkBox}>
      <Menu trigger="hover" openDelay={100} closeDelay={400}>
        <Menu.Target>
          <Link href={src} className={style.link}>
            <Image src={icon} alt="logo" />
            <span className={style.hidden}>{title}</span>
          </Link>
        </Menu.Target>

        {srcGroup !== null && srcGroup !== undefined && (
          <Menu.Dropdown className={style.dropDownBox}>
            {srcGroup.map((item, index) => (
              <Menu.Item key={index}>
                <div className={style.linkItem}>
                  <Link
                    className={style.linkItemSrc}
                    href={item.href}
                    title={item.name}
                  >
                    <span className={style.hidden}>{item.name}</span>
                  </Link>
                </div>
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        )}
      </Menu>
    </div>
  );
};

export default ItemLink;
