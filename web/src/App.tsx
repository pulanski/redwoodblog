import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from '@mantine/core'
import { SpotlightProvider } from '@mantine/spotlight'
import { Search } from 'tabler-icons-react'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'
import { useState } from 'react'
import { useHotkeys } from '@mantine/hooks'
import { actions } from './SpotlightActions'
import { navigate, routes } from '@redwoodjs/router'

export function App() {
  useHotkeys([
    ['mod+J', () => toggleColorScheme()],
    ['mod+1', () => navigate(routes.home())],
    ['mod+6', () => navigate(routes.settings())],
  ])

  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <RedwoodApolloProvider>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider theme={{ colorScheme }}>
              <SpotlightProvider
                actions={actions}
                searchIcon={<Search size={18} />}
                searchPlaceholder="Search..."
                shortcut="mod + k"
                nothingFoundMessage="Nothing found..."
                highlightQuery
              >
                <Global
                  styles={(theme) => ({
                    '*, *::before, *::after': {
                      boxSizing: 'border-box',
                    },

                    body: {
                      ...theme.fn.fontStyles(),
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[7]
                          : theme.white,
                      color:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[0]
                          : theme.black,
                      lineHeight: theme.lineHeight,
                    },
                  })}
                />
                <Routes />
              </SpotlightProvider>
            </MantineProvider>
          </ColorSchemeProvider>
        </RedwoodApolloProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
