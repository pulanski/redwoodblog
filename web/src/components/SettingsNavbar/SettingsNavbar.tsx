import { MdOutlineManageAccounts } from 'react-icons/md'
import { Home, Login, Logout, Settings } from 'tabler-icons-react'

import { Navbar, Paper, Stack } from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { navigate, NavLink, routes } from '@redwoodjs/router'

import { useStyles } from './SettingsNavbar.styles'

const SettingsNavbar = ({ showNavbar }) => {
  const { classes } = useStyles()
  const { isAuthenticated, logOut } = useAuth()

  return (
    <>
      {showNavbar && (
        <>
          <Navbar width={{ sm: 200 }} p="md">
            <Navbar.Section grow>
              <Stack>
                <NavLink
                  to={routes.generalSettings()}
                  activeClassName={classes.linkActive}
                  className={classes.link}
                >
                  <Settings size={24} className={classes.linkIcon} />
                  General Settings
                </NavLink>
                <NavLink
                  to={routes.accountSettings()}
                  activeClassName={classes.linkActive}
                  className={classes.link}
                >
                  <MdOutlineManageAccounts
                    size={20}
                    className={classes.linkIcon}
                  />
                  Account Settings
                </NavLink>
              </Stack>
            </Navbar.Section>
            <Navbar.Section className={classes.footer}>
              <NavLink
                to={routes.home()}
                activeClassName={classes.linkActive}
                className={classes.link}
              >
                <Home className={classes.linkIcon} />
                Home
              </NavLink>
              {isAuthenticated ? (
                <Paper className={classes.link} onClick={logOut}>
                  <Logout className={classes.linkIcon} />
                  Logout
                </Paper>
              ) : (
                <Paper
                  className={classes.link}
                  onClick={() => navigate(routes.login())}
                >
                  <Login className={classes.linkIcon} />
                  Login
                </Paper>
              )}
              {/*  */}
            </Navbar.Section>
          </Navbar>
        </>
      )}
    </>
  )
}

export default SettingsNavbar
