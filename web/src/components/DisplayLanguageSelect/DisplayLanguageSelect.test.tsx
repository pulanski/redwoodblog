import { render } from '@redwoodjs/testing/web'

import DisplayLanguageSelect from './DisplayLanguageSelect'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DisplayLanguageSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisplayLanguageSelect />)
    }).not.toThrow()
  })
})
