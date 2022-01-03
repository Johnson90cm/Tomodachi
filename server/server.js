const express = require("express");
// install Apollo server
const { ApolloServer } = require("apollo-server-express");
// install Apollo playground
const {
    ApolloServerPluginLandingPageGraphQLPlayground,
  } = require("apollo-server-core");

const path = require("path");

// import typeDefs and resolvers
const { typeDefs, resolvers } = require("./schemas");
// import middleware
const { authMiddleware } = require("./utils/auth");
// db connection
const db = require("./config/connection");

// express server
const PORT = process.env.PORT || 3001;
const app = express();


const startServer = async () => {
    // create a new Apollo server and pass in our schema data
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
      context: authMiddleware,
    });
  
    // start the apollo server
    await server.start();
  
    // integrate our Apollo server with Express app as middleware
    server.applyMiddleware({ app });
  
    // log where we can go to test out GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  };

  // initialize the apollo server
  startServer();


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

