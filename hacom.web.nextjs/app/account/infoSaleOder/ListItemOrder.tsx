import {
  Box,
  Flex,
  Image,
  Space,
  Table,
  Text,
  NumberFormatter,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { tblCommune, tblDistrict, tblProvince } from "@/model/TblAddress";
import style from "./infoSaleOder.module.scss";
import { modals } from "@mantine/modals";
import OrderList from "./ListItemOrder";
import React from "react";
import {
  getDataCommuneId,
  getDataProviceId,
  getDataDistrictId,
} from "@/api/ApiAddress";
type InfoSaleOderProps = {
  data: any;
};

const InfoSaleOder = ({ data }: InfoSaleOderProps) => {
  const [dataAllProvince, setDataAllProvince] = useState<tblProvince>();
  const [dataAllDistrict, setDataAllDistrict] = useState<tblDistrict>();
  const [dataAllCommune, setDataAllCommune] = useState<tblCommune>();

  const fetchDataProvince = async () => {
    if (data?.provinceId) {
      const data2 = await getDataProviceId(`id=${data.provinceId}`);
      setDataAllProvince(data2?.data);
    }
  };

  const fetchDataDistrict = async () => {
    if (data?.districtId) {
      const data2 = await getDataDistrictId(`id=${data.districtId}`);
      setDataAllDistrict(data2?.data);
    }
  };

  const fetchDataCommune = async () => {
    if (data?.communeId) {
      const data2 = await getDataCommuneId(`id=${data.communeId}`);
      setDataAllCommune(data2?.data);
    }
  };

  useEffect(() => {
    fetchDataProvince();
    fetchDataDistrict();
    fetchDataCommune();
  }, [data]);

  return (
    <div className={style.modalsBox}>
      <Box className={style.textLeft}>
        <div className={style.flexBox}>
          <div>
            <h2 className={style.titleInfo}>Thông tin đơn hàng</h2>

            <Table mt={20} mb={20} striped withTableBorder withColumnBorders>
              <Table.Tr key={1}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Họ tên:
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text>{data?.buyerName}</Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr key={2}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Email:
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text>{data?.buyerEmail}</Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr key={3}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Địa chỉ:
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text>
                    {data?.shippingAddress} , {dataAllCommune?.communeName},{" "}
                    {dataAllDistrict?.districtName},{" "}
                    {dataAllProvince?.provinceName}
                  </Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr key={4}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Điện thoại:
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text>{data?.buyerTelephone}</Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr key={4}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Hình thức giao hàng:
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text>{data?.shippingCompany}</Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr key={5}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Tên công ty:
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text>{data?.taxCompany}</Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr key={6}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Địa chỉ công ty:
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text>{data?.taxAddress}</Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr key={6}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Mã số thuế:{" "}
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text>{data?.taxCode}</Text>
                </Table.Td>
              </Table.Tr>
            </Table>
          </div>
          <div>
            <h2 className={style.titleInfo}>Tổng giá</h2>

            <Table mt={20} mb={20} striped withTableBorder withColumnBorders>
              <Table.Tr key={1}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Đã giảm giá khuyến mại
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text>
                    <Text span fw={600}>
                      <NumberFormatter
                        value={data?.voucherValue || 0}
                        thousandSeparator
                        suffix=" Đ"
                      />
                    </Text>
                    (Phiếu KM: - Mã: )
                  </Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr key={2}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Khuyến mại khác
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text></Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr key={3}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Tổng giá trị
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text fw={600}>
                    <NumberFormatter
                      value={data.totalAmount}
                      thousandSeparator
                    />
                    <Text span> VND</Text>
                  </Text>
                  <Text>(Chưa gồm phí vận chuyển)</Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr key={4}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Phí vận chuyển & giao hàng
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text fw={600}>
                    <NumberFormatter
                      value={data?.shippingFee || 0}
                      thousandSeparator
                    />
                    <Text span> VND</Text>
                  </Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr key={5}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Phí thu hộ
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text fw={600}>
                    <NumberFormatter value={0} thousandSeparator />
                    <Text span> VND</Text>
                  </Text>
                </Table.Td>
              </Table.Tr>

              <Table.Tr key={6}>
                <Table.Td>
                  <Text c={"#e91d3e"} ta="left" fw={700}>
                    Tổng thu
                  </Text>
                </Table.Td>
                <Table.Td>
                  <Text fw={600}>
                    <NumberFormatter
                      value={data?.totalRemainingAmount || 0}
                      thousandSeparator
                    />
                    <Text span> VND</Text>
                  </Text>
                </Table.Td>
              </Table.Tr>
            </Table>
          </div>
        </div>

        <h2 className={style.titleInfo}>Chi tiết đơn hàng</h2>

        <Table striped withTableBorder withColumnBorders>
          <Table.Thead>
            <Table.Tr className={style.tablerow}>
              <Table.Th className={style.th1}>Sản phẩm</Table.Th>
              <Table.Th className={style.th2}>Tên sản phẩm</Table.Th>
              <Table.Th className={style.th3}>Số lượng</Table.Th>
              <Table.Th className={style.th3}>Đơn giá</Table.Th>
              <Table.Th className={style.th3}>Tổng giá</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data?.tblSaleOrderDetailModels?.map(
              (saleOder: any, index: number) => {
                return (
                  <Table.Tr>
                    <Table.Td className={style.textLeft}>
                      <div className={style.imageContainer}>
                        <img
                          src={saleOder?.itemImage}
                          alt="Product Image"
                          className={style.img}
                        />
                      </div>
                    </Table.Td>
                    <Table.Td className={style.textLeft}>
                      {saleOder?.itemUrl ? (
                        <a
                          className={style.link}
                          href={`/product-detail/${saleOder?.itemUrl}`}
                         
                        >
                          {saleOder.itemName}
                        </a>
                      ) : (
                        <p className={style.link}>{saleOder.itemName}</p>
                      )}
                    </Table.Td>
                    <Table.Td className={style.textLeft}>
                      {saleOder.quantity}
                    </Table.Td>
                    <Table.Td className={style.textLeft}>
                      <NumberFormatter
                        thousandSeparator="."
                        decimalSeparator=","
                        value={saleOder.itemPrice}
                        suffix="₫"
                      />
                    </Table.Td>
                    <Table.Td className={style.textLeft}>
                      <NumberFormatter
                        thousandSeparator="."
                        decimalSeparator=","
                        value={
                          saleOder.totalAmount
                            ? saleOder.totalAmount
                            : saleOder.quantity * saleOder.itemPrice
                        }
                        suffix="₫"
                      />
                    </Table.Td>
                  </Table.Tr>
                );
              }
            )}
          </Table.Tbody>
        </Table>
      </Box>
    </div>
  );
};

export default InfoSaleOder;
