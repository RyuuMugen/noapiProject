import { Box, Button, Group, Text, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconEdit } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import TinyMCEEditor from "../../../common/TinyMCE/TinyMCEEditor";
import { TblConfigWebWebInfo } from "../../../model/TblConfigWeb";

const ConfigWebWebInfo = ({
  dataWebInfo,
  handelChangeConfigWebWebInfo,
}: ConfigWebWebInfoProps) => {
  const [modal1, setModel1] = useState("");
  const [modal2, setModel2] = useState("");
  const entity: TblConfigWebWebInfo = {
    saleEmail: null,
    careEmail: null,
    websiteName: null,
    metaTitle: null,
    metaKeyword: null,
    metaDescription: null,
    imgUrl: null,
    content: null,
    descritpion: null,
    contact: null,
    creationDate: null,
    createdBy: null,
    lastUpdateDate: null,
    lastUpdatedBy: null,
  };

  const form = useForm<TblConfigWebWebInfo>({
    initialValues: {
      ...entity,
    },

    validate: {},
  });

  useEffect(() => {
    if (dataWebInfo) form.setValues(dataWebInfo);
  }, [dataWebInfo]);

  useEffect(() => {
    form.setFieldValue("content", modal1 || "");
  }, [modal1]);
  
  useEffect(() => {
    form.setFieldValue("contact", modal2 || "");
  }, [modal2])

  return (
    <Box
      className="flex-none"
      component="form"
      miw={1200}
      maw={1200}
      mx={"sm"}
      mb={"md"}
      onSubmit={form.onSubmit((e: TblConfigWebWebInfo) => {
        handelChangeConfigWebWebInfo(e);
      })}
    >
      <Group grow wrap="nowrap" mt="xs" gap={"lg"}>
        <TextInput
          label={"Email bán hàng"}
          placeholder={"Nhập email"}
          withAsterisk
          type="text"
          {...form.getInputProps("saleEmail")}
        />
        <Text size="sm" mt={"lg"}>
          Dùng nhận đơn hàng mới và gửi thông báo khách hàng về đơn hàng ({" "}
          <Text size="sm" color="red" span>
            Nếu nhiều email thì để cách nhau dấu phẩy ,
          </Text>{" "}
          )
        </Text>
      </Group>

      <Group grow wrap="nowrap" mt="xs" gap={"lg"}>
        <TextInput
          label={"Email chăm sóc khách hàng"}
          placeholder={"Nhập email"}
          withAsterisk
          type="text"
          {...form.getInputProps("careEmail")}
        />
        <Text size="sm" mt={"lg"}>
          Dùng gửi thư chào mừng khách hàng mới, gửi bản tin, nhận ý kiến phản
          hồi ({" "}
          <Text size="sm" color="red" span>
            Nếu nhiều email thì để cách nhau dấu phẩy ,
          </Text>{" "}
          )
        </Text>
      </Group>

      <Group grow wrap="nowrap" mt="xs" gap={"lg"}>
        <TextInput
          label={"Tên gọi website"}
          placeholder={"Nhập tên"}
          withAsterisk
          type="text"
          {...form.getInputProps("websiteName")}
        />
        <Text size="sm" mt={"lg"}>
          V.d.{" "}
          <Text size="sm" color="red" span>
            Shop Thời trang Hạng Nguyên
          </Text>{" "}
        </Text>
      </Group>

      <Group grow wrap="nowrap" mt="xs" gap={"lg"}>
        <TextInput
          label={"Thẻ Meta Title"}
          placeholder={"Nhập tên"}
          withAsterisk
          type="text"
          {...form.getInputProps("metaTitle")}
        />
        <></>
      </Group>

      <Group grow wrap="nowrap" mt="xs" gap={"lg"}>
        <TextInput
          label={"Thẻ Meta Keyword"}
          placeholder={"Nhập keyword"}
          withAsterisk
          type="text"
          {...form.getInputProps("metaKeyword")}
        />
        <></>
      </Group>

      <Group grow wrap="nowrap" mt="xs" gap={"lg"}>
        <Textarea
          label={"Thẻ Meta Description"}
          placeholder={"Nhập mô tả"}
          withAsterisk
          autosize
          minRows={4}
          {...form.getInputProps("metaDescription")}
        />
        <></>
      </Group>
      <Text size="sm" mt="sm" fw={500}>
        Thông tin giới thiệu chi tiết
      </Text>
      {/* <QuillEditor
        description={form.values.content || ""}
        label="Thông tin giới thiệu chi tiết"
        toolbarId="content"
        setValue={setModel}
        onChangeValue={(html: string) => (form.values.content = html)}
      /> */}
      <TinyMCEEditor
        setValue={setModel1}
        contentText={form.values.content || ""}
      />
      <Text size="sm" mt="sm" fw={500}>
        Thông tin liên hệ
      </Text>
      {/* <QuillEditor
        description={form.values.contact || ""}
        label="Thông tin liên hệ"
        toolbarId="contact"
        setValue={setModel}
        onChangeValue={(html: string) => (form.values.contact = html)}
      /> */}
      <TinyMCEEditor
        setValue={setModel2}
        contentText={form.values.contact || ""}
      />
      <Group justify="start" mt="md">
        <Button
          type="submit"
          color="#3598dc"
          leftSection={<IconEdit size={18} />}
        >
          Cập nhật
        </Button>
        <></>
      </Group>
    </Box>
  );
};

export default ConfigWebWebInfo;

type ConfigWebWebInfoProps = {
  dataWebInfo: TblConfigWebWebInfo | null;
  handelChangeConfigWebWebInfo: (value: TblConfigWebWebInfo) => void;
};
