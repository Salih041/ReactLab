import React from 'react'
import { Link , NavLink} from "react-router-dom";
import '../css/Navbar.css'

function Navbar() {
    return (
        <nav className='Navbar'>
            <div className='NavbarLeft'>
                <Link className='Name' to="/">ReactLab</Link>
            </div>
            <div className='NavbarRight'>
                <NavLink className='NavLink' to="/todolist">ToDo</NavLink>
                <NavLink className='NavLink' to="/notes">Notes</NavLink>
                <NavLink className='NavLink' to='/calculator'>Calculator</NavLink>
                <NavLink className='NavLink' to='/currency'>Currency</NavLink>
                <NavLink className='NavLink' to='/weather'>Weather</NavLink>
            </div>

        </nav>
    )
}

export default Navbar
