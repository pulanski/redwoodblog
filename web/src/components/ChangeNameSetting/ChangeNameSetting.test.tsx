import { render } from '@redwoodjs/testing/web'

import ChangeNameSetting from './ChangeNameSetting'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ChangeNameSetting', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ChangeNameSetting />)
    }).not.toThrow()
  })
})
