import React from 'react';

function Stat(props) {
    const { statName, currentPlanet } = props

    const statNumber = currentPlanet[statName]

    return (
        <li className='stat-text'>{statName}: {statNumber} {statName === 'age' && statNumber > 0 && 'mil years'}</li>
    );
}

export default Stat;