import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Home from "./components/home"
import Dashboard from './components/Dashboard'
import { Component } from 'react';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Switch>
              <Route 
              exact path={"/"} 
              render={props => (
                <Home {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
              />
              <Route 
              exact path={"/dashboard"} 
              render={props => (
                <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} />
              )}
              />
          </Switch>
        </Router>
      </div>
    )
  }
}