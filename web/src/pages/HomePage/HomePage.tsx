import { Group, Space, Stack, Title } from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import ArticlesCell from 'src/components/ArticlesCell'
import FeaturedArticlesCell from 'src/components/FeaturedArticlesCell'
import ContactsCard from 'src/components/ContactsCard/ContactsCard'
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
        <>
          <Title mb={30}>Welcome back, {currentUser.email}</Title>
        </>
      ) : (
        <Title mt={40} mb={30}>
          Welcome to RedwoodJS Blog!
        </Title>
      )}

      <FeaturedArticlesCell />
      <Space h={30} />
      <Group>
        <ArticlesCell />
        <Stack>
          <Space h={30} />
          <HomeInfoCard />
          <ContactsCard />
        </Stack>
      </Group>
    </>
  )
}

export default HomePage
