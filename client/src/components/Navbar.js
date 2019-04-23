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
        <NavLink className="Link" to="/schedule">Schedule</NavLink>
        <NavLink className="Link" to="/wod">WOD</NavLink>
        <NavLink className="Link" to="/momstrong">Mom Strong</NavLink>

        <div className="icons">
          <h4>Follow Us!</h4><br/>
          <a href="https://www.facebook.com/CrossFit-Dismantle-1524864784486908/" target="blank"><FontAwesomeIcon icon={['fab', 'facebook']} size="5x" className="Facebook" /></a>
          <a href="https://www.instagram.com/crossfitdismantle/" target="blank"><FontAwesomeIcon icon={['fab', 'instagram']} size="5x" className="Instagram" /></a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
