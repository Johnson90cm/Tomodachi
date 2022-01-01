import './App.css';
import Nav from './components/Nav';
import Pet from './components/Pet';
import { useState } from 'react';
import { Rainfall, Volcano, Sunlight, Wind } from './components/Interactions'

function App() {

  const [animation, changeAnimation] = useState('calm');



  return (
    <div className="wrapper">
      <div className='container box'>
        <Nav />
        <h1>
          Tomodachi
        </h1>
        <ul>
          <li>Stat 1</li>
          <li>Stat 2</li>
          <li>Stat 3</li>
          <li>Stat 4</li>
        </ul>
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
