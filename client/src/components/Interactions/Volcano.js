import React from "react";
import { randomStatGenerator } from "../../utils/helpers";
import { VOLCANO } from '../../utils/mutations'
import { useMutation } from '@apollo/client'

function Volcano(props) {
    const { currentPlanet, changeDescription } = props;

    const [volcanoMutation, { error } ] = useMutation(VOLCANO);

    // Handle the button click and stat manipulation with this function
    function volcanoHandler() {
        props.changeAnimation('volcanoes')
        // Roll a dice to see which of several pre-determined events takes place. We can easily manipulate the probability of receiving different events upon interaction (ex. 75% chance to have small volcanoes, 20% chance for severe eruptions, 5% chance for continent-forming events; each with associated stat changes.)
        const diceRoll = randomStatGenerator(1, 100)

        if (diceRoll >= 1 && diceRoll <= 75) {
            // generate a random stat increase (these numbers can be whatever we want, 100-150 is an example)
            const lithoStatAddition = randomStatGenerator(100, 150)

            // decide what other stats we want this to affect, and in what magnitude
            const hydroStatAddition = randomStatGenerator(-50, -75)
            const atmoStatAddition = randomStatGenerator(-50, -75)
            const bioStatAddition = randomStatGenerator(-50, -75)

            // instead of logging this random stat value, eventually add it to the db with a mutation
            try {
                volcanoMutation({variables: {planetId: currentPlanet._id, bio: bioStatAddition, hydro: hydroStatAddition, litho:lithoStatAddition, atmo: atmoStatAddition}})
            } catch (e) {
                console.error(e)
            }
            
            changeDescription('Volcanoes erupt all around.')
        }

        if (diceRoll >= 76 && diceRoll <= 95) {
            // 'severe eruptions' might represent even higher lithosphere stat changes
            const lithoStatAddition = randomStatGenerator(175, 225)

            // decide what other stats we want this to affect, and in what magnitude
            const hydroStatAddition = randomStatGenerator(-100, -125)
            const atmoStatAddition = randomStatGenerator(-100, -125)
            const bioStatAddition = randomStatGenerator(-100, -125)

            // instead of logging this random stat value, eventually add it to the db with a mutation
            try {
                volcanoMutation({variables: {planetId: currentPlanet._id, bio: bioStatAddition, hydro: hydroStatAddition, litho:lithoStatAddition, atmo: atmoStatAddition}})
            } catch (e) {
                console.error(e)
            }
            
            changeDescription('Severe eruptions form new islands!')
        }

        if (diceRoll >= 96 && diceRoll <= 100) {
            // 'extreme eruptions' might represent extreme lithosphere stat changes
            const lithoStatAddition = randomStatGenerator(400, 600)

            // decide what other stats we want this to affect, and in what magnitude
            const hydroStatAddition = randomStatGenerator(-300, -400)
            const atmoStatAddition = randomStatGenerator(-300, -400)
            const bioStatAddition = randomStatGenerator(-300, -400)

            // instead of logging this random stat value, eventually add it to the db value of the planet
            try {
                volcanoMutation({variables: {planetId: currentPlanet._id, bio: bioStatAddition, hydro: hydroStatAddition, litho:lithoStatAddition, atmo: atmoStatAddition}})
            } catch (e) {
                console.error(e)
            }
            
            changeDescription('Massive super-volcanoes terraform the planet!!!')
        }
    }

    return (
        <button onClick={volcanoHandler}>Volcano</button>
    )
}

export default Volcano;