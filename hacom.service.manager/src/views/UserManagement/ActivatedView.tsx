import { Button, Group, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconCheck, IconX } from "@tabler/icons-react";
import { deleteFixedContentType } from "../../api/ApiContent";
import {
  ActivatedUserManagement,
  deleteUserManagement,
} from "../../api/ApiUserManagement";

const ActivatedView = ({ idItem, onSearch }: DeleteProduct) => {
  const handleDeleteProduct = async () => {
    await ActivatedUserManagement(idItem);
    modals.closeAll();
    onSearch();
  };

  return (
    <div>
      <Text size="24px">
        Bạn có chắc chắn muốn kích hoạt những mục đã chọn ?
      </Text>
      <Group justify="center" mt="lg">
        <Button
          type="button"
          color="#3598dc"
          onClick={handleDeleteProduct}
          leftSection={<IconCheck size={18} />}
        >
          Kích hoạt
        </Button>
        <Button
          type="button"
          color="#3598dc"
          onClick={() => modals.closeAll()}
          leftSection={<IconX size={18} />}
        >
          Hủy
        </Button>
      </Group>
    </div>
  );
};

type DeleteProduct = {
  idItem: number[];
  onSearch: () => void;
};

export default ActivatedView;
