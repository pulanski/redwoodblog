import DisplayLanguageSelect from 'src/components/DisplayLanguageSelect/DisplayLanguageSelect'

import { Divider, Title } from '@mantine/core'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import GenderSelect from 'src/components/GenderSelect/GenderSelect'
import EmailSelect from 'src/components/EmailSelect/EmailSelect'
import ChangeNameSetting from 'src/components/ChangeNameSetting/ChangeNameSetting'

const AccountSettingsPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="AccountSettings" description="AccountSettings page" />
      <Title mb={30}>Account Settings</Title>
      Account Preferences
      <Divider my="sm" />
      {/* {currentUser.firstName && <>First Name: {currentUser.firstName}</>}
      {currentUser.lastName && <>Last Name: {currentUser.lastName}</>} */}
      <ChangeNameSetting
        firstName={currentUser.firstName}
        lastName={currentUser.lastName}
      />
      <EmailSelect email={currentUser.email}></EmailSelect>
      <GenderSelect />
      <DisplayLanguageSelect />
    </>
  )
}

export default AccountSettingsPage
