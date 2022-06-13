import styled from '@emotion/styled'
import {
  Badge,
  Card,
  Container,
  createStyles,
  FloatingTooltip,
  Group,
  Kbd,
  SimpleGrid,
  Title,
} from '@mantine/core'

const StyledCard = styled(Card)`
  cursor: pointer;
`

const StyledBadge = styled(Badge)`
  cursor: pointer;
`

const useStyles = createStyles((theme) => ({
  title: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[2]
        : theme.colors.dark[5],
  },
  subtitle: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
  },
}))

const generalShortcuts = [
  {
    key: 'F',
    description: 'Toggle fullscreen',
  },
  {
    key: 'J',
    description: 'Toggle dark mode',
  },
  {
    key: 'K',
    description: 'Open Spotlight',
  },
  {
    key: 'B',
    description: 'Open Navigation',
  },
  {
    key: ',',
    description: 'Open Settings',
  },
  {
    key: '.',
    description: 'Open System Info',
  },
]

const GeneralShortcuts = () => {
  const { classes } = useStyles()

  return (
    <>
      <Container>
        <Group position="center">
          <Title order={2} className={classes.subtitle}>
            General
          </Title>
          <SimpleGrid
            cols={3}
            spacing="xl"
            breakpoints={[
              {
                maxWidth: 755,
                cols: 2,
                spacing: 'sm',
              },
              {
                maxWidth: 600,
                cols: 1,
                spacing: 'sm',
              },
            ]}
          >
            {generalShortcuts.map((shortcut) => (
              <FloatingTooltip label={'⌘ + ' + shortcut.key} key={shortcut.key}>
                <StyledCard key={shortcut.key}>
                  <Group>
                    <Group>
                      <Kbd>⌘</Kbd> + <Kbd>{shortcut.key}</Kbd>
                    </Group>
                    <StyledBadge color="red" key={shortcut.key}>
                      {shortcut.description}
                    </StyledBadge>
                  </Group>
                </StyledCard>
              </FloatingTooltip>
            ))}
          </SimpleGrid>
        </Group>
      </Container>
    </>
  )
}

export default GeneralShortcuts
