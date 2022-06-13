import {
  Affix,
  AppShell,
  Badge,
  Breadcrumbs,
  Button,
  Group,
  Transition,
} from '@mantine/core'
import { createContext, useEffect, useState } from 'react'
import AppBar from 'src/components/AppBar/AppBar'
import Navigation from 'src/components/Navigation/Navigation'
import Footer from 'src/components/Footer/Footer'
import { ArrowNarrowUp, Home } from 'tabler-icons-react'
import { useHotkeys, useWindowScroll } from '@mantine/hooks'
import { navigate, routes, useLocation } from '@redwoodjs/router'
import SystemInfoModal from 'src/components/SystemInfoModal/SystemInfoModal'

type BlogLayoutProps = {
  children?: React.ReactNode
}

export const NavbarContext = createContext(null)

export function BlogLayout({ children }: BlogLayoutProps) {
  // Handle UI State for Navbar, Srolling, and System Info Modal
  const [showNavbar, setShowNavbar] = useState(true)
  const [scroll, scrollTo] = useWindowScroll()
  const [clientInfoOpened, setClientInfoOpened] = useState(false)

  useHotkeys([
    ['mod+B', () => setShowNavbar(!showNavbar)],
    ['mod+.', () => setClientInfoOpened(!clientInfoOpened)],
  ])

  const { pathname, search, hash } = useLocation()
  let path = pathname.split('/').slice(1)

  // log the URL when the pathname changes
  useEffect(() => {
    path = pathname.split('/').slice(1)
  }, [pathname])

  const items = path.map((pathFragment, index) => (
    <>
      {/* onClick={() => navigate(pathFragment)} */}
      <Badge color="orange" size="md">
        {pathFragment}
      </Badge>
    </>
  ))

  return (
    <>
      <SystemInfoModal
        clientInfoOpened={clientInfoOpened}
        setClientInfoOpened={setClientInfoOpened}
      />
      {/* <NavbarContext.Provider value={{ showNavbar, setShowNavbar }}> */}
      <AppShell
        padding="md"
        fixed
        navbar={<Navigation showNavbar={showNavbar} />}
        header={
          <AppBar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />
        }
        footer={<Footer />}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <Badge
            color="red"
            size="lg"
            style={{ cursor: 'pointer' }}
            onClick={() => navigate(routes.home())}
            leftSection={
              <>
                <Home size={24} style={{ paddingTop: '0.5rem' }} />
              </>
            }
          ></Badge>
          /<Breadcrumbs separator="/">{items}</Breadcrumbs>
        </Group>
        {children}
      </AppShell>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition
          transition="slide-up"
          timingFunction="ease"
          mounted={scroll.y > 80}
          duration={400}
        >
          {(transitionStyles) => (
            <Button
              leftIcon={<ArrowNarrowUp />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              color="orange"
              variant="subtle"
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
      {/* </NavbarContext.Provider> */}
    </>
  )
}

export default BlogLayout
