import { render } from '@redwoodjs/testing/web'

import NavigationShortcuts from './NavigationShortcuts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavigationShortcuts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigationShortcuts />)
    }).not.toThrow()
  })
})
