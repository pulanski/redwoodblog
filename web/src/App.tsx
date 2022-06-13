import { AuthProvider } from '@redwoodjs/auth'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from '@mantine/core'
import rtlPlugin from 'stylis-plugin-rtl'
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
import { RtlContext } from './RtlContext'

export function App() {
  // const { toggle, fullscreen } = useFullscreen()

  useHotkeys([
    ['mod+J', () => toggleColorScheme()],
    // ['mod+F', () => toggle],
    ['mod+D', () => setRtl(!rtl)],
    ['mod+1', () => navigate(routes.home())],
    ['mod+,', () => navigate(routes.settings())],
  ])

  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const [rtl, setRtl] = useState(false)

  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <AuthProvider type="dbAuth">
          <RedwoodApolloProvider>
            <ColorSchemeProvider
              colorScheme={colorScheme}
              toggleColorScheme={toggleColorScheme}
            >
              <MantineProvider
                emotionOptions={rtl
                  ? // rtl cache
                  { key: 'mantine-rtl', stylisPlugins: [rtlPlugin] }
                  : // ltr cache
                  { key: 'mantine' }}
                theme={{
                  colorScheme,
                  dir: rtl ? 'rtl' : 'ltr',
                }}
              >
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
                  <RtlContext.Provider value={{ rtl, setRtl }}>
                    <div dir={rtl ? 'rtl' : 'ltr'}>
                      <Routes />
                    </div>
                  </RtlContext.Provider>
                </SpotlightProvider>
              </MantineProvider>
            </ColorSchemeProvider>
          </RedwoodApolloProvider>
        </AuthProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
