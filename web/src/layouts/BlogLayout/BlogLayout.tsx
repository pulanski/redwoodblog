import { Affix, AppShell, Button, Transition } from '@mantine/core'
import { createContext, useState } from 'react'
import AppBar from 'src/components/AppBar/AppBar'
import Navigation from 'src/components/Navigation/Navigation'
import Footer from 'src/components/Footer/Footer'
import { ArrowNarrowUp } from 'tabler-icons-react'
import { useWindowScroll } from '@mantine/hooks'

type BlogLayoutProps = {
  children?: React.ReactNode
}

export const NavbarContext = createContext(null)

export function BlogLayout({ children }: BlogLayoutProps) {
  const [showNavbar, setShowNavbar] = useState(true)
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <>
      <NavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
        <AppShell
          padding="md"
          fixed
          navbar={<Navigation />}
          header={<AppBar />}
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
                color="gray"
              >
                Scroll to top
              </Button>
            )}
          </Transition>
        </Affix>
      </NavbarContext.Provider>
    </>
  )
}

export default BlogLayout
