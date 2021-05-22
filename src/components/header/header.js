import React from 'react'
import './header.css';

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
            <div className='nav-item'>ABOUT US</div>
            <div className='nav-item'>CONTACT US</div>
            <div className='nav-item'>LOGIN/SIGN UP</div>
        </div>
    </div>
   )

 }

export default Header