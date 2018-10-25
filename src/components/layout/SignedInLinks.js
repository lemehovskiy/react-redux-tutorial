import React from 'react'
import { NavLink } from 'react-router-dom'


const SignedInLinks = () => {
    return (
        <ul class="right">
            <li><NavLink to="/">New Project</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
            <li><NavLink to="/" class="btn btn-floating pink lighten-1">NN</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;