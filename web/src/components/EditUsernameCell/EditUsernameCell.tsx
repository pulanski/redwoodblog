import type {
  FindEditUsernameQuery,
  FindEditUsernameQueryVariables,
} from 'types/graphql'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { Button, Group, TextInput } from '@mantine/core'
import { z } from 'zod'
import { useForm, zodResolver } from '@mantine/form'
import { showNotification } from '@mantine/notifications'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

export const QUERY = gql`
  query FindEditUsernameQuery($id: Int!) {
    userName: user(id: $id) {
      id
      firstName
      middleName
      lastName
    }
  }
`

const UPDATE_USERNAME_MUTATION = gql`
  mutation UpdateUsernameMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      firstName
      lastName
      middleName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindEditUsernameQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  userName,
  setModalOpened,
}: CellSuccessProps<FindEditUsernameQuery, FindEditUsernameQueryVariables>) => {
  // , { loading, error }
  const [updateUser, { loading, error }] = useMutation(
    UPDATE_USERNAME_MUTATION,
    {
      onCompleted: () => {
        form.reset()
        setModalOpened(false)
        navigate(routes.generalSettings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const form = useForm({
    schema: zodResolver(nameValidator),
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
    },
  })

  return (
    <>
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values)
          updateUser({
            variables: {
              id: userName.id,
              input: {
                firstName: values.firstName,
                middleName: values.middleName,
                lastName: values.lastName,
              },
            },
          })
        })}
      >
        <TextInput
          required
          label="First Name"
          placeholder={
            userName.firstName
              ? userName.firstName.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                  letter.toUpperCase()
                )
              : 'John'
          }
          {...form.getInputProps('firstName')}
        />
        <TextInput
          description="Optional"
          label="Middle Name"
          placeholder={
            userName.middleName
              ? userName.middleName.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                  letter.toUpperCase()
                )
              : 'C'
          }
          mt="sm"
          {...form.getInputProps('middleName')}
        />
        <TextInput
          required
          label="Last Name"
          placeholder={
            userName.lastName
              ? userName.lastName.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
                  letter.toUpperCase()
                )
              : 'Doe'
          }
          mt="sm"
          {...form.getInputProps('lastName')}
        />

        <Group position="right" mt="xl">
          <Button type="submit" disabled={loading}>
            Submit
          </Button>
        </Group>
      </form>
    </>
  )
}

const nameValidator = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name should have at least 2 letters' }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(2, { message: 'Last name should have at least 2 letters' }),
})
