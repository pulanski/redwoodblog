import {
  Group,
  useMantineColorScheme,
  Title,
  Stack,
  Center,
  createStyles,
  Button,
} from '@mantine/core'
import { MetaTags } from '@redwoodjs/web'
import DarkModeToggle from 'src/components/DarkModeToggle/DarkModeToggle'
import FullScreenToggle from 'src/components/FullScreenToggle/FullScreenToggle'
import GeneralShortcuts from 'src/components/GeneralShortcuts/GeneralShortcuts'
import NavigationShortcuts from 'src/components/NavigationShortcuts/NavigationShortcuts'
import RtlModeToggle from 'src/components/RtlModeToggle/RtlModeToggle'

const useStyles = createStyles((theme) => ({
  title: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[2]
        : theme.colors.dark[5],
  },
}))

export function SettingsPage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  const { classes } = useStyles()

  return (
    <>
      <MetaTags title="Settings" description="Settings page" />

      <Group position="center" my="xl">
        <Stack>
          <Title order={1} mt={30} mb={40} className={classes.title}>
            Settings
          </Title>

          <DarkModeToggle
            dark={dark}
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          />
          <FullScreenToggle dark={dark} />
          <RtlModeToggle dark={dark} />
          <Center>
            <Title order={2} className={classes.title}>
              Keyboard Shortcuts Reference
            </Title>
          </Center>
          <GeneralShortcuts />
          <NavigationShortcuts />
        </Stack>
      </Group>
    </>
  )
}

export default SettingsPage
