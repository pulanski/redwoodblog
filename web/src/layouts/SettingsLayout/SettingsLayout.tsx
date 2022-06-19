import { AppShell } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'
import { useState } from 'react'
import AppBar from 'src/components/AppBar/AppBar'
import Footer from 'src/components/Footer/Footer'
import SettingsNavbar from 'src/components/SettingsNavbar/SettingsNavbar'

type SettingLayoutProps = {
  children?: React.ReactNode
}

const SettingLayout = ({ children }: SettingLayoutProps) => {
  useHotkeys([['mod+B', () => setShowNavbar(!showNavbar)]])

  const [showNavbar, setShowNavbar] = useState(true)

  return (
    <>
      <AppShell
        // padding="md"
        fixed
        navbar={<SettingsNavbar showNavbar={showNavbar} />}
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
        {children}
      </AppShell>
    </>
  )
}

export default SettingLayout
