import {
  getDataDealDetailProduct,
  getDataDetailProduct,
  getDataDetailProductByPathName,
  getDataListProductRelation,
} from "@/api/apiProduct";
import { getDataUserCommentDetail } from "@/api/apiUserComment";
import { getDataUserReviewDetail } from "@/api/apiUserReview";
import { isNullOrUndefined } from "@/extension/StringExtension";
import ProductDetails from "@/feature/ProductDetail";

import { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

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
  const id = searchParams.id as string | undefined;
  const saleid = searchParams.saleid as string | undefined;

  const callDataProduct = async () => {
    let callApi: any;
    if (params.slug) {
      callApi = await getDataDetailProductByPathName(`?url=${params.slug}`);
    } else callApi = await getDataDetailProduct(`?id=${id}`);
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
    if (idPath || id) {
      try {
        const callapi = await getDataUserReviewDetail(idPath || id);
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
    if (idPath || id) {
      try {
        const callapi = await getDataUserCommentDetail(idPath || id);
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

  const fetchDataDealProduct = async () => {
    if (saleid) {
      try {
        const callapi = await getDataDealDetailProduct(`?id=${saleid}`);
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
      `?Id=${idPath}&Skip=0&Take=18&Active=true`
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

  const [dataReview, dataComment, dataDeal, dataProductRelation] =
    await Promise.all([
      fetchDataReview(data?.id),
      fetchDataComment(data?.id),
      fetchDataDealProduct(),
      callApiGetDataRelation(data?.id),
    ]);

  return (
    <div className={roboto.className}>
      <ProductDetails
        data={data || null}
        dataReview={dataReview || null}
        dataComment={dataComment || null}
        dataDeal={dataDeal || null}
        dataProductRelation={dataProductRelation || []}
      />
    </div>
  );
};

export default ProductDetail;
