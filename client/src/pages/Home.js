import{ React, useState } from "react";
import Pet from "../components/Pet";
import Stat from "../components/Stat";
import { Rainfall, Sunlight, Volcano, Wind } from '../components/Interactions';
import { useQuery } from "@apollo/client";
import { QUERY_ME } from '../utils/queries';

function Home() {
    
    const [animation, changeAnimation] = useState('calm');

    const { loading, data } = useQuery(QUERY_ME)

    console.log(data);

    const dummyBoolean = false;

    return (
        <>
        {
        dummyBoolean ?

        <button>
            Create Planet
        </button>

        :

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
        }
        </>
    )
}

export default Home;