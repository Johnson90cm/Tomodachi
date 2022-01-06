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

    // variable to set the endgame to true later on
    const [endgame, setEndgame] = useState(false)

    const [description, changeDescription] = useState('Click one of the interactions to start')

    useEffect(() => {
        if (data) {
            // grab last index in the users savedPlanets array (AKA planet that was just created)
            const planetIndex = data.me.savedPlanets.length - 1

            // grab the id of that planet from that index
            const planet = data.me.savedPlanets[planetIndex]

            // set the planet that was created to the current planet for gameplay
            setCurrentPlanet(planet)

            // END GAME LOGIC
            const atmosphere = currentPlanet.atmosphere;
            const biosphere = currentPlanet.biosphere;
            const hydrosphere = currentPlanet.hydrosphere;
            const lithosphere = currentPlanet.lithosphere

            //gets a total score to determine percentages
            const statTotals = atmosphere +
                biosphere +
                hydrosphere +
                lithosphere;

            console.log(endgame)

            //checks if planet has reached max age
            if (currentPlanet.age >= 1000) {
                //sets the engame boolean to true to remove buttons
                setEndgame(true)

                //checks to see if the stat is over 35% and the greatest stat to determine the endgame
                //else has a good endgame
                setTimeout(() => {
                    if (atmosphere > statTotals * .35 && atmosphere > biosphere && atmosphere > hydrosphere && atmosphere > lithosphere) {
                        changeAnimation('endgame-atmo')
                        changeDescription('You finished with a Rocky Gaseous planet')
                    } else if (biosphere > statTotals * .35 && biosphere > atmosphere && biosphere > hydrosphere && biosphere > lithosphere) {
                        changeAnimation('endgame-bio')
                        changeDescription('You finished with an Overgrown Mucky planet')
                    } else if (hydrosphere > statTotals * .35 && hydrosphere > biosphere && hydrosphere > atmosphere && hydrosphere > lithosphere) {
                        changeAnimation('endgame-hydro')
                        changeDescription('You finished with a Flooded planet')
                    } else if (lithosphere > statTotals * .35 && lithosphere > biosphere && lithosphere > hydrosphere && lithosphere > atmosphere) {
                        changeAnimation('endgame-litho')
                        changeDescription('You finished with a Firey Molten planet')
                    } else {
                        changeAnimation('endgame-good')
                        changeDescription('You finished with a Perfect planet!! GREAT job!')
                    }
                }, 5100)
            }
        }
    }, [data, currentPlanet]);

    if (loading) {
        return (
            <h1>Loading...</h1>
        )
    }

    if (data) {
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
                            statName={'lithosphere'}
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
                <div className="block">
                            <h2>{currentPlanet.planetName}</h2>
                            <Stat
                                statName={'age'}
                                changeAnimation={changeAnimation}
                                currentPlanet={currentPlanet}
                            />
                        </div>
                <Pet animation={animation} changeAnimation={changeAnimation} />
                {
                    endgame ?
                        <div className="game-over-text">
                            Game Over
                        </div>
                        :
                        <div className='button-container'>
                            <Rainfall
                                changeAnimation={changeAnimation}
                                currentPlanet={currentPlanet}
                                changeDescription={changeDescription}
                            />
                            <Volcano
                                changeAnimation={changeAnimation}
                                currentPlanet={currentPlanet}
                                changeDescription={changeDescription}
                            />
                            <Sunlight
                                changeAnimation={changeAnimation}
                                currentPlanet={currentPlanet}
                                changeDescription={changeDescription}
                            />
                            <Wind
                                changeAnimation={changeAnimation}
                                currentPlanet={currentPlanet}
                                changeDescription={changeDescription}
                            />
                        </div>
                }
                {
                    <div>
                        {description}
                    </div>
                }
            </>
        )
    }
}

export default Home;