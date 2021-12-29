import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Stats from './pages/Stats'

import Nav from './components/Nav'


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/stats" component={Stats} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;