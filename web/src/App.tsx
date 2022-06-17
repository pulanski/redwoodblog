import './scaffold.css'
import './index.css'

import { useEffect, useState } from 'react'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import rtlPlugin from 'stylis-plugin-rtl'
import { Search } from 'tabler-icons-react'

import {
  ColorScheme,
  ColorSchemeProvider,
  Global,
  MantineProvider,
} from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'
import { SpotlightProvider } from '@mantine/spotlight'
import { AuthProvider } from '@redwoodjs/auth'
import { navigate, routes } from '@redwoodjs/router'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import * as Sentry from '@sentry/react'
import { BrowserTracing } from '@sentry/tracing'

import { actions } from './SpotlightActions'

export function App() {
  // const { toggle, fullscreen } = useFullscreen()

  useHotkeys([
    ['mod+J', () => toggleColorScheme()],
    // ['mod+F', () => toggle],
    ['mod+D', () => setRtl(!rtl)],
    ['mod+1', () => navigate(routes.home())],
    ['mod+2', () => navigate(routes.create())],
    ['mod+3', () => navigate(routes.collection())],
    ['mod+4', () => navigate(routes.bookmarks())],
    ['mod+5', () => navigate(routes.contact())],
    ['mod+,', () => navigate(routes.settings())],
  ])

  useEffect(() => {
    Sentry.init({
      dsn: 'https://e75b9fa0a8ac48ed9b14dca96f2dd98c@o1290334.ingest.sentry.io/6510423',
      integrations: [new BrowserTracing()],

      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0,
    })
  }, [])

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
                emotionOptions={
                  rtl
                    ? // rtl cache
                      { key: 'mantine-rtl', stylisPlugins: [rtlPlugin] }
                    : // ltr cache
                      { key: 'mantine' }
                }
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
                  <div dir={rtl ? 'rtl' : 'ltr'}>
                    <Routes />
                  </div>
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
