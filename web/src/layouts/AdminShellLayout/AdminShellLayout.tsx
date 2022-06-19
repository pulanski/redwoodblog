import AdminNavigationBar from 'src/components/AdminNavigationBar/AdminNavigationBar'

import { AppShell } from '@mantine/core'

type AdminShellLayoutProps = {
  children?: React.ReactNode
}

const AdminShellLayout = ({ children }: AdminShellLayoutProps) => {
  return (
    <>
      <AppShell
        padding="md"
        fixed
        navbar={<AdminNavigationBar />}
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

export default AdminShellLayout
