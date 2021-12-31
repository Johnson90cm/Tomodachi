const { User, Planet } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user.id })
        .select("-__v -passwordz");

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    // get all users
    users: async () => {
      return User
      .find()
      .select("-__v -password");
    },
    // get user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
  },
  Mutation: {
    // Mongoose User model creates a new user in db with whatever is passed in as the args
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    createPlanet: async (parent, args) => {
      const user = await User.findOne({ email: req.email })

      if (!user) {
        return new Error("User not found", user.message)
      } 
    
      const planet = await Planet.create(args);

      if (!planet) {
        return new Error("Could not create Planet", planet.message)
      }
      // utility func assigns it to an interaction
      //save to planet .save() 
      // save planet to user = saving id of planet to user
      // return user
    }
    
  },
};

module.exports = resolvers;
