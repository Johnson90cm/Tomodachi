import './App.css';
import Pet from './components/Pet';
import { useState } from 'react';
import { Rainfall, Volcano, Sunlight, Wind } from './components/Interactions'
import Stat from './components/Stat';
import Login from './pages/Login';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//  retrieve token from localStorage and include it with each API request
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const authLink = setContext((_, { header }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...header,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  const [animation, changeAnimation] = useState('calm');



  return (
    <ApolloProvider client={client}>
      <Router>
      <div className="wrapper">
        <div className='container box'>
          <h1>
            Tomodachi
          </h1>
          <Login />
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
        </div>
      </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;