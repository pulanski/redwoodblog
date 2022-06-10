import { ActionIcon, Group, useMantineColorScheme, Text } from '@mantine/core'
import { upperFirst } from '@mantine/hooks'
import { MetaTags } from '@redwoodjs/web'
import { MoonStars, Sun } from 'tabler-icons-react'

export function SettingsPage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <>
      <MetaTags title="Settings" description="Settings page" />

      <Group position="center" my="xl">
        <Text size="sm" color={dark ? 'yellow' : 'blue'}>
          {upperFirst(colorScheme === 'light' ? 'dark' : 'light')} theme
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
    </>
  )
}

export default SettingsPage
