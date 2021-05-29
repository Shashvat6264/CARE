import React from "react";
import { Link } from "react-router-dom";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from 'react-bootstrap/Dropdown'
function Nav() {
  const navStyle = {
    color: "white",
    textDecoration: "none",
    fontFamily:"Karla",
    fontSize:"20px",
  };
  return (
    <div>
      <nav style={{zIndex: 200}}>
        <Link to="/" style={navStyle}>
          <h3>CARE</h3>
        </Link>
        <ul className="nav-links">
          <Link style={navStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/org">
            <li>Organizations</li>
          </Link>
          <li>
          <DropdownButton style={{marginTop: "5px"}} id="dropdown-basic-button" title="Register" >
            <Dropdown.Item href="/registration/parent">Parent Registration</Dropdown.Item>
            <Dropdown.Item href="/registration/reporter">Reporter Registration</Dropdown.Item>
            <Dropdown.Item href="/registration/org">Organization Registration</Dropdown.Item>
          </DropdownButton>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
