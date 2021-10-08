import React from 'react';
import {Link} from 'react-router-dom'

const Home = (props) => {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/login'>Log In</Link>
            <br></br>
            <Link to='/signup'>Sign Up</Link>
        </div>
    )
}

export default Home