import { render } from '@redwoodjs/testing/web'

import LoadingBars from './LoadingBars'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoadingBars', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoadingBars />)
    }).not.toThrow()
  })
})
