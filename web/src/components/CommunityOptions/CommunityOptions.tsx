import { Group, Radio, RadioGroup, Text, Stack } from '@mantine/core'
import { DiGhostSmall } from 'react-icons/di'
import { MdPublic } from 'react-icons/md'
import { RiGitRepositoryPrivateLine } from 'react-icons/ri'

const CommunityOptions = () => {
  return (
    <>
      <RadioGroup
        orientation="vertical"
        label={'Community Type'}
        description="This will be your audience for future posts, but you can always change it later."
        spacing="sm"
        size="md"
        color="orange"
        required
      >
        <Radio
          style={{
            marginTop: '0.5rem',
          }}
          value="react"
          label={
            <>
              <Group
                style={{
                  marginTop: '-0.8rem',
                }}
              >
                <Stack>
                  <Group>
                    <MdPublic size={14} />
                    <Text
                      style={{
                        marginLeft: '-0.7rem',
                      }}
                    >
                      Public
                    </Text>
                  </Group>
                  <Text
                    size="xs"
                    style={{
                      marginTop: '-1rem',
                      fontSize: '0.7rem',
                    }}
                  >
                    Anyone can view, post, and comment to this community
                  </Text>
                </Stack>
              </Group>
            </>
          }
        />
        <Radio
          value="svelte"
          label={
            <>
              <Group
                style={{
                  marginTop: '-0.8rem',
                }}
              >
                <Stack>
                  <Group>
                    <DiGhostSmall size={14} />
                    <Text
                      style={{
                        marginLeft: '-0.7rem',
                      }}
                    >
                      Restricted
                    </Text>
                  </Group>
                  <Text
                    size="xs"
                    style={{
                      marginTop: '-1rem',
                      fontSize: '0.7rem',
                    }}
                  >
                    Anyone can view this community, but only approved users can
                    post
                  </Text>
                </Stack>
              </Group>
            </>
          }
        />
        <Radio
          value="ng"
          label={
            <>
              <Group
                style={{
                  marginTop: '-0.8rem',
                }}
              >
                <Stack>
                  <Group>
                    <RiGitRepositoryPrivateLine size={14} />
                    <Text
                      style={{
                        marginLeft: '-0.7rem',
                      }}
                    >
                      Private
                    </Text>
                  </Group>
                  <Text
                    size="xs"
                    style={{
                      marginTop: '-1rem',
                      fontSize: '0.7rem',
                    }}
                  >
                    Only approved users can view and submit to this community
                  </Text>
                </Stack>
              </Group>
            </>
          }
        />
      </RadioGroup>
    </>
  )
}

export default CommunityOptions
