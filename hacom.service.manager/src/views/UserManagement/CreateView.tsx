import {
  Box,
  Button,
  Checkbox,
  Group,
  LoadingOverlay,
  Text,
  TextInput,
  rem
} from "@mantine/core";
import { isNotEmpty, useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import { modals } from "@mantine/modals";
import { IconCheck, IconFileCv, IconX } from "@tabler/icons-react";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { NotificationExtension } from "../../_base/extension/NotificationExtension";
import { isNullOrUndefined } from "../../_base/extension/StringExtension";
import { HanderResponse } from "../../_base/helper/FunctionHelper";
import { API_ROUTE } from "../../const/apiRoute";
import { apiMaster } from "../../library/axiosMaster";
import { UserManagementInterFace } from "../../model/TblUserManagement";

const icon = (
  <IconFileCv style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
);

const CreateView = ({ onSearch }: any) => {
  const [dataFixedContentType, setDataFixedContentType] = useState<
    UserManagementInterFace[]
  >([]);
  const [dataOptionFixedContentType, setDataOptionFixedContentType] = useState<
    any[]
  >([]);
  const entity = {
    dateActive: null,
    fullName: "",
    id: "",
    inActive: false,
    onDelete: false,
    password: "",
    phone: null,
    role: "",
    roleNumber: null,
    tokenActive: null,
    userName: "",
  };

  const createUserManagement = async (data: any): Promise<any> => {
    try {
      const response: AxiosResponse = await apiMaster.post(
        API_ROUTE.CREATE_MANAGEMENT,
        data
      );
      if (!isNullOrUndefined(response) && response?.data?.success) {
        const apiData = response?.data?.data;
        NotificationExtension.Success("Thêm mới thành công !");
        return apiData;
      } else if (response != null)
        NotificationExtension.Fails("Thêm mới thất bại !");
      return response.data;
    } catch (error) {
      HanderResponse(error);
    }
  };

  const handleCreateFixedContentType = async (
    dataSubmit: UserManagementInterFace
  ) => {
    open();
    const apiData = await createUserManagement(dataSubmit);
    close();
    modals.closeAll();
    onSearch();
    setTimeout(() => {
      if (apiData) {
        openNewModalWithApiData(apiData);
      }
    }, 500);
  };

  const openNewModalWithApiData = (data: any) => {
    modals.open({
      title: (
        <Text size="lg" fw={500}>
          Mật khẩu được cấp
        </Text>
      ),
      size: "lg",
      centered: true,
      children: (
        <Box w={350}>
          <TextInput
            mt={20}
            value={data}
            readOnly
            style={{ cursor: "pointer" }}
          />
        </Box>
      ),
    });
  };

  const [visible, { toggle, close, open }] = useDisclosure(false);

  const form = useForm<UserManagementInterFace>({
    initialValues: {
      ...entity,
    },
    validate: {
      userName: isNotEmpty("Tài  khoản chưa nhập"),
      fullName: isNotEmpty("Tên đăng nhập chưa nhập"),
      phone: isNotEmpty("Số điện thoại chưa nhập"),
    },
  });

  // useEffect(() => {
  //   setDataOptionFixedContentType(
  //     dataFixedContentType.map((option) => {
  //       return { value: option.id.toString(), label: option.name };
  //     })
  //   );
  // }, [dataFixedContentType]);

  return (
    <>
      <Box
        className="flex-none"
        component="form"
        miw={300}
        maw={300}
        mx="auto"
        onSubmit={form.onSubmit((values: UserManagementInterFace) => {
          handleCreateFixedContentType(values);
        })}
      >
        <LoadingOverlay
          visible={visible}
          zIndex={1000}
          overlayProps={{ radius: "sm", blur: 2 }}
        />
        <TextInput
          label={"Tài khoản"}
          placeholder={"Nhập tên tài khoản"}
          withAsterisk
          mt="md"
          type="text"
          {...form.getInputProps("userName")}
        />
        <TextInput
          label={"Họ và tên"}
          placeholder={"Nhập họ và tên"}
          withAsterisk
          mt="md"
          type="text"
          {...form.getInputProps("fullName")}
        />
        <Checkbox
          checked={!!form.values.inActive}
          label={"Trạng thái"}
          placeholder={"Hiển thị/Không hiển thị"}
          mt="md"
          onChange={(event) =>
            form.setFieldValue("inActive", event.currentTarget.checked)
          }
        />
        <TextInput
          label={"Số điện thoại"}
          placeholder={"Nhập số điện thoại"}
          withAsterisk
          mt="md"
          type="number"
          {...form.getInputProps("phone")}
        />
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
