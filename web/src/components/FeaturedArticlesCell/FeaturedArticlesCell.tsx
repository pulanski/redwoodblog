import type { FeaturedArticlesQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
// import Slider from 'react-slick'

import { Space, Title } from '@mantine/core'

import ArticleCard from '../ArticleCard/ArticleCard'

export const QUERY = gql`
  query FeaturedArticlesQuery {
    featuredArticles: featuredPosts {
      id
      title
      content
      numLikes
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

// const settings = {
//   infinite: true,
//   arrows: false,
//   autoplay: true,
//   autoplaySpeed: 3000,
//   speed: 2000,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   // responsive: [
//   //   {
//   //     breakpoint: 1000,
//   //     settings: {
//   //       slidesToShow: 2,
//   //       slidesToScroll: 1,
//   //       infinite: true,
//   //     },
//   //   },
//   //   {
//   //     breakpoint: 600,
//   //     settings: {
//   //       slidesToShow: 1,
//   //       slidesToScroll: 1,
//   //       infinite: true,
//   //       autoplaySpeed: 3000,
//   //       speed: 2000,
//   //     },
//   //   },
//   // ],
// }

export const Success = ({
  featuredArticles,
}: CellSuccessProps<FeaturedArticlesQuery>) => {
  return (
    <>
      <Title order={3}>Featured Posts</Title>
      {featuredArticles.map((item) => {
        return (
          <>
            <ArticleCard article={item} homePage={true} />
            <Space h={10} />
          </>
        )
      })}
    </>
  )
}
