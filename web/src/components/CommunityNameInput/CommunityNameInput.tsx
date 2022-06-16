import { Group, Text, TextInput, Title, Tooltip } from '@mantine/core'
import { InfoCircle } from 'tabler-icons-react'

const CommunityNameInput = () => {
  return (
    <>
      <Tooltip
        wrapLines
        width={220}
        withArrow
        transition="fade"
        transitionDuration={200}
        label='Names cannot have spaces (e.g., "redwood/sportsbar" not "redwood/sports bar"), must be
        between 3-21 characters, and underscores ("_") are the only special
        characters allowed. Avoid using solely trademarked names (e.g.,
        "redwood/FansOfGoogle" not "redwood/Google").'
        style={{
          position: 'relative',
          top: '1rem',
          left: '8.5rem',
        }}
      >
        <InfoCircle size={14} />
      </Tooltip>
      <Group
        style={{
          marginTop: '-1.5rem',
        }}
      >
        <Text
          style={{
            marginTop: '2.4rem',
            marginRight: '-0.5rem',
          }}
        >
          redwood/
        </Text>
        <TextInput
          placeholder="redwood_enthusiasts"
          label={<Title order={4}>Name</Title>}
        />
      </Group>
    </>
  )
}

export default CommunityNameInput
