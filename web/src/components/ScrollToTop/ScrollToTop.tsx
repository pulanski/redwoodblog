import { Affix, Button, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { ArrowNarrowUp } from 'tabler-icons-react'

const ScrollToTop = () => {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <>
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition
          transition="slide-up"
          timingFunction="ease"
          mounted={scroll.y > 80}
          duration={400}
        >
          {(transitionStyles) => (
            <Button
              leftIcon={<ArrowNarrowUp />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              color="orange"
              variant="subtle"
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  )
}

export default ScrollToTop
