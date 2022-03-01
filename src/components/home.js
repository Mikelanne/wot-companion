import { Component } from "react";
import Registration from "./auth/Registration";
import Login from "./auth/Login";
import axios from "axios";
import NavBar from "./NavBar";

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this)
    }

    handleSuccessfulAuth(data){
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
    }

    render(){
        return (
            <div>
                <NavBar />
                <h1>Welcome to Your Wheel of Time Companion!</h1>
                <h4>The Wheel of Time Companion is your very own spoiler free companion. Use this companion while you embark on your journey through Robert Jordan's "The Wheel of Time" series and keep track of all the characters, locations, and groups you meet along the way.</h4>
                <h5>So, whats it gonna be?</h5> <br/>
                    Sign Up to join Moraine and Lan. <br/>
                    <Registration handleSuccessfulAuth={this.handleSuccessfulAuth} />
                    Already traveling? Login to return to camp. <br/>
                    <Login handleSuccessfulAuth={this.handleSuccessfulAuth}/>
            </div>
        )
    }
}