import { render } from '@redwoodjs/testing/web'

import RtlModeToggle from './RtlModeToggle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RtlModeToggle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RtlModeToggle />)
    }).not.toThrow()
  })
})
