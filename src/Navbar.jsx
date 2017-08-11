import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const baseClass = {
    className : 'navbar-item', 
    activeClassName : 'is-active'
}

const NavBar = () => <nav className="nav">
    <div className="navbar-menu">
        <div className="navbar-start">
            <NavLink exact to = "/"  {...baseClass}> Home </NavLink>
            | <NavLink to = "/about"  {...baseClass}> About </NavLink>
            | <NavLink to = "/contact"  {...baseClass}> Contact </NavLink>

        </div>

    </div>

</nav> 

export default NavBar
