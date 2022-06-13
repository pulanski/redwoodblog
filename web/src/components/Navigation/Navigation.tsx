import React, { useState } from 'react'
import { createStyles, Navbar } from '@mantine/core'
import {
  Settings,
  SwitchHorizontal,
  Logout,
  Home,
  Wallpaper,
  Bookmarks,
  Notebook,
  Edit,
  Login,
} from 'tabler-icons-react'
import { navigate, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef('icon')
  return {
    navbar: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },

    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    link: {
      ...theme.fn.focusStyles(),
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: theme.fontSizes.sm,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      '&, &:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors[theme.primaryColor][8], 0.25)
            : theme.colors[theme.primaryColor][0],
        color:
          theme.colorScheme === 'dark'
            ? theme.white
            : theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color:
            theme.colors[theme.primaryColor][
              theme.colorScheme === 'dark' ? 5 : 7
            ],
        },
      },
    },
  }
})

const data = [
  { link: '/home', label: 'Home', icon: Home },
  { link: '/posts', label: 'New Post', icon: Wallpaper },
  { link: '/collection', label: 'Collection', icon: Notebook }, // Created Posts
  { link: '/bookmarks', label: 'Bookmarks', icon: Bookmarks }, // Saved Posts
  // { link: '', label: 'Billing', icon: Receipt2 },
  // { link: '', label: 'Security', icon: Fingerprint },
  // { link: '', label: 'SSH Keys', icon: Key },
  // { link: '', label: 'Databases', icon: DatabaseImport },
  // { link: '', label: 'Authentication', icon: TwoFA },
  { link: '/contact', label: 'Contact', icon: Edit },
  { link: '/settings', label: 'Settings', icon: Settings },
]

export function Navigation({ showNavbar }) {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState('Billing')

  // Handle User Auth State
  const { isAuthenticated, currentUser, logOut } = useAuth()

  const links = data.map((item) => (
    <a
      className={cx(classes.link, {
        [classes.linkActive]: item.label === active,
      })}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault()
        setActive(item.label)
        navigate(item.link)
      }}
    >
      <item.icon className={classes.linkIcon} />
      <span>{item.label}</span>
    </a>
  ))

  return (
    <>
      {showNavbar && (
        <Navbar width={{ sm: 200 }} p="md" className={classes.navbar}>
          <Navbar.Section grow>{links}</Navbar.Section>

          <Navbar.Section className={classes.footer}>
            <a
              href="#"
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <SwitchHorizontal className={classes.linkIcon} />
              <span>Change account</span>
            </a>

            {isAuthenticated ? (
              <div
                onClick={logOut}
                style={{
                  cursor: 'pointer',
                }}
              >
                <a
                  href="#"
                  className={classes.link}
                  onClick={(event) => event.preventDefault()}
                >
                  <Logout className={classes.linkIcon} />
                  <span>Logout</span>
                </a>
              </div>
            ) : (
              <div
                onClick={() => navigate(routes.login())}
                style={{
                  cursor: 'pointer',
                }}
              >
                <a
                  href="/login"
                  className={classes.link}
                  onClick={(event) => event.preventDefault()}
                >
                  <Login className={classes.linkIcon} />
                  <span>Login</span>
                </a>
              </div>
            )}
          </Navbar.Section>
        </Navbar>
      )}
    </>
  )
}

export default Navigation
