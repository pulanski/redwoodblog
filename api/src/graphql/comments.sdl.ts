export const schema = gql`
  type Comment {
    id: Int!
    author: String!
    body: String!
    post: Post!
    postId: Int!
    createdAt: DateTime!
  }

  type Query {
    comments: [Comment!]! @skipAuth
    comment(id: Int!): Comment @requireAuth
  }

  input CreateCommentInput {
    author: String!
    body: String!
    postId: Int!
  }

  input UpdateCommentInput {
    author: String
    body: String
    postId: Int
  }

  type Mutation {
    createComment(input: CreateCommentInput!): Comment! @requireAuth
    updateComment(id: Int!, input: UpdateCommentInput!): Comment! @requireAuth
    deleteComment(id: Int!): Comment! @requireAuth
  }
`
