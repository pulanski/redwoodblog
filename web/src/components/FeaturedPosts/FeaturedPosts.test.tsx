import { render } from '@redwoodjs/testing/web'

import FeaturedPosts from './FeaturedPosts'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FeaturedPosts', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FeaturedPosts />)
    }).not.toThrow()
  })
})
