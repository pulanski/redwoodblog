/* eslint-disable react/no-unescaped-entities */
import { Button, Group, Modal, Space } from '@mantine/core'
import CommunityNameInput from '../CommunityNameInput/CommunityNameInput'
import CommunityOptions from '../CommunityOptions/CommunityOptions'

export interface CreateCommunityModalProps {
  modalOpened: boolean
  setModalOpened: (opened: boolean) => void
}

const CreateCommunityModal = ({
  modalOpened,
  setModalOpened,
}: CreateCommunityModalProps) => {
  return (
    <>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Create a community"
      >
        <CommunityNameInput />
        <Space h={30} />
        <CommunityOptions />
        <Space h={40} />
        <Group position="right">
          <Button
            variant="light"
            color="red"
            onClick={() => setModalOpened(false)}
          >
            Cancel
          </Button>
          <Button variant="light" color="red">
            Create Community
          </Button>
        </Group>
      </Modal>
    </>
  )
}

export default CreateCommunityModal
