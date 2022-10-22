import React, { useState } from 'react';
import { image } from '../../constants';
import {GiHamburgerMenu} from 'react-icons/gi';
import {GiCrossedBones} from 'react-icons/gi';

import './Navbar.css';

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return(
 <div>
    <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={image.logo} alt="app logo"/>
    </div>
    <ul className='app__navbar-links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#events">Events</a></li>
      <li className='p__opensans'><a href="#gallery">Gallery</a></li>
      <li className='p__opensans'><a href="#team">Team</a></li>
      <li className='p__opensans'><a href="#contact">Contact Us</a></li>

    </ul> 
    <div className='app__navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setToggleMenu(true)} />
      
      {toggleMenu && (
      <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
       <GiCrossedBones fontSize={27} className='overlay__close' onClick={() => setToggleMenu(false)}/>
      <ul className='app__navbar-smallscreen_links'>
      <li className='p__opensans'><a href="#home">Home</a></li>
      <li className='p__opensans'><a href="#about">About</a></li>
      <li className='p__opensans'><a href="#events">Events</a></li>
      <li className='p__opensans'><a href="#gallery">Gallery</a></li>
      <li className='p__opensans'><a href="#team">Team</a></li>
      <li className='p__opensans'><a href="#contact">Contact Us</a></li>

    </ul> 
    </div>
      )}
    </div>
  </nav>
 </div>
  )
}

export default Navbar;