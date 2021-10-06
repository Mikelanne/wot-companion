import { Component } from "react";
import axios from "axios"

export default class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: "",
            username: "",
            password: "",
            loginErrors: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        axios.post("http://localhost:3001/sessions", {
            user: {
                email: this.state.email,
                username: this.state.username,
                password: this.state.password,
            }
        }, {withCredentials: true})
        .then(response => {
            console.log("res from login", response);
            // if (response.data.status === 'created') {
            //     this.props.handleSuccessfulAuth(response.data);
            // } else {
            //    console.log("didn't work") 
                    // this will need to be edited to actually do something
                    // use registration error part of the state
        //     }
        // })
        // .catch(error => {
        //     console.log("error", error)
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
                    <button type="Login">Sign Up</button>
               </form>
            </div>
        )
    }
}