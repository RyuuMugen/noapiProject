import { Flex, Text } from "@/library/mantine";
import { IconChevronRight } from "@tabler/icons-react";
import style from "./CommonCategoryTag.module.scss";
import { useRouter } from "next/navigation";
import { useViewportSize } from "@mantine/hooks";

const CommonCategoryTag = ({ data, categoryPath }: CommonCategoryTagProps) => {
  const router = useRouter();
  const { width } = useViewportSize();

  const handleClickCategory = (path: string | undefined) => {
    if (path) {
      router.push(`product-category/${path}`);
    }
  };

  return (
    <div>
      <Flex gap={width < 1500 ? 25 : "xl"}>
        {data?.map((item, index) => (
          <Text
            key={index}
            className={style.categoryTag}
            onClick={() => handleClickCategory(item?.path)}
          >
            {item?.label}
          </Text>
        ))}
        <Flex
          align={"center"}
          className={style.viewAll}
          onClick={() => handleClickCategory(categoryPath)}
        >
          <Text className={style.allTag}>Xem tất cả sản phẩm</Text>
          <IconChevronRight size={12} color="#0052CC" />
        </Flex>
      </Flex>
    </div>
  );
};

export default CommonCategoryTag;

type CommonCategoryTagProps = {
  data?: {
    label: string;
    path: string;
  }[];
  categoryPath?: string;
};
