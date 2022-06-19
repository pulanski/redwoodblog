// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import type { CreatedPostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import {
  ScrollArea,
  SimpleGrid,
  Stack,
  Title,
  Text,
  Button,
} from '@mantine/core'

import ArticleCard from '../ArticleCard/ArticleCard'
import { navigate, routes } from '@redwoodjs/router'
import { useDarkMode } from 'src/hooks/useDarkMode'

export const QUERY = gql`
  query CollectionQuery {
    createdPosts: collection {
      id
      content
      title
      numLikes
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  const darkMode = useDarkMode()

  return (
    <Stack align="center" py={20}>
      <Text>
        Hmm... seems like you haven&apos;t posted anything. Create a new post,
        and you&apos;ll be able to see it here.
      </Text>
      <Button
        variant={darkMode ? 'outline' : 'filled'}
        color="orange"
        onClick={() => navigate(routes.create())}
        style={{
          marginTop: 20,
          width: 150,
        }}
      >
        Create Post
      </Button>
    </Stack>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  createdPosts,
}: CellSuccessProps<CreatedPostsQuery>) => {
  return (
    <Stack>
      <Title order={3}>Created Posts</Title>
      <ScrollArea
        style={{
          height: 1000,
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
          {createdPosts.map((post) => {
            return <ArticleCard article={post} key={post.id} homePage={true} />
          })}
        </SimpleGrid>
      </ScrollArea>
    </Stack>
  )
}
