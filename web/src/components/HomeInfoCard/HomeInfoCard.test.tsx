import { render } from '@redwoodjs/testing/web'

import HomeInfoCard from './HomeInfoCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HomeInfoCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomeInfoCard />)
    }).not.toThrow()
  })
})
