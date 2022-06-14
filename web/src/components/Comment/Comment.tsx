import { Badge, Blockquote, Group, Paper, Spoiler } from "@mantine/core"

const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

interface CommentProps {
  comment: {
    author: string
    createdAt: string
    body: string
  }
}

const Comment = ({ comment }: CommentProps) => {

  console.log(comment.author)

  return (
    <>
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Group position='apart'>
          <Blockquote
            cite={comment.author}
          // icon={<Flame size={24} />}
          >
            <Spoiler maxHeight={60} showLabel="Show more" hideLabel="Hide">
              {comment.body}
            </Spoiler>
          </Blockquote>
          <Badge color="cyan" size="lg" radius="lg" style={{
            marginLeft: 'auto',
          }}>
            {formattedDate(comment.createdAt)}
          </Badge>
        </Group>
      </Paper>
    </>
  )
}

export default Comment
