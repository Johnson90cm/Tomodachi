const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');

const planetSchema = new Schema({
  planetName: {
    type: String,
    trim: true,
  },
  biosphere: {
    type: Number,
    default: 0
  },
  hydrosphere: {
    type: Number,
    default: 0
  },
  lithosphere: {
    type: Number,
    default: 0
  },
  atmosphere: {
    type: Number,
    default: 0
  },
  age: {
    type: Number,
    default: 0
  },
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // email field is in fact a valid email address that follows the pattern <string>@<string>.<string>
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  savedPlanets: [planetSchema],
});

// set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
