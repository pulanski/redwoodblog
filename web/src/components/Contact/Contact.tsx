import { useDarkMode } from 'src/hooks/useDarkMode'

import {
  Avatar,
  Box,
  Button,
  createStyles,
  Dialog,
  Group,
  Indicator,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core'
import { useState } from 'react'

const useStyles = createStyles((theme) => ({
  box: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[6] : '#FFFFFF',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    },
  },
}))

const Contact = ({ src, name }) => {
  const darkMode = useDarkMode()
  const theme = useMantineTheme()
  const secondaryColor = darkMode ? theme.colors.dark[1] : theme.colors.gray[7]
  const { classes } = useStyles()

  const [opened, setOpened] = useState(false)

  return (
    <>
      <Box
        // sx=s{(theme) => ({})}
        style={{
          padding: theme.spacing.xs,
        }}
        className={classes.box}
      >
        <Group onClick={() => setOpened(true)}>
          <Group position="center">
            <Indicator
              color="green"
              position="bottom-end"
              withBorder
              inline
              offset={7}
            >
              <Avatar radius="xl" src={src} />
            </Indicator>
          </Group>
          <Text style={{ color: secondaryColor, lineHeight: 1.5 }}>{name}</Text>
        </Group>
      </Box>
      <ChatDialog opened={opened} setOpened={setOpened} />
    </>
  )
}

export default Contact

export const ChatDialog = ({ opened, setOpened }) => {
  return (
    <Dialog
      opened={opened}
      withCloseButton
      onClose={() => setOpened(false)}
      size="lg"
      radius="md"
    >
      <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
        Subscribe to email newsletter
      </Text>

      <Group align="flex-end">
        <TextInput placeholder="hello@gluesticker.com" style={{ flex: 1 }} />
        <Button onClick={() => setOpened(false)}>Subscribe</Button>
      </Group>
    </Dialog>
  )
}
