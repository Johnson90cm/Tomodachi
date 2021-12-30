import './App.css';
import Nav from './components/Nav'
import { Rainfall, Volcano } from './components/Interactions'

  function App() {
    return (
      <div className="App">
        <Nav />
        <h1>
          Welcome to Tomodachi
        </h1>
        <Rainfall />
        <Volcano />
      </div>
    );
  }

export default App;
