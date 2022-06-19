import { createStyles } from '@mantine/core'

export const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,

      // [`& .${icon}`]: {
      //   color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      // },
    },
  },
  linkIcon: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },
  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? '#5D2E1A' : '#F2F3F6',
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      // [`& .${icon}`]: {
      //   color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      //   // theme.colors[theme.primaryColor][
      //   //   theme.colorScheme === 'dark' ? 5 : 7
      //   // ],
      // },
    },
  },
  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },
}))
