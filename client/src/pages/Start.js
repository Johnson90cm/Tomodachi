import React, { useEffect, useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_PLANET } from '../utils/mutations';

// function logic here
function Start() {
    const [createPlanet, { error }] = useMutation(CREATE_PLANET);

    const [formState, setFormState] = useState('');

    async function handleStartSubmit(e) {
        e.preventDefault()
        console.log(formState)

        try {
            const mutationResponse = await createPlanet({
                variables: {
                    planetName: formState
                }
            })
            console.log(mutationResponse)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <form>
            <h1>Name your planet:</h1>
            <input
                type='text'
                name='planetName'
                onChange={handleChange}
            />
            <button onClick={handleStartSubmit}>Begin</button>
        </form>
    )
}

export default Start;