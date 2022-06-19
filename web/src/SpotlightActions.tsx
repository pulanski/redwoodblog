import { SpotlightAction } from '@mantine/spotlight'
import { Home, Wallpaper, Notebook, Bookmarks } from 'tabler-icons-react'
import { navigate, routes } from '@redwoodjs/router'

export const actions: SpotlightAction[] = [
  {
    title: 'Home',
    description: 'Go to home page',
    onTrigger: () => navigate(routes.home()),
    icon: <Home size={18} />,
  },
  {
    title: 'New Post',
    description: 'Let the world know what you are thinking',
    onTrigger: () => navigate(routes.create()),
    icon: <Wallpaper size={18} />,
  },
  {
    title: 'Collection',
    description: 'View created posts',
    onTrigger: () => navigate(routes.collection()),
    icon: <Notebook size={18} />,
  },
  {
    title: 'Bookmarks',
    description: 'View saved posts',
    onTrigger: () => navigate(routes.bookmarks()),
    icon: <Bookmarks size={18} />,
  },
  {
    title: 'Settings',
    description: 'Tweak your settings to just your liking',
    onTrigger: () => navigate(routes.generalSettings()),
    icon: <Notebook size={18} />,
  },
]
