import { useState } from 'react'
import { useDarkMode } from 'src/hooks/useDarkMode'
import {
  Bookmarks,
  Edit,
  Home,
  Login,
  Logout,
  Notebook,
  Settings,
  SwitchHorizontal,
  Wallpaper,
} from 'tabler-icons-react'

import { Navbar, Tooltip } from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'

import { useStyles } from './NavigationStyles'

export function Navigation({ showNavbar }) {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState('Billing')

  // Handle User Auth State
  const { isAuthenticated, logOut } = useAuth()

  const data = [
    { link: '/home', label: 'Home', icon: Home, shortcutKey: '1' },
    {
      link: '/create',
      label: 'New Post',
      icon: Wallpaper,
      shortcutKey: '2',
    },
    {
      link: '/collection',
      label: 'Collection',
      icon: Notebook,
      shortcutKey: '3',
    },
    {
      link: '/bookmarks',
      label: 'Bookmarks',
      icon: Bookmarks,
      shortcutKey: '4',
    },
    { link: '/contact', label: 'Contact', icon: Edit, shortcutKey: '5' },
    {
      link: routes.generalSettings(),
      label: 'Settings',
      icon: Settings,
      shortcutKey: ',',
    },
  ]

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
      <Tooltip
        label={'⌘ + ' + item.shortcutKey}
        position="right"
        withArrow
        transitionDuration={0}
      >
        <span>{item.label}</span>
      </Tooltip>
    </a>
  ))

  const dark = useDarkMode()

  return (
    <>
      {showNavbar ? (
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
      ) : (
        <div
          style={{ backgroundColor: dark ? '#141517' : '#F8F9FA', width: 200 }}
          className={classes.navbar}
        ></div>
      )}
    </>
  )
}

export default Navigation
