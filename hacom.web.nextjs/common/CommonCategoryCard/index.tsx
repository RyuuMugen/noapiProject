"use client";
import { useRouter } from "next/navigation";
import { useHeaderContext } from "@/useContext/useContextSearch";
import commonCategoryCardStyle from "./CommonCategoryCard.module.scss";

const CommonCategoryCard = ({ item }: CategoryCardProps) => {
  const router = useRouter();
  const { setCategorySearch } = useHeaderContext();
  const handleRedirectToListCategory = () => {
    setCategorySearch({
      categoryName: item.title.toLowerCase(),
      categoryCode: item.categoryCode,
      categoryId: item.idCategory,
    });
    router.push(`/collection/${item.categoryCode}`);
  };

  return (
    <div>
      <div className={commonCategoryCardStyle.main}>
        <div
          style={{ backgroundImage: `url(${item.image.src})` }}
          className={commonCategoryCardStyle.image}
        ></div>
        <p
          className={commonCategoryCardStyle.title}
          onClick={handleRedirectToListCategory}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default CommonCategoryCard;

type CategoryCardProps = {
  item: {
    title: string;
    idCategory: number;
    categoryCode: string;
    image: any;
  };
};
