import { render } from '@redwoodjs/testing/web'

import AdminShellLayout from './AdminShellLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdminShellLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminShellLayout />)
    }).not.toThrow()
  })
})
