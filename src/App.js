import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Home from "./components/home"
import Dashboard from './components/dashboard'
import { Component } from 'react';
import Registration from './components/auth/Registration'
import Login from './components/auth/Login'


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/signup" component={Registration}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}