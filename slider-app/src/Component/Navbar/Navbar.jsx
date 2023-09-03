import React, { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 
import Logo from './../../assets/images/Logo.png';
import './../Navbar/navbar.css';

function Navbar() {
  const navRef=useRef();

  const showMenu=()=>{
    navRef.current.classList.toggle('responsive_menu')
  }

  return (
    <div className='navBars header'>
      
        <a href="#" className='logo'>
          <img src={Logo} alt="" />
        </a>
      
      <nav>
        <ul   ref={navRef} className='nav_list '>
            <li className='nav_item'>
            <a className='nav_link' href="#">Collections</a>
            </li>
            <li className='nav_item'>
            <a className='nav_link' href="#">Brands</a>
            </li>
            <li className='nav_item'>
            <a className='nav_link' href="#">New</a>
            </li>
            <li className='nav_item'>
            <a className='nav_link' href="#">Sales</a>
            </li>
            <button className='contact_us'>Let's Talk</button>
            <button className='btn-res Close' onClick={showMenu}><FaTimes /></button>
        </ul>
        
      </nav>
      <button className='btn-res bars' onClick={showMenu}><FaBars /></button>
      
    </div>
  );
}

export default Navbar;
