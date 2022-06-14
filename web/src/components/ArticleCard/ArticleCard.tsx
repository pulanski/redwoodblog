import {
  Badge,
  Button,
  Card,
  Group,
  Space,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { navigate, routes } from '@redwoodjs/router'
import { Book, HeartPlus } from 'tabler-icons-react'

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
          <Badge color="red" variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}>
            {timeTagDate(article.createdAt)}
          </Badge>
          <Badge color="pink" variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}>
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

      <Group position='right' style={{
        marginTop: 14,
      }}>


        <Button color='red' variant='subtle' leftIcon={<HeartPlus />}>
          Like
          <Space w="sm" />
          {article.numLikes}
        </Button>

        <Button
          variant={theme.colorScheme === 'dark' ? 'light' : 'outline'}
          color="orange"
          leftIcon={<Book />}

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
      </Group>
    </Card>
  )
}

export default ArticleCard
