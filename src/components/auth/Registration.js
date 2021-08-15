import { Component } from "react";
import axios from "axios"

export default class Registration extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: "",
            username: "",
            password: "",
            password_confirmation: "",
            registrationErrors: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }

    handleSubmit = (event) => {
        axios.post("http://localhost:3001/registrations", {
            user: {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
                password_confirmation: this.state.password_confirmation
            }
        }, {withCredentials: true})
        .then(response => {
            console.log("response", response)
        })
        .catch(error => {
            console.log("error", error)
        })
        event.preventDefault();
    }


    render(){
        return(
            <div>
               <form onSubmit={this.handleSubmit}>
                   <label>email:</label>
                   <input 
                        type="email" 
                        name="email" 
                        value={this.state.email} 
                        onChange={this.handleChange}
                    />
                   <label>username:</label>
                   <input 
                        type="text" 
                        name="username" 
                        value={this.state.username} 
                        onChange={this.handleChange}
                    />
                   <label>password:</label>
                   <input 
                        type="password" 
                        name="password" 
                        value={this.state.password} 
                        onChange={this.handleChange}
                    />
                    <label>confirm password:</label>
                    <input 
                        type="password" 
                        name="password_confirmation" 
                        value={this.state.password_confirmation} 
                        onChange={this.handleChange}
                    />
                    <button type="submit">Sign Up</button>
               </form>
            </div>
        )
    }
}