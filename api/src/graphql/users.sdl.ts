export const schema = gql`
  type User {
    id: Int!
    firstName: String
    lastName: String
    middleName: String
    email: String!
    gender: String
    language: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
    Comment: [Comment]!
    Contact: [Contact]!
    createdAt: DateTime!
    Post: [Post]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    firstName: String
    lastName: String
    middleName: String
    email: String!
    gender: String
    language: String
    hashedPassword: String!
    salt: String!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    middleName: String
    email: String
    gender: String
    language: String
    hashedPassword: String
    salt: String
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
