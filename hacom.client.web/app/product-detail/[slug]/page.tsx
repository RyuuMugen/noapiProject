import {
  getDataDetailProductByPathName,
  getDataListProductRelation,
} from "@/api/apiProduct";
import { getDataUserCommentDetail } from "@/api/apiUserComment";
import { getDataUserReviewDetail } from "@/api/apiUserReview";
import AppContainer from "@/common/AppContainer";
import BreadCrumb from "@/common/BreadCrumb";
import { isNullOrUndefined } from "@/extension/StringExtension";
import ProductDetailPage from "@/feature/ProductDetail";

import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Product Detail Page",
  description: "Product Detail Page",
};

const ProductDetail = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const callDataProduct = async () => {
    const callApi = await getDataDetailProductByPathName(`?url=${params.slug}`);

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

  const fetchDataReview = async (idPath: number) => {
    if (idPath) {
      try {
        const callapi = await getDataUserReviewDetail(`/${idPath}`);
        if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
          // setTotalCount(callapi.totalCount);
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
    }
  };

  const fetchDataComment = async (idPath: number) => {
    if (idPath) {
      try {
        const callapi = await getDataUserCommentDetail(`/${idPath}`);
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
    }
  };

  const callApiGetDataRelation = async (idPath: number) => {
    let callapi = await getDataListProductRelation(
      `?Id=${idPath}&Skip=0&Take=15&Active=true`
    );

    if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
      const dataApi = callapi?.data;
      if (dataApi != null && !isNullOrUndefined(dataApi)) {
        return dataApi;
      }
    } else {
      console.log("Dữ liệu không tồn tại");
    }
  };

  const data = await callDataProduct();

  const [dataReview, dataComment, dataProductRelation] = await Promise.all([
    fetchDataReview(data?.id),
    fetchDataComment(data?.id),
    callApiGetDataRelation(data?.id),
  ]);

  return (
    <div>
      <BreadCrumb listBCData={data?.breadcrumbs || null} />
      <AppContainer>
        <ProductDetailPage
          data={data || null}
          dataReview={dataReview || null}
          dataComment={dataComment || null}
          dataProductList={dataProductRelation}
        />
      </AppContainer>
    </div>
  );
};

export default ProductDetail;
