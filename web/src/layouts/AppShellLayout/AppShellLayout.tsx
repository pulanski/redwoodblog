import { AppShell, Badge, Breadcrumbs, Group, Space } from '@mantine/core'
import { useEffect, useState } from 'react'
import AppBar from 'src/components/AppBar/AppBar'
import Navigation from 'src/components/Navigation/Navigation'
import Footer from 'src/components/Footer/Footer'
import { Home } from 'tabler-icons-react'
import { useHotkeys, useMouse } from '@mantine/hooks'
import { navigate, routes, useLocation } from '@redwoodjs/router'
import SystemInfoModal from 'src/components/SystemInfoModal/SystemInfoModal'
import { MouseContext } from 'src/contexts/MouseContext'
import ScrollToTop from 'src/components/ScrollToTop/ScrollToTop'

type BlogLayoutProps = {
  children?: React.ReactNode
}

export function AppShellLayout({ children }: BlogLayoutProps) {
  // Handle UI State for Navbar, Srolling, and System Info Modal
  const [showNavbar, setShowNavbar] = useState(true)
  const [clientInfoOpened, setClientInfoOpened] = useState(false)
  const { ref, x, y } = useMouse()

  useHotkeys([
    ['mod+B', () => setShowNavbar(!showNavbar)],
    ['mod+.', () => setClientInfoOpened(!clientInfoOpened)],
  ])

  const { pathname } = useLocation()
  let path = pathname.split('/').slice(1)

  // log the URL when the pathname changes
  useEffect(() => {
    path = pathname.split('/').slice(1)
  }, [pathname])

  const items = path.map((pathFragment, index) => (
    <>
      {/* onClick={() => navigate(pathFragment)} */}
      <Badge color="orange" size="md" key={index}>
        {pathFragment}
      </Badge>
    </>
  ))

  return (
    <>
      <MouseContext.Provider value={{ x, y }}>
        <div ref={ref}>
          <SystemInfoModal
            clientInfoOpened={clientInfoOpened}
            setClientInfoOpened={setClientInfoOpened}
          />
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
            <Space h="lg" />
            {children}
          </AppShell>
        </div>
      </MouseContext.Provider>
      <ScrollToTop />
    </>
  )
}

export default AppShellLayout
