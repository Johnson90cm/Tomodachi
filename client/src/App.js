import './App.css';
import Login from './pages/Login';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import auth from './utils/auth';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';
import Start from './pages/Start';

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
  function logout(){
    auth.logout()
  }

  console.log(auth.loggedIn())

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="wrapper">
          <div className='container box'>
            <h1>
              Tomodachi
            </h1>
            {
                auth.loggedIn() ?
                  <div>true</div>
                  :
                  <div>false</div>
              }
            <button onClick={logout}>Logout</button>
            <Routes>
              {
                auth.loggedIn() ?
                  <Route exact path='/start' element={<Start />} />
                  :
                  <Route exact path='/login' element={<Login />} />
              }
              <Route exact path='/signup' element={<Signup />} />
              <Route exact path='/home' element={<Home />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;