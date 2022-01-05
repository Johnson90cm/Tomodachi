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
        statNumber = data.savedPlanets[stat]
    }  

    return (
        <li>{stat} {statNumber}</li>
    );
}

export default Stat;