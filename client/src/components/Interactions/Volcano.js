import React from "react";
import { randomStatGenerator } from "../../utils/helpers";

function Volcano() {
    // Need to grab planet's stats from db with useQuery

    // Handle the button click and stat manipulation with this function
    function volcanoHandler() {
        // Roll a dice to see which of several pre-determined events takes place. We can easily manipulate the probability of receiving different events upon interaction (ex. 75% chance to have small volcanoes, 20% chance for severe eruptions, 5% chance for continent-forming events; each with associated stat changes.)
        const diceRoll = randomStatGenerator(1, 100)

        if (diceRoll >= 1 && diceRoll <= 75) {
            // generate a random stat increase (these numbers can be whatever we want, 100-150 is an example)
            const lithoStatAddition = randomStatGenerator(100, 150)

            // decide what other stats we want this to affect, and in what magnitude
            const hydroStatAddition = randomStatGenerator(-50, -75)

            // instead of logging this random stat value, eventually add it to the db with a mutation
            console.log(`Volcanoes erupt..
                Lithosphere increases: ${lithoStatAddition}
                Hydrosphere decreases: ${hydroStatAddition}
                `)
        }

        if (diceRoll >= 76 && diceRoll <= 95) {
            // 'severe eruptions' might represent even higher lithosphere stat changes
            const lithoStatAddition = randomStatGenerator(175, 225)

            // decide what other stats we want this to affect, and in what magnitude
            const hydroStatAddition = randomStatGenerator(-100, -125)

            // instead of logging this random stat value, eventually add it to the db with a mutation
            console.log(`Severe Eruptions!
                Lithosphere increases: ${lithoStatAddition}
                Hydrosphere decreases: ${hydroStatAddition}
                `)
        }

        if (diceRoll >= 96 && diceRoll <= 100) {
            // 'extreme eruptions' might represent extreme lithosphere stat changes
            const lithoStatAddition = randomStatGenerator(400, 600)

            // decide what other stats we want this to affect, and in what magnitude
            const hydroStatAddition = randomStatGenerator(-300, -400)

            // instead of logging this random stat value, eventually add it to the db value of the planet
            console.log(`Massive volcanoes terraform the planet!!!
                Lithosphere increases: ${lithoStatAddition}
                Hydrosphere decreases: ${hydroStatAddition}
                `)
        }

        // We'll also want to render the interaction animation here
    }

    return (
        <button onClick={volcanoHandler}>Volcano</button>
    )
}

export default Volcano;