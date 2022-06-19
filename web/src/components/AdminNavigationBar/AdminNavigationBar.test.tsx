import { render } from '@redwoodjs/testing/web'

import AdminNavigationBar from './AdminNavigationBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AdminNavigationBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdminNavigationBar />)
    }).not.toThrow()
  })
})
