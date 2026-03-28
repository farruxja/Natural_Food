import React from 'react'
import logo from "../img/logo.png"
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <header className='header'>
<div className="header__wrapper">
     <NavLink to="/"><div className="header__logo">
        <img src={logo} alt="logo" />   
       <div className="header__logo__text">
         <h4>“Natural food”</h4>
         <h4>sog’ligingiz garovi</h4>
       </div>

     </div></NavLink>
     <div className="header__nav">
        <a href="#hero">Home</a>
        <a href="#problem">Muammolar</a>
        <a href="#footer">Aloqa</a>
     </div>
</div>
      
    </header>
  )
}

export default Header
