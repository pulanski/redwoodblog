import type { CommentsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Comment from '../Comment/Comment'
import { Stack, Text } from '@mantine/core'

export const QUERY = gql`
  query CommentsQuery {
    comments {
      id
      body
      author
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => (
  <>
    <Text weight={500}>No comments yet. Be the first to comment on this.</Text>
  </>
)

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ comments }: CellSuccessProps<CommentsQuery>) => {
  return (
    <Stack spacing="xl">
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />
      })}
    </Stack>
  )
}
