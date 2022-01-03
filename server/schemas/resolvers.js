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
      return User.findOne({ username }).select("-__v -password").populate('savedPlanets');
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
      // add planet to User's savedPlanets array
      if (context.user) {
        const user = await User.findByIdAndUpdate(context.user._id,
          { $push: { savedPlanets: args } },
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
    rainfall: async (parent, { planetId, hydro, bio, litho }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id) // returns user

        const planet = user.savedPlanets.id(planetId) // returns matching planet subdocument

        // calculate the new value (db value + stat change)
        const updatedBio = planet.biosphere += bio
        const updatedHydro = planet.hydrosphere += hydro
        const updatedLitho = planet.lithosphere += litho
        const updatedAge = planet.age += 1000

        // update the subdocuments values
        planet.set({
          biosphere: updatedBio,
          hydrosphere: updatedHydro,
          lithosphere: updatedLitho,
          age: updatedAge
        })

        return user.save() //.save() is critical to save your document changes
      }

      throw new AuthenticationError('Not logged in');
    },
    volcano: async (parent, { planetId, hydro, bio, litho, atmo }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id) // returns user

        const planet = user.savedPlanets.id(planetId) // returns matching planet subdocument

        // calculate the new value (db value + stat change)
        const updatedBio = planet.biosphere += bio
        const updatedHydro = planet.hydrosphere += hydro
        const updatedLitho = planet.lithosphere += litho
        const updatedAtmo = planet.atmosphere += atmo
        const updatedAge = planet.age += 1000

        // update the subdocuments values
        planet.set({
          biosphere: updatedBio,
          hydrosphere: updatedHydro,
          lithosphere: updatedLitho,
          atmosphere: updatedAtmo,
          age: updatedAge
        })

        return user.save() //.save() is critical to save your document changes
      }

      throw new AuthenticationError('Not logged in');
    },
    sunlight: async (parent, { planetId, hydro, bio, atmo }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id) // returns user

        const planet = user.savedPlanets.id(planetId) // returns matching planet subdocument

        // calculate the new value (db value + stat change)
        const updatedBio = planet.biosphere += bio
        const updatedHydro = planet.hydrosphere += hydro
        const updatedAtmo = planet.atmosphere += atmo
        const updatedAge = planet.age += 1000

        // update the subdocuments values
        planet.set({
          biosphere: updatedBio,
          hydrosphere: updatedHydro,
          atmosphere: updatedAtmo,
          age: updatedAge
        })

        return user.save() //.save() is critical to save your document changes
      }

      throw new AuthenticationError('Not logged in');
    },
    wind: async (parent, { planetId, bio, atmo }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id) // returns user

        const planet = user.savedPlanets.id(planetId) // returns matching planet subdocument

        // calculate the new value (db value + stat change)
        const updatedBio = planet.biosphere += bio
        const updatedAtmo = planet.atmosphere += atmo
        const updatedAge = planet.age += 1000

        // update the subdocuments values
        planet.set({
          biosphere: updatedBio,
          atmosphere: updatedAtmo,
          age: updatedAge
        })

        return user.save() //.save() is critical to save your document changes
      }

      throw new AuthenticationError('Not logged in');
    }
  }
};

module.exports = resolvers;
