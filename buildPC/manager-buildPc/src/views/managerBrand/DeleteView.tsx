import { Button, Group, Text } from '@mantine/core'
import { modals } from '@mantine/modals'
import { IconCheck, IconX } from '@tabler/icons-react'
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { NotificationExtension } from '../../extension/NotificationExtension'

const DeleteView = ({ onSearch, idItem }: DeleteBrand) => {
  const db = getFirestore()

  const handleDeleteBrand = async () => {
    await deleteDoc(doc(db, '/brands', idItem[0].toString()))
    NotificationExtension.Success('Xoá thương hiệu thành công')
    modals.closeAll()
    onSearch()
  }

  return (
    <div>
      <Text size="24px">Bạn có chắc chắn muốn xóa thương hiệu này ?</Text>
      <Group justify="center" mt="lg">
        <Button
          type="button"
          color="#3598dc"
          onClick={handleDeleteBrand}
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
  )
}

type DeleteBrand = {
  idItem: string[]
  onSearch: () => void
}

export default DeleteView
