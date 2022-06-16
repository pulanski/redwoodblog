import {
  Badge,
  Button,
  Card,
  Group,
  MediaQuery,
  Space,
  Stack,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { navigate, routes } from '@redwoodjs/router'
import { useState } from 'react'
import { useDarkMode } from 'src/hooks/useDarkMode'
import { Book, Heart, HeartPlus } from 'tabler-icons-react'
import { timeTagDate, timeTagTime } from './TimeFormat'

const ArticleCard = ({ article, homePage }) => {
  const theme = useMantineTheme()
  const darkMode = useDarkMode()
  const secondaryColor = darkMode ? theme.colors.dark[1] : theme.colors.gray[7]

  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(article.numLikes)

  return (
    <>
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
            <Badge
              color="red"
              variant={theme.colorScheme === 'dark' ? 'light' : 'filled'}
            >
              {timeTagDate(article.createdAt)}
            </Badge>
            <Badge color="pink" variant="light">
              {timeTagTime(article.createdAt)}
            </Badge>
          </Stack>
        </Group>

        <Text
          style={{
            color: secondaryColor,
            lineHeight: 1.5,
          }}
          lineClamp={3}
        >
          {article.content}
        </Text>

        <Group
          position="right"
          style={{
            marginTop: 14,
          }}
        >
          <Button
            color="red"
            variant={isLiked ? 'light' : 'subtle'}
            leftIcon={isLiked ? <HeartPlus /> : <Heart />}
            onClick={() => {
              setIsLiked(!isLiked)
              console.log(isLiked)
            }}
          >
            Like
            <Space w="sm" />
            {isLiked ? <>{likeCount + 1}</> : <>{likeCount}</>}
          </Button>

          {homePage && (
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
          )}
        </Group>
      </Card>
      {/* </MediaQuery> */}
    </>
  )
}

export default ArticleCard
