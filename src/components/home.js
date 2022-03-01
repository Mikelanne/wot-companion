import { Component } from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import axios from "axios";
import NavBar from "./Navbar";

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
                <NavBar handleLogoutClick={this.handleLogoutClick}/>
                <h1>Welcome to Your Wheel of Time Companion!</h1>
                <h4>The Wheel of Time Companion is your very own spoiler free companion. Use this companion while you embark on your journey through Robert Jordan's "The Wheel of Time" series and keep track of all the characters, locations, and groups you meet along the way.</h4>
                <h5>So, whats it gonna be?</h5> <br/>
                <p>
                    Sign up to join Moraine and Lan. <br/>
                    <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                </p>
                    Already traveling? Login to return to camp. <br/>
                    <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
                <p><br/>
                <button onClick={() => this.handleLogoutClick()}>Logout</button>
                {/* need to figure out how to move this to the user dashboard or only when a user is logged in*/}
                </p>
            </div>
        )
    }
}