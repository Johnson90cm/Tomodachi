const { Schema, model } = require("mongoose");

const interactionSchema = new Schema({
  name: {
    type: String,
  },
  stats: {
    type: Number,
  },
});

const Interaction = model("Interaction", interactionSchema);

module.exports = Interaction;

// interactions: Rainfall, Volcano, Sunlight, Wind
