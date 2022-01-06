import React, { useEffect, useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_PLANET } from '../utils/mutations';

// function logic here
function Start() {
    const [createPlanet, { error }] = useMutation(CREATE_PLANET);

    const [formState, setFormState] = useState('');

    async function handleStartSubmit(e) {
        e.preventDefault()

        try {
            const mutationResponse = await createPlanet({
                variables: {
                    planetName: formState.planetName
                }

            })
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