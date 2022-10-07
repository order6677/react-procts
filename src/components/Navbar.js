import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: 'inline-block',
  width: '50px',
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
}


function NavBar() {
  return (
    <div className="header-container">
      <NavLink to='/' exact style={linkStyles} activeStyle={{ background: 'darkblue' }}>Home</NavLink>
      {/* <NavLink to='/add recipe' exact style={linkStyles} activeStyle={{ background: 'darkblue' }}>add recipe</NavLink>
      <NavLink to='/sign up' exact style={linkStyles} activeStyle={{ background: 'darkblue' }}>sign up</NavLink>
       */}
    </div>
  );
}

export default NavBar;