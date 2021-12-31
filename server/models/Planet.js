const { Schema, model } = require("mongoose");

const planetSchema = new Schema(
    {
        planetname: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        biosphere: {
            type: INT
         },
         hydrosphere: {
            type: INT
         },
         lithosphere: {
            type: INT
         },
         atmosphere: {
            type: INT
         },
        interactions:[
            {
                type: Schema.Types.ObjectId,
                ref: 'Interaction'
            }
        ]
    }
);

const Planet = model('Planet', planetSchema)

module.exports = Planet;