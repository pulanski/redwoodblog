import { MetaTags } from '@redwoodjs/web'
import CreatedPostsCell from 'src/components/CreatedPostsCell'

const CollectionPage = () => {
  return (
    <>
      <MetaTags title="Collection" description="Collection page" />

      <>
        <CreatedPostsCell />
      </>
    </>
  )
}

export default CollectionPage
