import { render } from '@redwoodjs/testing/web'

import ContactsCard from './ContactsCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ContactsCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContactsCard />)
    }).not.toThrow()
  })
})
