import { Button, Group, Modal, Stack, Text } from '@mantine/core'
import { useState } from 'react'

const EmailSelect = ({ email }) => {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <>
      <Group my={20} position="apart">
        <Stack>
          <Text>Email Address</Text>
          <Text size="sm">{email}</Text>
        </Stack>
        <Button
          color="yellow"
          variant="outline"
          onClick={() => setModalOpened(true)}
        >
          Change
        </Button>
      </Group>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Email Address"
      >
        <Text>Email Address</Text>
        {/* Modal content */}
      </Modal>
    </>
  )
}

export default EmailSelect
