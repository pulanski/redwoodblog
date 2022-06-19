import { render } from '@redwoodjs/testing/web'

import GeneralSettingsPage from './GeneralSettingsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SettingsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GeneralSettingsPage />)
    })
  })
})
