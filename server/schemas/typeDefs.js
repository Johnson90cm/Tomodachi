// import the gql tagged template function
const { gql } = require("apollo-server-express");
// const { model } = require("mongoose");

// create our typeDefs = defining data/endpoint
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
}
type Auth {
    token: ID!
    user: User
}
type Query {
    me: User
    users: [User]
    user(username: String!): User
}
type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
}
`;

// export typeDefs
module.exports = typeDefs;

// queries are how we perform GET requests
// mutations are how we perform POST, PUT, DELETE requests