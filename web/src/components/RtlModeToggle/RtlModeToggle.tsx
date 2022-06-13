import { ActionIcon, Text, Group, Kbd, Tooltip } from "@mantine/core"
import { useContext } from "react"
import { RtlContext } from "src/RtlContext"
import { AlignLeft, AlignRight } from "tabler-icons-react"

const RtlModeToggle = ({ dark }) => {

  const { rtl, setRtl } = useContext(RtlContext)

  return (
    <>
      <Tooltip
        label={
          <>
            <Kbd>⌘</Kbd> + <Kbd>D</Kbd>
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
          <Text size="sm" color={dark ? 'yellow' : 'blue'}>
            {rtl ? "Exit LTR" : "Enter RTL"} Mode (<em>Experimental</em>)
          </Text>
          <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => setRtl(!rtl)}
            title="Toggle RTL Mode"
          >
            {rtl ? <AlignLeft size={18} /> : <AlignRight size={18} />}
            {/* {dark ? <Sun size={18} /> : <MoonStars size={18} />} */}
          </ActionIcon>
        </Group>
      </Tooltip>

    </>
  )
}

export default RtlModeToggle
