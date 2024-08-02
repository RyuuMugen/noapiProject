import { Box, Skeleton, Text } from "@mantine/core";

import { ArticlesModel } from "@/model/ArticlesModel";
import HtmlParserComponent from "@/common/ArticleCommon/ArticleCardItem";
import style from "./leftbox.module.scss";

const LeftBox = ({ dataArticle }: { dataArticle: ArticlesModel }) => {
  const data = dataArticle?.content ? dataArticle.content : "";
  return (
    <Box>
      <h2 className={style.title}>{dataArticle?.title}</h2>
      <Skeleton animate={false} height={4} mb={6} radius="md" />
      <Box className={style.userBox}>
        <div className={style.avt}></div>
        <Box>
          <Text>Ngày: 21/05/2024</Text>
          <Text>Tác giả: Kiên Văn</Text>
        </Box>
      </Box>
      <Skeleton animate={false} height={4} mb={6} radius="md" />
      <Box>
        <h4 className={style.sumary}>{dataArticle?.summary}</h4>
        <HtmlParserComponent htmlContent={data} />
      </Box>
    </Box>
  );
};

export default LeftBox;
