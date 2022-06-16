import { Center, ScrollArea, SimpleGrid, Title } from '@mantine/core'
import Slider from 'react-slick'
import ArticleCell from '../ArticleCell'
import { settings } from './SliderSettings'

const FeaturedPosts = () => {
  return (
    <>
      <Title mb={15} order={3}>
        Featured Posts
      </Title>
      <Center>
        <ScrollArea style={{ width: 1000 }}>
          <SimpleGrid
            cols={3}
            spacing="lg"
            breakpoints={[
              { maxWidth: 1200, cols: 1, spacing: 'md' },
              { maxWidth: 755, cols: 1, spacing: 'sm' },
              { maxWidth: 600, cols: 1, spacing: 'sm' },
            ]}
            style={{ width: 2000 }}
          >
            {/* <Slider {...settings}> */}
            <ArticleCell id={6} />
            <ArticleCell id={3} />
            <ArticleCell id={1} />
            {/* </Slider> */}
          </SimpleGrid>
        </ScrollArea>
      </Center>
    </>
  )
}

export default FeaturedPosts
