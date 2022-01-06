import { React, useState, useEffect } from "react";
import Pet from "../components/Pet";
import Stat from "../components/Stat";
import { Rainfall, Sunlight, Volcano, Wind } from '../components/Interactions';
import { useQuery } from "@apollo/client";
import { QUERY_ME } from '../utils/queries';

function Home() {

    const [animation, changeAnimation] = useState('calm');

    const { loading, data } = useQuery(QUERY_ME)

    // useState to grab the created planets ID for gameplay
    const [currentPlanet, setCurrentPlanet] = useState('')

    useEffect(() => {
        if (data) {
            // grab last index in the users savedPlanets array (AKA planet that was just created)
            const planetIndex = data.me.savedPlanets.length - 1

            // grab the id of that planet from that index
            const planet = data.me.savedPlanets[planetIndex]

            // set the planet that was created to the current planet for gameplay
            setCurrentPlanet(planet)
        }
    }, [data, currentPlanet]);
    
    if(loading) {
        return(
            <h1>Loading...</h1>
        )
    }

    return (
        <>
            <div>
                <ul className='stat-container'>
                    <Stat 
                        statName={'biosphere'} 
                        changeAnimation={changeAnimation}
                        currentPlanet={currentPlanet}
                    />
                    <Stat 
                        statName={'hydrosphere'} 
                        changeAnimation={changeAnimation}
                        currentPlanet={currentPlanet}
                    />
                    <Stat 
                        statName={'lihthosphere'} 
                        changeAnimation={changeAnimation}
                        currentPlanet={currentPlanet}
                    />
                    <Stat 
                        statName={'atmosphere'} 
                        changeAnimation={changeAnimation}
                        currentPlanet={currentPlanet}
                    />
                </ul>
            </div>
            <Pet animation={animation} changeAnimation={changeAnimation} />
            <div className='button-container'>
                <Rainfall 
                    changeAnimation={changeAnimation} 
                    currentPlanet={currentPlanet}
                />
                <Volcano 
                    changeAnimation={changeAnimation} 
                    currentPlanet={currentPlanet}
                />
                <Sunlight 
                    changeAnimation={changeAnimation} 
                    currentPlanet={currentPlanet}
                />
                <Wind 
                    changeAnimation={changeAnimation}
                    currentPlanet={currentPlanet}
                />
            </div>
        </>
    )
}

export default Home;