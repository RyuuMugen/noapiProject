import { Button, Group, Text } from '@mantine/core'
import { modals } from '@mantine/modals'
import { IconCheck, IconX } from '@tabler/icons-react'
import { deleteDoc, doc, getFirestore } from 'firebase/firestore'
import { NotificationExtension } from '../../extension/NotificationExtension'

const DeleteView = ({ onSearch, idItem }: DeleteAttributeValue) => {
  const db = getFirestore()

  const handleDeleteAttributeValue = async () => {
    await deleteDoc(doc(db, '/attribute', idItem[0].toString()))
    NotificationExtension.Success('Xoá thuộc tính thành công')
    modals.closeAll()
    onSearch()
  }

  return (
    <div>
      <Text size="24px">Bạn có chắc chắn muốn xóa thuộc tính này ?</Text>
      <Group justify="center" mt="lg">
        <Button
          type="button"
          color="#3598dc"
          onClick={handleDeleteAttributeValue}
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

type DeleteAttributeValue = {
  idItem: string[]
  onSearch: () => void
}

export default DeleteView
