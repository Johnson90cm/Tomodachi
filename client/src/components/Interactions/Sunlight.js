import React from "react";
import { randomStatGenerator } from "../../utils/helpers";
import { SUNLIGHT } from '../../utils/mutations'
import { useMutation } from '@apollo/client'

function Sunlight(props) {
    const { currentPlanet, changeDescription } = props;

    const [sunlightMutation, {error}] = useMutation(SUNLIGHT)

    // Handle the button click and stat manipulation with this function
    function sungligtHandler() {
        //update animation on click
        props.changeAnimation('sunlight');

        // Roll a dice to see which of several pre-determined events takes place. We can easily manipulate the probability of receiving different events upon interaction (ex. 75% chance to have small volcanoes, 20% chance for severe eruptions, 5% chance for continent-forming events; each with associated stat changes.)
        const diceRoll = randomStatGenerator(1, 100)

        if (diceRoll >= 1 && diceRoll <= 75) {
            // generate a random stat increase (these numbers can be whatever we want, 100-150 is an example)
            const bioStatAddition = randomStatGenerator(100, 150)
            const atmoStatAddition = randomStatGenerator(50, 100)

            // decide what other stats we want this to affect, and in what magnitude
            const hydroStatAddition = randomStatGenerator(-50, -75)

            // instead of logging this random stat value, eventually add it to the db with a mutation
            try {
                sunlightMutation({variables: {planetId: currentPlanet._id, bio: bioStatAddition, hydro: hydroStatAddition, atmo: atmoStatAddition}})
            } catch (e) {
                console.error(e)
            }
            
            changeDescription('Sunbeams warm the sky.')
        }

        if (diceRoll >= 76 && diceRoll <= 95) {
            // the whole planet warming affects bio and atmo positively
            const bioStatAddition = randomStatGenerator(175, 225)
            const atmoStatAddition = randomStatGenerator(125, 175)

            // decide what other stats we want this to affect, and in what magnitude
            const hydroStatAddition = randomStatGenerator(-100, -125)

            // instead of logging this random stat value, eventually add it to the db with a mutation
            try {
                sunlightMutation({variables: {planetId: currentPlanet._id, bio: bioStatAddition, hydro: hydroStatAddition, atmo: atmoStatAddition}})
            } catch (e) {
                console.error(e)
            }
            
            changeDescription('Intense sunlight shines down!')
        }

        if (diceRoll >= 96 && diceRoll <= 100) {
            // extreme sunlight affects bio and atmo positively
            const bioStatAddition = randomStatGenerator(400, 600)
            const atmoStatAddition = randomStatGenerator(350, 500)

            // decide what other stats we want this to affect, and in what magnitude
            const hydroStatAddition = randomStatGenerator(-300, -400)

            // instead of logging this random stat value, eventually add it to the db value of the planet
            try {
                sunlightMutation({variables: {planetId: currentPlanet._id, bio: bioStatAddition, hydro: hydroStatAddition, atmo: atmoStatAddition}})
            } catch (e) {
                console.error(e)
            }
            
            changeDescription('Extreme sunlight causes all vegetation to explode with growth!!!')
        }
    }

    return (
        <button onClick={sungligtHandler}>Sunlight</button>
    )
}

export default Sunlight;