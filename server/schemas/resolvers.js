const { User, Planet } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user.id }).select(
          "-__v -passwordz"
        );

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    // get all users
    users: async () => {
      return User.find().select("-__v -password");
    },
    // get user by username
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
    planets: async () => {
      return Planet.find()
    }
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
    createPlanet: async (parent, args, context) => {
      // create a new planet
      const planet = await Planet.create(args);

      if (!planet) {
        return new Error("Could not create Planet", planet.message)
      }

      // add planet to User's savedPlanets array
      if (context.user) {
        console.log(context.user._id)
        console.log(planet)
        
        const user = await User.findByIdAndUpdate(context.user._id,
          { $push: { savedPlanets: planet._id } },
          { new: true })
          .populate('savedPlanets')

        return user;
      }

      throw new AuthenticationError('Not logged in');
    },

    // addStat: FindOneandUpdateb for each interaction
    // if user is logged in look at id matches
    // update specific stat
    // return new planet

    // resolve the rainfall interaction by updating stats on the proper planet
    // Rainfall: async (parent, { bio, hydro, litho }, context) => {
    //   const planet = Planet.findOneAndUpdate() 
    // }
  },
};

module.exports = resolvers;
