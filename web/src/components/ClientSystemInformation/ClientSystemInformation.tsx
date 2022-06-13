import { Badge, Text, Code, Stack } from '@mantine/core'
import {
  useColorScheme,
  useIdle,
  useMouse,
  useOs,
  useWindowScroll,
} from '@mantine/hooks'
import NetworkStatus from '../NetworkStatus/NetworkStatus'

const ClientSystemInformation = () => {
  const idle = useIdle(2000, { initialState: false })
  const os = useOs()
  const [scroll] = useWindowScroll()
  const { ref, x, y } = useMouse()
  const colorScheme = useColorScheme()

  return (
    <>
      <div ref={ref}>
        <Stack>
          <Badge color={idle ? 'blue' : 'teal'}>
            Current state: {idle ? 'idle' : 'not idle'}
          </Badge>
          <Badge color="green">Using {os}</Badge>
          <Badge
            color={colorScheme === 'dark' ? 'blue' : 'teal'}
            variant="filled"
          >
            Your system color scheme is {colorScheme}
          </Badge>
          <Text align="center">
            Scroll position{' '}
            <Code>
              x: {scroll.x}, y: {scroll.y}
            </Code>
          </Text>
          <Text align="center">
            Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
          </Text>
          <NetworkStatus />
        </Stack>
      </div>
    </>
  )
}

export default ClientSystemInformation
