import { render } from '@redwoodjs/testing/web'

import ClientSystemInformation from './ClientSystemInformation'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ClientSystemInformation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ClientSystemInformation />)
    }).not.toThrow()
  })
})
