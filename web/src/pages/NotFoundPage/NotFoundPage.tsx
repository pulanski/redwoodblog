import Footer from 'src/components/Footer/Footer'
import NotFoundHeader from 'src/components/NotFoundHeader/NotFoundHeader'

import styled from '@emotion/styled'
import {
  Button,
  Container,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { Link, routes } from '@redwoodjs/router'

import NotFoundSVG from './NotFound.svg'

const StyledContainer = styled(Container)`
  padding: 5rem 2rem;
`

const StyledTitle = styled(Title)`
  font-weight: 900;
  font-size: 3rem;
`

const StyledNotFoundSVG = styled(NotFoundSVG)`
  margin-top: -2rem;
  margin-left: -45rem;
`

export function NotFoundPage() {
  return (
    <StyledContainer>
      <NotFoundHeader
        links={[
          { link: '/home', label: 'Home' },
          { link: '/about', label: 'About' },
          { link: '/contact', label: 'Contact' },
          { link: '/settings', label: 'Settings' },
          // { link: 'login', label: 'Login' },
        ]}
      />
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: 'md', cols: 1, spacing: 40 }]}
        style={{
          marginLeft: '4rem',
        }}
      >
        <Stack align="center" spacing="md">
          <StyledTitle>Something is not right...</StyledTitle>
          <Text color="dimmed" size="lg">
            The page you are trying to open does not exist. You may have
            mistyped the address, or the page has been moved to another URL. If
            you think this is an error contact support.
          </Text>
          {/* className={classes.control} */}
          <Link to={routes.home()}>
            <Button color="red" variant="outline" size="md" mt="xl">
              Get back to the home page
            </Button>
          </Link>
        </Stack>
        <StyledNotFoundSVG height="25rem" />
      </SimpleGrid>
      <Space h="xl" />
      <Footer />
    </StyledContainer>
  )
}

export default NotFoundPage
