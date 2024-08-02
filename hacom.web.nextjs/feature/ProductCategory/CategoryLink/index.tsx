import { useParams, useSearchParams } from "next/navigation";
import style from "./CategoryLink.module.scss";
import { usePathname } from "next/navigation";
import Link from "../../../common/Link";
import { useHeaderContext } from "@/useContext/useContextSearch";

interface CategoryProps {
  category: string;
  total: number;
  search?: boolean;
  categoryName: string | null;
}

const CategoryLink: React.FC<CategoryProps> = ({
  category,
  total,
  search,
  categoryName,
}) => {
  const params = useParams();
  const pathname = usePathname();
  const { slug } = params;

  let dynamicLink = { title: "", url: "#" };

  switch (true) {
    case pathname.includes("/product-category/"):
      dynamicLink = {
        title: `${slug}`,
        url: `/product-category/${slug}`,
      };
      break;
    case pathname.includes("/search"):
      dynamicLink = { title: "Tìm kiếm", url: "" };
      break;
    case pathname.includes("/product-detail"):
      dynamicLink = {
        title: ``,
        url: `#`,
      };
      break;
    default:
      dynamicLink = { title: "", url: "#" };
  }

  const title = search ? `Kết quả tìm kiếm: ${category}` : categoryName;
  return (
    <div className={style.linkBox}>
      <Link link={dynamicLink} />
      <div className={style.product}>
        {title}
        <span>(Tổng {total} sản phẩm)</span>
      </div>
    </div>
  );
};

export default CategoryLink;
