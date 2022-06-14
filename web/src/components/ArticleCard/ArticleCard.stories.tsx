import ArticleCard from './ArticleCard'

export const generated = () => {

  const article = {
    id: '1',
    title: 'This is a card in isolation',
    content: 'Really awesome things are happening here',
    createdAt: '2020-06-13T12:34:56Z',
    numLikes: 10,
  }

  return <ArticleCard article={article} />
}

export default { title: 'Components/ArticleCard' }
