import { render } from '@redwoodjs/testing/web'

import RedwoodLogo from './RedwoodLogo'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RedwoodLogo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RedwoodLogo />)
    }).not.toThrow()
  })
})
