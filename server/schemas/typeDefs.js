// import the gql tagged template function
const { gql } = require("apollo-server-express");
// const { model } = require("mongoose");

// create our typeDefs = defining data/endpoint
const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    savedPlanets: [Planet]
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
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    createPlanet(planetName: String!): User
    rainfall(planetId: String!, hydro: Int!, bio: Int!, litho: Int!): User
    volcano(planetId: String!, hydro: Int!, bio: Int!, litho: Int!, atmo: Int!): User
    sunlight(planetId: String!, hydro: Int!, bio: Int!, atmo: Int!): User
    wind(planetId: String!, bio: Int!, atmo: Int!): User
  }
`;

// export typeDefs
module.exports = typeDefs;

// queries are how we perform GET requests
// mutations are how we perform POST, PUT, DELETE requests
// createPlanet Mutation(planetname: String!, stat: Number)
