import './App.css'
import CharactersContainer from './containers/charactersContainer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/home"
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
                  <Home {... props} loggedInStatus={this.state.loggedInStatus} />
                )}>
                {/* <Home /> */}
              </Route>
            </Switch>
          </Router>
          {/* <CharactersContainer /> */}
        </div>
      )
    }

}
