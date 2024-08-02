import {
  Box,
  Button,
  Group,
  LoadingOverlay,
  Select,
  TextInput,
  Textarea,
} from "@mantine/core";
import { DatePickerInput, DateTimePicker } from "@mantine/dates";
import { hasLength, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconCheck, IconX } from "@tabler/icons-react";
import moment from "moment";
import { useEffect, useState } from "react";
import { NotificationExtension } from "../../../_base/extension/NotificationExtension";
import { isNullOrUndefined } from "../../../_base/extension/StringExtension";
import Repository from "../../../_base/helper/HttpHelper";
import { getDataConfigWeb } from "../../../api/ApiConfigWeb";
import { editCustomerAppointment } from "../../../api/ApiCustomerAppointment";
import { API_ROUTE } from "../../../const/apiRoute";
import { MessageResponse } from "../../../model/MessageResponse";
import { TblConfigWebStore } from "../../../model/TblConfigWeb";
import { TblCustomerAppointment } from "../../../model/TblCustomerAppointment";

const CreateView = ({ onSearch }: CreateViewProps) => {
  const entity = {
    id: 0,
    fullName: null,
    email: null,
    mobile: null,
    productName: null,
    productId: 0,
    isStudent: null,
    storeAddress: null,
    appointmentTime: null,
    note: null,
  };

  const handleEditCustomerAppointment = async (
    dataSubmit: TblCustomerAppointment
  ) => {
    open();
    await editCustomerAppointment(dataSubmit);
    onSearch();
    close();
    modals.closeAll();
  };

  const [visible, { toggle, close, open }] = useDisclosure(false);
  const [dataStore, setDataStore] = useState<TblConfigWebStore[]>([]);

  const form = useForm<TblCustomerAppointment>({
    initialValues: {
      ...entity,
    },
    validate: {
      fullName: hasLength(
        { min: 2, max: 100 },
        "Tên phải chứa từ 2 đến 100 ký tự!"
      ),
      mobile: (value) => {
        if (!value || value.length !== 10) {
          return "Số điện thoại phải đủ 10 số.";
        }
      },
      storeAddress: (value) => {
        if (!value) {
          return "Vui lòng chọn cửa hàng.";
        }
      },
      appointmentTime: (value) => {
        if (!value) {
          return "Vui lòng chọn thời gian sửa chữa.";
        }
      },
    },
  });

  useEffect(() => {
    const fetchDataStore = async () => {
      open();
      const dataApi = await getDataConfigWeb();
      setDataStore(dataApi?.data?.store);
      close();
    };

    fetchDataStore();
  }, []);

  return (
    <>
      <Box
        className="flex-none"
        component="form"
        miw={800}
        maw={800}
        mx="auto"
        onSubmit={form.onSubmit((e: TblCustomerAppointment) => {
          handleEditCustomerAppointment(e);
        })}
      >
        <LoadingOverlay
          visible={visible}
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
            {...form.getInputProps("fullName")}
          />
          <TextInput
            label={"Email khách hàng"}
            placeholder={"Nhập email"}
            mt="md"
            type="text"
            {...form.getInputProps("email")}
          />
        </Group>
        <Group grow wrap="nowrap" mt={{ base: 4, sm: 6, lg: 8 }} gap={"lg"}>
          <TextInput
            label={"Số điện thoại"}
            placeholder={"Nhập số điện thoại"}
            withAsterisk
            mt="md"
            type="number"
            {...form.getInputProps("mobile")}
          />
          <TextInput
            label={"Tên sản phẩm"}
            mt="md"
            type="text"
            {...form.getInputProps("productName")}
          />
        </Group>

        <Group grow wrap="nowrap" mt={{ base: 4, sm: 6, lg: 8 }} gap={"lg"}>
          <Select
            label={"Chọn cửa hàng"}
            placeholder={"Chọn cửa hàng"}
            mt="md"
            withAsterisk
            data={dataStore?.map((store) => store.address || "")}
            {...form.getInputProps("storeAddress")}
          />
          <DatePickerInput
            label={"Ngày sửa chữa"}
            mt="md"
            withAsterisk
            {...form.getInputProps("appointmentTime")}
            value={
              form.getInputProps("appointmentTime").value
                ? new Date(form.getInputProps("appointmentTime").value)
                : null
            }
            onChange={(value) =>
              form
                .getInputProps("appointmentTime")
                .onChange(moment(value).format("YYYY-MM-DD[T]HH:mm:ss"))
            }
          />
        </Group>

        <Group grow wrap="nowrap" mt={{ base: 4, sm: 6, lg: 8 }} gap={"lg"}>
          <Textarea
            label={"Ghi chú"}
            placeholder={"Ghi chú"}
            autosize
            minRows={3}
            mt="md"
            {...form.getInputProps("note")}
          />
        </Group>

        <Group justify="flex-end" mt="lg">
          <Button
            type="submit"
            color="#3598dc"
            loading={visible}
            leftSection={<IconCheck size={18} />}
          >
            Lưu
          </Button>
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

export default CreateView;

type CreateViewProps = {
  onSearch: Function;
};
