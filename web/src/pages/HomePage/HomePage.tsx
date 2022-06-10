import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Image } from '@mantine/core'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
      <Image
        width={120}
        height={120}
        src="./icon2.png"
        alt="With default placeholder"
        withPlaceholder
      />
      <img src="icon2.png" alt="hello" />
    </>
  )
}

export default HomePage
