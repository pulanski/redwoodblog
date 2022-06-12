import { render } from '@redwoodjs/testing/web'

import NetworkStatus from './NetworkStatus'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NetworkStatus', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NetworkStatus />)
    }).not.toThrow()
  })
})
