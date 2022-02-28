import axios from "axios";
import React from "react";
import { Component } from "react";

export default class Dashboard extends Component  {

    constructor(props) {
        super(props);

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

    render() {return (
        <div>
            <h1>Welcome Back To The Adventure, {this.props.user.username}!</h1>
            <h1>Status: {this.props.loggedInStatus}</h1>
        </div>
    )}
}

