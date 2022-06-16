import type { ArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { ScrollArea, SimpleGrid, Text, Stack, Title } from '@mantine/core'
import { useWindowSize } from 'react-use'
import ArticleCard from '../ArticleCard/ArticleCard'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
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

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ articles }: CellSuccessProps<ArticlesQuery>) => {
  // const size = useWindowSize();
  const { width, height } = useWindowSize()

  return (
    <>
      <Stack>
        {width}
        <Title order={3}>All Posts</Title>
        <ScrollArea
          style={{
            height: 800,
            width: width > 1000 ? width - 600 : width > 770 ? width - 250 : width - 50,
          }}
          type="scroll"
          offsetScrollbars
          scrollbarSize={8}
        >
          <SimpleGrid
            cols={1}
            spacing="lg"
            breakpoints={[
              { maxWidth: 980, cols: 1, spacing: 'md' },
              { maxWidth: 755, cols: 1, spacing: 'sm' },
              { maxWidth: 600, cols: 1, spacing: 'sm' },
            ]}
          >
            {articles.map((article) => {
              return (
                <ArticleCard
                  article={article}
                  key={article.id}
                  homePage={true}
                />
              )
            })}
          </SimpleGrid>
        </ScrollArea>
      </Stack>
    </>
  )
}
