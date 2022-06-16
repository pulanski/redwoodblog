import { render } from '@redwoodjs/testing/web'

import ContactsMenu from './ContactsMenu'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContactsMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactsMenu />)
    }).not.toThrow()
  })
})
