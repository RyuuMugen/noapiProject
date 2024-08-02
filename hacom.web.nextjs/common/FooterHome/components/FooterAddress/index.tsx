import { Roboto } from "next/font/google";
import { TextInput, Button } from "@mantine/core";
import { useForm } from "@mantine/form";
import style from "./FooterAddress.module.scss";
import { useState, useEffect } from "react";
import { tblStore } from "@/model/TblStore";
import AppContainer from "@/common/AppContainer";
import { getDataStore } from "@/api/apistore";
import { NotificationExtension } from "@/extension/NotificationExtension";
import {
  IconMapPin,
  IconPhoto,
  IconMapStar,
  IconPhone,
  IconMail,
  IconClock,
  IconTruck,
  IconRepeat,
  IconCreditCard,
  IconMessages,
} from "@tabler/icons-react";
import { sendMailToCreateVoucher } from "@/api/apiVoucher";
import Link from "next/link";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function FooterAddress() {
  const [dataAllStore, setDataAllStore] = useState<tblStore[]>([]);
  const [success, setSuccess] = useState("");

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => {
        if (/^\S+@\S+$/.test(value)) {
          return null;
        }
        setSuccess("");
        return "Email không đúng, Mời bạn nhập lại!";
      },
    },
  });

  const handleSubmit = async (value: any) => {
    NotificationExtension.Success("Gửi email đăng ký thành công");
    form.reset();
    await sendMailToCreateVoucher({ email: value.email });
  };

  const fetchDataStore = async () => {
    const data = await getDataStore();
    const dataSort = sortDataById(data?.data.store);
    setDataAllStore(dataSort);
  };

  function sortDataById(data: any) {
    data?.sort((a: any, b: any) => {
      return a.id - b.id;
    });
    return data;
  }
  function formatTime(time: any) {
    // Tách giờ và phút từ thời gian đầu vào
    const [hour, minute] = time.split(":");

    // Chuyển đổi giờ thành số
    let formattedTime = parseInt(hour).toString() + "h";

    // Nếu phút khác 0 thì thêm phần giờ vào
    if (parseInt(minute) !== 0) {
      formattedTime += parseInt(minute).toString();
    }

    return formattedTime;
  }
  useEffect(() => {
    fetchDataStore();
  }, []);

  useEffect(() => {
    // Kiểm tra nếu giá trị success thay đổi và không rỗng
    if (success !== "" && success !== null) {
      // Thiết lập timeout để sau 2 giây đặt lại giá trị success thành rỗng
      const timer = setTimeout(() => {
        setSuccess("");
      }, 2000);

      // Trả về một hàm mô phỏng làm sạch khi component unmount hoặc success thay đổi
      return () => clearTimeout(timer);
    }
  }, [success]);

  return (
    <main className={roboto.className}>
      <div className={style.notifications}>
        <p className={style.notificationsTitle}>
          ĐĂNG KÝ NHẬN EMAIL THÔNG BÁO KHUYẾN MẠI HOẶC ĐỂ ĐƯỢC TƯ VẤN MIỄN PHÍ
        </p>
        <form
          className={style.inputForm}
          onSubmit={form.onSubmit((values) => handleSubmit(values))}
        >
          <TextInput
            className={style.input}
            placeholder="Nhập email của bạn"
            {...form.getInputProps("email")}
          />
          <Button className={style.inputButton} type="submit" color="#ed1b24">
            Gửi
          </Button>
        </form>
        {success !== "" && <p className={style.success}>{success}</p>}
      </div>
      <AppContainer>
        <div className={style.showroomTitleBox}>
          <p className={style.showroomTitle}>HỆ THỐNG CÁC SHOWROOM CỦA HACOM</p>
        </div>
        <div className={style.showroomList}>
          {dataAllStore?.map((item, index) => (
            <div className={style.showroomContainer} key={index}>
              <div className={style.nameContainer}>
                <span className={style.nameNumber}>{item.id}</span>
                <span className={style.name}>{item.storeName}</span>
              </div>
              <div className={style.contentContainer}>
                <span className={style.showRoomAddress}>
                  <IconMapPin /> {item.address}
                </span>
                <span className={style.showRoomGallery}>
                  <Link href={item.image ? item.image : "#"}>
                    <IconPhoto /> Hình ảnh thực tế showroom
                  </Link>
                </span>
                <span className={style.showRoomAddress2}>
                  <Link href={item.linkMap ? item.linkMap : "#"}>
                    <IconMapStar /> Xem bản đồ đường đi
                  </Link>
                </span>
                <span className={style.showRoomPhone}>
                  <IconPhone />
                  Tel: {item.telephone}
                </span>
                {item.warrantyTel && (
                  <span className={style.showRoomPhone}>
                    <IconPhone />
                    Bảo hành: {item.warrantyTel}
                  </span>
                )}
                <span className={style.showRoomOpeningTime}>
                  <IconMail /> Email: {item.email}
                </span>
                <span className={style.showRoomOpeningTime}>
                  <IconClock /> Thời gian mở cửa: Từ {formatTime(item.openTime)}
                  -{formatTime(item.closedTime)} hàng ngày
                </span>
              </div>
            </div>
          ))}
        </div>
      </AppContainer>
      <div>
        <div className={style.serviceBackground}>
          <AppContainer>
            <div className={style.flexService}>
              <div className={style.footerService}>
                <IconTruck />
                <div className={style.serviceContent}>
                  <span className={style.serviceTitle}>
                    CHÍNH SÁCH GIAO HÀNG
                  </span>
                  <span className={style.service}>
                    Nhận hàng và thanh toán tại nhà
                  </span>
                </div>
              </div>
              <div className={style.footerService}>
                <IconRepeat />
                <div className={style.serviceContent}>
                  <span className={style.serviceTitle}>ĐỔI TRẢ DỄ DÀNG</span>
                  <span className={style.service}>1 đổi 1 trong 15 ngày</span>
                </div>
              </div>
              <div className={style.footerService}>
                <IconCreditCard />
                <div className={style.serviceContent}>
                  <span className={style.serviceTitle}>
                    THANH TOÁN TIỆN LỢI
                  </span>
                  <span className={style.service}>
                    Trả tiền mặt, CK, trả góp 0%
                  </span>
                </div>
              </div>
              <div className={style.footerService}>
                <IconMessages />
                <div className={style.serviceContent}>
                  <span className={style.serviceTitle}>HỖ TRỢ NHIỆT TÌNH</span>
                  <span className={style.service}>
                    Tư vấn, giải đáp mọi thắc mắc
                  </span>
                </div>
              </div>
            </div>
          </AppContainer>
        </div>
      </div>
    </main>
  );
}
