import { render } from '@redwoodjs/testing/web'

import CommunityOptions from './CommunityOptions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommunityOptions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommunityOptions />)
    }).not.toThrow()
  })
})
