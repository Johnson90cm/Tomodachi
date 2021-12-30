import React from "react";
import { randomStatGenerator } from "../../utils/helpers";

function Sunlight(props) {
    // Need to grab planet's stats from db with useQuery

    // Handle the button click and stat manipulation with this function
    function sungligtHandler() {
        //update animation on click
        props.changeAnimation('sunlight');

        // Roll a dice to see which of several pre-determined events takes place. We can easily manipulate the probability of receiving different events upon interaction (ex. 75% chance to have small volcanoes, 20% chance for severe eruptions, 5% chance for continent-forming events; each with associated stat changes.)
        const diceRoll = randomStatGenerator(1, 100)

        if (diceRoll >= 1 && diceRoll <= 75) {
            // generate a random stat increase (these numbers can be whatever we want, 100-150 is an example)
            const bioStatAddition = randomStatGenerator(100, 150)
            const atmoStatAddition = randomStatGenerator(100, 150)

            // decide what other stats we want this to affect, and in what magnitude
            const hydroStatAddition = randomStatGenerator(-50, -75)

            // instead of logging this random stat value, eventually add it to the db with a mutation
            console.log(`The sun shines a little brighter...
                Biosphere increases: ${bioStatAddition}
                Atmosphere increases: ${atmoStatAddition}
                Hydrosphere decreases: ${hydroStatAddition}
                `)
        }

        if (diceRoll >= 76 && diceRoll <= 95) {
            // the whole planet warming affects bio and atmo positively
            const bioStatAddition = randomStatGenerator(175, 225)
            const atmoStatAddition = randomStatGenerator(175, 225)

            // decide what other stats we want this to affect, and in what magnitude
            const hydroStatAddition = randomStatGenerator(-100, -125)

            // instead of logging this random stat value, eventually add it to the db with a mutation
            console.log(`The whole planet warms a little!
                Biosphere increases: ${bioStatAddition}
                Atmosphere increases: ${atmoStatAddition}
                Hydrosphere decreases: ${hydroStatAddition}
                `)
        }

        if (diceRoll >= 96 && diceRoll <= 100) {
            // extreme sunlight affects bio and atmo positively
            const bioStatAddition = randomStatGenerator(400, 600)
            const atmoStatAddition = randomStatGenerator(400, 600)

            // decide what other stats we want this to affect, and in what magnitude
            const hydroStatAddition = randomStatGenerator(-300, -400)

            // instead of logging this random stat value, eventually add it to the db value of the planet
            console.log(`Extreme sunlight causes all vegetation to explode with growth!
                Biosphere increases: ${bioStatAddition}
                Atmosphere increases: ${atmoStatAddition}
                Hydrosphere decreases: ${hydroStatAddition}
                `)
        }

        // We'll also want to render the interaction animation here
    }

    return (
        <button onClick={sungligtHandler}>Sunlight</button>
    )
}

export default Sunlight;