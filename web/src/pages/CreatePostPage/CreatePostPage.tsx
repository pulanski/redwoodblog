import { MetaTags } from '@redwoodjs/web'
import { Form, Formik, FormikHelpers, FormikValues } from 'formik'
import { TextInput } from '@mantine/core'

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

      {/* <Formik
        initialValues={{
          title: '',
          content: '',
          language: '',
        }}
        onSubmit={(values) => {
          onSubmit(values)
        }}
      >
        {(values) => (
          <Form>
            <TextInput name="title">{values.values.title}</TextInput>
          </Form>
        )}
      </Formik> */}
    </>
  )
}

export default CreatePostPage
