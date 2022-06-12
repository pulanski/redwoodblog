import { render } from '@redwoodjs/testing/web'

import ArticleCard from './ArticleCard'

const article = {
  id: '1',
  title: 'Article 1',
  content: 'Article 1 content',
  createdAt: '2020-01-01T00:00:00.000Z',
}

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ArticleCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ArticleCard article={article} />)
    }).not.toThrow()
  })
})
