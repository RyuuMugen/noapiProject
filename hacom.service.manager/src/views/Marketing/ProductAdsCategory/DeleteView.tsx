import { Button, Group, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconCheck, IconX } from "@tabler/icons-react";
import { deleteProductAdsCategory } from "../../../api/ApiProductAds";

const DeleteView = ({ idItem, onSearch }: DeleteProduct) => {
  const handleDeleteProductAdsCategory = async () => {
    await deleteProductAdsCategory(idItem);
    modals.closeAll();
    onSearch();
  };

  return (
    <div>
      <Text size="24px">Bạn có chắc chắn muốn xóa các danh mục Ads này ?</Text>
      <Group justify="center" mt="lg">
        <Button
          type="button"
          color="#3598dc"
          onClick={handleDeleteProductAdsCategory}
          leftSection={<IconCheck size={18} />}
        >
          Xóa
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

export default DeleteView;
