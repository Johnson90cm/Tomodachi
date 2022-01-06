import './App.css';
import Login from './pages/Login';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import auth from './utils/auth';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Signup from './pages/Signup';

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

console.log(auth.loggedIn())

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="wrapper">
          <div className='container box'>
            <h1>
              Tomodachi
            </h1>
            <Routes>
              {
                auth.loggedIn() ?
                  <Route exact path='/' element={<Home />} />
                  :
                  <Route exact path='/login' element={<Login />} />
              }
              <Route exact path='/signup' element={<Signup />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}


export default App;