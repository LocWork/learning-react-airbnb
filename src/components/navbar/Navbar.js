import React from 'react';
import './Navbar.css';
import logo from '../../images/airbnb-logo.png';
export default function Navbar() {
  return (
    <div className='NavbarContainer'>
      <nav>
        <img src={logo} alt='airbnb-logo' className='logo-image' />
      </nav>
    </div>
  );
}
