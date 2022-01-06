import React from 'react';

function Stat(props) {

    const { statName, changeAnimation, currentPlanet } = props

    console.log(currentPlanet);

    let statNumber;

    const atmosphere = currentPlanet.atmosphere;
    const biosphere = currentPlanet.biosphere;
    const hydrosphere = currentPlanet.hydrosphere;
    const lithosphere = currentPlanet.lithosphere
    statNumber = currentPlanet[statName]

    //gets a total score to determine percentages
    const statTotals = atmosphere +
        biosphere +
        hydrosphere +
        lithosphere;

    //checks if planet has reached max age
    if (currentPlanet.age >= 2000000) {
        //checks to see if the stat is over 35% and the greatest stat to determine the endgame
        //else has a good endgame
        if (atmosphere > statTotals * .35 && atmosphere > biosphere && atmosphere > hydrosphere && atmosphere > lithosphere) {
            console.log('hahahaha')
        } else if (hydrosphere > statTotals * .35 && hydrosphere > biosphere && hydrosphere > atmosphere && hydrosphere > lithosphere) {
            console.log('hydro')
        }else if (biosphere > statTotals * .35 && biosphere > atmosphere && biosphere > hydrosphere && biosphere > lithosphere) {
            console.log('bio')
        } else if (lithosphere > statTotals * .35 && lithosphere > biosphere && lithosphere > hydrosphere && lithosphere > atmosphere) {
            console.log('litho')
        } else {
            console.log('didnt work dummy')
        }
        
    }

    return (
        <li className='stat-text'>{statName} {statNumber}</li>

    );
}

export default Stat;