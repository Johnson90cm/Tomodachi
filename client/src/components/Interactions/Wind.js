import React from "react";
import { randomStatGenerator } from "../../utils/helpers";
import { WIND } from '../../utils/mutations'
import { useMutation } from '@apollo/client'

function Wind(props) {
    const { currentPlanet, changeDescription } = props;

    const [windMutation, {error}] = useMutation(WIND)

    // Handle the button click and stat manipulation with this function
    function windHandler() {
        props.changeAnimation('wind')
        // Roll a dice to see which of several pre-determined events takes place. We can easily manipulate the probability of receiving different events upon interaction (ex. 75% chance to have small volcanoes, 20% chance for severe eruptions, 5% chance for continent-forming events; each with associated stat changes.)
        const diceRoll = randomStatGenerator(1, 100)

        if (diceRoll >= 1 && diceRoll <= 75) {
            // generate a random stat increase (these numbers can be whatever we want, 100-150 is an example)
            const atmoStatAddition = randomStatGenerator(100, 150)

            // decide what other stats we want this to affect, and in what magnitude
            const bioStatAddition = randomStatGenerator(-50, -75)

            // instead of logging this random stat value, eventually add it to the db with a mutation
            try {
                windMutation({variables: {planetId: currentPlanet._id, bio: bioStatAddition, atmo: atmoStatAddition}})
            } catch (e) {
                console.error(e)
            }
            
            changeDescription('A nice breeze blows around the planet...')
        }

        if (diceRoll >= 76 && diceRoll <= 95) {
            // 'severe wind' might represent even higher atmosphere stat changes
            const atmoStatAddition = randomStatGenerator(175, 225)

            // decide what other stats we want this to affect, and in what magnitude
            const bioStatAddition = randomStatGenerator(-100, -125)

            // instead of logging this random stat value, eventually add it to the db with a mutation
            try {
                windMutation({variables: {planetId: currentPlanet._id, bio: bioStatAddition, atmo: atmoStatAddition}})
            } catch (e) {
                console.error(e)
            }
            
            changeDescription('The wind becomes very intense!')
        }

        if (diceRoll >= 96 && diceRoll <= 100) {
            // 'extreme wind' might represent extreme atmosphere stat changes
            const atmoStatAddition = randomStatGenerator(400, 600)

            // decide what other stats we want this to affect, and in what magnitude
            const bioStatAddition = randomStatGenerator(-300, -400)

            // instead of logging this random stat value, eventually add it to the db value of the planet
            try {
                windMutation({variables: {planetId: currentPlanet._id, bio: bioStatAddition, atmo: atmoStatAddition}})
            } catch (e) {
                console.error(e)
            }
            
            changeDescription('Super winds cause massive tornadoes and tropical storms!!!')
        }

        // We'll also want to render the interaction animation here
    }

    return (
        <button onClick={windHandler}>Wind</button>
    )
}

export default Wind;