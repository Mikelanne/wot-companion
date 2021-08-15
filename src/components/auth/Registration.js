import { Component } from "react";

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
        console.log("changed")
    }

    handleSubmit = (event) => {
        console.log("submitted")
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