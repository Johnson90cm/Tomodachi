const { Schema, model } = require("mongoose");

const planetSchema = new Schema(
    {
        planetname: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        spheres: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Sphere'
            }
        ]
    }
);

const Planet = model('Planet', planetSchema)

module.exports = Planet;