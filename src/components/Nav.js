import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    const navStyle={
        color:"white",
        textDecoration:"none",
    };
    return (
        <div>
            <nav>
                <Link to="/" style={navStyle}><h3>CARE</h3></Link>
                <ul className="nav-links">
                    <Link style={navStyle} to="/about"><li>About</li></Link>
                    <Link style={navStyle} to="/org"><li>Organizations</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
