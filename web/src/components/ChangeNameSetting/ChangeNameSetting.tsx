import { useState } from 'react'

import { Button, Group, Modal, Stack, Text } from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import EditUsernameCell from 'src/components/EditUsernameCell'

const ChangeNameSetting = ({ firstName, lastName }) => {
  const { currentUser } = useAuth()
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <>
      <Group my={20} position="apart">
        <Stack>
          <Text>Name</Text>
          <Text size="sm">
            {firstName && lastName ? (
              <Text transform="capitalize">{`${firstName} ${lastName}`}</Text>
            ) : (
              'Name not set'
            )}
          </Text>
        </Stack>
        <Button
          color="yellow"
          variant="outline"
          onClick={() => setModalOpened(true)}
        >
          {firstName ? 'Change' : 'Add'}
        </Button>
      </Group>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title="Name"
      >
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <EditUsernameCell id={currentUser.id} setModalOpened={setModalOpened} />
      </Modal>
    </>
  )
}

export default ChangeNameSetting
