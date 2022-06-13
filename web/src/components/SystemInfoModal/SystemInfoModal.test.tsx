import { render } from '@redwoodjs/testing/web'

import SystemInfoModal from './SystemInfoModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SystemInfoModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SystemInfoModal />)
    }).not.toThrow()
  })
})
