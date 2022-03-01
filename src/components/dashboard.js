import axios from "axios";
import React from "react";
import { Component } from "react";
import NavBar from "./NavBar";

export default class Dashboard extends Component  {

    constructor(props){
        super(props);

        this.handleLogoutClick = this.handleLogoutClick.bind(this)
    }

    getCharacters() {
        axios.get('http://localhost:3001/characters')
        .then(response => {
           this.handleGetCharacters(response.data)
        }).catch(error => {
            console.log ("character error", error)
        })
    }

    handleGetCharacters(data) {
        const characterArray = data.data
        const character = characterArray.map(guy => (guy.attributes.name))
        console.log(character)
        //TODO:
            // need to get the characters related to the signed in user only
            // then provide a link on the dashboard / navbar to get to the user's characters
            // should not happen on component did mount because that happens too often
            // this should probably be in the characters component.
    }

    // componentDidMount(){
    //     this.getCharacters()
    // }

    handleLogoutClick () {
        axios.delete("http://localhost:3001/logout", {withCredentials: true}).then(response => {this.props.handleLogout();})
        .catch(error => {
            console.log("logout error", error)
        });
    }

    render() {
        return (
        <div>
            <NavBar user={this.props.user}/>
            <h1>Welcome Back To The Adventure, {this.props.user.username}!</h1>
            <h1>Status: {this.props.loggedInStatus}</h1>
            <button onClick={() => this.handleLogoutClick()}>Logout</button>
        </div>
    )}
}

