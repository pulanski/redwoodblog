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
