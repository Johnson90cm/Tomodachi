import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';
import auth from '../../utils/auth'

function Stat(props) {

    const { stat } = props
    const { changeAnimation } = props

    const { loading, error, data } = useQuery(QUERY_ME)

    console.log(data)

    let statNumber;

    if(loading) {
        return(
            <li>Loading..</li>
        )
    }

    if(error) {
        return(
            <li>Error! {error} </li>
        )
    }

    if(data.me) {
        const atmosphere = data.me.savedPlanets.atmosphere;
        const biosphere = data.me.savedPlanets.biosphere;
        const hydrosphere = data.me.savedPlanets.hydrosphere;
        const lithosphere = data.me.savedPlanets.lithosphere
        statNumber = data.me.savedPlanets[stat]

        //gets a total score to determine percentages
        const statTotals = atmosphere + 
            biosphere + 
            hydrosphere + 
            lithosphere;

        //checks if planet has reached max age
        if(data.savedPlanets.age >= 2000000) {
            //checks to see if the stat is over 35% and the greatest stat to determine the endgame
            //else has a good endgame
            if (atmosphere > statTotals * .35 && atmosphere > biosphere && hydrosphere && lithosphere) {
                changeAnimation('endgame-atmo')
            } else if (biosphere > statTotals * .35 && biosphere > atmosphere && hydrosphere && lithosphere) {
                changeAnimation('endgame-bio')
            } else if (hydrosphere > statTotals * .35 && hydrosphere > biosphere && atmosphere && lithosphere) {
                changeAnimation('endgame-hydro')
            } else if (lithosphere > statTotals * .35 && lithosphere > biosphere && hydrosphere && atmosphere) {
                changeAnimation('endgame-litho')
            } else {
                changeAnimation('endgame-good')
            }
        }
    }  

    return (
        <li className='stat-text'>{stat} {statNumber} {
            auth.loggedIn() ?
                <div>true</div>
                :
                <div>false</div>
        }</li>
        
    );
}

export default Stat;