import { render } from '@redwoodjs/testing/web'

import GeneralShortcuts from './GeneralShortcuts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GeneralShortcuts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GeneralShortcuts />)
    }).not.toThrow()
  })
})
