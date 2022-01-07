import './App.css';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import auth from './utils/auth';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Start from './pages/Start';
import PlaySound from './components/Music';
import { useState } from 'react'


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
  const [loginRedirect, setLoginRedirect] = useState(false)

  function logout() {
    auth.logout()
    setLoginRedirect(true)
    setTimeout(()=>{
      setLoginRedirect(false)
    }, 100)
  }

  const [start, setStart] = useState(false)

  function redirectStart() {
      setStart(true)
      setTimeout(()=>{
        setStart(false)
      }, 100)
  }

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="wrapper">
          <div className='container box'>
            <h1>
              Tomodachi
            </h1>
            {/* {
              auth.loggedIn() ?
                <div>Logged In!</div>
                :
                <div>Please Log In</div>
            } */}
            <Switch>
              <Route exact path='/'>
                {auth.loggedIn() ? <Start /> : <Login />}
              </Route>
              <Route exact path='/start' component={Start} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup'component={Signup} />
              <Route exact path='/home' component={Home} />
            </Switch>
          </div>
          <button onClick={logout} className='logout-button'>Logout</button>
          <button type="submit" onClick={redirectStart} className='newgame-button'>New Game</button>
          {start && <Redirect to='/start' />}
          {loginRedirect && <Redirect to='/login'/>}
          <PlaySound />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;