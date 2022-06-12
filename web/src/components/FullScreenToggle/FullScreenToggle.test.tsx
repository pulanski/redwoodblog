import { render } from '@redwoodjs/testing/web'

import FullScreenToggle from './FullScreenToggle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FullScreenToggle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FullScreenToggle />)
    }).not.toThrow()
  })
})
