import type { FindArticleQuery, FindArticleQueryVariables } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { Button, Card, createStyles, Divider, Group, Text } from '@mantine/core'
import { navigate, routes } from '@redwoodjs/router'
import { Book } from 'tabler-icons-react'
import ArticleCard from '../ArticleCard/ArticleCard'

export const QUERY = gql`
  query FindArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      content
      createdAt
      numLikes
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindArticleQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

const useStyles = createStyles((theme) => ({
  title: {
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  content: {
    padding: '3rem',
  },
}))

export const Success = ({
  article,
}: CellSuccessProps<FindArticleQuery, FindArticleQueryVariables>) => {
  const { classes } = useStyles()

  return (
    <>
      <ArticleCard article={article} homePage={false} />
    </>
  )
}

{
  /* style={{ backgroundColor: '#732C19' }} */
}
{
  /* <Card shadow="sm" p="lg" >
        <Text
          className={classes.title}
          transform="capitalize"
          weight={900}
          size="xl"
        >
          {article.title}
        </Text>
        <Divider size="sm" />
        <Text className={classes.content}>{article.content}</Text>

        <Group position='right' style={{
          marginTop: 14,
        }}> */
}

{
  /* <Button color='red' variant={isLiked ? 'light' : 'subtle'}
            leftIcon={
              isLiked ? <HeartPlus /> : <Heart />
            }
            onClick={() => {
              setIsLiked(!isLiked)
              console.log(isLiked)
            }}
          >
            Like
            <Space w="sm" />
            {
              isLiked ? <>{likeCount + 1}</> : <>{likeCount}</>
            }
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
          </Button> */
}
{
  /* </Group>
      </Card> */
}
