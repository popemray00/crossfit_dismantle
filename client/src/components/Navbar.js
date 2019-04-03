import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavBar = () => {
  return (
    <div>
    <div className="Navbar">
      <img src="Logo.png" className="Navlogo" alt="Crossfit Dismantle" />
      <NavLink className="Link" to="/">Home</NavLink>
      <NavLink className="Link" to="/gallery">Gallery</NavLink>
      <NavLink className="Link" to="/wod">Wod</NavLink>
      <NavLink className="Link" to="/momstrong">Mom Strong</NavLink>
      <div className="icons">
      <a href="https://www.facebook.com/CrossFit-Dismantle-1524864784486908/"><FontAwesomeIcon icon={['fab', 'facebook']} size="5x" className="Facebook" /></a>
      <a href="https://www.instagram.com/crossfitdismantle/"><FontAwesomeIcon icon={['fab', 'instagram']} size="5x" className="Instagram" /></a>
      </div>
    </div>
    <div>
  </div>
  </div>
  );
};

export default NavBar;
