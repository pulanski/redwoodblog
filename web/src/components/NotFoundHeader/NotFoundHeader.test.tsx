import { render } from '@redwoodjs/testing/web'

import NotFoundHeader from './NotFoundHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NotFoundHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <NotFoundHeader
          links={[
            { link: '/home', label: 'Home' },
            { link: '/about', label: 'About' },
            { link: '/contact', label: 'Contact' },
            { link: '/settings', label: 'Settings' },
            // { link: 'login', label: 'Login' },
          ]}
        />
      )
    }).not.toThrow()
  })
})
