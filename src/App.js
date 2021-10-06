import './App.css'
import CharactersContainer from './containers/charactersContainer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/home"
import Dashboard from './components/dashboard'
import { Component } from 'react';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
  }

  render() {
    return (
        <div>
          <Router>
            <Switch>
              <Route 
                exact path={"/"}
                render={props => (
                  <Home {... props} handleLogin={this.handleLogin} loggedInStatus={this.state.loggedInStatus} />
                )}>
              </Route>
              <Route exact path={"/dashboard"}
                render={props => (
                  <Dashboard {... props} loggedInStatus={this.state.loggedInStatus} />
                )}>
                </Route>
            </Switch>
          </Router>
          {/* <CharactersContainer /> */}
        </div>
      )
    }

}
