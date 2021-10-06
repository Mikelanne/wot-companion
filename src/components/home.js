import { Component } from "react"
import Registration from "./auth/Registration"

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(data){
        // update parent component
        this.props.handleLogin(data);
        this.props.history.push("/dashboard")
    }

    render() {
        return (
            <div>
                <h1>Welcome to your Wheel of Time Companion</h1>
                <h3>This is your spoiler free companion to Robert Jordan's Wheel of Time series.</h3>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Registration handleSuccessfulAuth={this.handleSuccessfulAuth}/> 
            </div>
        )
    }
}

{/*Home screen will have a Welcome, a little info, a form to log in and a link directing you to the sign up route*/}