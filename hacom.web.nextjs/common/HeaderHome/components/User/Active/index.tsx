import AuthService from "@/api/login/auth.service";
import { TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import style from "./style.module.scss";

interface ReActiveModalProps {
  isOpen: boolean;
  phone: string; // Add email prop
}

const ReActiveModal: React.FC<ReActiveModalProps> = ({ isOpen, phone }) => {
  const [opened, { close, open }] = useDisclosure(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeCode, setActiveCode] = useState("");
  const [focused, setFocused] = useState(false);
  const floating = focused || activeCode.length > 0 || undefined;
  const handleSendActivationEmail = async () => {
    try {
      setIsLoading(true);
      setError("");
      const response = await AuthService.activeUser(phone, activeCode);
      if (response.httpStatusCode && response.success) {
        setError("Gửi mã kích hoạt thành công , vui lòng check hộp thư");
      } else {
        setError("Gửi mã kích hoạt thất bại vui lòng thử lại sau");
      }
    } catch (error) {
      setError("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="modal">
          <div className={style.modalContent}>
            <h2>
              Bạn hãy nhập mã đã được gửi đến số điện thoại dùng để đăng ký
            </h2>
            <p className={style.span}>Số điện thoại đã đăng ký: {phone}</p>
            <div className={style.comfirmBox}>
              <TextInput
                label="Mã kích hoạt"
                labelProps={{ "data-floating": floating }}
                withAsterisk
                mt="md"
                classNames={{
                  root: style.root,
                  input: style.input,
                  label: style.label,
                }}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onChange={(e: any) => setActiveCode(e.target.value)}
              />
              <button
                className={style.button}
                onClick={handleSendActivationEmail}
              >
                Xác nhận{" "}
              </button>
            </div>
            <p>
              (Nếu bạn muốn nhập lại bấm vào khoảng trống bên ngoài, hoặc nút X
              góc trên bên phải)
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReActiveModal;
