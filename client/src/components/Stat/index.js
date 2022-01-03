import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';

function Stat(props) {
    const { stat } = props

    // const { loading, data } = useQuery(QUERY_ME)

    // if(loading) {
    //     return(
    //         <li>Loading..</li>
    //     )
    // }

    // if(data) {
    //     console.log(data)
    // }  

    return (
        <li>{stat} 50</li>
    );
}

export default Stat;