const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        email: String!
        password: String!
    }

    type Query {
        User(id:ID!): User
        users: [User]
    }

    type Mutation {
        createUser(email: String!, password: String!): User!
        updateUser(id: ID!, email: String!, password: String!): User!
        deleteUser(id: ID!): User!
    }
`;
