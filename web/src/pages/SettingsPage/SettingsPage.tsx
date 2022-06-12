import {
  ActionIcon,
  Group,
  useMantineColorScheme,
  Text,
  Tooltip,
  Kbd,
  Title,
  Stack,
  SimpleGrid,
  Container,
  Badge,
  Card,
} from '@mantine/core'
import { upperFirst } from '@mantine/hooks'
import { MetaTags } from '@redwoodjs/web'
import { MoonStars, Sun } from 'tabler-icons-react'

const keyboardShortcuts = [
  {
    key: '1',
    description: 'Go to home page',
  },
  {
    key: '2',
    description: 'Create a new post',
  },
  {
    key: '3',
    description: 'View created posts',
  },
  {
    key: '4',
    description: 'View saved posts',
  },
  {
    key: '5',
    description: 'Contact us',
  },
  {
    key: '6',
    description: 'Configure settings',
  },
  {
    key: 'J',
    description: 'Toggle dark mode',
  },
]

export function SettingsPage() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'

  return (
    <>
      <MetaTags title="Settings" description="Settings page" />

      <Group position="center" my="xl">
        <Stack>
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
          </Tooltip>
          <Container>
            <Title order={2}>Keyboard Shortcuts Reference</Title>
            <SimpleGrid
              cols={3}
              spacing="xl"
              breakpoints={[
                { maxWidth: 755, cols: 2, spacing: 'sm' },
                { maxWidth: 600, cols: 1, spacing: 'sm' },
              ]}
            >
              {keyboardShortcuts.map((shortcut) => (
                <Card key={shortcut.key}>
                  <Group>
                    <Group>
                      <Kbd>⌘</Kbd> + <Kbd>{shortcut.key}</Kbd>
                    </Group>
                    <Badge color="red">{shortcut.description}</Badge>
                  </Group>
                </Card>
              ))}
            </SimpleGrid>
          </Container>
        </Stack>
      </Group>
    </>
  )
}

export default SettingsPage
