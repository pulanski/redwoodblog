import { ActionIcon, Group, Kbd, Tooltip, Text } from '@mantine/core'
import { upperFirst, useFullscreen } from '@mantine/hooks'
import { ScreenShare, ScreenShareOff } from 'tabler-icons-react'

export interface FullScreenToggleProps {
  dark: boolean
}

const FullScreenToggle = ({ dark }: FullScreenToggleProps) => {
  const { toggle, fullscreen } = useFullscreen()

  return (
    <>
      <Tooltip
        label={
          <>
            <Kbd>⌘</Kbd> + <Kbd>F</Kbd>
          </>
        }
        withArrow
        radius="md"
        position="bottom"
        transition="skew-up"
        transitionDuration={300}
        transitionTimingFunction="ease"
      >
        <Group position="center">
          <Text
            size="md"
            color={
              // fullscreen
              // ? 'red'
              dark ? 'yellow' : 'blue'
            }
          >
            {upperFirst(fullscreen ? 'Exit' : 'Enter')} Full Screen Mode
          </Text>
          <ActionIcon
            variant="outline"
            color={
              // fullscreen
              // ? 'red'
              dark ? 'yellow' : 'blue'
            }
            onClick={toggle}
            title={fullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
          >
            {fullscreen ? (
              <ScreenShareOff size={18} />
            ) : (
              <ScreenShare size={18} />
            )}
          </ActionIcon>
        </Group>
      </Tooltip>
    </>
  )
}

export default FullScreenToggle
