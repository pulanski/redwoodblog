import { Title } from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  // Handle User Auth State
  const { isAuthenticated, currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Home" description="Home page" />

      {isAuthenticated ? (
        <>
          <Title mt={40} mb={30}>
            Welcome back, {currentUser.email}
          </Title>
        </>
      ) : (
        <Title mt={40} mb={30}>
          Welcome to RedwoodJS Blog!
        </Title>
      )}

      <ArticlesCell />
    </>
  )
}

export default HomePage
