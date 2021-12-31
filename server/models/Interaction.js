const { Schema, model } = require("mongoose");

const interactionSchema = new Schema(
    {
        type: String,
        stats: Number
    }
);

const Interaction = model('Interaction', interactionSchema)

module.exports = Interaction;

// interactions: Rainfall, Volcano, Sunlight, Wind

