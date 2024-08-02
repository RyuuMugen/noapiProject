import { Text, Button } from "@mantine/core";
import {
  setUserLike,
  getDataUserLikeDetail,
  deleteDataUserLike,
} from "@/api/apiUserLike";
import { useState, useEffect } from "react";
import style from "./more.module.scss";
import { isNullOrUndefined } from "@/extension/StringExtension";
import { NotificationExtension } from "@/extension/NotificationExtension";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useAuthContext } from "@/useContext/useAuthContext";

export default function AddUserLike({ idItem }: { idItem: number }) {
  const { userInfo, handleGetUserInfo } = useAuthContext();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLike, setIsLike] = useState(false);
  const [id, setID] = useState();
  const [spanName, setSpanName] = useState("Lưu");
  const [spanName2, setSpanName2] = useState("Đã lưu");
  const [styleClass, setStyleClass] = useState("buttonAddToCart");
  const pathname = usePathname();
  const demoID =
    userInfo && !userInfo?.data?.customerId
      ? userInfo?.customerId ?? 999
      : userInfo?.data?.customerId ?? 999;

  const handleAddLike = async () => {
    if (userInfo) {
      const itemID = idItem.toString();
      const newData = {
        itemId: itemID,
        userId: demoID,
      };
      await setUserLike(newData);
      setIsLike(true);
    } else {
      NotificationExtension.Fails(
        "Bạn chưa đăng nhập, xin vui lòng đăng nhập để thêm vào danh sách yêu thích"
      );
    }
  };

  const handleRemoveLike = async () => {
    if (userInfo) {
      await deleteDataUserLike([id]);
      setIsLike(false);
    } else {
      NotificationExtension.Fails(
        "Bạn chưa đăng nhập, xin vui lòng đăng nhập để thêm vào danh sách yêu thích"
      );
    }
  };

  useEffect(() => {
    if (userInfo) {
      const fetchData = async () => {
        try {
          const callapi = await getDataUserLikeDetail(demoID);
          if (
            !isNullOrUndefined(callapi) &&
            !isNullOrUndefined(callapi?.data)
          ) {
            const dataApi = callapi?.data;
            if (dataApi != null && !isNullOrUndefined(dataApi)) {
              setData(dataApi);
              let isItemLiked = false;
              for (const item of dataApi) {
                if (item.itemId === idItem.toString()) {
                  isItemLiked = true;
                  setID(item.id);
                  break;
                }
              }
              setIsLike(isItemLiked);
            }
          } else {
            console.log("Dữ liệu không tồn tại");
          }
        } catch (error) {
          console.error("Lỗi khi gọi API:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setLoading(false);
    }
  }, [idItem, isLike]);

  useEffect(() => {
    switch (pathname) {
      case "/cart":
        setStyleClass("infobox");
        setSpanName("Lưu lại mua sau");
        setSpanName2("Đã lưu");
        break;
      default:
        break;
    }
  }, [pathname]);
  return (
    <Button
      justify="center"
      className={`${style[styleClass]}`}
      onClick={isLike ? handleRemoveLike : handleAddLike}
      leftSection={
        isLike ? <IconHeartFilled size={18} /> : <IconHeart size={18} />
      }
    >
      <Text span>{isLike ? spanName2 : spanName}</Text>
    </Button>
  );
}
