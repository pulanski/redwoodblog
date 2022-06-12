import { Affix, Button, Transition } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'
import { ArrowNarrowUp } from 'tabler-icons-react'

const HomePage = () => {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <ArticlesCell />
      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition
          transition="slide-up"
          timingFunction="ease"
          mounted={scroll.y > 0}
          duration={400}
        >
          {(transitionStyles) => (
            <Button
              leftIcon={<ArrowNarrowUp />}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              Scroll to top
            </Button>
          )}
        </Transition>
      </Affix>
    </>
  )
}

export default HomePage
