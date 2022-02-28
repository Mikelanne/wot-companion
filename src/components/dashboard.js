import React from "react";

const Dashboard = (props) => {

    return (
        <div>
            <h1>Welcome Back To The Adventure, {props.user.username}!</h1>
            <h1>Status: {props.loggedInStatus}</h1>
        </div>
    )
}

export default Dashboard