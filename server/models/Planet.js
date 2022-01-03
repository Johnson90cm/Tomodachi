const { Schema, model } = require("mongoose");

const planetSchema = new Schema({
  planetname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  biosphere: {
    type: Number,
  },
  hydrosphere: {
    type: Number,
  },
  lithosphere: {
    type: Number,
  },
  atmosphere: {
    type: Number,
  },
  age: {
    type: Number,
  },
});

const Planet = model("Planet", planetSchema);

module.exports = Planet;
