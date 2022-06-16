import {
  Group,
  Space,
  Title,
} from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import ArticlesCell from 'src/components/ArticlesCell'
import HomeInfoCard from 'src/components/HomeInfoCard/HomeInfoCard'
// import Slider from 'react-slick'
// import FeaturedPosts from 'src/components/FeaturedPosts/FeaturedPosts'

const HomePage = () => {
  // Handle User Auth State
  const { isAuthenticated, currentUser } = useAuth()

  useEffect(() => navigate('/home'), [])

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {isAuthenticated ? (
        <>{/* <Title mb={30}>Welcome back, {currentUser.email}</Title> */}</>
      ) : (
        <Title mt={40} mb={30}>
          Welcome to RedwoodJS Blog!
        </Title>
      )}

      {/* <FeaturedPosts /> */}
      <Space h={30} />
      <Group>
        <ArticlesCell />
        <HomeInfoCard />
      </Group>
    </>
  )
}

export default HomePage
