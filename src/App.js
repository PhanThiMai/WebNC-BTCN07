import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";

function App() {
  return (
    <Router>


      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />

      </Switch >

    </Router >


  )
}

export default App;
