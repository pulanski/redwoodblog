import { Code, createStyles, Group, Image, Text } from '@mantine/core'

// const StyledImage = styled(Image)`

const useStyles = createStyles((theme) => ({
  image: {
    paddingLeft: theme.spacing.lg,
    marginRight: '-0.5rem',
  },

  logoText: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },
}))

export function RedwoodLogo() {
  const { classes } = useStyles()

  return (
    <>
      {/* position="center" */}
      <Group>
        <Image
          width={35}
          height={35}
          src="https://redwoodjs.com/images/diecut.svg"
          alt="RedwoodJS Logo"
          withPlaceholder
          className={classes.image}
        />
        <Text className={classes.logoText}>RedwoodJS Blog</Text>
        <Code sx={{ fontWeight: 700 }}>v1.5.1</Code>
      </Group>
    </>
  )
}

export default RedwoodLogo
