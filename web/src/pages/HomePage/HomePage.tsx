import {
  Button,
  Card,
  Group,
  SimpleGrid,
  Space,
  Stack,
  Title,
} from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { navigate } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
import ArticleCell from 'src/components/ArticleCell'
import ArticlesCell from 'src/components/ArticlesCell'
import HomeInfoCard from 'src/components/HomeInfoCard/HomeInfoCard'

const HomePage = () => {
  // Handle User Auth State
  const { isAuthenticated, currentUser } = useAuth()

  useEffect(() => navigate('/home'), [])

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {isAuthenticated ? (
        <>
          {/* <Title mb={30}>Welcome back, {currentUser.email}</Title> */}
        </>
      ) : (
        <Title mt={40} mb={30}>
          Welcome to RedwoodJS Blog!
        </Title>
      )}

      {/* <Group position='apart' style={{display: 'flex'}}> */}
      {/* style={{ width: '36rem' }} */}
      <Stack>
        <Title mb={15} order={3}>
          Featured Posts
        </Title>
        <SimpleGrid
          cols={3}
          spacing="lg"
          breakpoints={[
            { maxWidth: 1200, cols: 1, spacing: 'md' },
            { maxWidth: 755, cols: 1, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
          ]}
        >
          <ArticleCell id={6} />
          <ArticleCell id={3} />
          <ArticleCell id={2} />
        </SimpleGrid>
        <Space h={30} />
        <ArticlesCell />
      </Stack>
      {/* <Stack style={{ display: 'flex', width: '36rem', alignItems: 'flex-start' }}>
          <HomeInfoCard />
        </Stack> */}
      {/* </Group> */}
    </>
  )
}

export default HomePage
