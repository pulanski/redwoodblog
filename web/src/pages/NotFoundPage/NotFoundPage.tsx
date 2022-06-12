import {
  Button,
  Title,
  Text,
  Stack,
  // createStyles,
  Container,
  SimpleGrid,
  Space,
} from '@mantine/core'
import { Link, routes } from '@redwoodjs/router'
import NotFoundSVG from './NotFound.svg'
import styled from '@emotion/styled'
import Footer from 'src/components/Footer/Footer'

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

const StyledFooter = styled(Footer)`
  // margin-top: 12rem;
`

export function NotFoundPage() {
  return (
    <StyledContainer>
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
            <Button variant="outline" size="md" mt="xl">
              Get back to the home page
            </Button>
          </Link>
        </Stack>
        <StyledNotFoundSVG height="25rem" />
      </SimpleGrid>
      <Space h="xl" />
      <StyledFooter />
    </StyledContainer>
  )
}

export default NotFoundPage
