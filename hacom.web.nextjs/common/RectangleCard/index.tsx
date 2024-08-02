"use client";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import rectangleCardStyle from "./RectangleCard.module.scss";
import { useHeaderContext } from "@/useContext/useContextSearch";

const RectangleCard = ({ item }: RectangleCardProps) => {
  const router = useRouter();
  const { setCategorySearch } = useHeaderContext();

  const handleRedirectToListCategory = () => {
    setCategorySearch({
      categoryName: item.title,
      categoryCode: item.categoryCode,
      categoryId: item.idCategory,
    });
    router.push(
      // `/product-category?category=${item?.title}&idCategory=${item?.idCategory}`
      `/product-category/${item.categoryCode}`
    );
  };
  return (
    <>
      <div
        className={rectangleCardStyle.main}
        onClick={handleRedirectToListCategory}
      >
        <div className={rectangleCardStyle.card}>
          <div className={rectangleCardStyle.imageCard}>
            <div className={rectangleCardStyle.circle}>
      
              <Image
                className={rectangleCardStyle.img}
                src={item?.img || ""}
                alt="anh"
                
              />
            </div>
          </div>
          <p className={rectangleCardStyle.title}>{item?.title}</p>
        </div>
      </div>
    </>
  );
};

export default RectangleCard;

type RectangleCardProps = {
  item: {
    img: StaticImageData;
    title: string;
    idCategory: number;
    categoryCode: string;
  };
};
