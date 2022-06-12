import { ActionIcon, Kbd, Tooltip, Group, Text } from '@mantine/core'
import { upperFirst } from '@mantine/hooks'
import { MoonStars, Sun } from 'tabler-icons-react'

export interface DarkModeToggleProps {
  dark: boolean
  colorScheme: 'light' | 'dark'
  toggleColorScheme: () => void
}

const DarkModeToggle = ({
  dark,
  colorScheme,
  toggleColorScheme,
}: DarkModeToggleProps) => {
  return (
    <>
      <Tooltip
        label={
          <>
            <Kbd>⌘</Kbd> + <Kbd>J</Kbd>
          </>
        }
        withArrow
        radius="md"
        position="bottom"
        transition="skew-up"
        transitionDuration={300}
        transitionTimingFunction="ease"
      >
        <Group position="center">
          <Text size="sm" color={dark ? 'yellow' : 'blue'}>
            {upperFirst(colorScheme === 'light' ? 'dark' : 'light')} Mode
          </Text>
          <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title="Toggle color scheme"
          >
            {dark ? <Sun size={18} /> : <MoonStars size={18} />}
          </ActionIcon>
        </Group>
      </Tooltip>
    </>
  )
}

export default DarkModeToggle
