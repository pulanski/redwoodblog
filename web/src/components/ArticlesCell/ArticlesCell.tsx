import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { SimpleGrid } from '@mantine/core'
import ArticleCard from '../ArticleCard/ArticleCard'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      content
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  // const theme = useMantineTheme()

  return (
    <SimpleGrid
      cols={1}
      spacing="lg"
      breakpoints={[
        { maxWidth: 980, cols: 2, spacing: 'md' },
        { maxWidth: 755, cols: 2, spacing: 'sm' },
        { maxWidth: 600, cols: 1, spacing: 'sm' },
      ]}
    >
      {articles.map((article) => {
        return <ArticleCard article={article} />
      })}
    </SimpleGrid>
  )
}
