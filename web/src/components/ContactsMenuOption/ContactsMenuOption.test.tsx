import { render } from '@redwoodjs/testing/web'

import ContactsMenuOption from './ContactsMenuOption'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContactsMenuOption', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactsMenuOption />)
    }).not.toThrow()
  })
})
