"use client";
import { TblItem, TblstoreAvailables } from "@/model/ProductList";
import { Box, List, NumberFormatter, Text } from "@mantine/core";
import { IconStack2, IconMapPinFilled } from "@tabler/icons-react";
import style from "../hoverBox.module.scss";

function HoverBox({ data }: { data: TblItem }) {
  function replaceNewlineWithBreak(htmlString: any) {
    // Chia chuỗi thành các dòng
    const lines = htmlString.split(/\r\n|\r|\n/);

    // Thêm "- " vào trước dòng đầu tiên
    if (lines.length > 0) {
      lines[0] = "- " + lines[0];
    }

    // Tái tạo chuỗi từ các dòng đã được chỉnh sửa
    return lines.join("<br> - ");
  }

  return (
    <div className={style.hoverBox}>
      <div className={style.name}>{data?.itemName}</div>
      <div className={style.tableBox}>
        <table>
          <tbody>
            {data?.marketPrice ? (
              <tr>
                <td>
                  <Text size="14px" fw={700}>
                    - Giá bán:
                  </Text>
                </td>
                <td>
                  <NumberFormatter
                    thousandSeparator="."
                    decimalSeparator=","
                    value={data?.marketPrice}
                    suffix="₫"
                  />
                </td>
              </tr>
            ) : null}
            <tr>
              <td>
                <Text size="14px" className={style.warranty} fw={700}>
                  - Giá HACOM:
                </Text>
              </td>
              <td>
                <div className={style.mapFormat}>
                  <Text size="14px" fw={700} c={"red"}>
                    <NumberFormatter
                      thousandSeparator="."
                      decimalSeparator=","
                      value={data?.unitSellingPrice ?? ""}
                      suffix="₫"
                    />
                  </Text>
                  <Text size="10px">[Đã bao gồm VAT]</Text>
                </div>
              </td>
            </tr>

            {data.warrantyDescrition !== null ? (
              <tr>
                <td>
                  <Text size="14px" fw={700}>
                    - Bảo hành:
                  </Text>
                </td>
                <td>
                  <Text className={style.warranty} size="14px">
                    {data.warrantyDescrition}
                  </Text>
                </td>
              </tr>
            ) : null}

            {data.storeAvailables?.length > 0 ? (
              <tr>
                <td>
                  <Text size="14px" fw={700}>
                    - Kho hàng:
                  </Text>
                </td>
                <td>
                  {data.storeAvailables.map((item, index) => (
                    <div className={style.mapFormat}>
                      <Text
                        size="14px"
                        c={"#71CF6A"}
                        fz={14}
                        fw={700}
                        key={index}
                      >
                        <IconMapPinFilled
                          width={10}
                          height={10}
                          color={"#42FF33"}
                        />
                      </Text>
                      <Text
                        size="14px"
                        c={"rgb(244, 52, 83)"}
                        fz={14}
                        fw={700}
                        key={index}
                      >
                        {item.tentrungtam}
                      </Text>
                    </div>
                  ))}
                </td>
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>
      <div className={style.specifications}>
        {data?.itemSummary && (
          <Box className={style.item}>
            <div className={style.title}>
              <IconStack2 style={{ width: 16, height: 16 }} />
              <p> Thông số sản phẩm</p>
            </div>
            <Box
              className={` ${style.sumary}`}
              dangerouslySetInnerHTML={{
                __html: replaceNewlineWithBreak(data?.itemSummary) || "",
              }}
            ></Box>
          </Box>
        )}
      </div>
      {/* <div className={style.present}>
        <div className={style.title}>
          <IconGift />
          <p> Chương trình khuyến mại</p>
        </div>
      </div> */}
    </div>
  );
}

export default HoverBox;
