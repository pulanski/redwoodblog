import {
  Card,
  createStyles,
  Group,
  Space,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'

import Contact from '../Contact/Contact'
import ContactsMenu from '../ContactsMenu/ContactsMenu'

const useStyles = createStyles((theme) => ({
  card: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
  contact: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}))

export const ContactsCard = () => {
  const theme = useMantineTheme()
  const { classes } = useStyles()

  return (
    <>
      <Card style={{ width: 300 }} shadow="sm" p="lg" className={classes.card}>
        <Group position="apart">
          <Text weight={500} style={{ marginTop: theme.spacing.sm }}>
            Contacts
          </Text>
          <ContactsMenu />
        </Group>
        <Space h={20} />
        <Stack spacing="lg">
          <Contact
            src="https://randomuser.me/api/portraits/women/27.jpg"
            name="Vivian Reichert"
          />
          <Contact
            src="https://randomuser.me/api/portraits/men/77.jpg"
            name="Nick Marquardt"
          />
          <Contact
            src="https://randomuser.me/api/portraits/men/53.jpg"
            name="Cesar Sporer"
          />
        </Stack>
      </Card>
    </>
  )
}

export default ContactsCard
