import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import EditUsernameCell from 'src/components/EditUsernameCell'

const FormPage = () => {
  const { currentUser } = useAuth()
  // console.log(currentUser.id)

  return (
    <>
      <MetaTags title="Form" description="Form page" />
      {currentUser && <EditUsernameCell id={currentUser.id} />}
    </>
  )
}

export default FormPage
