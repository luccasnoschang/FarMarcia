import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  return (

<div className="header-container">
  <div className='div-logo'>
    <img className="header-logo" src="./public/images/farmarcia-logo.png" alt="" />
  </div>
  <div className='div-navBar'>
    <Link className="header-a" to="/">Home</Link>
    <Link className="header-a" to="/senha">Senha</Link>
  </div>
</div>


  )
}


export default Navbar
