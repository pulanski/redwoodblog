import { Container, Group, Select, Stack, Text } from '@mantine/core'

const DisplayLanguageSelect = () => {
  return (
    <>
      <Group my={20} position="apart">
        <Stack>
          <Text>
            Display language{' '}
            <span
              style={{
                color: '#854226',
              }}
            >
              (beta)
            </span>
          </Text>
          <Container size={800} px="0">
            <Text size="xs">
              Select the language you&apos;d like to experience the Reddit
              interface in. Note that this won&apos;t change the language of
              user-generated content and that this feature is still in
              development so translations and UI are still under review.
            </Text>
          </Container>
        </Stack>
        <Select
          placeholder="Pick one"
          searchable
          clearable
          nothingFound="No options"
          data={[
            {
              value: 'react',
              label: 'English',
            },
            {
              value: 'ng',
              label: 'Spanish',
            },
            {
              value: 'svelte',
              label: 'French',
            },
          ]}
          transition="scale-y"
          transitionDuration={80}
          transitionTimingFunction="ease"
        />
      </Group>
    </>
  )
}

export default DisplayLanguageSelect
