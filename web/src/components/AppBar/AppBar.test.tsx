import { render } from '@redwoodjs/testing/web'
import { useState } from 'react'

import AppBar from './AppBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AppBar', () => {

  // const [showNavbar, setShowNavbar] = useState(false)

  it('renders successfully', () => {
    expect(() => {
      render(<AppBar showNavbar={true} setShowNavbar={() => {}} />)
    }).not.toThrow()
  })
})
