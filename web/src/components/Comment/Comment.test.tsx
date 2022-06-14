import { render, screen } from '@redwoodjs/testing/web'

import Comment from './Comment'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Comment', () => {
  it('renders successfully', () => {

    const comment = {
      author: 'Josh Kersey',
      body: 'hello',
      createdAt: '2022-06-13T12:34:56Z',
    }

    expect(() => {
      render(<Comment comment={comment} />)
    }).not.toThrow()

    expect(screen.getByText(comment.author)).toBeInTheDocument()
    expect(screen.getByText(comment.body)).toBeInTheDocument()

    const dateExpect = screen.getByText('13 June 2022')
    expect(dateExpect).toBeInTheDocument()
    expect(dateExpect.nodeName).toEqual('SPAN')
  })
})
