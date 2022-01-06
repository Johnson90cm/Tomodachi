import{ React, useState, useEffect } from "react";
import Pet from "../components/Pet";
import Stat from "../components/Stat";
import { Rainfall, Sunlight, Volcano, Wind } from '../components/Interactions';
import { useQuery } from "@apollo/client";
import { QUERY_ME } from '../utils/queries';

function Home() {
    
    const [animation, changeAnimation] = useState('calm');

    const { loading, data } = useQuery(QUERY_ME)

    console.log(data);

    useEffect(() => {
        // grab last index in the users savedPlanets array (AKA planet that was just created)
        const currentPlanetIndex = data.me.savedPlanets.length -1

        // grab the id of that planet from that index
        const currentPlanetId = data.me.savedPlanets[currentPlanetIndex]._id

        // set the planet that was created to the current planet for gameplay
        console.log(currentPlanetId)
    }, [data]);

    return (
        <>
            <div>
                <ul className='stat-container'>
                    <Stat stat={'biosphere'} changeAnimation={changeAnimation} />
                    <Stat stat={'hydrosphere'} changeAnimation={changeAnimation} />
                    <Stat stat={'lithosphere'} changeAnimation={changeAnimation} />
                    <Stat stat={'atmosphere'} changeAnimation={changeAnimation} />
                </ul>
            </div>
            <Pet animation={animation} changeAnimation={changeAnimation} />
            <div className='button-container'>
                <Rainfall changeAnimation={changeAnimation} />
                <Volcano changeAnimation={changeAnimation} />
                <Sunlight changeAnimation={changeAnimation} />
                <Wind changeAnimation={changeAnimation} />
            </div>
        </>
    )
}

export default Home;