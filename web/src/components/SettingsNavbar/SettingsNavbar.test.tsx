import { render } from '@redwoodjs/testing/web'

import SettingsNavbar from './SettingsNavbar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SettingsNavbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SettingsNavbar />)
    }).not.toThrow()
  })
})
