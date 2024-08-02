import {
  Box,
  Button,
  Flex,
  Group,
  LoadingOverlay,
  Select,
  Table,
  Text,
  TextInput,
  Textarea,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { NotificationExtension } from "../../../_base/extension/NotificationExtension";
import { isNullOrUndefined } from "../../../_base/extension/StringExtension";
import Repository from "../../../_base/helper/HttpHelper";
import { modifyTradeInOrder } from "../../../api/ApiTradeIn";
import { API_ROUTE } from "../../../const/apiRoute";
import { MessageResponse } from "../../../model/MessageResponse";
import { TblAppointment } from "../../../model/TblAppointment";
import { EuiLink } from "@elastic/eui";
import moment from "moment";

const ModalView = ({ id }: ModalViewProps) => {
  const [data, setData] = useState<TblAppointment>();
  const [visible, { toggle, close, open }] = useDisclosure(false);

  const callApiGetData = async () => {
    open();
    const repository = new Repository(process.env.REACT_APP_Demo_APP_API_URL);
    let urlCreate = API_ROUTE.GET_DETAIL_APPOINTMENT + `?id=${id}`;
    let callapi = await repository.post<MessageResponse<TblAppointment>>(
      urlCreate
    );
    if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
      const dataApi = callapi?.data;
      if (dataApi != null && !isNullOrUndefined(dataApi)) {
        setData(dataApi);
      }

      close();
    } else {
      NotificationExtension.Fails("Dữ liệu không tồn tại");
      modals.closeAll();
    }
  };

  useEffect(() => {
    callApiGetData();
  }, [id]);

  return (
    <>
      <Box className="flex-none" miw={800} maw={800} mx="auto">
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />

        <Table horizontalSpacing="sm" withColumnBorders mt={"lg"}>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>Họ tên:</Table.Td>
              <Table.Td>{data?.customerName}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Điện thoại:</Table.Td>
              <Table.Td>{data?.phoneNumber}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Loại thiết bị:</Table.Td>
              <Table.Td>{data?.deviceType}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Cửa hàng:</Table.Td>
              <Table.Td>{data?.region}</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>Mô tả lỗi:</Table.Td>
              <Table.Td>
                {moment(data?.faultDescription).format("DD/MM/YYYY")}
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>

        <Group justify="flex-end" mt="lg">
          <Button
            variant="outline"
            color="black"
            type="button"
            loading={visible}
            onClick={() => modals.closeAll()}
            leftSection={<IconX size={18} />}
          >
            Đóng
          </Button>
        </Group>
      </Box>
    </>
  );
};

export default ModalView;

type ModalViewProps = {
  id: number;
};
