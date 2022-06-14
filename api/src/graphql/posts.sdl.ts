export const schema = gql`
  type Post {
    id: Int!
    title: String!
    content: String!
    numLikes: Int!
    createdAt: DateTime!
  }

  type Query {
    posts: [Post!]! @skipAuth
    post(id: Int!): Post @skipAuth
  }

  input CreatePostInput {
    title: String!
    content: String!
    numLikes: Int!
  }

  input UpdatePostInput {
    title: String
    content: String
    numLikes: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
