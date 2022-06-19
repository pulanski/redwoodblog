import { MetaTags } from '@redwoodjs/web'

interface Values {
  title: string
  content: string
  language: string
}

interface CreatePostProps {
  //  helpers: FormikHelpers<FormikValues>
  // : FormikValues
  onSubmit: (values: Values) => void
}

const CreatePostPage = ({ onSubmit }: CreatePostProps) => {
  return (
    <>
      <MetaTags title="CreatePost" description="CreatePost page" />
    </>
  )
}

export default CreatePostPage
