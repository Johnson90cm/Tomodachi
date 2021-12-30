import './App.css';
import Nav from './components/Nav';
import Pet from './components/Pet';
import { useState } from 'react';
import { Rainfall, Volcano, Sunlight, Wind } from './components/Interactions'

function App() {

  const [animation, changeAnimation] = useState('calm');

  const renderAnimation = () => {
    switch (animation) {
      case 'rainfall':
        console.log('cool rainfall animation');
        setTimeout(() => { changeAnimation('calm') }, 1500)
        break;
      case 'sunlight':
        console.log('cool sunlight animation');
        setTimeout(() => { changeAnimation('calm') }, 1500)
        break;
      case 'volcanoes':
        console.log('cool volcanoes animation');
        setTimeout(() => { changeAnimation('calm') }, 1500)
        break;
      case 'wind':
        console.log('cool wind animation');
        setTimeout(() => { changeAnimation('calm') }, 1500)
        break;
      default:
        console.log('cool calm animation')
        break;
    }
  }

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
        <Pet />
        <div>
          {renderAnimation()}
        </div>
          <Rainfall changeAnimation={changeAnimation} />
          <Volcano changeAnimation={changeAnimation} />
          <Sunlight changeAnimation={changeAnimation} />
          <Wind changeAnimation={changeAnimation} />
      </div>
    </div>
  );
}


export default App;
