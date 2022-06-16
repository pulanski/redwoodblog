import {
  Button,
  Card,
  Stack,
  Text,
  Image,
  useMantineTheme,
  createStyles,
} from '@mantine/core'
import { useState } from 'react'
import { useDarkMode } from 'src/hooks/useDarkMode'
import CreateCommunityModal from '../CreateCommunityModal/CreateCommunityModal'
import logo from './logo.png'

const useStyles = createStyles((theme) => ({
  card: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },
}))

const HomeInfoCard = () => {
  const darkMode = useDarkMode()
  const theme = useMantineTheme()
  const secondaryColor = darkMode ? theme.colors.dark[1] : theme.colors.gray[7]
  const { classes } = useStyles()

  const [modalOpened, setModalOpened] = useState(false)

  return (
    <>
      <CreateCommunityModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
      />
      <Card style={{ width: 300 }} shadow="sm" p="lg" className={classes.card}>
        <Card.Section>
          <Image src={logo} alt="Card Header" height={160} />
        </Card.Section>
        <Text weight={500} style={{ marginTop: theme.spacing.sm }}>
          Home
        </Text>

        <Stack>
          <Text style={{ color: secondaryColor, lineHeight: 1.5 }}>
            Your personal RedwoodJS Blog frontpage. Come here to check in with
            your favorite people and communities.
          </Text>
          <Button
            variant={darkMode ? 'light' : 'filled'}
            fullWidth
            color="orange"
          >
            Create Post
          </Button>
          <Button
            variant={darkMode ? 'light' : 'filled'}
            fullWidth
            color="yellow"
            onClick={() => setModalOpened(true)}
          >
            Create Community
          </Button>
        </Stack>
      </Card>
    </>
  )
}

export default HomeInfoCard
