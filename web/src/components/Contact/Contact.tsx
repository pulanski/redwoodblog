import { Avatar, Text, Group, Indicator, useMantineTheme } from "@mantine/core"
import { useDarkMode } from "src/hooks/useDarkMode"

const Contact = ({ src, name }) => {

  const darkMode = useDarkMode()
  const theme = useMantineTheme()
  const secondaryColor = darkMode ? theme.colors.dark[1] : theme.colors.gray[7]

  return (
    <>
      <Group>
        <Group position="center">
          <Indicator
            color="green"
            position="bottom-end"
            withBorder
            inline offset={7}
          >
            <Avatar radius="xl" src={src} />
          </Indicator >
        </Group>
        <Text style={{ color: secondaryColor, lineHeight: 1.5 }}>
          {name}
        </Text>
      </Group>
    </>
  )
}

export default Contact
