export const schema = gql`
  type Post {
    id: Int!
    title: String!
    content: String!
    numLikes: Int!
    author: User!
    authorId: Int!
    createdAt: DateTime!
    Comment: [Comment]!
    draft: Boolean!
    featured: Boolean!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    title: String!
    content: String!
    numLikes: Int!
    authorId: Int!
    draft: Boolean!
    featured: Boolean!
  }

  input UpdatePostInput {
    title: String
    content: String
    numLikes: Int
    authorId: Int
    draft: Boolean
    featured: Boolean
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
