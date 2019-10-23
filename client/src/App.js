import React from 'react';
import './App.css';
import Login from './Container/Login'
import Register from './Container/Register'
import Home from './component/Home'

import {
  BrowserRouter as Router,
  Route, Switch, Redirect
} from "react-router-dom";

function App(props) {

  const { store } = props;
  return (
    <Router>
      <Switch>
        <Route exact path="/"  >
          {store.isLogin ? <Redirect to="/home" component={Home} /> : <Login />}
        </Route>

        <Route path="/register"  >
          {store.isLogin ? <Redirect to="/home" component={Home} /> : <Register />}
        </Route>

        <Route path="/home"  >
          {store.isLogin ? <Redirect to="/" /> : <Home />}
        </Route>
      </Switch >
    </Router >


  )
}

export default App;
