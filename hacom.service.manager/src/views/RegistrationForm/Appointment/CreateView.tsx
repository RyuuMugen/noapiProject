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
import { createAppointment } from "../../../api/ApiAppointment";
import { getDataConfigWeb } from "../../../api/ApiConfigWeb";
import { TblAppointment } from "../../../model/TblAppointment";
import { TblConfigWebStore } from "../../../model/TblConfigWeb";

const CreateView = ({ onSearch }: { onSearch: any }) => {
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

  const [visible, { close, open }] = useDisclosure(false);
  const [dataStore, setDataStore] = useState<TblConfigWebStore[]>([]);

  const handleCreateAppointment = async (data: TblAppointment) => {
    open();
    await createAppointment(data);
    close();
    modals.closeAll();
    onSearch();
  };

  useEffect(() => {
    const fetchDataStore = async () => {
      const dataApi = await getDataConfigWeb();
      setDataStore(dataApi?.data?.store);
    };
    fetchDataStore();
  }, []);

  const formCreate = (
    <>
      <Box
        className="flex-none"
        component="form"
        w={{ base: 250, sm: 300, lg: 410 }}
        h="auto"
        mx="auto"
        onSubmit={form.onSubmit((e: TblAppointment) => {
          handleCreateAppointment(e);
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

  return <>{formCreate}</>;
};

export default CreateView;
