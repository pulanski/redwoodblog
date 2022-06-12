import React from 'react'
import {
  createStyles,
  Container,
  Group,
  ActionIcon,
  Anchor,
} from '@mantine/core'
import {
  BrandYoutube,
  BrandGithub,
  BrandDiscord,
} from 'tabler-icons-react'
import RedwoodLogo from 'src/components/RedwoodLogo'

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: 20,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    [theme.fn.largerThan('sm')]: {
      paddingLeft: '10rem',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}))

const Footer = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <RedwoodLogo />
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <Anchor href="https://discord.com/invite/redwoodjs" target="_blank">
            <ActionIcon size="lg">
              <BrandDiscord size={18} />
            </ActionIcon>
          </Anchor>
          <Anchor href="https://github.com/redwoodjs/redwood" target="_blank">
            <ActionIcon size="lg">
              <BrandGithub size={18} />
            </ActionIcon>
          </Anchor>
          <Anchor href="https://www.youtube.com/c/RedwoodJS" target="_blank">
            <ActionIcon size="lg">
              <BrandYoutube size={18} />
            </ActionIcon>
          </Anchor>
        </Group>
      </Container>
    </div>
  )
}

export default Footer
