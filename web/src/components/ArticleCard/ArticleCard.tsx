import {
  Badge,
  Button,
  Card,
  Group,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { navigate, routes } from '@redwoodjs/router'

const timeTagDate = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toLocaleDateString()}
      </time>
    )
  )
}

const timeTagTime = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toLocaleTimeString()}
      </time>
    )
  )
}

const ArticleCard = ({ article }) => {
  const theme = useMantineTheme()
  const secondaryColor =
    theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7]

  return (
    <Card shadow="sm" p="lg">
      <Group
        position="apart"
        style={{
          marginBottom: 5,
          marginTop: theme.spacing.sm,
        }}
      >
        <Text weight={900} size="xl" transform="capitalize">
          {article.title}
        </Text>
        <Stack>
          <Badge color="pink" variant="light">
            {timeTagDate(article.createdAt)}
          </Badge>
          <Badge color="cyan" variant="light">
            {timeTagTime(article.createdAt)}
          </Badge>
        </Stack>
      </Group>

      <Text
        size="sm"
        style={{
          color: secondaryColor,
          lineHeight: 1.5,
        }}
      >
        {article.content}
      </Text>

      <Button
        variant="light"
        color="blue"
        style={{
          marginTop: 14,
        }}
        onClick={() => {
          navigate(
            routes.article({
              id: article.id,
            })
          )
        }}
      >
        Read more
      </Button>
    </Card>
  )
}

export default ArticleCard
