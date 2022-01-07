import React from 'react';

function Stat(props) {
    const { statName, currentPlanet } = props

    const statNumber = currentPlanet[statName]

    if(statName === 'age' && statNumber === 0) {
        return(
            <li className='stat-text'>Baby Planet</li>
        )
    }

    if(statName === 'age' && statNumber > 0) {
        return(
            <li className='stat-text'>{statNumber} million years old</li>
        )
    }

    return (
        <li className='stat-text' id={statName}>{statName}: {statNumber}</li>
    );
}

export default Stat;