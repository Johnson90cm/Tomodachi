const express = require("express");
// install Apollo server
const { ApolloServer } = require("apollo-server-express");


const path = require("path");

// import typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");

// db connection
const db = require("./config/connection");

// express server
const PORT = process.env.PORT || 3001;
const app = express();

// apollo server
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// integrate our Apollo server with Express app as middleware
// server.applyMiddleware({ app });

// middleware parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    // console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

