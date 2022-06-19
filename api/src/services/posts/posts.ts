import { db } from 'src/lib/db'
import { context } from '@redwoodjs/graphql-server'

import type {
  QueryResolvers,
  MutationResolvers,
  PostResolvers,
} from 'types/graphql'

export const posts: QueryResolvers['posts'] = () => {
  return db.post.findMany()
}

export const post: QueryResolvers['post'] = ({ id }) => {
  return db.post.findUnique({
    where: { id },
  })
}

export const createPost: MutationResolvers['createPost'] = ({ input }) => {
  return db.post.create({
    data: input,
  })
}

export const updatePost: MutationResolvers['updatePost'] = ({ id, input }) => {
  return db.post.update({
    data: input,
    where: { id },
  })
}

export const deletePost: MutationResolvers['deletePost'] = ({ id }) => {
  return db.post.delete({
    where: { id },
  })
}

export const Post: PostResolvers = {
  author: (_obj, { root }) =>
    db.post.findUnique({ where: { id: root.id } }).author(),
}

export const featuredPosts: QueryResolvers['featuredPosts'] = () => {
  return db.post.findMany({ where: { featured: true } })
}

export const popularPosts = ({ direction }) => {
  return db.post.findMany({
    orderBy: { numLikes: direction === 'asc' ? 'asc' : 'desc' },
  })
}

export const collection: QueryResolvers['collection'] = () => {
  return db.post.findMany({
    where: {
      authorId: context.currentUser.id,
    },
  })
}
