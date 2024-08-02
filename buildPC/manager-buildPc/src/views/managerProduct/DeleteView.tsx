import { Button, Group, Text } from "@mantine/core";
import { modals } from "@mantine/modals";
import { IconCheck, IconX } from "@tabler/icons-react";
import { deleteDoc, doc, getFirestore } from "firebase/firestore";
import { NotificationExtension } from "../../extension/NotificationExtension";

const DeleteView = ({ idItem, onSearch }: DeleteProduct) => {
  const db = getFirestore();

  const handleDeleteProduct = async () => {
    await deleteDoc(doc(db, "/products", idItem[0].toString()));
    NotificationExtension.Success("Xoá sản phẩm thành công");
    modals.closeAll();
    onSearch();
  };

  return (
    <div>
      <Text size="24px">Bạn có chắc chắn muốn xóa sản phẩm này ?</Text>
      <Group justify="center" mt="lg">
        <Button
          type="button"
          color="#3598dc"
          onClick={handleDeleteProduct}
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
