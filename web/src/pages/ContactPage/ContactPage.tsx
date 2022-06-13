import { Button, Stack, Title } from '@mantine/core'
import {
  FieldError,
  Form,
  Label,
  SubmitHandler,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'

interface FormValues {
  name: string
  email: string
  message: string
}

const ContactPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    setInput(data)
  }

  const [input, setInput] = useState({})

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Stack>
          <Title order={1}>Get in touch</Title>
          <Label name="name" errorClassName="error">
            <Title order={3}>Name</Title>
          </Label>
          <TextField
            name="name"
            validation={{ required: true }}
            errorClassName="error"
          />
          <FieldError name="name" className="error" />
          <Label name="email" errorClassName="error">
            <Title order={3}>Email</Title>
          </Label>
          <TextField
            name="email"
            validation={{
              required: true,
              pattern: {
                value: /^[^@]+@[^.]+\..+$/,
                message: 'Please enter a valid email address',
              },
            }}
            errorClassName="error"
          />
          <FieldError name="email" className="error" />
          <Label name="message" errorClassName="error">
            <Title order={3}>Message</Title>
          </Label>
          <TextAreaField
            name="message"
            validation={{ required: true }}
            errorClassName="error"
          />
          <FieldError name="message" className="error" />
          <Button type="submit" color="gray">
            Save
          </Button>
        </Stack>
      </Form>
      {/* {input} */}
    </>
  )
}

export default ContactPage
