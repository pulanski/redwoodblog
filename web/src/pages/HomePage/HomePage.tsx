import { Title } from '@mantine/core'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  // const [scroll, scrollTo] = useWindowScroll()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <Title my={30}>Welcome back, Josh</Title>

      <ArticlesCell />
      {/* <Affix position={{ bottom: 20, right: 20 }}>
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
      </Affix> */}
    </>
  )
}

export default HomePage
