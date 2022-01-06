import React from 'react';

function Stat(props) {
    const { statName, currentPlanet } = props

    const statNumber = currentPlanet[statName]

    return (
        <li className='stat-text'>{statName} {statNumber}</li>
    );
}

export default Stat;