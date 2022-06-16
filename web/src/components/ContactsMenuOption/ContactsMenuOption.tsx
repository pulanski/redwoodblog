import { Menu, Switch, Text } from '@mantine/core'

export interface ContactsMenuOptionProps {
  icon: React.ReactElement
  menuText: string
  switchOption: boolean
  setSwitchOption: (switchOption: boolean) => void
  color: string
}

export const ContactsMenuOption = ({
  icon,
  menuText,
  switchOption,
  setSwitchOption,
  color,
}: ContactsMenuOptionProps) => {
  return (
    <>
      <Menu.Item
        icon={icon}
        onClick={() => setSwitchOption(!switchOption)}
        rightSection={
          <Switch
            size="sm"
            color={color}
            checked={switchOption}
            onChange={(event) => {
              setSwitchOption(event.currentTarget.checked)
            }}
          />
        }
      >
        <Text size="xs">{menuText}</Text>
      </Menu.Item>
    </>
  )
}

export default ContactsMenuOption
