import { Button, Card, Stack, Title } from '@mantine/core'

const HomeInfoCard = () => {
  return (
    <>
      <Card>
        <Title order={3}>Home</Title>
        <Stack>
          Your personal RedwoodJS Blog frontpage. Come here to check in with
          your favorite people and communities.
          <Button>Create Post</Button>
          <Button>Create Community</Button>
        </Stack>
      </Card>
    </>
  )
}

export default HomeInfoCard
