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
  interactions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Interaction",
    },
  ],
});

const Planet = model("Planet", planetSchema);

module.exports = Planet;
