import { render } from '@redwoodjs/testing/web'

import CreateCommunityModal from './CreateCommunityModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateCommunityModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateCommunityModal />)
    }).not.toThrow()
  })
})
