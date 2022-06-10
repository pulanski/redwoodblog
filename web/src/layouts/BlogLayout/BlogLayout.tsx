import { AppShell } from '@mantine/core'
import { createContext, useState } from 'react'
import AppBar from 'src/components/AppBar/AppBar'
import Navigation from 'src/components/Navigation/Navigation'

type BlogLayoutProps = {
  children?: React.ReactNode
}

export const NavbarContext = createContext(null)

export function BlogLayout({ children }: BlogLayoutProps) {
  const [showNavbar, setShowNavbar] = useState(true)

  return (
    <>
      <NavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
        <AppShell
          padding="md"
          fixed
          navbar={<Navigation />}
          header={<AppBar />}
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
      </NavbarContext.Provider>
    </>
  )
}

export default BlogLayout
