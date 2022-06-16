import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const CreatePostPage = () => {
  return (
    <>
      <MetaTags title="CreatePost" description="CreatePost page" />

      <h1>CreatePostPage</h1>
      <p>
        Find me in <code>./web/src/pages/CreatePostPage/CreatePostPage.tsx</code>
      </p>
      <p>
        My default route is named <code>createPost</code>, link to me with `
        <Link to={routes.createPost()}>CreatePost</Link>`
      </p>
    </>
  )
}

export default CreatePostPage
