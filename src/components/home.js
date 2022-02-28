import { Component } from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import axios from "axios";

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    handleSuccessfulAuth(data){
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
    }

    handleLogoutClick () {
        axios.delete("http://localhost:3001/logout", {withCredentials: true}).then(response => {this.props.handleLogout();})
        .catch(error => {
            console.log("logout error", error)
        });
    }

    render(){
        return (
            <div>
                <h1>Welcome to your Wheel of Time Companion!</h1>
                <h4>The Wheel of Time Companion is your very own spoiler free companion. Use this companion while you embark on your journey through Robert Jordan's "The Wheel of Time" series and keep track of all the characters, locations, and groups you meet along the way.</h4>
                <button onClick={() => this.handleLogoutClick()}>Logout</button>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </div>
        )
    }
}