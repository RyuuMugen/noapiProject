"use client";
import {
  createCustomerWithOutToken,
  deleteCustomerSite,
  editCustomerSite,
} from "@/api/apiCustomer";
import bgCheckDelivery from "@/assets/bgCheckDelivery.png";
import iconStandardDelivery from "@/assets/iconStandardDelivery.svg";
import GHTK from "@/assets/ghtk.png";
import NTL from "@/assets/NTL.png";
import VTP from "@/assets/VTP.png";
import SCA from "@/assets/SCAlogo.png";
import { takeDeliveryfeeGHTK } from "@/api/apiGHTK";
import { takeDeliveryfeeNTL } from "@/api/apiNTL";
import { tblCommune, tblDistrict, tblProvince } from "@/model/TblAddress";
import { NTLcalcfee, SCAcalcfee } from "@/model/shippingModel";
import {
  takeProviceId,
  takeDistrictId,
  takeDeliveryfeeSCA,
} from "@/api/apiSCA";
import {
  getDataCommuneId,
  getDataDistrictId,
  getDataProviceId,
} from "@/api/ApiAddress";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { FormOrderBuyerInfo } from "@/model/TblSaleOrder";
import { useSaleOrder } from "@/useContext/SaleOrderContext";
import { useAuthContext } from "@/useContext/useAuthContext";
import { Badge, Button, Flex, List, Switch, Text, Title } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconCheck, IconPlus } from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import CartOrder from "./CartOrder";
import FormAddRess from "./FormAddress";
import style from "./Order.module.scss";
import RightBox from "./Rightbox";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { takeDeliveryfeeViettel } from "@/api/apiViettel";
const dataDelivery = [
  {
    icon: iconStandardDelivery,
    title: "Giao hàng tiêu chuẩn(Hacom)",
    disable: false,
    type: 0,
  },
  { icon: GHTK, title: "Giao hàng tiết kiệm", disable: true, type: 1 },
  { icon: NTL, title: "Nhất Tín Logistics", disable: true, type: 2 },
  { icon: VTP, title: "Viettel Post", disable: true, type: 3 },
  {
    icon: SCA,
    title: "SCA Express (giao trong Hà Nội)",
    disable: true,
    type: 4,
  },
  // { icon: iconOtherDelivery, title: "Giao hàng bên thứ 3", disable: true, , type: 2 },
];

const Order = () => {
  const { userInfo, setUserInfo, handleGetUserInfo } = useAuthContext();
  const [idActive, setIdActive] = useState(0);
  const [isCreateUser, setIsCreateUser] = useState(false);
  const [readytoCreateOrder, setReadytoCreateOrder] = useState(false);
  const [userId, setUserId] = useState(0);
  const [typeDelivery, setTypeDelivery] = useState(0);
  const [companyDelivery, setCompanyDelivery] = useState(
    "Giao hàng tiêu chuẩn(Hacom)"
  );
  const [totalAmountDelivery, setTotalAmountDelivery] = useState(0);
  const [loading, setLoading] = useState(false);
  const [dataAllProvince, setDataAllProvince] = useState<tblProvince>();
  const [dataAllDistrict, setDataAllDistrict] = useState<tblDistrict>();
  const [dataAllCommune, setDataAllCommune] = useState<tblCommune>();
  const [dataAllDistrictSCA, setDataAllDistrictSCA] = useState<any[]>([]);
  const [dataMainAddres, setDataMainAddres] = useState<FormOrderBuyerInfo>();
  const {
    SaleOrderDetail,
    totalAmount,
    setDataSaleOderSuccess,
    dataSaleOderSuccess,
  } = useSaleOrder();

  const [listAddress, setListAddress] = useState<FormOrderBuyerInfo[]>([]);
  const [ntlTypeDelivery, setNtlTypeDelivery] = useState<NTLcalcfee[]>([]);
  const [idActiveType, setIdActiveType] = useState(0);
  const [scaTypeDelivery, setScaTypeDelivery] = useState<SCAcalcfee[]>([]);
  const [idActiveTypeSCA, setIdActiveTypeSCA] = useState(0);
  const fetchDataProvince = async () => {
    if (dataMainAddres?.provinceId != null) {
      const data = await getDataProviceId(`id=${dataMainAddres.provinceId}`);
      setDataAllProvince(data?.data);
    }
  };

  const fetchDataDistrict = async () => {
    if (dataMainAddres?.districtId != null) {
      const data = await getDataDistrictId(`id=${dataMainAddres.districtId}`);
      setDataAllDistrict(data?.data);
    }
  };

  const fetchDataCommune = async () => {
    if (dataMainAddres?.wardId != null) {
      const data = await getDataCommuneId(`id=${dataMainAddres.wardId}`);
      setDataAllCommune(data?.data);
    }
  };

  function handleOpenModalAddAddress() {
    modals.openConfirmModal({
      modalId: "formAddress",
      title: (
        <>
          <Title order={5}>Địa chỉ giao hàng</Title>
        </>
      ),
      centered: true,
      children: (
        <FormAddRess
          length={listAddress?.length}
          customerId={userId}
          userInfo={userInfo}
          handleAddAddress={handleAddAddress}
          handleEditAddress={handleEditAddress}
          setIsCreateUser={setIsCreateUser}
        />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
      size: "lg",
    });
  }

  function handleOpenModalEditAddress(item: FormOrderBuyerInfo) {
    modals.openConfirmModal({
      modalId: "formAddress",
      title: (
        <>
          <Title order={5}>Địa chỉ giao hàng</Title>
        </>
      ),
      centered: true,
      children: (
        <FormAddRess
          length={listAddress?.length}
          customerId={userId}
          data={item}
          userInfo={userInfo}
          edit
          handleAddAddress={handleAddAddress}
          handleEditAddress={handleEditAddress}
          setIsCreateUser={setIsCreateUser}
        />
      ),
      confirmProps: { display: "none" },
      cancelProps: { display: "none" },
      size: "lg",
    });
  }

  const handleAddAddress = (address: FormOrderBuyerInfo) => {
    const updatedListAddress =
      listAddress?.length < 1
        ? [...listAddress, { ...address, defaultVal: true }]
        : [...listAddress, address];
    setListAddress(updatedListAddress);
  };
  const handleEditAddress = (address: FormOrderBuyerInfo) => {
    const index = listAddress?.findIndex(
      (item) => item.customerSiteId === address.customerSiteId
    );
    if (index === -1) {
      return;
    }
    const updatedListAddress = [...listAddress];
    updatedListAddress[index] = { ...address };
    setListAddress(updatedListAddress);
  };

  const handleDefaultChange = (index: number) => {
    const mainCount = listAddress?.reduce((count, address) => {
      return address.isMain === "Y" ? count + 1 : count;
    }, 0);

    if (userId !== 0 && (listAddress[index].isMain !== "Y" || mainCount > 1)) {
      editCustomerSite({ ...listAddress[index], isMain: "Y" });
      const updatedList = listAddress?.map((item, i) =>
        i === index ? { ...item, isMain: "Y" } : { ...item, isMain: "N" }
      );
      setListAddress(updatedList);
    } else {
      const updatedList = listAddress?.map((item, i) =>
        i === index ? { ...item, isMain: "Y" } : { ...item, isMain: "N" }
      );
      setListAddress(updatedList);
    }
  };

  const handleClickEditAddress = (item: FormOrderBuyerInfo) => {
    handleOpenModalEditAddress(item);
  };

  const handleClickDeleteAddress = (id: number | null) => {
    if (id) {
      const updatedList = listAddress?.filter(
        (item) => Number(item.customerSiteId) !== id
      );
      setListAddress(updatedList);
      if (userId === 0) {
      } else {
        deleteCustomerSite([id]);
      }
    }
  };
  const handleDeleteAddress = (index: number) => {
    const updatedListAddress = [...listAddress];
    updatedListAddress.splice(index, 1);
    setListAddress(updatedListAddress);
  };

  const handleChangActive = (id: number, type: number, name: string) => {
    setIdActive(id);
    setTypeDelivery(type);
    setCompanyDelivery(name);
  };

  const handleChangActiveType = (
    id: number,
    total_fee: number,
    type: string
  ) => {
    if (type === "NTL") {
      setIdActiveType(id);
      setTotalAmountDelivery(total_fee);
    }
    if (type === "SCA") {
      setIdActiveTypeSCA(id);
      setTotalAmountDelivery(total_fee);
    }
  };

  const handleGetProvinceSCA = async () => {
    const data = await takeDistrictId("1");
    setDataAllDistrictSCA(data?.data);
  };

  const getDistrictId = (districtName: any) => {
    const district = dataAllDistrictSCA.find(
      (d) => d.district_name === districtName
    );
    return district ? district.district_id : null;
  };

  useEffect(() => {
    fetchDataProvince();
    fetchDataDistrict();
    fetchDataCommune();
  }, [dataMainAddres]);

  useEffect(() => {
    handleGetUserInfo();
    handleGetProvinceSCA();
  }, []);

  useEffect(() => {
    if (!userInfo) {
      handleGetUserInfo();
      handleOpenModalAddAddress();
    } else {
      if (userInfo?.data?.tblCustomerSiteModels.length > 0) {
        modals.close("formAddress");
        setListAddress(userInfo?.data?.tblCustomerSiteModels || []);
      } else handleOpenModalAddAddress();
      const userData = localStorage.getItem("userInfo");
      const id = userData ? JSON.parse(userData).data.customerId : 0;
      setUserId(id);
      setReadytoCreateOrder(true);
      setIsCreateUser(true);
    }
  }, [userInfo, isCreateUser]);

  useEffect(() => {
    const fetchDatatakeDeliveryGHTK = async () => {
      try {
        const data = await takeDeliveryfeeGHTK(
          `?${dataMainAddres?.address}
          &province=${dataAllProvince?.provinceName}
          &district=${dataAllDistrict?.districtName}
          &pick_ward=${dataAllCommune?.districtName}
          &pick_address=số 131 lê thanh nghị
          &pick_province=Hà Nội
          &pick_district=Quận Hai Bà Trưng
          &weight=2
          &value=${totalAmount}
          &deliver_option=none
          `
        );
        if (data.success === true && data.fee.delivery === true) {
          setTotalAmountDelivery(data.fee.fee);
          setLoading(false); // Đã lấy được dữ liệu, setLoading là false
        } else {
          setLoading(true); // Không lấy được dữ liệu, setLoading là true
          NotificationExtension.Fails("Có lỗi xảy ra vui lòng thử lại!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true); // Có lỗi khi lấy dữ liệu, setLoading là true
        NotificationExtension.Fails("Có lỗi xảy ra vui lòng thử lại!");
      }
    };

    const fetchDatatakeDeliveryNTL = async () => {
      const dataDeliveryFee = {
        weight: 2,
        payment_method_id: 20,
        cargo_value: totalAmount,
        s_province: "Hà Nội",
        s_district: "Hai Bà Trưng",
        r_province: dataAllProvince?.provinceName,
        r_district: dataAllDistrict?.districtName,
      };
      try {
        const data = await takeDeliveryfeeNTL(dataDeliveryFee);
        if (data.success === true) {
          setNtlTypeDelivery(data.data);
          setTotalAmountDelivery(data.data[idActiveType].total_fee);
          setLoading(false); // Đã lấy được dữ liệu, setLoading là false
        } else {
          setLoading(true); // Không lấy được dữ liệu, setLoading là true
          NotificationExtension.Fails("Có lỗi xảy ra vui lòng thử lại!");
        }
      } catch (error) {
        setLoading(true); // Có lỗi khi lấy dữ liệu, setLoading là true
        NotificationExtension.Fails("Có lỗi xảy ra vui lòng thử lại!");
      }
    };

    const fetchDatatakeDeliveryVTP = async () => {
      let receviverAddress = "";

      if (dataAllCommune?.communeName !== null) {
        receviverAddress = `${dataAllCommune?.communeName}, ${dataAllDistrict?.districtName}, ${dataAllProvince?.provinceName}`;
      } else {
        receviverAddress = `${dataAllDistrict?.districtName}, ${dataAllProvince?.provinceName}`;
      }
      const dataDeliveryFee = {
        token:
          "eyJhbGciOiJFUzI1NiJ9.eyJVc2VySWQiOjE0NTAyMzIzLCJGcm9tU291cmNlIjo1LCJUb2tlbiI6IlZDVUlHRjBOM0lTV1czUTExQlZSIiwiZXhwIjoxNzE3MjA4NzQyLCJQYXJ0bmVyIjotMX0.YxN6N0ZPpQzvbjvSwnEvPsCiloqQofwapYtaa1KJTNU4D2Krp7uGs7W4BJBHhci73A0SN0Cx3kgl0mv0DBw2-w",
        model: {
          producT_WEIGHT: 1000,
          producT_PRICE: totalAmount,
          moneY_COLLECTION: 0,
          ordeR_SERVICE_ADD: "",
          ordeR_SERVICE: "VCBO",
          sendeR_ADDRESS: "Hai Bà Trưng, Hà Nội",
          receiveR_ADDRESS: receviverAddress,
          producT_LENGTH: 0,
          producT_WIDTH: 0,
          producT_HEIGHT: 0,
          producT_TYPE: "HH",
          nationaL_TYPE: 1,
        },
      };
      try {
        const data = await takeDeliveryfeeViettel(dataDeliveryFee);
        if (data.error === false) {
          setTotalAmountDelivery(data.data.MONEY_TOTAL);
          setLoading(false); // Đã lấy được dữ liệu, setLoading là false
        } else {
          setLoading(true); // Không lấy được dữ liệu, setLoading là true
          NotificationExtension.Fails("Có lỗi xảy ra vui lòng thử lại!");
        }
      } catch (error) {
        setLoading(true); // Có lỗi khi lấy dữ liệu, setLoading là true
        NotificationExtension.Fails("Có lỗi xảy ra vui lòng thử lại!");
      }
    };

    const fetchDatatakeDeliverySCA = async () => {
      let receviverId = getDistrictId(dataAllDistrict?.districtName);

      const dataDeliveryFee = {
        money_collection: 0,
        product_price: 1000000,
        product_type: "HH",
        quantity: 1,
        receiver_district_id: receviverId,
        receiver_province_id: 1,
        sender_district_id: 7,
        sender_province_id: 1,
        weight: 5000,
      };
      try {
        const data = await takeDeliveryfeeSCA(dataDeliveryFee);
        if (data.error === false) {
          setScaTypeDelivery(data.data);
          setTotalAmountDelivery(data.data[idActiveTypeSCA].fee);
          setLoading(false); // Đã lấy được dữ liệu, setLoading là false
        } else {
          setLoading(true); // Không lấy được dữ liệu, setLoading là true
          NotificationExtension.Warn(
            "Có lỗi xảy ra vui lòng thử lại! Lưu ý: chỉ giao hàng trong Hà Nội"
          );
        }
      } catch (error) {
        setLoading(true); // Có lỗi khi lấy dữ liệu, setLoading là true
        NotificationExtension.Fails(
          "Có lỗi xảy ra vui lòng thử lại! Lưu ý: chỉ giao hàng trong Hà Nội"
        );
      }
    };

    if (typeDelivery === 1) {
      if (
        dataMainAddres &&
        dataMainAddres.districtId === dataAllDistrict?.districtId &&
        dataMainAddres.provinceId === dataAllProvince?.provinceId &&
        (!dataMainAddres.wardId ||
          dataMainAddres.wardId === dataAllCommune?.communeId)
      ) {
        setLoading(true); // Bắt đầu lấy dữ liệu, setLoading là true
        fetchDatatakeDeliveryGHTK();
      }
    }
    if (typeDelivery === 2) {
      if (
        dataMainAddres &&
        dataMainAddres.districtId === dataAllDistrict?.districtId &&
        dataMainAddres.provinceId === dataAllProvince?.provinceId &&
        (!dataMainAddres.wardId ||
          dataMainAddres.wardId === dataAllCommune?.communeId)
      ) {
        setLoading(true); // Bắt đầu lấy dữ liệu, setLoading là true
        fetchDatatakeDeliveryNTL();
      }
    }
    if (typeDelivery === 3) {
      if (
        dataMainAddres &&
        dataMainAddres.districtId === dataAllDistrict?.districtId &&
        dataMainAddres.provinceId === dataAllProvince?.provinceId &&
        (!dataMainAddres.wardId ||
          dataMainAddres.wardId === dataAllCommune?.communeId)
      ) {
        setLoading(true); // Bắt đầu lấy dữ liệu, setLoading là true
        fetchDatatakeDeliveryVTP();
      }
    } else {
      setTotalAmountDelivery(0);
      setLoading(false); // Không cần lấy dữ liệu, setLoading là false
    }
    if (typeDelivery === 4) {
      if (
        dataMainAddres &&
        dataMainAddres.districtId === dataAllDistrict?.districtId &&
        dataMainAddres.provinceId === dataAllProvince?.provinceId &&
        (!dataMainAddres.wardId ||
          dataMainAddres.wardId === dataAllCommune?.communeId)
      ) {
        setLoading(true); // Bắt đầu lấy dữ liệu, setLoading là true
        fetchDatatakeDeliverySCA();
      }
    } else {
      setTotalAmountDelivery(0);
      setLoading(false); // Không cần lấy dữ liệu, setLoading là false
    }
  }, [
    dataAllCommune,
    dataAllDistrict,
    dataAllProvince,
    typeDelivery,
    dataMainAddres,
  ]);

  useEffect(() => {
    const address = listAddress?.find(
      (item: FormOrderBuyerInfo) => item?.isMain === "Y"
    );
    setDataMainAddres(address);
  }, [listAddress]);

  useEffect(() => {
    setTotalAmountDelivery(0);
    setLoading(true);
  }, [typeDelivery]); // Effect này chỉ chạy lại khi id thay đổi

  return (
    <div>
      <Text fw={700} style={{ fontSize: 22 }}>
        Đơn hàng
      </Text>

      <Flex gap={8}>
        <div className={style.leftBox}>
          <div className={style.orderLeft}>
            <Flex align={"center"}>
              <div className={style.topicNumber}>1</div>
              <Text fw={700} style={{ fontSize: 18, marginLeft: 13 }}>
                Địa chỉ giao hàng
              </Text>
            </Flex>
            <div style={{ margin: "10px 0 0 53px" }}>
              <Text color="#787878" style={{ fontSize: 15, marginBottom: 22 }}>
                Nhận đơn đặt hàng của bạn được giao đến nhà, văn phòng hoặc bất
                cứ nơi nào. Chúng tôi làm việc với một số hãng vận chuyển khác
                nhau và sẽ giao hàng thông qua một hãng có thể đáp ứng tốt nhất
                nhu cầu giao hàng của bạn.
              </Text>
              <Button
                type="button"
                variant="default"
                color="#C9C9C9"
                leftSection={<IconPlus size={15} />}
                style={{ backgroundColor: "#F0F0F0", borderRadius: 8 }}
                onClick={(e) => handleOpenModalAddAddress()}
              >
                Thêm địa chỉ mới
              </Button>
              <Flex mt={30} gap={20} wrap={"wrap"}>
                {listAddress?.map((item, index) => (
                  <div key={index} className={style.addressBox}>
                    <Flex justify={"space-between"} align={"center"} mb={12}>
                      <Text
                        fw={700}
                        style={{
                          fontSize: 18,
                          color: "#1F67D2",
                          lineHeight: "36px",
                        }}
                      >
                        {item.customerSiteName}
                      </Text>
                      {item?.isMain === "Y" ? (
                        <Badge
                          variant="outline"
                          radius="sm"
                          style={{ backgroundColor: "#ECF4FF" }}
                        >
                          Mặc định
                        </Badge>
                      ) : null}
                    </Flex>
                    <List mb={28}>
                      <List.Item>{item.address}</List.Item>
                      <List.Item>{item.email}</List.Item>
                      <List.Item>{item.telephone}</List.Item>
                    </List>
                    <Switch
                      label="Đặt làm địa chỉ mặc định"
                      labelPosition="left"
                      styles={{
                        label: { color: "#1F67D2", fontSize: 14 },
                      }}
                      checked={item.isMain === "Y" ? true : false}
                      onChange={(event) => handleDefaultChange(index)}
                    />
                    <Flex gap={"sm"} mt={24}>
                      <Button
                        type="button"
                        variant="default"
                        color="#C9C9C9"
                        style={{ backgroundColor: "#F0F0F0", borderRadius: 8 }}
                        onClick={() => handleClickEditAddress(item)}
                      >
                        Chỉnh sửa
                      </Button>
                      <Button
                        type="button"
                        variant="default"
                        color="#C9C9C9"
                        style={{ backgroundColor: "#F0F0F0", borderRadius: 8 }}
                        // onClick={() =>
                        //   handleClickDeleteAddress(Number(item?.customerSiteId))
                        // }
                        onClick={() => {
                          if (userId === 0) {
                            handleDeleteAddress(index);
                          } else {
                            handleClickDeleteAddress(
                              Number(item?.customerSiteId)
                            );
                          }
                        }}
                      >
                        Xoá
                      </Button>
                    </Flex>
                  </div>
                ))}
              </Flex>
            </div>
          </div>

          <div
            className={`${style.orderLeft} ${
              listAddress && listAddress.length === 0 && style.disabled
            }`}
          >
            <Flex align={"center"}>
              <div className={style.topicNumber}>2</div>
              <Text fw={700} style={{ fontSize: 18, marginLeft: 13 }}>
                Hình thức giao hàng
              </Text>
            </Flex>
            <div style={{ margin: "10px 0 0 53px" }}>
              <Text color="#787878" style={{ fontSize: 15, marginBottom: 22 }}>
                Bạn hãy lựa chọn một trong những hình thức giao hàng sau:
              </Text>
              <div className={style.typeDeliveryBox}>
                {dataDelivery.map((item, index) => (
                  <Flex
                    justify={"center"}
                    align={"center"}
                    key={index}
                    onClick={() =>
                      handleChangActive(index, item.type, item.title)
                    }
                    className={`${style.delivery} 
                    ${idActive === index && style.deliveryActive} 
                    ${item.disable === true && style.disable}`}
                  >
                    <Flex
                      justify={"center"}
                      align={"center"}
                      className={style.deliveryIcon}
                    >
                      <Image
                        className={style.iconstyle}
                        src={item.icon}
                        alt="iconStandardDelivery"
                      />
                    </Flex>
                    <p className={style.deliveryTitle}>{item.title}</p>

                    <Image
                      className={style.bgCheck}
                      src={bgCheckDelivery}
                      alt="bgCheckDelivery"
                    />
                    <IconCheck
                      className={style.checkMark}
                      color="#FFFFFF"
                      size={14}
                    />
                  </Flex>
                ))}
              </div>
              {typeDelivery === 2 ? (
                <div
                  className={`${style.orderLeft2} ${
                    listAddress && listAddress.length === 0 && style.disabled
                  }`}
                >
                  <div>
                    <Flex align={"center"}>
                      <Text fw={700} style={{ fontSize: 18 }}>
                        Bạn hãy lựa chọn một trong những hình thức vận chuyển
                        sau:
                      </Text>
                    </Flex>
                    <div className={style.ntDelivery}>
                      {ntlTypeDelivery?.map((item, index) => (
                        <Flex
                          justify={"center"}
                          align={"center"}
                          key={index}
                          onClick={() =>
                            handleChangActiveType(index, item.total_fee, "NTL")
                          }
                          className={`${style.delivery} 
                    ${idActiveType === index && style.deliveryActive} 
                   `}
                        >
                          <p className={style.deliveryTitle}>
                            {item.service_name === "CPN"
                              ? "Giao hàng nhanh"
                              : item.service_name}
                          </p>

                          <Image
                            className={style.bgCheck}
                            src={bgCheckDelivery}
                            alt="bgCheckDelivery"
                          />
                          <IconCheck
                            className={style.checkMark}
                            color="#FFFFFF"
                            size={14}
                          />
                        </Flex>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
              {typeDelivery === 4 ? (
                <div
                  className={`${style.orderLeft2} ${
                    listAddress && listAddress.length === 0 && style.disabled
                  }`}
                >
                  <div>
                    <Flex align={"center"}>
                      <Text fw={700} style={{ fontSize: 18 }}>
                        Bạn hãy lựa chọn một trong những hình thức vận chuyển
                        sau:
                      </Text>
                    </Flex>
                    <div className={style.ntDelivery}>
                      {scaTypeDelivery?.map((item, index) => (
                        <Flex
                          justify={"center"}
                          align={"center"}
                          key={index}
                          onClick={() =>
                            handleChangActiveType(index, item.fee, "SCA")
                          }
                          className={`${style.delivery} 
                    ${idActiveTypeSCA === index && style.deliveryActive} 
                   `}
                        >
                          <p className={style.deliveryTitle}>
                            {item.service_name}
                          </p>

                          <Image
                            className={style.bgCheck}
                            src={bgCheckDelivery}
                            alt="bgCheckDelivery"
                          />
                          <IconCheck
                            className={style.checkMark}
                            color="#FFFFFF"
                            size={14}
                          />
                        </Flex>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            {/* {listAddress && listAddress.length !== 0 ? ( */}
            <CartOrder data={SaleOrderDetail || null} />
            {/* ) : null} */}
          </div>
        </div>

        <div className={style.rightBox}>
          <RightBox
            SaleOrderDetail={SaleOrderDetail}
            totalAmount={totalAmount || 0}
            listAddress={listAddress}
            setDataSaleOderSuccess={setDataSaleOderSuccess}
            typeDelivery={typeDelivery}
            companyDelivery={companyDelivery}
            shipfee={totalAmountDelivery}
            loading={loading}
            setLoading={setLoading}
            readytoCreateOrder={readytoCreateOrder}
            isCreateUser={isCreateUser}
            setIsCreateUser={setIsCreateUser}
            customerId={userId}
          />
        </div>
      </Flex>
    </div>
  );
};

export default Order;
