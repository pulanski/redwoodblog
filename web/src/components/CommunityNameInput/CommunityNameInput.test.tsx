import { render } from '@redwoodjs/testing/web'

import CommunityNameInput from './CommunityNameInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CommunityNameInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CommunityNameInput />)
    }).not.toThrow()
  })
})
