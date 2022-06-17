import { render } from '@redwoodjs/testing/web'

import ArticleSkeleton from './ArticleSkeleton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ArticleSkeleton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleSkeleton />)
    }).not.toThrow()
  })
})
