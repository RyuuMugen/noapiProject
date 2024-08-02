"use client";
import { getDataListProductFull } from "@/api/apiProduct";
import iconInstallment from "@/assets/iconInstallment.png";
import iconWarranty from "@/assets/iconWarranty.png";
import Links from "@/common/Link";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { DataArticle } from "@/model/DataArticle";
import { TblItem } from "@/model/ProductList";
import { TblUserComment } from "@/model/TblUserComment";
import { Flex, Text } from "@mantine/core";
import { IconCalendar, IconEye, IconUserCircle } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Comments from "./components/Comments";
import "./style.css";
import { MantineSize, Rating } from "@mantine/core";
import style from "./newest.module.scss";

const NewDetail = ({ data, dataComment }: newDetail) => {
  const link = {
    title: `${data?.title}`,
    url: `/bai-viet?id=${data?.id}`,
  };
  const [dataProduct, setDataProduct] = useState<{ [key: number]: TblItem[] }>(
    {}
  );
  const [dataArrayProduct, setDataArrayProduct] = useState({
    0: {
      length: 0,
      string: "",
    },
  });
  const [dataListHTMLProduct, setDataListHTMLProduct] = useState<string[]>([]);
  const [dataContent, setDataContent] = useState("");
  //hàm replace ảnh, product
  function replaceHtml(htmlString: any) {
    let replaceDir = htmlString.replace(
      /<div dir="auto">/g,
      '<div dir="auto" class="paddingDiv">'
    );
    // Thay thế đường dẫn hình ảnh
    let replacedSrc = replaceDir.replace(
      /src="\/media/g,
      'src="https://hanoicomputercdn.com/media'
    );
    const replaceCallback = (index: number) => {
      if (dataProduct[index] === undefined) {
        return `Chưa load dc ${index}`; // Trả về chuỗi rỗng nếu dataProduct[index] là undefined
      }
      return `<div style="
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            ">
                ${dataProduct[index]
                  .map(
                    (item: TblItem) =>
                      `
                      <div class="mainCard" >
                      <div class="propertyCard">
                    ${`<img
                        class="mainImg"
                        src="${item?.primaryImage || ""}"
                        alt="${item?.itemName ?? "Product"}"
                      />`}
                       
                  </div>
                  <div className={productCardStyle.information}>
                    <div className={productCardStyle.detail}>
                      <div class="name">
                        <p>${`${item?.itemName}`}</p>
                      </div>
                        <div class="prices">
                        ${`
                          <div>
                              <p class="oldPrice">
                                ${formatCurrency(item?.marketPrice)}
                              </p>
                              <p class="newPrice">
                              ${formatCurrency(
                                item?.unitSellingPrice ?? item?.marketPrice
                              )}
                              </p>
                          </div>
                        `}
                        </div>
                        ${`
                        <div class="name">
                          <a class="moreBox" href="/product-detail/${item.url}">
                            <div class="more">Xem chi tiết sản phẩm</div>
                          </a>
                          </div>
                        `}
                      </div>
                    </div>
                  </div>`
                  )
                  .join("\n")}</div>`;
    };

    for (var i = 0; i < dataListHTMLProduct.length; i++) {
      if (dataProduct[i] !== undefined) {
        replacedSrc = replacedSrc.replace(
          dataListHTMLProduct[i],
          replaceCallback(i)
        );
      }
    }

    return replacedSrc;
  }

  // chuyển giá thành dạng 000.000Đ
  const formatCurrency = (number: any) => {
    let strNumber = String(number);
    let result = "";
    while (strNumber.length > 3) {
      result = "." + strNumber.slice(-3) + result;
      strNumber = strNumber.slice(0, -3);
    }
    result = strNumber + result;
    result += " Đ";
    return result;
  };

  //chuyển dạng ngày giờ
  const formatDateStringToDay = (dateString: any) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = dateObject.getMonth() + 1;
    const day = dateObject.getDate();
    const formattedDate = `${day < 10 ? "0" + day : day}/${
      month < 10 ? "0" + month : month
    }/${year}`;
    return formattedDate;
  };

  const fetchData = async (
    item: { length: number; string: string },
    index: number
  ) => {
    try {
      const callapi = await getDataListProductFull(
        `?${item.string}&Skip=0&Take=${item.length}`
      );
      if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
        const dataApi = callapi?.data;
        if (dataApi != null && !isNullOrUndefined(dataApi)) {
          setDataProduct((prevData) => ({ ...prevData, [index]: dataApi }));
        }
      } else {
        console.log("Dữ liệu không tồn tại");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const getIdArray = async () => {
      const regex = /\[Products:(.*?)\]/g;
      const matches = data?.content ? data.content.match(regex) : null;
      const dataList = matches ? matches.map((match) => match) : [];
      function extractIds(string: any) {
        const regex = /\d+/g;
        return string.match(regex).map(Number);
      }
      const result = matches
        ? matches.reduce((acc: any, currentString, index) => {
            const ids = extractIds(currentString);
            acc[index] = {
              length: ids.length,
              string: ids.map((item: any) => `ItemIds=${item}`).join("&"),
            };
            return acc;
          }, {})
        : {};
      setDataListHTMLProduct(dataList);
      setDataArrayProduct(result);
    };
    getIdArray();
  }, [data]);

  useEffect(() => {
    Object.entries(dataArrayProduct).forEach(([key, item]) => {
      fetchData(item, parseInt(key));
    });
  }, [dataArrayProduct]);

  useEffect(() => {
    if (data?.content) {
      const dataContent = replaceHtml(data.content);
      setDataContent(dataContent);
    }
  }, [data, dataArrayProduct, dataProduct]);

  return (
    <Flex className={style.detailLeft} direction="column">
      <Links link={link} />
      <Text size="26px" c="#1F2123" fw={700}>
        {data?.title}
      </Text>
      <Flex className={style.infoWithIcon} align="center" gap="18px">
        <Flex align="center" gap="5px">
          <IconUserCircle color="#4E4E4E" />
          <Text size="13px" c="#7A7A7A" fw={400}>
            HACOM
          </Text>
        </Flex>

        <Flex align="center" gap="5px">
          <IconCalendar color="#4E4E4E" />
          <Text size="13px" c="#7A7A7A" fw={400}>
            {formatDateStringToDay(data?.creationDate)}
          </Text>
        </Flex>

        <Flex align="center" gap="5px">
          <IconEye color="#4E4E4E" />
          <Text size="13px" c="#7A7A7A" fw={400}>
            {data?.visit || 0}
          </Text>
        </Flex>
      </Flex>
      <Text size="15px" c="#1F2123" fw={400} className={style.content}>
        {data?.content && (
          <div
            className={style.contentText}
            dangerouslySetInnerHTML={{
              __html: dataContent,
            }}
          />
        )}
      </Text>
      <Flex className={style.formComment} direction="column">
        <Text size="24px" c="#1F2123" fw={700} style={{ marginBottom: "20px" }}>
          Bình luận của bạn
        </Text>
        <p>
          Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc
          được đánh dấu *
        </p>
        <Comments dataItem={data || null} dataComment={dataComment || null} />
      </Flex>
    </Flex>
  );
};

export default NewDetail;

type newDetail = {
  data: DataArticle | null;
  dataComment: TblUserComment[] | null;
};
