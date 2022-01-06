import React, { useEffect, useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_PLANET } from '../utils/mutations';

// function logic here
function Start() {
    const [createPlanet, { error }] = useMutation(CREATE_PLANET);

    const [formState, setFormState] = useState('');

    // useState to grab the created planets ID for gameplay
    const [currentPlanet, setCurrentPlanet] = useState('')

    async function handleStartSubmit(e) {
        e.preventDefault()

        try {
            const mutationResponse = await createPlanet({
                variables: {
                    planetName: formState.planetName
                }

            })
            // grab last index in the users savedPlanets array (AKA planet that was just created)
            const currentPlanetIndex = mutationResponse.data.createPlanet.savedPlanets.length -1

            // grab the id of that planet from that index
            const currentPlanetId = mutationResponse.data.createPlanet.savedPlanets[currentPlanetIndex]._id

            // set the planet that was created to the current planet for gameplay
            setCurrentPlanet(currentPlanetId)

            console.log(currentPlanet)
        } catch (error) {
            console.log(error)
        }

        window.location.replace('/home')
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="start-box container">
            <form>
                <h1>Name your planet:</h1>
                <input
                    type='text'
                    name='planetName'
                    onChange={handleChange}
                />
                <button onClick={handleStartSubmit}>Begin</button>
            </form>
            <h2>
                Keep your planet alive by balancing your stats until the end of the game!
            </h2>
        </div>
    )
}

export default Start;