import './App.css';
import Nav from './components/Nav'
import Rainfall from './components/Interactions'
import { useState } from 'react';

function App() {

  const [ animation, changeAnimation ] = useState('calm');

  const renderAnimation = () => {
    switch(animation) {
      case 'rainfall':
        console.log('cool rainfall animation');
        setTimeout(()=>{changeAnimation('calm')}, 1500)
        break;
      case 'sunlight':
        break;
      case 'volcanoes':
        break;
      case 'wind':
        break;
      default:
        console.log('cool calm animation')
        break;
    }
  }

  return (
    <div className="App">
      <Nav />
      <h1>
        Welcome to Tomodachi
      </h1>
      <div >
        {renderAnimation()}
      </div>
      <Rainfall changeAnimation={changeAnimation} />
    </div>
  );
}

export default App;
