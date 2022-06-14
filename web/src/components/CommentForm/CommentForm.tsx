import { Title } from "@mantine/core"
import { Form, FormError, Label, Submit, SubmitHandler, TextAreaField, TextField } from "@redwoodjs/forms"
import { useMutation } from '@redwoodjs/web'

const CREATE = gql`
  mutation CreateCommentMutation($input: CreateCommentInput!) {
    createComment(input: $input) {
      # id
      author
      body
      # createdAt
    }
  }
`

interface FormValues {
  name: string
  comment: string
}

interface CommentFormProps {
  postId: number
}

const CommentForm = ({ postId }: CommentFormProps) => {

  const [createComment, { loading, error }] = useMutation(CREATE)

  const onSubmit: SubmitHandler<FormValues> = (input) => {
    createComment({ variables: { input: { postId, ...input } } })
  }

  return (
    <>
      <Title>Leave a comment</Title>
      <Form onSubmit={onSubmit}>
        <FormError
          error={error}
          titleClassName="font-semibold"
          wrapperClassName="bg-red-100 text-red-900 text-sm p-3 rounded"
        />
        <Label name="author">Name</Label>
        <TextField name="author" required/>
        <Label name="body">Comment</Label>
        <TextAreaField name="body" required/>
        <Submit disabled={loading}>Submit</Submit>
      </Form>
    </>
  )
}

export default CommentForm
