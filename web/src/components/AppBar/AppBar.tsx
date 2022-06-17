import { createStyles, Header, Group, Burger, Kbd, Input } from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import { Search } from 'tabler-icons-react'
import { openSpotlight } from '@mantine/spotlight'
import RedwoodLogo from '../RedwoodLogo/RedwoodLogo'

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    opacity: 0.9,
    // [scrollY.greaterThan('0px')]: {
    //   opacity: 1,
    // },
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  links: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
    margin: theme.spacing.md,
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  leftIcon: {
    marginLeft: theme.spacing.xs,
  },

  searchText: {
    marginRight: '5rem',
  },
}))

export function AppBar({ showNavbar, setShowNavbar }) {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const { classes } = useStyles()

  return (
    <Header height={56} className={classes.header} mb={120}>
      <div className={classes.inner}>
        <Group>
          <Burger
            opened={opened}
            onClick={() => {
              toggleOpened()
              setShowNavbar(!showNavbar)
            }}
            size="sm"
            title="Open navigation"
            aria-label="Open navigation"
          />
          <RedwoodLogo />
        </Group>
        <Input
          icon={<Search size={16} />}
          placeholder="Search"
          className={classes.search}
          rightSectionWidth={70}
          rightSection={
            <>
              <Kbd>⌘</Kbd>
              <span style={{ margin: '0 0.2rem' }}>+</span>
              <Kbd
                style={{
                  marginRight: '1.5rem',
                }}
              >
                K
              </Kbd>
            </>
          }
          onClick={openSpotlight}
        />
      </div>
    </Header>
  )
}

export default AppBar
