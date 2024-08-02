import Image from "next/image";
import iconCart from "@/assets/cartIcon.svg";
import { IconShoppingCart } from "@tabler/icons-react";
import style from "./Cart.module.scss";
import { NumberFormatter } from "@mantine/core";
import Link from "next/link";
const Cart = ({ products, price }: CartProps) => {
  return (
    <Link href={"/cart"}>
      <div className={style.main}>
        <div className={style.icon}>
          <Image src={iconCart} alt="" />
          <div className={style.circle}>{products}</div>
        </div>
        <div className={style.detail}>
          <div className={style.product}>Giỏ hàng</div>
          <div className={style.price}>
            <NumberFormatter
              value={price}
              thousandSeparator="."
              decimalSeparator=","
              suffix="₫"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cart;

type CartProps = {
  products: number;
  price: number;
};
