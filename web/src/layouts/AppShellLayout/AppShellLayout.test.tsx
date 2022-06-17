import { render } from '@redwoodjs/testing/web'

import AppShellLayout from './AppShellLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AppShellLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AppShellLayout />)
    }).not.toThrow()
  })
})
