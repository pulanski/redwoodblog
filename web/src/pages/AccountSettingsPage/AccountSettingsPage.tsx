import { Card, Divider, Title } from '@mantine/core'
import { MetaTags } from '@redwoodjs/web'

const AccountSettingsPage = () => {
  return (
    <>
      <MetaTags title="AccountSettings" description="AccountSettings page" />

      <Title mb={30}>General Account Settings</Title>

      <Card shadow="sm" p="lg">
        Account Preferences
        <Divider my="sm" />
        Email Address
      </Card>
    </>
  )
}

export default AccountSettingsPage
