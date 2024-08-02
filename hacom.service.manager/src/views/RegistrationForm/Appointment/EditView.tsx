import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import "@mantine/dates/styles.css";
import { hasLength, isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconCheck, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { NotificationExtension } from "../../../_base/extension/NotificationExtension";
import { isNullOrUndefined } from "../../../_base/extension/StringExtension";
import Repository from "../../../_base/helper/HttpHelper";
import { editAppointment } from "../../../api/ApiAppointment";
import { getDataConfigWeb } from "../../../api/ApiConfigWeb";
import { API_ROUTE } from "../../../const/apiRoute";
import { MessageResponse } from "../../../model/MessageResponse";
import { TblAppointment } from "../../../model/TblAppointment";
import { TblConfigWebStore } from "../../../model/TblConfigWeb";

const EditView = ({ id, onSearch }: { id: number; onSearch: any }) => {
  const entity: TblAppointment = {
    id: 0,
    customerName: null,
    deviceType: null,
    faultDescription: null,
    phoneNumber: null,
    region: null,
  };

  const form = useForm<TblAppointment>({
    validateInputOnChange: true,
    initialValues: {
      ...entity,
    },

    validate: {
      customerName: hasLength(
        { min: 2, max: 100 },
        "Tên phải chứa từ 2 đến 100 ký tự!"
      ),
      phoneNumber: (value) => {
        if (!value || value.length !== 10) {
          return "Số điện thoại phải đủ 10 số.";
        }
      },
      faultDescription: hasLength(
        { min: 2, max: 100 },
        "Lỗi phải chứa từ 2 đến 100 ký tự!"
      ),
      region: (value) => {
        if (!value) {
          return "Vui lòng chọn cửa hàng.";
        }
      },
      deviceType: isNotEmpty("Vui lòng nhập lại thiết bị"),
    },
  });

  const repository = new Repository(process.env.REACT_APP_Demo_APP_API_URL);
  const [visible, { toggle, close, open }] = useDisclosure(false);
  const [dataDetail, setDataDetail] = useState<TblAppointment>({
    id: 0,
    customerName: null,
    deviceType: null,
    faultDescription: null,
    phoneNumber: null,
    region: null,
  });
  const [dataStore, setDataStore] = useState<TblConfigWebStore[]>([]);

  const callApiGetData = async () => {
    open();
    let url = `${API_ROUTE.GET_DETAIL_APPOINTMENT}?id=${id}`;
    let callapi = await repository.post<MessageResponse<TblAppointment>>(url);
    if (!isNullOrUndefined(callapi) && !isNullOrUndefined(callapi?.data)) {
      const dataApi = callapi?.data;
      if (dataApi != null && !isNullOrUndefined(dataApi)) {
        form.setValues(dataApi);
        setDataDetail(dataApi);
      }
      close();
    } else {
      NotificationExtension.Fails("Dữ liệu không tồn tại");
      modals.closeAll();
    }
  };

  const handleEditAppointment = async (data: TblAppointment) => {
    open();

    const isDifferent =
      data.id !== dataDetail.id ||
      data.customerName !== dataDetail.customerName ||
      data.deviceType !== dataDetail.deviceType ||
      data.faultDescription !== dataDetail.faultDescription ||
      data.phoneNumber !== dataDetail.phoneNumber ||
      data.region !== dataDetail.region;

    if (isDifferent) {
      await editAppointment(data);
      onSearch();
    } else {
      NotificationExtension.Warn("Dữ liệu không thay đổi");
    }
    close();
    modals.closeAll();
  };

  useEffect(() => {
    const fetchDataStore = async () => {
      const dataApi = await getDataConfigWeb();
      setDataStore(dataApi?.data?.store);
    };

    fetchDataStore();
  }, []);

  useEffect(() => {
    callApiGetData();
  }, [id]);

  const formEdit = (
    <>
      <Box
        className="flex-none"
        component="form"
        w={{ base: 250, sm: 300, lg: 410 }}
        h={{ base: 420, sm: 420, lg: 420 }}
        mx="auto"
        onSubmit={form.onSubmit((e: TblAppointment) => {
          handleEditAppointment(e);
        })}
      >
        <LoadingOverlay
          visible={false}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <Group grow wrap="nowrap" mt={{ base: 4, sm: 6, lg: 8 }} gap={"lg"}>
          <TextInput
            label={"Tên khách hàng"}
            placeholder={"Nhập tên"}
            withAsterisk
            mt="md"
            type="text"
            {...form.getInputProps("customerName")}
          />
          <TextInput
            label={"Số điện thoại"}
            placeholder={"Nhập số điện thoại"}
            withAsterisk
            mt="md"
            type="number"
            {...form.getInputProps("phoneNumber")}
          />
        </Group>
        <Group grow wrap="nowrap" mt={{ base: 4, sm: 6, lg: 8 }} gap={"lg"}>
          <TextInput
            label={"Dòng máy cần sửa chữa"}
            placeholder={"Nhập dòng máy"}
            mt="md"
            type="text"
            withAsterisk
            {...form.getInputProps("deviceType")}
          />
        </Group>

        <Group grow wrap="nowrap" mt={{ base: 4, sm: 6, lg: 8 }} gap={"lg"}>
          <Select
            label={"Chọn cửa hàng"}
            placeholder={"Chọn cửa hàng"}
            mt="md"
            withAsterisk
            data={dataStore?.map((store) => store.address || "")}
            {...form.getInputProps("region")}
          />
        </Group>

        <Group grow wrap="nowrap" mt={{ base: 4, sm: 6, lg: 8 }} gap={"lg"}>
          <Textarea
            label={"Mô tả lỗi"}
            placeholder={"Mô tả lỗi (bắt buộc)"}
            withAsterisk
            autosize
            minRows={3}
            mt="md"
            {...form.getInputProps("faultDescription")}
          />
        </Group>

        <Group justify="flex-end" mt={{ base: 4, sm: 6, lg: 8 }}>
          <Button
            type="submit"
            color="#3598dc"
            loading={visible}
            leftSection={!visible ? <IconCheck size={18} /> : undefined}
          >
            Lưu
          </Button>

          <Button
            variant="outline"
            color="black"
            loading={visible}
            onClick={() => modals.closeAll()}
            leftSection={!visible ? <IconX size={18} /> : undefined}
          >
            Đóng
          </Button>
        </Group>
      </Box>
    </>
  );

  return <>{formEdit}</>;
};

export default EditView;
