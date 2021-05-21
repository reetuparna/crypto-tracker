import React from 'react'
import './header.css';
import logo from './../../images/logo.png';
/**
* @author
* @function Header
**/

const Header = (props) => {
  return(
    <div className="header">
        {/* <div className="logo"><img src={logo} alt="Logo" width="50" height="50" /></div> */}
        <div className="logo-name">BLOCKCHAINED</div>
        <div className="nav">
            <div className='nav-item'>About Us</div>
            <div className='nav-item'>Contact Us</div>
            <div className='nav-item'>Login/Sign Up</div>
        </div>
    </div>
   )

 }

export default Header