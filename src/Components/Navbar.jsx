import React, { useState } from "react";
import "../Styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // close the menu after clicking
  };

  return (
    <div className="navbar-container">
    <nav className="navbar">
      <div className="nav-left">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
       
         <ul className={`nav-menu ${isOpen ? "show" : ""}`}>
          <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
          <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
          <li><a href="#about" onClick={handleLinkClick}>About</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
       </div>
  

      <a href="#contact" className="nav-link">LET'S LINK UP</a>
    </nav>
        </div>
  );
};

export default Navbar;
