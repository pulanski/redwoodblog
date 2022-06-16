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
