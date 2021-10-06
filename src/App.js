import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from "./components/home"
import Dashboard from './components/dashboard'
import { Component } from 'react';
import axios from 'axios'

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    };

    this.handleLogin = this.handleLogin.bind(this);
  }

  checkLoginStatus() {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true})
      .then(response => {
        console.log("check log in", response)
        if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN") {
          this.setState({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user
          })
        } else if (!response.data.logged_in & this.state.loggedInStatus === "LOGGED_IN") {
          this.setState({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}  
          })
        }
    })
    .catch(error => {
      console.log("check login error", error)
    });
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin(data) {
    console.log("handle login 1", data)
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data.user
    })
    console.log("handle login 2", this.state)
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
