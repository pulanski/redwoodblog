import React from 'react'
import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Anchor,
} from '@mantine/core'
import { useBooleanToggle } from '@mantine/hooks'
import RedwoodLogo from '../RedwoodLogo'
import { navigate } from '@redwoodjs/router'

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    marginTop: '-2rem',
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.fn.rgba(theme.colors[theme.primaryColor][9], 0.25)
          : theme.colors[theme.primaryColor][0],
      color:
        theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 3 : 7],
    },
  },
}))

interface NotFoundHeaderProps {
  links: { link: string; label: string }[]
}

export function NotFoundHeader({ links }: NotFoundHeaderProps) {
  const [opened, toggleOpened] = useBooleanToggle(false)
  const { classes, cx } = useStyles()

  const items = links.map((link) => (
    <>
      <Anchor className={cx(classes.link)} onClick={() => navigate(link.link)}>
        {link.label}
      </Anchor>
    </>
  ))

  return (
    <Header height={60} mb={80}>
      <Container className={classes.header}>
        <RedwoodLogo />
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          opened={opened}
          onClick={() => toggleOpened()}
          className={classes.burger}
          size="sm"
        />
      </Container>
    </Header>
  )
}

export default NotFoundHeader
