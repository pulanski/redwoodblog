import { Divider, Menu, Tooltip, Text } from '@mantine/core'
import { useState } from 'react'
import { ChartBubble, Id, Speakerphone } from 'tabler-icons-react'
import ContactsMenuOption from '../ContactsMenuOption/ContactsMenuOption'

const ContactsMenu = () => {
  const [messageSounds, setMessageSounds] = useState(true)
  const [showContacts, setShowContacts] = useState(true)
  const [popupMessages, setPopupMessages] = useState(true)
  const optionSwitchColor = 'yellow'

  return (
    <>
      <Tooltip label="Options" position="bottom" openDelay={500}>
        <Menu
          transition="rotate-right"
          transitionDuration={100}
          transitionTimingFunction="ease"
          placement="end"
          // trigger="hover"
          // delay={500}
        >
          <Menu.Label>
            <Text weight={600} size="md">
              Chat Settings
            </Text>
            Customize your experience
          </Menu.Label>
          <Divider />
          <ContactsMenuOption
            icon={<Speakerphone size={18} />}
            menuText="Message sounds"
            switchOption={messageSounds}
            setSwitchOption={setMessageSounds}
            color={optionSwitchColor}
          />
          <ContactsMenuOption
            icon={<ChartBubble size={18} />}
            menuText="Pop up new messages"
            switchOption={popupMessages}
            setSwitchOption={setPopupMessages}
            color={optionSwitchColor}
          />
          <Divider />
          <ContactsMenuOption
            icon={<Id size={18} />}
            menuText="Show Contacts"
            switchOption={showContacts}
            setSwitchOption={setShowContacts}
            color={optionSwitchColor}
          />
        </Menu>
      </Tooltip>
    </>
  )
}

export default ContactsMenu
