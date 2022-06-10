import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { SpotlightAction, SpotlightProvider } from '@mantine/spotlight'
import {
  Home,
  Search,
  Wallpaper,
  Notebook,
  Bookmarks,
} from 'tabler-icons-react'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import './index.css'
import { navigate, routes } from '@redwoodjs/router'
import { useState } from 'react'

const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Go to home page',
    onTrigger: () => navigate(routes.home()),
    icon: <Home size={18} />,
  },
  {
    title: 'New Post',
    description: 'Let the world know what you are thinking',
    onTrigger: () => navigate('/posts'),
    icon: <Wallpaper size={18} />,
  },
  {
    title: 'Collection',
    description: 'View all of your created blog posts',
    onTrigger: () => navigate('/collection'),
    icon: <Notebook size={18} />,
  },
  {
    title: 'Bookmarks',
    description: 'View all of your saved blog posts',
    onTrigger: () => navigate('/bookmarks'),
    icon: <Bookmarks size={18} />,
  },
  {
    title: 'Settings',
    description: 'Tweak your settings to your liking',
    onTrigger: () => navigate(routes.settings()),
    icon: <Notebook size={18} />,
  },
]

export function App() {
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
