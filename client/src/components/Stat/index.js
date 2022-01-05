import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

function Stat(props) {
    const { stat } = props

    const { loading, data } = useQuery(QUERY_ME)

    let statNumber;

    if(loading) {
        return(
            <li>Loading..</li>
        )
    }

    if(data) {
        const atmosphere = data.savedPlanets.atmosphere;
        const biosphere = data.savedPlanets.biosphere;
        const hydrosphere = data.savedPlanets.hydrosphere;
        const lithosphere = data.savedPlanets.lithosphere
        statNumber = data.savedPlanets[stat]

        //checks if planet has reached max age
        if(data.savedPlanets.age >= 2000000) {
            //gets a total score to determine percentages
            const statTotals = atmosphere + 
                biosphere + 
                hydrosphere + 
                lithosphere;

            if (atmosphere > statTotals * .35 && atmosphere > biosphere && hydrosphere && lithosphere) {
                changeAnimation('endgame-atmo')
            }
        }
    }  

    return (
        <li>{stat} {statNumber}</li>
    );
}

export default Stat;