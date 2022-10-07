import React from "react";
import { NavLink } from "react-router-dom";
const header=()=>{
    const linkStyles = {
        display: 'inline-block',
        width: 'fit-content',
        padding: "12px",
        margin: "0 6px 6px",
        background: "purple",
        textDecoration: "none",
        color: "black"
      }
    
      return (
        <div className='header-container'>
          <NavLink to='/' exact style={linkStyles} activeStyle={{ background: 'darkblue' }}>Home</NavLink>
          <NavLink to='/add-recipe' exact style={linkStyles} activeStyle={{ background: 'darkblue' }}>Add recipe</NavLink>
          <NavLink to='/sign up'exact style={linkStyles} activeStyle={{ background: 'darkblue' }}>sign up</NavLink>
          </div>
      )
}
export default header;