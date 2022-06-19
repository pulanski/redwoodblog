import { render } from '@redwoodjs/testing/web'

import GenderSelect from './GenderSelect'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GenderSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GenderSelect />)
    }).not.toThrow()
  })
})
