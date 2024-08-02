import { useAuthContext } from "@/useContext/useAuthContext";
import { Button, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useRouter } from "next/navigation";

function ModalLogOut() {
  const { userInfo, handleGetUserInfo, setUserInfo } = useAuthContext();

  const router = useRouter();
  const handleRemoveToken = () => {
    localStorage.setItem("id", "");
    localStorage.setItem("jwt", "");
    localStorage.setItem("refreshToken", "");
    localStorage.setItem("userName", "");
    setUserInfo("");
    localStorage.setItem("userInfo", "");
    router.replace(`/home`);
  };
  const openModal = () =>
    modals.openConfirmModal({
      title: "Bạn có muốn thoát tài khoản",
      labels: { confirm: "Xác nhận", cancel: "Hủy" },
      onCancel: () => console.log("Cancel"),
      onConfirm: () => handleRemoveToken(),
    });

  return <Button onClick={openModal}>Đăng xuất</Button>;
}

export default ModalLogOut;
