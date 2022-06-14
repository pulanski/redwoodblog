import { MetaTags } from '@redwoodjs/web'
import ArticleCell from 'src/components/ArticleCell/'
import CommentForm from 'src/components/CommentForm/CommentForm'
import CommentsCell from 'src/components/CommentsCell/'

interface ArticlePageProps {
  id: number
}

const ArticlePage = ({ id }: ArticlePageProps) => {
  return (
    <>
      <MetaTags title="Article" description="Article page" />

      <ArticleCell id={id} />
      <CommentForm postId={id} />
      <CommentsCell />
    </>
  )
}

export default ArticlePage
