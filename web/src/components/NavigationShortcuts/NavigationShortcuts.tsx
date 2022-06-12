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

const navigationShortcuts = [
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
]

const useStyles = createStyles((theme) => ({
  subtitle: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
  },
}))

const NavigationShortcuts = () => {
  const { classes } = useStyles()

  return (
    <>
      <Container>
        <Group position="center">
          <Title order={2} className={classes.subtitle}>
            Navigation
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
            {navigationShortcuts.map((shortcut) => (
              <FloatingTooltip label={'⌘ + ' + shortcut.key} key={shortcut.key}>
                <StyledCard key={shortcut.key}>
                  <Group>
                    <Group>
                      <Kbd>⌘</Kbd> + <Kbd>{shortcut.key}</Kbd>
                    </Group>
                    <Badge color="red">{shortcut.description}</Badge>
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

export default NavigationShortcuts
