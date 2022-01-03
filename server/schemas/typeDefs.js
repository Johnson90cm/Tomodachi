// import the gql tagged template function
const { gql } = require("apollo-server-express");
// const { model } = require("mongoose");

// create our typeDefs = defining data/endpoint
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedPlanets: Planet
  }
  type Planet {
    _id: ID
    planetName: String!
    biosphere: Int!
    hydrosphere: Int!
    lithosphere: Int!
    atmosphere: Int!
    age: Int!
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    planets: Planet
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createPlanet(planetName: String!, biosphere: Int!, hydrosphere: Int!, lithosphere: Int!, atmosphere: Int!, age: Int!): User
  }
`;

// export typeDefs
module.exports = typeDefs;

// queries are how we perform GET requests
// mutations are how we perform POST, PUT, DELETE requests
// createPlanet Mutation(planetname: String!, stat: Number)
