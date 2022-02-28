import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import Home from "./components/Home"
import Dashboard from './components/Dashboard'
import { Component } from 'react';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  checkLoginstatus() {
    axios.get("http://localhost:3001/logged_in", {withCredentials: true}).then(response => {
      if (response.data.logged_in && this.state.loggedInStatus === "NOT_LOGGED_IN"){
        this.setState({
          loggedInStatus: "LOGGED_IN",
          user: response.data.user
        })
      } else if (!response.data.logged_in && this.state.loggedInStatus === "LOGGED_IN") {
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN",
          user: {}
        })
      }
    }).catch(error => {
      console.log("check login error", error)
    })
  }

  componentDidMount(){
    this.checkLoginstatus();
  }

  handleLogout() {
    this.setState ({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
    })
  }

  handleLogin(data) {
    this.setState({
      loggedInStatus: "LOGGED_IN",
      user: data
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
                <Home {...props} handleLogin={this.handleLogin} handleLogout={this.handleLogout} loggedInStatus={this.state.loggedInStatus} />
              )}
              />
              <Route 
              exact path={"/dashboard"} 
              render={props => (
                <Dashboard {...props} loggedInStatus={this.state.loggedInStatus} user={this.state.user} />
              )}
              />
          </Switch>
        </Router>
      </div>
    )
  }
}