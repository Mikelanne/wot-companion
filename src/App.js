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

  componentDidMount(){
    this.loginStatus()
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {withCredentials: true})
    .then(response => {
      if (response.data.loggged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors', error))
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