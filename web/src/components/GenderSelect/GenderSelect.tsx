import { Group, Select, Stack, Text } from '@mantine/core'

const GenderSelect = () => {
  return (
    <>
      <Group my={20} position="apart">
        <Stack>
          <Text>Gender</Text>
          <Text size="xs">
            RedwoodJS Blog will never share this information and only uses it to
            improve what content you see
          </Text>
        </Stack>
        <Select
          placeholder="Pick one"
          searchable
          clearable
          nothingFound="No options"
          data={[
            {
              value: 'react',
              label: 'Woman',
            },
            {
              value: 'ng',
              label: 'Man',
            },
            {
              value: 'svelte',
              label: 'Prefer not to say',
            },
            {
              value: 'not-specified',
              label: 'Not yet specified',
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

export default GenderSelect
