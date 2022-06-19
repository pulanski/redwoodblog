import { render } from '@redwoodjs/testing/web'

import EmailSelect from './EmailSelect'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EmailSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmailSelect />)
    }).not.toThrow()
  })
})
