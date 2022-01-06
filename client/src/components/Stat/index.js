import React from 'react';

function Stat(props) {

    const { statName, changeAnimation, currentPlanet } = props

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
    if (currentPlanet.age >= 10000) {
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

    return (
        <li className='stat-text'>{statName} {statNumber}</li>

    );
}

export default Stat;