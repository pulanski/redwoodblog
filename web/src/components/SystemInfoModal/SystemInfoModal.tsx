import { Modal } from '@mantine/core'
import ClientSystemInformation from '../ClientSystemInformation/ClientSystemInformation'

export interface SystemInfoModalProps {
  clientInfoOpened: boolean
  setClientInfoOpened: (clientInfoOpened: boolean) => void
}

const SystemInfoModal = ({ clientInfoOpened, setClientInfoOpened }) => {
  return (
    <>
      <Modal
        opened={clientInfoOpened}
        onClose={() => setClientInfoOpened(false)}
        title="Client System Information"
      >
        <ClientSystemInformation />
      </Modal>
    </>
  )
}

export default SystemInfoModal
