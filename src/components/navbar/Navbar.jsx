import React, { useState } from 'react'
import "./navbar.css"
import logo from "../../assets/logo.svg"

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} alt='logo' /> 
        </div>
        <div className='gpt3__navbar-links_container'>
        <a href='#home'>Home</a>
        <a href='#wgtp3'>What is GPT3</a>
        <a href='#posibility'>Open AI</a>
        <a href='#features'>case Studies</a>
        <a href='#blog'>Library</a>
        </div>
        <div className='gpt3__navbar-sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt3__navbar-menu'>
{toggleMenu? <RiCloseLine color ="#fff" size ={27} onClick={()=> setToggleMenu(false) } />:
<RiMenuLine color ="#fff" size ={27} onClick={()=> setToggleMenu(true) } />}

      </div>
      </div>
     
    </div>
  )
}

export default Navbar