import React from "react";
import { randomStatGenerator } from "../../utils/helpers";
import { RAINFALL } from '../../utils/mutations'
import { useMutation } from '@apollo/client'

function Rainfall(props) {
    const { currentPlanet, changeDescription } = props;

    //set up function for updating stats
    const [rainfallMutation, {error} ] = useMutation(RAINFALL);

    // Handle the button click and stat manipulation with this function
    function rainfallHandler() {
        //change the animation
        props.changeAnimation('rainfall');

        // Roll a dice to see which of several pre-determined events takes place. We can easily manipulate the probability of receiving different events upon interaction (ex. 75% chance to have normal rainfall, 20% chance for severe storms, 5% chance for continent-flooding tsunamis; each with associated stat changes.)
        const diceRoll = randomStatGenerator(1, 100)

        if (diceRoll >= 1 && diceRoll <= 75) {
            // generate a random stat increase (these numbers can be whatever we want, 100-150 is an example)
            const hydroStatAddition = randomStatGenerator(100, 150)
            const bioStatAddition = randomStatGenerator(50, 100)

            // decide what other stats we want this to affect, and in what magnitude
            const lithoStatAddition = randomStatGenerator(-50, -75)

            // instead of logging this random stat value, eventually add it to the db with a mutation
            
            try {
                rainfallMutation({variables: {planetId: currentPlanet._id, bio: bioStatAddition, hydro: hydroStatAddition, litho: lithoStatAddition}})
            } catch (e) {
                console.error(e)
            }
            
            changeDescription('A little rain sprinkles the ground.')
        }

        if (diceRoll >= 76 && diceRoll <= 95) {
            // 'severe storms' might represent even higher hydrosphere stat changes
            const hydroStatAddition = randomStatGenerator(175, 225)
            const bioStatAddition = randomStatGenerator(125, 175)

            // decide what other stats we want this to affect, and in what magnitude
            const lithoStatAddition = randomStatGenerator(-100, -125)

            // instead of logging this random stat value, eventually add it to the db with a mutation
            
            try {
                rainfallMutation({variables: {planetId: currentPlanet._id, bio: bioStatAddition, hydro: hydroStatAddition, litho: lithoStatAddition}})
            } catch (e) {
                console.error(e)
            }

            changeDescription('Severe storms cause flooding!')
        }

        if (diceRoll >= 96 && diceRoll <= 100) {
            // 'tsunamis' might represent extreme hydrosphere stat changes
            const hydroStatAddition = randomStatGenerator(400, 600)
            const bioStatAddition = randomStatGenerator(350, 500)

            // decide what other stats we want this to affect, and in what magnitude
            const lithoStatAddition = randomStatGenerator(-300, -400)

            // instead of logging this random stat value, eventually add it to the db value of the planet
            try {
                rainfallMutation({variables: {planetId: currentPlanet._id, bio: bioStatAddition, hydro: hydroStatAddition, litho: lithoStatAddition}})
            } catch (e) {
                console.error(e)
            }
            
            changeDescription('Massive tsunamis drown entire continents!!!')
        }
    }

    return (
        <button onClick={rainfallHandler}>Rainfall</button>
    )
}

export default Rainfall;