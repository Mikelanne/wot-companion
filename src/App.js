import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Home from "./components/home"
import Dashboard from './components/Dashboard'
import { Component } from 'react';


export default class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
              <Route exact path={"/"} component={Home}></Route>
              <Route exact path={"/dashboard"} component={Dashboard}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}