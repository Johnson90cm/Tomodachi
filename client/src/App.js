import './App.css';
import Nav from './components/Nav';
import Pet from './components/Pet';
import { useState } from 'react';
import { Rainfall, Volcano, Sunlight, Wind } from './components/Interactions'
import Stat from './components/Stat';
import Login from './pages/Login'

function App() {

  const [animation, changeAnimation] = useState('calm');



  return (
    <div className="wrapper">
      <div className='container box'>
        <Nav />
        <h1>
          Tomodachi
        </h1>
        <div>
        <ul className='stat-container'>
          <Stat stat={'biosphere'}/>
          <Stat stat={'hydrosphere'}/>
          <Stat stat={'lithosphere'}/>
          <Stat stat={'atmosphere'}/>
        </ul>
        </div>
        <Pet animation={animation} changeAnimation={changeAnimation} />
        <div className='button-container'>
          <Rainfall changeAnimation={changeAnimation} />
          <Volcano changeAnimation={changeAnimation} />
          <Sunlight changeAnimation={changeAnimation} />
          <Wind changeAnimation={changeAnimation} />
        </div>
      </div>
    </div>
  );
}


export default App;
