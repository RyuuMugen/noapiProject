import { getDataDetailNew } from "@/api/apiArticle";
import { getDataUserCommentDetail } from "@/api/apiUserComment";
import AppContainer from "@/common/AppContainer";
import { isNullOrUndefined } from "@/extension/StringExtension";
import NewDetail from "@/feature/NewDetail/newDetail";
import NewSale from "@/feature/NewDetail/newSale";
import Newest from "@/feature/NewDetail/newest";
import { Flex } from "@mantine/core";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import FooterCustomer from "@/common/FooterCustomer";
import style from "./news-detail.module.scss";

export const metadata: Metadata = {
  title: "Chi tiết bài viết",
  description: "Chi tiết bài viết",
};
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const NewsDetailPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const id = searchParams.id as string | undefined;
  const callDataNew = async () => {
    const callApi = await getDataDetailNew(`?id=${id}`);
    if (!isNullOrUndefined(callApi) && !isNullOrUndefined(callApi?.data)) {
      const dataApi = callApi?.data;
      if (dataApi != null && !isNullOrUndefined(dataApi)) {
        return dataApi;
      } else {
        // NotificationExtension.Fails("Dữ liệu không tồn tại");
        console.log("Dữ liệu không tồn tại");
      }
      close();
    } else {
      // NotificationExtension.Fails("Dữ liệu không tồn tại");
      console.log("Dữ liệu không tồn tại");
    }
  };

  const fetchDataComment = async () => {
    try {
      const callapi = await getDataUserCommentDetail(id);
      if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
        const dataApi = callapi?.data;
        if (dataApi != null && !isNullOrUndefined(dataApi)) {
          return dataApi;
        }
      } else {
        console.log("Dữ liệu không tồn tại");
      }
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  const data = await callDataNew();
  const dataComment = await fetchDataComment();

  return (
    <main className={roboto.className}>
      <AppContainer>
        <div className={style.newsBox}>
          <div className={style.detail}>
            <div className={style.leftBox}>
              <NewDetail
                data={data || null}
                dataComment={dataComment || null}
              />
            </div>
            <div className={style.rightBox}>
              <Flex className={style.detailRight} direction="column">
                <Newest />
                <NewSale />
              </Flex>
            </div>
          </div>
        </div>
        <FooterCustomer />
      </AppContainer>
    </main>
  );
};
export default NewsDetailPage;
